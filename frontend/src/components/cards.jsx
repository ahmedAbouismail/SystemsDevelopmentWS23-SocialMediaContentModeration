import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline
function CardsIcon({ number, image, alt, text }) {
  return (
    <div>
      <div className='uk-card uk-box-shadow-medium uk-border-rounded  uk-background-default'>
        {number && (
          <div data-uk-grid>
            <div className='uk-width-auto'>
              <div className='card-number'>
                <p>{number}</p>
              </div>
            </div>
          </div>
        )}
        <div className='uk-padding-large uk-padding-remove-top'>
          <div className='icon uk-text-center uk-margin-small-bottom'>
            <img
              src={`/assets/img/${image}`}
              className='card-icon-top'
              alt={alt}
            />
          </div>
          <div className='text uk-text-center'>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CardsIcon.propTypes = {
  number: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CardsIcon;
