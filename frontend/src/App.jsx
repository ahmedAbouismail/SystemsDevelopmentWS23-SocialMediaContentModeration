import React, { Component, Fragment } from 'react';
import CardsIcon from './components/cards';
import HeroImage from './components/hero-image';

const mainSliderItems = [
    {
        caption: 'Hassrednerinnen und Hassredner stummschalten!',
        alt: 'men talking about hate speech',
        name: 'guys-talking.jpg',
        buttonName: 'Jetzt Hassrede melden!',
        buttonURL: '#'
    },
    {
        caption: 'Vivamus elementum semper nisi. Aenean vulputate',
        alt: 'stop hate speech',
        name: 'guys-talking.jpg',
        buttonName: 'Jetzt Hassrede melden!',
        buttonURL: '#'
    }

]
const heroTextTyping = [
    'United Against Hate, Mute the Dissonance',
    'Stand for Respect, Speak Against Hate.',
    'Erase Hate, Embrace Unity.'
  ]
class App extends Component {
    state = {}
    render() {
        return <>
            <HeroImage image="phone-women.png" alt="" text={heroTextTyping} buttonName="Report hate speech now!" buttonURL="#" />

            <div className="uk-container">
                <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m uk-flex uk-flex-center uk-flex-middle" data-uk-grid>
                    <div>
                        <div>
                            <p className="small-title-left">Hatespeech</p>
                            <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h1>
                            <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
                            <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>
                            <a className="uk-button uk-button-secondary" href="#">Learn more</a>
                        </div>
                    </div>
                    <div>
                        <div className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-grid-match" data-uk-height-match="target: .uk-card" data-uk-grid>
                            <CardsIcon number="1" image="artificial-intelligence.png" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." description="" />
                            <CardsIcon number="2" image="hate.png" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa" description="" />
                            <CardsIcon number="3" image="secure-shield.png" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." description="" />
                            <CardsIcon number="4" image="support.png" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." description="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="background-pfad-left">
                <div className="uk-container">
                    <div>
                        <p className="small-title-center">Lorem Ipsum</p>
                        <h2 className="uk-h1 uk-text-center">Sed frigilla mauris sit amet nibh</h2>
                    </div>
                    <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
                        <div>
                            <div>
                                <p className="small-title-left">Report Post</p>
                                <h3 className="uk-h1">Lorem ipsum dolor sit amet.</h3>
                                <p>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
                            </div>
                            <textarea className='uk-textarea uk-border-rounded uk-box-shadow-medium uk-padding textarea-report' rows={10} placeholder="Enter text here .. "></textarea>
                            <p className="uk-h4">How would you classify this content?</p>
                            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                <label><input className="uk-checkbox" type="checkbox" /> violence & murder</label>
                                <label><input className="uk-checkbox" type="checkbox" /> racist or sexist stereotyping</label>
                                <label><input className="uk-checkbox" type="checkbox" /> discriminatory</label>
                                <label><input className="uk-checkbox" type="checkbox" /> dehumanization</label>
                            </div>
                            <p className="uk-h4">What is the source of this text?</p>
                            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid uk-form-controls uk-form-controls-text">
                                <label><input className="uk-checkbox" type="radio" name="radio" /> Facebook</label>
                                <label><input className="uk-checkbox" type="radio" name="radio" /> Instagram</label>
                                <label><input className="uk-checkbox" type="radio" name="radio" /> Reddit</label>
                                <label><input className="uk-checkbox" type="radio" name="radio" /> X</label>
                            </div>
                            <div>
                                <a className="uk-button uk-button-secondary" href="#">Send</a>
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
            <div>
                <div className="uk-container">
                    <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
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
                        <div>
                            <p className="small-title-left">Send Link</p>
                            <h3 className="uk-h1">Donec vitae sapien ut libero venenatis</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-container">
                <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m" data-uk-grid>
                    <div>
                        <div>
                            <p className="small-title-left">About us</p>
                            <h3 className="uk-h1">Get to know us!</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                            <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. </p>
                            <a className="uk-button uk-button-secondary" href="#">Learn more</a>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <img src={"/assets/img/partner.png"} className="" alt="partner von Projekt" />
                        </div>
                    </div>
                </div>
            </div>

        </>




    }
}

export default App;