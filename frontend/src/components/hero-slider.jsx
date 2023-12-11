import React, { Component } from 'react';
class HeroSlider extends Component {
    render() {
        const { items } = this.props;
        return <div id='section-start' className="main-container-slider uk-position-relative uk-margin-large-bottom">
            <div className="uk-position-relative uk-slideshow" data-uk-slideshow="autoplay:true; autoplay-interval: 4000; animation: fade; pause-on-hover: false; max-height:830;">
                <ul className="uk-slideshow-items" styles="min-height:830px;">
                    {items.map(item => (
                        <>
                            <li>
                                <img data-uk-cover src={process.env.PUBLIC_URL + "/assets/img/main-slider-images/" + item.name} alt="" />
                                <div className="uk-position-absolute uk-position-cover overlay-header">
                                    <div className="uk-container uk-container-center responsive-remove-padding-left uk-position-relative uk-height-1-1">
                                        <div className="uk-flex uk-flex-middle uk-height-1-1" uk-grid>
                                            <div className="header-center-content">
                                                <p className="">{item.caption}</p>
                                                <a className="uk-button uk-button-secondary" href={item.buttonURL}>{item.buttonName}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </>
                    ))}
                </ul>
                <a className="uk-position-center-left uk-position-small " href data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
                <a className="uk-position-center-right uk-position-small" href data-uk-slidenav-next data-uk-slideshow-item="next"></a>
            </div>

        </div>

    }
}
export default HeroSlider;

