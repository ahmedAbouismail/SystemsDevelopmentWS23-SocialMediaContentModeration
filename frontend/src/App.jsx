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
            <HeroImage image="phone-women.png" alt="" text={heroTextTyping} buttonName="Report hate speech now!" buttonURL="report" />

            <div className="uk-container">
                <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m uk-flex uk-flex-center uk-flex-middle" data-uk-grid>
                    <div>
                        <div>
                            <p className="small-title-left">Hatespeech</p>
                            <h1>Uniting Against Online Toxicity</h1>
                            <p>Hate speech encompasses any form of communication, in speech, writing, or behavior, that discriminates, stigmatizes, marginalizes, or incites violence against individuals or groups based on attributes such as race, ethnicity, religion, gender, sexual orientation, disability, or any other characteristic.</p>
                            <p> It not only fosters hostility but can escalate into real-world harm, eroding the foundations of tolerance and understanding.</p>
                            <a className="uk-button uk-button-secondary" href="hate-speech">Learn more</a>
                        </div>
                    </div>
                    <div>
                        <div className="uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-grid-match" data-uk-height-match="target: .uk-card" data-uk-grid>
                            <CardsIcon number="1" image="artificial-intelligence.png" text="Our platform employs advanced AI classifiers for rapid and accurate hate speech identification, ensuring effective content monitoring." description="" />
                            <CardsIcon number="2" image="hate.png" text="Committed to a hate-free digital space, we actively prevent incidents through community engagement." description="" />
                            <CardsIcon number="3" image="secure-shield.png" text="Prioritizing user safety, our platform integrates robust security measures, guaranteeing anonymity during hate speech reporting." description="" />
                            <CardsIcon number="4" image="support.png" text="Emphasizing solidarity, we foster collaboration against online toxicity, creating a stronger, more resilient online community." description="" />
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
                                <p className="small-title-left">Report a Post</p>
                                <h3 className="uk-h1">Reporting is easy on our platform.</h3>
                                <p>If you come across a post that you believe is harmful or contains hate speech, let us investigate it for you. Just copy and paste the content here, and if available, attach the relevant link. </p>
                                <p>Your proactive involvement is key in ensuring a safer online community.</p>
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
                            <h3 className="uk-h1">Share the origin of harmful content</h3>
                            <p>Empower our mission by providing the link to suspected hate speech. Your input is invaluable in our commitment to swiftly address and eradicate harmful content, creating a safer digital space for all."</p>
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
                            <p>Welcome to our platform, where our mission is to foster a digital landscape free from hate speech. Committed to promoting unity, understanding, and respect, we provide a user-friendly space for reporting instances of harmful content. With advanced AI technology, robust security measures, and a focus on community collaboration, we strive to create an online environment where everyone can thrive without fear. </p>
                            <p> Join us in building a safer, more inclusive internet for all. Together, we can make a positive impact in the fight against online toxicity. </p>
                            <a className="uk-button uk-button-secondary" href="about-us">Learn more</a>
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