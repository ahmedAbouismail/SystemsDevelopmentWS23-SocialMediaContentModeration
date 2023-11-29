import { React, Component } from 'react'
import HeroJustText from '../components/hero-just-text';
import CardsImageSmall from '../components/cards-image-small';

class ReportPage extends Component {
    state = {}
    render() {
        return <>

            <HeroJustText text="About us" />
            <div className="uk-container">
                <div class="uk-child-width-1-2@m uk-child-width-1-1 uk-margin-large-bottom " data-uk-grid>
                    <div>
                        <p className="small-title-left">About us</p>
                        <h2 className="uk-h1">Who we are?!</h2>
                        <p>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                        </p>
                        <ul className="uk-list uk-column-1-2@m check-list">
                            <li>Lorem ipsum dolor</li>
                            <li> Etiam sit amet</li>
                            <li>Nullam dictum</li>
                            <li>Lorem ipsum dolor</li>
                            <li>Nullam dictum</li>
                            <li>Etiam sit amet</li>
                        </ul>
                        <p>
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        </p>
                    </div>
                    <div className="">
                        <div className="uk-box-shadow-medium uk-border-rounded">
                            <img src="/assets/img/logo/blue-yellow-logo.png" alt="Logo NoHateNet" className="uk-border-rounded uk-box-shadow-medium" />
                        </div>
                    </div>
                </div>
                <div className="uk-margin-xlarge-bottom" data-uk-grid>
                    <div class="uk-width-1-3@m uk-width-1-1">
                        <p className="small-title-left">Our Partners</p>
                        <h3 className="uk-h1">Lorem ipsum dolor sit amet</h3>
                    </div>
                    <div class="uk-width-2-3@m uk-width-1-1">
                        <div data-uk-grid className="uk-child-width-1-2@m uk-child-width-1-1" data-uk-height-match="target: a > div > .uk-card">
                            <CardsImageSmall name="Hochschule für Technik und Wirtschaft Berlin" url="https://www.htw-berlin.de/" image="htw.png" />
                            <CardsImageSmall  name="Berlin Lorem ipsum" url="https://www.berlin.de/deeptech/standort/kompetenzfeld-it-security/" image="berlin.png"/>
                        </div>
                    </div>

                </div>
            </div>

        </>;
    }
}

export default ReportPage;