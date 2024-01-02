import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const ReportFormComponent = ()=> {
    const navigate = useNavigate();
    const [notification, setNotification] = useState(null);

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

    const isPlatformSelected = () => !formData.platform;
    const isClassificationCheckboxSelected = () => formData.user_prediction.length === 0;
    const isTextareaEmpty = () => !formData.post_content.trim();

    const validations = [
        { check: isPlatformSelected, message: 'Please select a platform.' },
        { check: isClassificationCheckboxSelected, message: 'Please select at least one classification checkbox.' },
        { check: isTextareaEmpty, message: 'Please enter text in the textarea.' },
    ];

    const validateForm = () => {
        const invalidValidation = validations.find((validation) => validation.check());

    if (invalidValidation) {
        // If a validation condition is true, display the associated error message
        alert(invalidValidation.message);
        return false;
    }

    return true;
};

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formData", formData);

        if (!validateForm()) {
            return;
        }
        fetch('http://localhost:8000/report/form/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data, formData);

                navigate(
                    '/response', {
                        state: { response: data }
                    });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleLinkSubmit = async (event) => {
        event.preventDefault();
        console.log("formData", formData);
        try {
          const response = await fetch('http://localhost:8000/report/form/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const responseData = await response.json();
            console.log('Success:', responseData, formData);
    
            setNotification({
              type: 'success',
              message: 'Link sent successfully!',
            });

            // Reload the page after a short delay
            setTimeout(() => {
            window.location.reload();
            }, 1000);

          } else {
            console.error('Error:', response.statusText);
            setNotification({
              type: 'error',
              message: 'Failed to send link. Please try again.',
            });
          }
        } catch (error) {
          console.error('Error:', error);
          setNotification({
            type: 'error',
            message: 'An unexpected error occurred. Please try again.',
          });
        }
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
        <div>
            <div className="uk-container">
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
                            <label><input value='violence' checked={formData.stereotyping} className="uk-checkbox" type="checkbox" onChange={handleClassificationChange} /> negative stereotyping</label>
                            <label><input value='dehumanization' checked={formData.dehumanization} className="uk-checkbox" type="checkbox" onChange={handleClassificationChange} /> dehumanization</label>
                            <label><input value='violence' checked={formData.violence} className="uk-checkbox" type="checkbox" onChange={handleClassificationChange} /> violence & killing</label>
                            <label><input value='racism' checked={formData.equation} className="uk-checkbox" type="checkbox" onChange={handleClassificationChange} /> equation</label>
                            <label><input value='discrimination' checked={formData.discrimination} className="uk-checkbox" type="checkbox" onChange={handleClassificationChange} /> discrimination</label>
                            <label><input value='racism' checked={formData.irony} className="uk-checkbox" type="checkbox" onChange={handleClassificationChange} /> disguise as irony</label>
                            <label><input value='racism' checked={formData.slander} className="uk-checkbox" type="checkbox" onChange={handleClassificationChange} /> harmful slander</label>
                        </div>
                        <p className="uk-h4">What is the source of the text?</p>
                        <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid uk-form-controls uk-form-controls-text">
                            <label><input value='Facebook' checked={formData.platform=== 'Facebook'} className="uk-checkbox" type="radio" name="platform" onChange={handleSourceChange} /> Facebook</label>
                            <label><input value='Instagram' checked={formData.platform=== 'Instagram'} className="uk-checkbox" type="radio" name="platform" onChange={handleSourceChange} /> Instagram</label>
                            <label><input value='Reddit' checked={formData.platform=== 'Reddit'} className="uk-checkbox" type="radio" name="platform" onChange={handleSourceChange} /> Reddit</label>
                            <label><input value='X' checked={formData.platform=== 'X'} className="uk-checkbox" type="radio" name="platform" onChange={handleSourceChange} /> X</label>
                            <label><input value='Other' checked={formData.platform=== 'Other'} className="uk-checkbox" type="radio" name="platform" onChange={handleSourceChange} /> Other</label>
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

        <div className="uk-container">
            <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l" data-uk-grid>
                <div>
                    <div className="uk-border-rounded uk-box-shadow-medium uk-padding uk-background-default">
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
                                        onClick={handleLinkSubmit}
                                    >
                                        Send
                                    </a>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    {/* Notification Component */}
                    <div>
                        {notification && (
                        <div className={`notification ${notification.type}`}>
                            {notification.message}
                        </div>
                        )}
                    </div>
                </div>
                <div className='uk-flex-first uk-flex-last@l'>
                    <p className="small-title-left">Send a Link</p>
                    <h3 className="uk-h1">Share the origin of harmful content</h3>
                    <p>Empower our mission by providing the link to suspected hate speech. Your input is invaluable in our commitment to swiftly address and eradicate harmful content, creating a safer digital space for all."</p>
                </div>
            </div>
        </div>
    </>
}

export default ReportFormComponent;