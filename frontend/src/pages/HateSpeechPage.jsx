import { React, Component } from "react";

class HateSpeechPage extends Component {
    state = {};
    render() {
        return (
            <div className="background-path-secondary">
                {/* temporary space. TODO: need rotated yellow svg  */}

                <div style={{ height: "600px" }}></div>

                <div className="background-pfad-left">
                    <div className="uk-container">
                        <div
                            className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m"
                            data-uk-grid
                        >
                            <div>
                                <div>
                                    <p className="small-title-left">Examples of Hate Speech</p>
                                    <h3 className="uk-h1">Digital violence has many faces.</h3>
                                    <ul uk-accordion="multiple: true">
                                        <li>
                                            <a className="uk-accordion-title" href="#">
                                                Racism
                                            </a>
                                            <div className="uk-accordion-content">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="uk-accordion-title" href="#">
                                                Homophobia
                                            </a>
                                            <div className="uk-accordion-content">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="uk-accordion-title" href="#">
                                                Sexism
                                            </a>
                                            <div className="uk-accordion-content">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="uk-accordion-title" href="#">
                                                Religious discrimination
                                            </a>
                                            <div className="uk-accordion-content">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="uk-accordion-title" href="#">
                                                Xenophobia
                                            </a>
                                            <div className="uk-accordion-content">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                            </div>
                                        </li>




                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="uk-box-shadow-medium uk-border-rounded uk-background-default">
                                    <img
                                        src={"/assets/img/smartphone-with-text.png"}
                                        className="uk-border-rounded"
                                        alt="Mann melde Post"
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m"
                            data-uk-grid
                        >
                            <div>
                                <div>
                                    <p className="small-title-left">The impact of Hate Speech</p>
                                    <h3 className="uk-h1">
                                        Hate Speech can have serious consequences for those
                                        affected.
                                    </h3>
                                    <p>
                                        Vivamus elementum semper nisi. Aenean vulputate eleifend
                                        tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                        eleifend ac, enim. Donec pede justo, fringilla vel, aliquet
                                        nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                                        imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                                        pede mollis pretium. Integer tincidunt. Cras dapibus.
                                        Vivamus elementum semper nisi. Aenean vulputate eleifend
                                        tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                        eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
                                        quis, feugiat a, tellus. Phasellus viverra nulla ut metus
                                        varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                                        ultricies nisi vel augue.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="small-title-left">
                                    {" "}
                                    What to do about Hate Speech?
                                </p>
                                <h3 className="uk-h1">Recognizing and naming Hate Speech.</h3>
                                <p>
                                    Vivamus elementum semper nisi. Aenean vulputate eleifend
                                    tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                    eleifend ac, enim. Donec pede justo, fringilla vel, aliquet
                                    nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                                    imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
                                    pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                                    elementum semper nisi. Aenean vulputate eleifend tellus.
                                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                                    enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                                    augue.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HateSpeechPage;
