import React, { Component } from 'react';
class ContainerImgRight extends Component {
    render() {
        const h1 = this.props.h1;
        return <div className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m " data-uk-grid>
            <div>
                <div>
                    <p className="small-title-left">{this.props.smallTitle}</p>
                    {this.props.h1 && <h1>{h1}</h1>}
                    {this.props.text}
                </div>
            </div>
            <div>
                <div className="uk-box-shadow-medium uk-border-rounded">
                    <img src={"/assets/img/"+this.props.image} className="uk-border-rounded" alt={this.props.description} />
                </div>
            </div>
        </div>

    }
}
export default ContainerImgRight;
