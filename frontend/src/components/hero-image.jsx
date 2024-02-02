import React, { Component } from 'react';
import TypingEffect from './typing-effect';

class HeroImage extends Component {
  render() {
    return (
      <div className='background-path-secondary uk-margin-xlarge-bottom'>
        <div className='uk-container'>
          <div
            data-uk-grid
            className='uk-grid-small header-center-container uk-flex uk-flex-center uk-flex-middle uk-margin-large-top'
          >
            <div className='header-center-content uk-width-2-5@m uk-width-2-5@s'>
              <div className='header-min-height'>
                <TypingEffect
                  text={this.props.text}
                  speed={80}
                  direction='forward'
                  repeat='-1'
                  classes='uk-h1 typing'
                />
              </div>
              <a
                className='uk-button uk-button-primary'
                href={this.props.buttonURL}
              >
                {this.props.buttonName}
              </a>
            </div>
            <div className='hero-image uk-width-expand@m uk-width-3-5@s uk-visible@s'>
              <img
                src={'/assets/img/' + this.props.image}
                alt={this.props.description}
                width={this.props.imageWidth}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HeroImage;
