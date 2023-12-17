import React from "react"
import { createRoot } from 'react-dom/client';
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
import Login from './pages/Login';


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
                <Route path="/login" element={<Login></Login>}></Route>
            </Routes>
        </BrowserRouter>
        <Footer />
        </> 
    );
  }

// Render Navbar using createRoot
const headerRoot = createRoot(document.getElementById("header"));
headerRoot.render(<Navbar items={navList} />);

// Render Template using createRoot
const root = createRoot(document.getElementById("root"));
root.render(<Template />);

// deprecated
// ReactDOM.render(<Navbar items={navList}/>, document.getElementById("header"));
// ReactDOM.render(<Template />, document.getElementById("root"));