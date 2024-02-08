import React from 'react';
import PropTypes from 'prop-types';

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
