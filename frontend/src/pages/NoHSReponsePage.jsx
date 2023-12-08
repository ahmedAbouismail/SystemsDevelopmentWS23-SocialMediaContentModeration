import { React, Component } from 'react'
import HeroJustText from '../components/hero-just-text';
import CardsImageSmall from '../components/cards-image-small';

class NoHSResponsePage extends Component {
    state = {}
    render() {
        return <>
            <HeroJustText text="Hate Speech was NOT Recognized!" />
            
            <div className="background-pfad-left">
                <div className="uk-container">
                    <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l uk-flex uk-flex-middle" data-uk-grid>
                        <div>
                            <div>   
                                <p className="small-title-left">What now?</p>
                                <h3 className="uk-h1">Thank You..</h3>
                                <p>
                                    ..for taking the time to report a potential hate speech post on [SMP]. 
                                    Your commitment to fostering a safer online community is truly appreciated.
                                    After thorough analysis, our AI was unable to conclusively determine whether the reported content constitutes hate speech. The nuances of language and context can sometimes pose challenges, and we understand the importance of maintaining a vigilant approach. 
                                    Rest assured, your report has been securely stored, and our team will thoroughly review the content. If the post feels in violation of [SMP]'s community guidelines, we encourage you to report the post directly on [SMP] by visiting [link to the platform's reporting page]. Keep in mind that our AI is still in training, and your additional input on the platform can contribute to its learning process. 
                                    <br />
                                    <br />
                                    Thank you again for being an active advocate for a positive online experience across the internet. 
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
                            If you have any further information or concerns, feel free to reach out to us. 
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

export default NoHSResponsePage;