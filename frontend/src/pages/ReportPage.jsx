import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HeroJustText from '../components/hero-just-text';

// TODO: encapsulate report form

const ReportPage = ()=> {
    const navigate = useNavigate();
  
    // manage form data
    const [formData, setFormData] = useState({
        post_content: '',
        post_link: '',
        post_image: '',
        user_prediction: [],
        platform: '',
        username: '',
        usermail: '',
        // classifierResponse: '',
    });

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isLinkValid, setIsLinkValid] = useState(true);

    const handleInputChange = (e) => {
        setFormData({
        ...formData,
        post_content: e.target.value,
        });
    };

    const handleClassificationChange = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
        setFormData({
            ...formData,
            user_prediction: [...formData.user_prediction, value],
        });
        } 
        else {
        setFormData({
            ...formData,
            user_prediction: formData.user_prediction.filter((item) => item !== value),
        });
        }
    };

    const handleSourceChange = (event) => {
        setFormData({ ...formData, platform: event.target.value });
    };

    const handlePostLinkChange = (event) => {
        const linkValue = event.target.value;

        setIsLinkValid(isValidLink(linkValue));

        setFormData({ ...formData, post_link: event.target.value });
    };

    const handleUsernameChange = (event) => {
        setFormData({ ...formData, username: event.target.value });
    };

    const handleUsermailChange = (event) => {
        const userEmail = event.target.value;

        setIsEmailValid(isValidEmail(userEmail));

        // Always update the state with the input value, valid or not
        setFormData({ ...formData, usermail: userEmail });
    };

    const handleImageChange = (event) => {
        const imageFile = event.target.files[0];

        if (imageFile && isValidImageType(imageFile.type)) {
        setFormData({ ...formData, post_image: imageFile });
        } else {
        alert('Please upload a valid image file.');
        }
    };

    const isValidImageType = (fileType) => {
        // Specify the accepted image file types
        const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
        return acceptedImageTypes.includes(fileType);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formData", formData)

        fetch('http://localhost:8000/report/form/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then((response) =>{
            let res = response.json();  
            let temp= "this is a possible response from report page"
            navigate(
             '/response', {
               state: {response: temp}
             } //TODO: adjust redirect path according to response

            );  
        })
        .then((data) => {
            console.log('Success:', data, formData);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };


    // TODO: validation should also take place on server 
    const isValidLink = (link) => {
        const linkRegex = /^(https?:\/\/)?(www\.)?(facebook\.com|reddit\.com|instagram\.com|x\.com|twitter\.com)\/.*/i;
        return linkRegex.test(link);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
      

    return <>
            <HeroJustText text="Report" />

            <div className="background-pfad-left">
                <div className="uk-container">
                    <div>
                        <p className="small-title-center">Report a post</p>
                        <h2 className="uk-h1 uk-text-center">Report Hateful Online Behavior on NoHateNet</h2>
                        <p className='uk-text-center'>
                            Choose Your Method: Paste the text directly or share a link to the source of the potentially hateful content.
                        </p>
                    </div>
                    <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l" data-uk-grid>
                        <div>
                            <div>
                                <p className="small-title-left">Submit a Text</p>
                                <h3 className="uk-h1">Reporting is Easy on NoHateNet</h3>
                                <p>If you come across a post that you believe is harmful or contains hate speech, let us investigate it for you. Just copy and paste the content here, and if available, attach the relevant link. </p>
                                <p>Your proactive involvement is key in ensuring a safer online community.</p>
                            </div>
                            <textarea className='uk-textarea uk-border-rounded uk-box-shadow-medium uk-padding textarea-report'
                             rows={10} 
                             placeholder="Enter text here .."
                             value={formData.post_content}
                             onChange={handleInputChange}
                             />
                            <p className="uk-h4">How would you classify this content?</p>
                            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                <label><input value='violence' checked={formData.violence} className="uk-checkbox" type="checkbox" onChange={handleClassificationChange} /> violence & murder</label>
                                <label><input value='racism' checked={formData.racism} className="uk-checkbox" type="checkbox" onChange={handleClassificationChange} /> racism or sexist stereotyping</label>
                                <label><input value='discrinatory' checked={formData.discriminatory} className="uk-checkbox" type="checkbox" onChange={handleClassificationChange} /> discriminatory</label>
                                <label><input value='dehumanization' checked={formData.dehumanization} className="uk-checkbox" type="checkbox" onChange={handleClassificationChange} /> dehumanization</label>
                            </div>
                            <p className="uk-h4">What is the source of the text?</p>
                            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid uk-form-controls uk-form-controls-text">
                                <label><input value='Facebook' checked={formData.platform== 'Facebook'} className="uk-checkbox" type="radio" name="platform" onChange={handleSourceChange} /> Facebook</label>
                                <label><input value='Instagram' checked={formData.platform== 'Instagram'} className="uk-checkbox" type="radio" name="platform" onChange={handleSourceChange} /> Instagram</label>
                                <label><input value='Reddit' checked={formData.platform== 'Reddit'} className="uk-checkbox" type="radio" name="platform" onChange={handleSourceChange} /> Reddit</label>
                                <label><input value='X' checked={formData.platform== 'X'} className="uk-checkbox" type="radio" name="platform" onChange={handleSourceChange} /> X</label>
                            </div>
                            <p className="uk-h4">Optional: Attach an Image</p>
                            <div className="js-upload">
                                <input
                                // className='uk-button uk-button-secondary'
                                type="file"
                                id="image"
                                accept="image/*"
                                onChange={handleImageChange}
                                />
                            </div>
                            <div>
                                <a className="uk-button uk-button-secondary" 
                                   type='submit'
                                   onClick={handleSubmit}
                                >Send</a>
                                {/* <SendReportButton></SendReportButton> */}
                            </div>
                        </div>
                        <div className="uk-flex-first uk-flex-last@l">
                            <div className="uk-box-shadow-medium uk-border-rounded uk-background-default responsive-image-height-m">
                                <img src={"/assets/img/hands-with-smarthphone.jpg"} className="uk-border-rounded" alt="Mann melde Post" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
            <div className="uk-container">
                <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l" data-uk-grid>
                    <div>
                        <div className="uk-border-rounded uk-box-shadow-medium uk-padding">
                            <form>
                                <fieldset className="uk-fieldset">
                                    <div className="uk-margin">
                                        <input
                                            value={formData.post_link}
                                            className="uk-input"
                                            type="text"
                                            placeholder="Link of Source"
                                            aria-label="Link"
                                            onChange={handlePostLinkChange}
                                        />
                                         {!isLinkValid && (<p className="uk-text-danger">Please enter a valid Link. (Facebook, Instagram, Reddit or X)</p>)}
                                    </div>
                                    <div className="uk-margin">
                                        <input
                                            value={formData.username}
                                            className="uk-input"
                                            type="text"
                                            placeholder="Name"
                                            aria-label="Name"
                                            onChange={handleUsernameChange}
                                        />
                                    </div>
                                    <div className="uk-margin">
                                        <input
                                            value={formData.usermail}
                                            className="uk-input"
                                            type="text"
                                            placeholder="E-Mail"
                                            aria-label="E-Mail"
                                            onChange={handleUsermailChange}
                                        />
                                         {!isEmailValid && (<p className="uk-text-danger">Please enter a valid email address.</p>)}
                                    </div>
                                    <div>
                                        <a className="uk-button uk-button-secondary" 
                                            onClick={handleSubmit}
                                        >
                                            Send
                                        </a>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className='uk-flex-first uk-flex-last@l'>
                        <p className="small-title-left">Send a Link</p>
                        <h3 className="uk-h1">Share the origin of harmful content</h3>
                        <p>Empower our mission by providing the link to suspected hate speech. Your input is invaluable in our commitment to swiftly address and eradicate harmful content, creating a safer digital space for all."</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ReportPage;