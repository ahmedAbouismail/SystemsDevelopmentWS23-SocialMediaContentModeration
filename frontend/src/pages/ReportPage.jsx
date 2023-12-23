import { React } from 'react'
import HeroJustText from '../components/hero-just-text';
import ReportFormComponent from '../components/report-form';

const ReportPage = ()=> {
    return <>
        <HeroJustText text="Report" />

        <div className="background-pfad-left">
            <div className="uk-container">
                <div>
                    <p className="small-title-center">Report a post</p>
                    <h2 className="uk-h1 uk-text-center">Report Hateful Online Behavior on NoHateNet</h2>
                    <p className='uk-text-center'>
                        Choose Your Method: Paste the text directly or share a link to the source of the potentially hateful content.
                    </p>
                </div>
                <ReportFormComponent/>
            </div>
        </div>
    </>
}

export default ReportPage;