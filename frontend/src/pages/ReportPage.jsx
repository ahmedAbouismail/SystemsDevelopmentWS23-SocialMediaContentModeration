import { React, Component } from 'react'
import HeroJustText from '../components/hero-just-text';
import SendReportButton from '..';

class ReportPage extends Component {
    state = {}
    render() {
        return (
            <>
                <HeroJustText text="Report" />

                <div className="background-pfad-left">
                    <div className="uk-container">
                        <div>
                            <p className="small-title-center">Lorem Ipsum</p>
                            <h2 className="uk-h1 uk-text-center">Sed frigilla mauris sit amet nibh</h2>
                            <p className='uk-text-center'>
                                In hac habitasse platea dictumst. Nulla facilisi. Nullam vel nisi ac metus tincidunt auctor. Integer euismod tellus et erat venenatis, eu cursus augue malesuada. Aliquam erat volutpat.
                            </p>
                            <div className='uk-text-center'>
                                <a className="uk-button uk-button-secondary uk-margin-right" href="#">Report Post</a>
                                <a className="uk-button uk-button-secondary uk-margin-left" href="#">Report Link</a>
                            </div>
                        </div>
                        <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
                            <div>
                                <div>
                                    <p className="small-title-left">Report Post</p>
                                    <h3 className="uk-h1">Lorem ipsum dolor sit amet.</h3>
                                    <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
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
                            <div>
                                <div className="uk-box-shadow-medium uk-border-rounded uk-background-default">
                                    <img src={"/assets/img/hands-with-smarthphone.jpg"} className="uk-border-rounded" alt="Mann melde Post" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ReportPage;