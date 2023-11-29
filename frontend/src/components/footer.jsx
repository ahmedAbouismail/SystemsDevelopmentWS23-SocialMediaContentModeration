import React, { Component } from 'react';
class Footer extends Component {
    render() {
        const { items } = this.props;
        return <footer className="curly-overlay">
            <div className="footer uk-background-primary uk-light uk-padding uk-padding-remove-horizontal uk-flex uk-flex-bottom">
                <div className="uk-container">
                    <div data-uk-grid className="uk-grid-large">
                        <div className="uk-width-1-6@m uk-width-1-4@l uk-flex uk-flex-center uk-flex-left@m logo-bottom uk-first-column">
                            <div className="footer-logo">
                                <a href="#"><img data-uk-svg src="./assets/img/logo/nohatenet-color-whiteicon-yellowfont.svg" width="400" height="auto" /></a>
                            </div>
                        </div>
                        <div className="uk-width-1-4@l uk-width-1-6@m ">
                            <h4 className="uk-text-center uk-text-left@m">Stop Hate Speech</h4>
                            <p className="uk-text-center uk-text-left@m">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                        <div className="uk-width-1-4@l uk-width-1-3@m">
                            <h4 className="uk-text-center uk-text-left@m">Contact us</h4>
                            <div className="uk-flex uk-flex-center uk-flex-left@m uk-text-left@m">
                                <ul className="uk-list info">
                                    <li>
                                        <a href="mailto:info@stop-hate-speech">info@stop-hate-speech</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="uk-width-1-4@l uk-width-1-3@m uk-text-center uk-text-left@m">
                            <h4 className="uk-text-center uk-text-left@m">Links</h4>
                            <ul className="uk-list info">
                                <li>
                                    <a href="#">Imprint</a>
                                </li>
                                <li>
                                    <a href="#">Privacy</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </footer>


    }
}
export default Footer;

