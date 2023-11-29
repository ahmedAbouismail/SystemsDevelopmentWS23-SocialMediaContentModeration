import { React, Component } from "react";
import HeroJustText from '../components/hero-just-text';

class HateSpeechPage extends Component {
    state = {};
    render() {
        return <>
            <HeroJustText text="Hate Speech" />

            <div className="background-pfad-left">
                <div className="uk-container">
                    <div
                        className="uk-margin-large-top uk-margin-large-bottom uk-child-width-1-1 uk-child-width-1-2@m"
                        data-uk-grid
                    >
                        <div>
                            <div>
                                <p className="small-title-left">Examples of Hate Speech</p>
                                <h3 className="uk-h1">Digital Violence has many Faces</h3>
                                <ul uk-accordion="multiple: true">
                                    <li>
                                        <a className="uk-accordion-title" href="#">
                                            Racism
                                        </a>
                                        <div className="uk-accordion-content">
                                            <p>
                                            Racism involves prejudice, discrimination, or antagonism directed against someone of a different race based on the belief that one's own race is superior.
                                            </p>
                                            <p>
                                            Example: Offensive remarks, stereotypes, or discriminatory actions targeting individuals or communities based on their racial background.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="uk-accordion-title" href="#">
                                            Homophobia
                                        </a>
                                        <div className="uk-accordion-content">
                                            <p>
                                            Homophobia refers to an irrational fear or hatred of, or prejudice and discrimination against, homosexual people.
                                            </p>
                                            <p>
                                            Example: Derogatory comments, slurs, or discriminatory behavior towards individuals based on their sexual orientation.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="uk-accordion-title" href="#">
                                            Sexism
                                        </a>
                                        <div className="uk-accordion-content">
                                            <p>
                                            Sexism is the discrimination, stereotyping, or prejudice, typically against women, on the basis of sex.
                                            </p>
                                            <p>
                                            Example: Gender-based discrimination, unequal treatment, or offensive comments targeting individuals due to their gender.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="uk-accordion-title" href="#">
                                            Religious discrimination
                                        </a>
                                        <div className="uk-accordion-content">
                                            <p>
                                            Religious discrimination involves treating individuals unfairly due to their religious beliefs or practices.
                                            </p>
                                            <p>
                                            Example: Hate speech or bias against individuals of a particular religion, including derogatory comments or exclusionary practices.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="uk-accordion-title" href="#">
                                            Xenophobia
                                        </a>
                                        <div className="uk-accordion-content">
                                            <p>
                                            Xenophobia is the irrational fear, dislike, or prejudice against people from other countries.
                                            </p>
                                            <p>
                                            Example: Hostile attitudes, discrimination, or inflammatory rhetoric directed at individuals or groups based on their nationality or foreign origin.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="uk-accordion-title" href="#">
                                            Dehumanization
                                        </a>
                                        <div className="uk-accordion-content">
                                            <p>
                                            Dehumanization involves portraying individuals or groups as less than human, stripping them of their dignity and humanity.                                        </p>
                                            <p>
                                            Example: Using language or imagery that reduces individuals to objects, animals, or implies they are inferior and unworthy of respect or empathy.                                        </p>
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
                                <p className="small-title-left">The Impact of Hate Speech</p>
                                <h3 className="uk-h1">
                                    The Profound Impact of Hate Speech on Those Affected
                                </h3>
                                <p>
                                Hate speech casts a dark shadow over the fabric of society, leaving a profound and damaging impact on individuals and communities. 
                                Beyond its immediate harm, hate speech can foster a climate of fear, erode trust, and fracture social cohesion. 
                                It fuels discrimination, contributes to mental health issues, and can escalate into real-world violence. 
                                Moreover, the ripple effect extends to marginalized groups, creating barriers to education, employment, and overall well-being.
                                By understanding the far-reaching consequences of hate speech, we recognize the urgency of combating it, fostering a digital landscape where empathy, understanding, and respect prevail.
                                </p>
                            </div>
                        </div>
                        <div>
                            <p className="small-title-left">
                                What to do about Hate Speech?
                            </p>
                            <h3 className="uk-h1">Recognizing and Naming Hate Speech</h3>
                            <p>
                            Addressing hate speech requires a collective effort and a commitment to fostering positive change. 
                            When encountering hate speech online, report the content through dedicated platforms or channels, contributing to the identification and mitigation of harmful material. 
                            Encourage open dialogue and education to promote understanding, challenging prejudiced beliefs. 
                            Support organizations and initiatives actively working against hate speech, and be an ally to those affected by its impact. 
                            By fostering awareness, promoting inclusivity, and standing united against hate, we can collectively create a safer and more respectful digital space for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>;
    }
}

export default HateSpeechPage;
