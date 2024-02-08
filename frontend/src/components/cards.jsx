import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line object-curly-newline

/**
 *CardsIcon Component: Represents a card with an icon, number, description, and text.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.number - The number displayed on the card.
 * @param {string} props.image - The image source for the icon.
 * @param {string} props.text - The text content of the card.
 * @param {string} props.description - The text/description for the icon image.
 * @returns {JSX.Element} - JSX for rendering the CardsIcon component.
 */
function CardsIcon({
  number,
  image,
  description,
  text,
}) {
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
              alt={description}
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
  description: PropTypes.string.isRequired,
};

export default CardsIcon;
