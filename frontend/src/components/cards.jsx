import React, { Component } from 'react';

class CardsIcon extends Component {
    state = {}
    render() {
        return <>
            <div>
                <div className="uk-card uk-box-shadow-medium uk-border-rounded  uk-background-default">
                    {this.props.number && <div data-uk-grid><div className="uk-width-auto"><div className="card-number"><p>{this.props.number}</p></div></div></div>}
                    <div className="uk-padding-large uk-padding-remove-top">

                        <div className="icon uk-text-center uk-margin-small-bottom">
                            <img src={"/assets/img/" + this.props.image} className="card-icon-top" alt={this.props.alt} />
                        </div>
                        <div className="text uk-text-center"><p>{this.props.text}</p></div>
                    </div>


                </div>
            </div>
        </>

    }
}

export default CardsIcon;
