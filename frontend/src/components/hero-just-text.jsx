import React from 'react';
import PropTypes from 'prop-types';

/**
 * HeroJustText Component: Represents a hero section with just text.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.text - The text content of the hero section.
 * @returns {JSX.Element} - JSX for rendering the HeroJustText component.
 */
function HeroJustText({ text }) {
  return (
    <div className='curly-overlay-header uk-margin-xlarge-bottom uk-background-secondary'>
      <div className='uk-container'>
        <div className='uk-margin-large-top'>
          <div className='header-center-content uk-flex uk-flex-center uk-flex-middle'>
            <p className='uk-light h1 uk-text-center'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

HeroJustText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeroJustText;
