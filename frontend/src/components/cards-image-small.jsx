import React, { Component } from 'react';

class CardsImageSmall extends Component {
    state = {}
    render() {
        return <>
        <a href={this.props.url} target="_blank" rel="noopener noreferrer">
            <div>
                <div className="uk-card uk-box-shadow-medium uk-border-rounded  uk-background-default uk-flex uk-flex-center">
                    <div className="uk-padding">
                        <div className="icon uk-text-center uk-margin-small-bottom">
                            <img src={"/assets/img/" + this.props.image} alt={this.props.alt} />
                        </div>
                        <div className="text uk-text-center"><p>{this.props.name}</p></div>
                    </div>
                </div>
            </div>
        </a>

        </>

    }
}

export default CardsImageSmall;