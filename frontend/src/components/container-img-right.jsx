import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * CardsImageSmall Component: Represents a card with an icon and text.
 */
class CardsImageSmall extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { image, alt, name } = this.props;

    return (
      <div>
        <div className='uk-card uk-box-shadow-medium uk-border-rounded uk-background-default uk-flex uk-flex-center'>
          <div className='uk-padding'>
            <div className='icon uk-text-center uk-margin-small-bottom'>
              <img src={`/assets/img/${image}`} alt={alt} />
            </div>
            <div className='text uk-text-center'>
              <p>{name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CardsImageSmall.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardsImageSmall;
