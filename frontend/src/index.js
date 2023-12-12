import React from "react"
import ReactDOM from "react-dom";
import "/node_modules/uikit/dist/css/uikit.min.css"
import "/node_modules/uikit/dist/js/uikit.min.js"
import "/node_modules/uikit/dist/js/uikit-core.min.js"
import "./styles/index.css"
import App from "./App"
import Footer from "./components/footer"
import Navbar from "./components/nav"
import ReportPage from "./pages/ReportPage"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NoPage';
import AboutUs from './pages/AboutUs';
import YesPage from './pages/HSResponsePage';
import NoPage from './pages/NoHSReponsePage';


import HateSpeechPage from "./pages/HateSpeechPage";

const navList = [
    {
        name: 'Report',
        url: '/report',
    },
    {
        name: 'Hate Speech',
        url: '/hate-speech',
    },
    {
        name: 'About Us',
        url: '/about-us',
    },


]
function Template() {
    return ( 
        <>        
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<App></App>}></Route>
                <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
                <Route path="/report" element={<ReportPage></ReportPage>}></Route>
                <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
                <Route path="/hate-speech" element={<HateSpeechPage></HateSpeechPage>}></Route>
                <Route path="/hate-speech=true" element={<YesPage></YesPage>}></Route>
                <Route path="/hate-speech=false" element={<NoPage></NoPage>}></Route>
            </Routes>
        </BrowserRouter>
        <Footer />
        </> 
    );
  }

  function SendReportButton() {
    const sendReport = () => {

        //TODO Create JSON file with data and send post request to following URL
        window.location.href = 'http://localhost:8000/report'; 
    };

    return (
        <button onClick={sendReport} className="uk-button uk-button-secondary">Send</button>
    );
}

export default SendReportButton;

ReactDOM.render(<Navbar items={navList}/>, document.getElementById("header"));
ReactDOM.render(<Template />, document.getElementById("root"));
