/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

/**
 * Footer Component: Represents the footer section of the website.
 * @returns {JSX.Element} - JSX for rendering the Footer component.
 */
function Footer() {
  return (
    <footer className='curly-overlay'>
      <div className='footer uk-background-primary uk-light uk-padding uk-padding-remove-horizontal uk-flex uk-flex-bottom'>
        <div className='uk-container'>
          <div data-uk-grid className='uk-grid-large'>
            <div className='uk-width-1-1 uk-width-1-4@l uk-flex uk-flex-center uk-flex-left@l logo-bottom uk-first-column'>
              <div className='footer-logo'>
                <a href='#'>
                  <img
                    data-uk-svg
                    src='./assets/img/logo/nohatenet-color-whiteicon-yellowfont.svg'
                    width='400'
                    height='auto'
                    alt='NoHateNet Logo'
                  />
                </a>
              </div>
            </div>
            <div className='uk-width-1-4@l uk-width-1-1'>
              <h4 className='uk-text-center uk-text-left@l'>
                Stop Hate Speech
              </h4>
              <p className='uk-text-center uk-text-left@l'>
                Join us in building a safer, more inclusive internet for all.
              </p>
            </div>
            <div className='uk-width-1-4@l uk-width-1-1'>
              <h4 className='uk-text-center uk-text-left@l'>Contact us</h4>
              <div className='uk-flex uk-flex-center uk-flex-left@l uk-text-left@l'>
                <ul className='uk-list info'>
                  <li>
                    <a href='mailto:info@stop-hate-speech'>
                      info@stop-hate-speech
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='uk-width-1-4@l uk-width-1-1 uk-text-center uk-text-left@m'>
              <h4 className='uk-text-center uk-text-left@l'>Links</h4>
              <ul className='uk-list info uk-text-center uk-text-left@l'>
                <li>
                  <a href='#'>Imprint</a>
                </li>
                <li>
                  <a href='#'>Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
