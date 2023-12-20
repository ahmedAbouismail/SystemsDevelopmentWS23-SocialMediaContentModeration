import { React, useEffect} from 'react'
import HeroJustText from '../components/hero-just-text';
import CardsImageSmall from '../components/cards-image-small';
import { useLocation } from 'react-router-dom';

const ResponsePage =(state)=> {
    const location = useLocation();
    const res = location.state?.response || {};
    console.log(res)

    // dummyData represents res
    const dummyData=[{
        isHate_speech: false,
        content:"Du Bitch!",
        platform:"Facebook",
        category:"Dehuminization",
        explaination:"portraying individuals or groups as less than human, stripping them of their dignity and humanity.",
        platform_reporting_page:"some_link.com",
    }]
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // empty dependency array ensures to only run effect when the component mounts
    
    return <>
        <HeroJustText text={`Hate Speech was ${dummyData[0].isHate_speech==true ? "" : "NOT "}Recognized!`} />
        
        <div className="background-pfad-left">
            <div className="uk-container">
                <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l uk-flex uk-flex-middle" data-uk-grid>
                    <div>
                        <div>   
                            <p className="small-title-left">What now?</p>
                            <h3 className="uk-h1">Thank You..</h3>
                            <p>
                                {dummyData[0].isHate_speech ? (
                                    <>
                                    ..for taking the time to report a potential hate speech post on <b>{dummyData[0].platform}</b>. 
                                    Your commitment to fostering a safer online community is truly appreciated.
                                    We have received your report, and our AI is currently analyzing the content. 
                                    The category assigned to the post is <b>{dummyData[0].category}</b>. This category entails <b>{dummyData[0].explaination}</b>.
                                    Rest assured, your report has been securely stored, and our team will thoroughly review the content. 
                                    To take immediate action, we encourage you to report the post directly on <b>{dummyData[0].platform}</b> by visiting <b>{dummyData[0].platform_reporting_page}</b>. 
                                    Thank you again for being an active advocate for a positive online experience across the internet. 
                                
                                    </>
                                    ) : (
                                    <>
                                    ..for taking the time to report a potential hate speech post on <b>{dummyData[0].platform}</b>. 
                                    Your commitment to fostering a safer online community is truly appreciated.
                                    After thorough analysis, our AI was unable to conclusively determine whether the reported content constitutes hate speech. The nuances of language and context can sometimes pose challenges, and we understand the importance of maintaining a vigilant approach. 
                                    Rest assured, your report has been securely stored, and our team will thoroughly review the content. If the post feels in violation of <b>{dummyData[0].platform}</b>'s community guidelines, we encourage you to report the post directly on <b>{dummyData[0].platform}</b> by visiting 
                                    <a href={dummyData[0].platform_reporting_page} target="_blank" rel="noopener noreferrer" > {dummyData[0].platform_reporting_page}</a>. Keep in mind that our AI is still in training, and your additional input on the platform can contribute to its learning process. 
                                    <br />
                                    <br />
                                    Thank you again for being an active advocate for a positive online experience across the internet. 
                                    </>
                                )}
                                    <br />
                                    <br />
                                    Best regards,
                                    <br />
                                    The NoHateNet team
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-grid-match" data-uk-height-match="target: .uk-card" data-uk-grid>
                            <CardsImageSmall name="Read More about Hate Speech" url="/hate-speech" image="hate.png"/>
                            <CardsImageSmall  name="Read More about the Consequences of Hate Speech" url="/hate-speech" image="consequence.png"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-container">
                <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l" data-uk-grid>
                    <div>   
                        <p className="small-title-left">Please do not hesitate to contact us</p>
                        <h3 className="uk-h1">Next Steps</h3>
                        <p>
                        {dummyData[0].isHate_speech ? (
                                <>
                                Upon identification of hate speech by our advanced classifier on NoHateNet, immediate action is initiated. Our dedicated team thoroughly reviews the reported content to ensure accuracy in identifying harmful elements. 
                                Subsequently, decisive measures are implemented, ranging from content removal and warnings to user sanctions, in strict adherence to our policies. 
                                Simultaneously, the incident contributes to refining our classifier, enhancing its ability to proactively combat hate speech. 
                                This collaborative approach, integrating technology and human oversight, underscores our commitment to cultivating a digital environment that prioritizes safety, inclusivity, and respect for all users.
                                </>
                            ) : (
                                <>
                                If you have any further information or concerns, feel free to reach out to us. 
                                </>
                            )}
                        </p>
                    </div>

                    <div>
                        <div className="uk-border-rounded uk-box-shadow-medium uk-padding uk-background-default">
                            <form>
                                <fieldset className="uk-fieldset">
                                    <div className="uk-margin">
                                        <input
                                            className="uk-input"
                                            type="text"
                                            placeholder="Name"
                                            aria-label="Name"
                                        />
                                    </div>
                                    <div className="uk-margin">
                                        <input
                                            className="uk-input"
                                            type="text"
                                            placeholder="E-Mail"
                                            aria-label="E-Mail"
                                        />
                                    </div>
                                    <div className="uk-margin">
                                        <textarea
                                            rows={5}
                                            className="uk-textarea"
                                            type="text"
                                            placeholder="Concern"
                                            aria-label="Concern"
                                        />
                                    </div>
                                    <div>
                                        <a className="uk-button uk-button-secondary" href="#">
                                            Send
                                        </a>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>                
        </div>
    </>;
}

export default ResponsePage;