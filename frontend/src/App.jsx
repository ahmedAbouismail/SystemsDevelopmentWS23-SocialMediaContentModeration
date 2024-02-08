import React from 'react';
import CardsIcon from './components/cards';
import HeroImage from './components/hero-image';
import ReportFormComponent from './components/report-form';

/**
 * Array of texts for the typing effect in the HeroImage component.
 * @type {Array<string>}
 */
const heroTextTyping = [
  'United Against Hate, Mute the Dissonance',
  'Stand for Respect, Speak Against Hate.',
  'Erase Hate, Embrace Unity.',
];

/**
 * App Component: Main application component representing the homepage of the NoHateNet platform.
 * @returns {JSX.Element} - JSX for rendering the App component.
 */
function App() {
  return (
    <>
      <HeroImage
        image='phone-women.png'
        alt='phone-woman'
        text={heroTextTyping}
        buttonName='Report hate speech now!'
        buttonURL='report'
      />

      <div className='uk-container'>
        <div
          className='uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l uk-flex uk-flex-center uk-flex-middle'
          data-uk-grid
        >
          <div>
            <div>
              <p className='small-title-left'>Hatespeech</p>
              <h1>Uniting Against Online Toxicity</h1>
              <p>
                Hate speech encompasses any form of communication, in speech,
                writing, or behavior, that discriminates, stigmatizes,
                marginalizes, or incites violence against individuals or groups
                based on attributes such as race, ethnicity, religion, gender,
                sexual orientation, disability, or any other characteristic.
              </p>
              <p>
                {' '}
                It not only fosters hostility but can escalate into real-world
                harm, eroding the foundations of tolerance and understanding.
              </p>
              <a className='uk-button uk-button-secondary' href='hate-speech'>
                Learn more
              </a>
            </div>
          </div>
          <div>
            <div
              className='uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-2@m uk-grid-match'
              data-uk-height-match='target: .uk-card'
              data-uk-grid
            >
              <CardsIcon
                number='1'
                image='artificial-intelligence.png'
                text='Our platform employs advanced AI classifiers for rapid and accurate hate speech identification, ensuring effective content monitoring.'
                description=''
              />
              <CardsIcon
                number='2'
                image='hate.png'
                text='Committed to a hate-free digital space, we actively prevent incidents through community engagement.'
                description=''
              />
              <CardsIcon
                number='3'
                image='secure-shield.png'
                text='Prioritizing user safety, our platform integrates robust security measures, guaranteeing anonymity during hate speech reporting.'
                description=''
              />
              <CardsIcon
                number='4'
                image='support.png'
                text='Emphasizing solidarity, we foster collaboration against online toxicity, creating a stronger, more resilient online community.'
                description=''
              />
            </div>
          </div>
        </div>
      </div>
      <div className='background-pfad-left'>
        <ReportFormComponent />
      </div>

      <div className='uk-container'>
        <div
          className='uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@l'
          data-uk-grid
        >
          <div>
            <div>
              <p className='small-title-left'>About us</p>
              <h3 className='uk-h1'>Get to know us!</h3>
              <p>
                Welcome to our platform, where our mission is to foster a
                digital landscape free from hate speech. Committed to promoting
                unity, understanding, and respect, we provide a user-friendly
                space for reporting instances of harmful content. With advanced
                AI technology, robust security measures, and a focus on
                community collaboration, we strive to create an online
                environment where everyone can thrive without fear.
              </p>
              <p>
                {' '}
                Join us in building a safer, more inclusive internet for all.
                Together, we can make a positive impact in the fight against
                online toxicity.
              </p>
              <a className='uk-button uk-button-secondary' href='about-us'>
                Learn more
              </a>
            </div>
          </div>
          <div>
            <div className=''>
              <img
                src='/assets/img/partner.png'
                className=''
                alt='partner von Projekt'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
