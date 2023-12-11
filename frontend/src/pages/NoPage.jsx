import {React, Component} from 'react'
import HeroJustText from '../components/hero-just-text';

class NoPage extends Component {
    state = {  } 
    render() { 
        return <>
            <HeroJustText text="Page Not Found" />
            <div className="background-pfad-left">
                <div className="uk-container">
                    <div className='uk-text-center'>
                        <h2 className="uk-h1">The page you were looking for does not exist.</h2>
                        <a className="uk-button uk-button-secondary uk-margin-right" href="/">Back to Homepage</a>
                        <p> </p>
                    </div>
                </div>
            </div>
        </>;
    }
}
 
export default NoPage;