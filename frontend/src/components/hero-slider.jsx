/* eslint-disable react/no-unknown-property */
import React from 'react';
import PropTypes from 'prop-types';

function HeroSlider({ items }) {
  return (
    <div className='main-container-slider uk-position-relative uk-margin-large-bottom'>
      <div
        className='uk-position-relative uk-slideshow'
        data-uk-slideshow='autoplay:true; autoplay-interval: 4000; animation: fade; pause-on-hover: false; max-height:830;'
      >
        <ul className='uk-slideshow-items' style={{ minHeight: '830px' }}>
          {items.map((item) => (
            <li key={item.index}>
              <img
                data-uk-cover
                src={`${process.env.PUBLIC_URL}/assets/img/main-slider-images/${item.name}`}
                alt=''
              />
              <div className='uk-position-absolute uk-position-cover overlay-header'>
                <div className='uk-container uk-container-center responsive-remove-padding-left uk-position-relative uk-height-1-1'>
                  <div className='uk-flex uk-flex-middle uk-height-1-1' uk-grid>
                    <div className='header-center-content'>
                      <p className='uk-light h1 uk-text-center'>
                        {item.caption}
                      </p>
                      <a
                        className='uk-button uk-button-secondary'
                        href={item.buttonURL}
                      >
                        {item.buttonName || 'Button Text'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <a
          className='uk-position-center-left uk-position-small'
          href='prev'
          data-uk-slidenav-previous
          data-uk-slideshow-item='previous'
        >
          Previous Slide
        </a>
        <a
          className='uk-position-center-right uk-position-small'
          href='next'
          data-uk-slidenav-next
          data-uk-slideshow-item='next'
        >
          Next Slide
        </a>
      </div>
    </div>
  );
}

HeroSlider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      buttonURL: PropTypes.string.isRequired,
      buttonName: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default HeroSlider;
