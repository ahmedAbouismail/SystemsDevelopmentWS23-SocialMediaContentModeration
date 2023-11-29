import { React, Component } from 'react'
import HeroJustText from '../components/hero-just-text';
import CardsImageSmall from '../components/cards-image-small';

class HSResponsePage extends Component {
    state = {}
    render() {
        return <>
            <HeroJustText text="Hate Speech was Recognized!" />
            
            <div className="background-pfad-left">
                <div className="uk-container">
                    <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
                        <div>
                            <div>   
                                <p className="small-title-left">What now?</p>
                                <h3 className="uk-h1">Thank You..</h3>
                                <p>
                                    ..for taking the time to report a potential hate speech post on [SMP]. 
                                    Your commitment to fostering a safer online community is truly appreciated.
                                    We have received your report, and our AI is currently analyzing the content. 
                                    The category assigned to the post is [Category]. This category entails [explanation].
                                    Rest assured, your report has been securely stored, and our team will thoroughly review the content. 
                                    To take immediate action, we encourage you to report the post directly on [SMP] by visiting [link to the platform's reporting page]. 
                                    If you have any further information or concerns, feel free to reach out to us at [Contact information / Link to contact form]. 
                                    Thank you again for being an active advocate for a positive online experience across the internet. 
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
                                <CardsImageSmall name="Read More about Hate Speech" url="/hate-speech"/>
                                <CardsImageSmall  name="Read More about the Consequences of Hate Speech" url="/hate-speech"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-container">
                    <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
                        <div>   
                            <p className="small-title-left">Please do not hesitate to contact us</p>
                            <h3 className="uk-h1">Next Steps</h3>
                            <p>
                                Upon identification of hate speech by our advanced classifier on NoHateNet, immediate action is initiated. Our dedicated team thoroughly reviews the reported content to ensure accuracy in identifying harmful elements. 
                                Subsequently, decisive measures are implemented, ranging from content removal and warnings to user sanctions, in strict adherence to our policies. 
                                Simultaneously, the incident contributes to refining our classifier, enhancing its ability to proactively combat hate speech. 
                                This collaborative approach, integrating technology and human oversight, underscores our commitment to cultivating a digital environment that prioritizes safety, inclusivity, and respect for all users.
                            </p>
                        </div>

                        <div>
                            <div className="uk-border-rounded uk-box-shadow-medium uk-padding">
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
                                            <input
                                                className="uk-input"
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
}

export default HSResponsePage;