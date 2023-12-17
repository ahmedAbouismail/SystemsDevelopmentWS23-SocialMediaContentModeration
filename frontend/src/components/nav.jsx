import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  state = {
    isOffcanvasOpen: document.body.classList.contains('uk-open'),
  };

  toggleOffcanvas = () => {
    this.setState((prevState) => ({
      isOffcanvasOpen: !prevState.isOffcanvasOpen,
    }));
  };

  render() {
    const { isOffcanvasOpen } = this.state;
    const { items } = this.props;
    const isIndexPage = window.location.pathname === '/';
    const isLoginPage = window.location.pathname === '/login';

    return (
      <>
        {!isLoginPage && (
          <div
            uk-sticky="top: 120; animation: uk-animation-slide-top;"
            className={`uk-sticky ${isIndexPage ? 'header-landing-page' : ''}`}
          >
            <div className="uk-container">
              <div
                data-uk-grid
                className="uk-flex uk-flex-middle uk-padding uk-padding-remove-horizontal"
              >
                <div className="uk-width-1-2 uk-width-1-4@m logo-header uk-first-column">
                  <a className="uk-display-inline-block" href="/">
                    {isIndexPage ? (
                      <img
                        data-uk-svg
                        className="logo-white"
                        src="./assets/img/logo/nohatenet-color-logo.svg"
                        alt="Logo"
                      />
                    ) : (
                      <img
                        className="logo-white"
                        src="./assets/img/logo/white-blue.png"
                        width="400"
                        height="auto"
                        alt="Logo"
                      />
                    )}
                    <img
                      data-uk-svg
                      className="logo-color"
                      src="./assets/img/logo/nohatenet-color-logo.svg"
                      alt="Logo"
                    />
                  </a>
                </div>
                <div className="uk-width-1-2 uk-width-3-4@m">
                  <nav className="nav">
                    <ul className="uk-subnav main-menu uk-margin-remove-bottom uk-flex-right uk-visible@s">
                      {items.map((item, index) => (
                        <li key={index}>
                          <a href={item.url}>{item.name}</a>
                        </li>
                      ))}
                    </ul>
                    <div className="uk-text-right main-menu-mobile uk-margin-bottom-remove uk-hidden@s">
                      <a
                        href="#offcanvas"
                        data-uk-toggle=""
                        aria-expanded={isOffcanvasOpen}
                        onClick={this.toggleOffcanvas}
                      >
                        <FontAwesomeIcon
                          icon={isOffcanvasOpen ? faX : faBars}
                          className="open-offcanvas"
                        />
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
        <div id="offcanvas" className="uk-background-secondary offcanvas uk-padding-large" data-uk-offcanvas>
          <ul className="uk-nav uk-nav-default uk-hidden@s">
            {items.map((item, index) => (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
