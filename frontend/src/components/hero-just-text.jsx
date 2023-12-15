import React, { Component } from 'react';

class HeroJustText extends Component {
    render() {
        const { items } = this.props;
        return <div className="curly-overlay-header uk-margin-xlarge-bottom uk-background-secondary">
            <div className="uk-container">
                <div className="uk-margin-large-top">
                    <div className="header-center-content uk-flex uk-flex-center uk-flex-middle">
                        <p className="uk-light h1 uk-text-center">{this.props.text}</p>
                    </div>
                </div>
            </div>
        </div>

    }
}
export default HeroJustText;