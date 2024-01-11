import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

class LeftNav extends Component {
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

        return (
            <>
                <div className='uk-background-secondary nav-left-height-responsive' data-uk-height-viewport>
                    <div className="uk-padding-small">
                        <div className='uk-flex uk-flex-middle' data-uk-grid>
                            <div className='uk-margin-medium-bottom uk-margin-top uk-width-1-2 uk-width-1-1@m'>
                                <img
                                    data-uk-svg
                                    className="logo-white"
                                    src="./assets/img/logo/white-blue.png"
                                    alt="Logo"
                                />
                            </div>
                            <div className='uk-width-1-2 uk-width-1-1@m'>
                                <nav className="navLeft">
                                    <ul className="dashboard-main-left-menu uk-margin-remove-bottom uk-flex-right uk-visible@m">
                                        {items.map((item, index) => (
                                            <li key={index}>
                                                <a href={item.url}>{item.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="uk-text-right main-menu-mobile uk-margin-bottom-remove uk-hidden@m">
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

                <div id="offcanvas" className="uk-background-secondary offcanvas uk-padding-large" data-uk-offcanvas>
                    <ul className="uk-nav uk-nav-default uk-hidden@m">
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

export default LeftNav;
