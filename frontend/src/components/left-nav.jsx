import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes as faX } from '@fortawesome/free-solid-svg-icons';

function LeftNav({ items }) {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen((prevIsOffcanvasOpen) => !prevIsOffcanvasOpen);
  };

  return (
    <div className='uk-width-1-6@l uk-width-1-5@m'>
      <div
        className='uk-background-secondary nav-left-height-responsive'
        data-uk-height-viewport
      >
        <div className='uk-padding-small'>
          <div className='uk-flex uk-flex-middle' data-uk-grid>
            <div className='uk-margin-medium-bottom uk-margin-top uk-width-1-2 uk-width-1-1@m'>
              <img
                data-uk-svg
                className='logo-white'
                src='./assets/img/logo/white-blue.png'
                alt='Logo'
              />
            </div>
            <div className='uk-width-1-2 uk-width-1-1@m'>
              <nav className='navLeft'>
                <ul className='dashboard-main-left-menu uk-margin-remove-bottom uk-flex-right uk-visible@m'>
                  {items.map((item) => (
                    <li key={item.index}>
                      <a href={item.url}>{item.name}</a>
                    </li>
                  ))}
                </ul>
                <div className='uk-text-right main-menu-mobile uk-margin-bottom-remove uk-hidden@m'>
                  <a
                    href='#offcanvas'
                    data-uk-toggle=''
                    aria-expanded={isOffcanvasOpen}
                    onClick={toggleOffcanvas}
                  >
                    {}
                    <FontAwesomeIcon
                      icon={isOffcanvasOpen ? faX : faBars}
                      className='open-offcanvas'
                    />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div
        id='offcanvas'
        className='uk-background-secondary offcanvas uk-padding-large'
        data-uk-offcanvas
      >
        <ul className='uk-nav uk-nav-default uk-hidden@m'>
          {items.map((item) => (
            <li key={item.index}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

LeftNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LeftNav;
