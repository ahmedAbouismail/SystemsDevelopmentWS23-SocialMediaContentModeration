import React from 'react';
import PropTypes from 'prop-types';
import TypingEffect from './typing-effect';

/**
 * HeroImage Component: Represents the hero section with an image, text, and button.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.buttonName - The text displayed on the button.
 * @param {string} props.image - The image source for the hero section.
 * @param {string} props.buttonURL - The URL the button navigates to.
 * @param {string[]} props.text - An array of strings for the typing effect text.
 * @param {string} props.alt - The alt text for the hero image.
 * @returns {JSX.Element} - JSX for rendering the HeroImage component.
 */
function HeroImage({
  buttonName,
  image,
  buttonURL,
  text,
  alt,
}) {
  return (
    <div className=''>
      <div className='background-path-secondary uk-margin-xlarge-bottom'>
        <div className='uk-container'>
          <div
            data-uk-grid
            className='uk-grid-small header-center-container uk-flex uk-flex-center uk-flex-middle uk-margin-large-top'
          >
            <div className='header-center-content uk-width-2-5@m uk-width-2-5@s'>
              <div className='header-min-height'>
                <TypingEffect
                  text={text}
                  speed={80}
                  direction='forward'
                  repeat={-1}
                  classes='uk-h1 typing'
                />
              </div>
              <a className='uk-button uk-button-primary' href={buttonURL}>
                {buttonName}
              </a>
            </div>
            <div className='hero-image uk-width-expand@m uk-width-3-5@s uk-visible@s'>
              <img
                src={`/assets/img/${image}`}
                alt={alt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

HeroImage.propTypes = {
  buttonName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonURL: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  alt: PropTypes.string.isRequired,
};

export default HeroImage;
