import { React } from 'react';
import HeroJustText from '../components/hero-just-text';
import CardsImageSmall from '../components/cards-image-small';

function AboutUsPage() {
  return (
    <>
      <HeroJustText text='About us' />

      <div className='background-pfad-left'>
        <div className='uk-container'>
          <div
            className='uk-child-width-1-2@l uk-child-width-1-1 uk-margin-large-bottom '
            data-uk-grid
          >
            <div>
              <p className='small-title-left'>About us</p>
              <h2 className='uk-h1'>Who we are</h2>
              <p>
                Welcome to our platform! We are a community dedicated to
                combating hate speech. Our goal is to create a digital space
                characterized by respect, tolerance, and diversity. With
                advanced AI technology and a strong sense of community, we
                actively work towards reporting and preventing harmful content.
                Your support enables us to swiftly respond to potential hate
                speech, fostering a safe environment for all.
              </p>
              <ul className='uk-list uk-column-1-2@m check-list'>
                <li>Respect</li>
                <li>Reporting</li>
                <li>Collaboration</li>
                <li>Education</li>
                <li>AI Technology</li>
                <li>Anonymity Protection</li>
              </ul>
              <p>
                Join us in this solemn mission, as we strive to create an online
                community where the principles of dignity and understanding are
                upheld, and where the collective resolve against hate speech is
                unwavering. Together, we can shape a digital realm where every
                individual is afforded the respect and security they deserve.
              </p>
            </div>
            <div className='uk-flex-first uk-flex-last@l'>
              <div className='uk-box-shadow-medium uk-border-rounded'>
                <img
                  src='/assets/img/logo/blue-yellow-logo.png'
                  alt='Logo NoHateNet'
                  className='uk-border-rounded uk-box-shadow-medium'
                />
              </div>
            </div>
          </div>
          <div
            className='uk-margin-xlarge-bottom uk-margin-xlarge-top'
            data-uk-grid
          >
            <div className='uk-width-1-3@l uk-width-1-1'>
              <p className='small-title-left'>Our Partners</p>
              <h3 className='uk-h1'>In the Fight Against Hate Speech</h3>
            </div>
            <div className='uk-width-2-3@l uk-width-1-1'>
              <div
                data-uk-grid
                className='uk-child-width-1-2@m uk-child-width-1-1'
                data-uk-height-match='target: a > div > .uk-card'
              >
                <CardsImageSmall
                  name='Hochschule für Technik und Wirtschaft Berlin'
                  url='https://www.htw-berlin.de/'
                  image='partners/htw.png'
                  alt='htw'
                />
                <CardsImageSmall
                  name='City of Berlin'
                  url='https://www.berlin.de/deeptech/standort/kompetenzfeld-it-security/'
                  image='partners/berlin.png'
                  alt='berlin'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
