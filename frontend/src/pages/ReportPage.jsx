import { React, Component } from 'react'
import HeroJustText from '../components/hero-just-text';
import SendReportButton from '..';

class ReportPage extends Component {
    state = {}
    render() {
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
                            <div className='uk-text-center'>
                                <a className="uk-button uk-button-secondary uk-margin-right" href="#">Report Post</a>
                                <a className="uk-button uk-button-secondary uk-margin-left" href="#">Share Link</a>
                            </div>
                        </div>
                        <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l" data-uk-grid>
                            <div>
                                <div>
                                    <p className="small-title-left">Submit a Text</p>
                                    <h3 className="uk-h1">Reporting is Easy on NoHateNet</h3>
                                    <p>If you come across a post that you believe is harmful or contains hate speech, let us investigate it for you. Just copy and paste the content here, and if available, attach the relevant link. </p>
                                    <p>Your proactive involvement is key in ensuring a safer online community.</p>
                                </div>
                                <textarea className='uk-textarea uk-border-rounded uk-box-shadow-medium uk-padding textarea-report' rows={10} placeholder="Enter text here .."></textarea>
                                <p className="uk-h4">How would you classify this content?</p>
                                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                    <label><input className="uk-checkbox" type="checkbox" /> violence & murder</label>
                                    <label><input className="uk-checkbox" type="checkbox" /> racism or sexist stereotyping</label>
                                    <label><input className="uk-checkbox" type="checkbox" /> discriminatory</label>
                                    <label><input className="uk-checkbox" type="checkbox" /> dehumanization</label>
                                </div>
                                <p className="uk-h4">What is the source of the text?</p>
                                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid uk-form-controls uk-form-controls-text">
                                    <label><input className="uk-checkbox" type="radio" name="radio" /> Facebook</label>
                                    <label><input className="uk-checkbox" type="radio" name="radio" /> Instagram</label>
                                    <label><input className="uk-checkbox" type="radio" name="radio" /> Reddit</label>
                                    <label><input className="uk-checkbox" type="radio" name="radio" /> X</label>
                                </div>
                                <div>
                                    {/* <a className="uk-button uk-button-secondary" href={sendReport}>Send</a> */}
                                    <SendReportButton ></SendReportButton>
                                </div>
                            </div>
                            <div class="uk-flex-first uk-flex-last@l">
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
                                                className="uk-input"
                                                type="text"
                                                placeholder="Link of Source"
                                                aria-label="Link"
                                            />
                                        </div>
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
                                        <div>
                                            <a className="uk-button uk-button-secondary" href="#">
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
}

export default ReportPage;