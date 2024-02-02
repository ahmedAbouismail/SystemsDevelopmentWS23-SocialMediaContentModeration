/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-absolute-path */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import '/node_modules/uikit/dist/css/uikit.min.css';
import '/node_modules/uikit/dist/js/uikit.min.js';
import '/node_modules/uikit/dist/js/uikit-core.min.js';
import './styles/index.css';
import LeftNav from './components/left-nav';
import App from './App';
import Footer from './components/footer';
import Navbar from './components/nav';
import ReportPage from './pages/ReportPage';
import NotFoundPage from './pages/NoPage';
import AboutUs from './pages/AboutUs';
import HateSpeechPage from './pages/HateSpeechPage';
import ResponsePage from './pages/ResponsePage';
import MainDashboard from './pages/Dashboard/main';
import Login from './pages/Login';
import PrivateRoute from './pages/Dashboard/privateRoute';

const navList = [
  {
    id: 'Report',
    name: 'Report',
    url: '/report',
  },
  {
    id: 'HateSpeech',
    name: 'Hate Speech',
    url: '/hate-speech',
  },
  {
    id: 'AboutUs',
    name: 'About Us',
    url: '/about-us',
  },
  {
    id: 'Login',
    name: 'Login',
    url: '/login',
  },
];
/* Dashboard Nav */
const navListLeftDashboard = [
  {
    name: 'Overview',
    url: '/dashboard',
  },
];

function Template() {
  const getCurrentPath = () => window.location.pathname;
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [setRememberMe] = useState(false);
  useEffect(() => {
    // Check localStorage for rememberMe status and token
    const rememberMeStatus = localStorage.getItem('rememberMe') === 'true';
    const storedToken = localStorage.getItem('token');

    if (rememberMeStatus && storedToken) {
      setAuthenticated(true);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<App />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/report' element={<ReportPage />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/hate-speech' element={<HateSpeechPage />} />
          <Route path='/response' element={<ResponsePage />} />
          <Route
            path='/login'
            element={(
              <Login
                setAuthenticated={setAuthenticated}
                setRememberMe={setRememberMe}
              />
            )}
          />
          <Route
            path='/'
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path='/dashboard' element={<MainDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {getCurrentPath() !== '/dashboard' && <Footer />}
    </>
  );
}

// Render NavbarLeft using createRoot Dashboard
document.addEventListener('DOMContentLoaded', () => {
  // Function to get the current URL path
  const getCurrentPath = () => window.location.pathname;

  // Recursive function to try loading the content until the container is found
  const loadContent = () => {
    if (getCurrentPath() === '/dashboard') {
      const dashboardContainer = document.getElementById('dashboard-container');

      // Check if the container element exists
      if (dashboardContainer) {
        // Create a new div for LeftNav
        const leftNavContainer = document.createElement('div');
        leftNavContainer.className = 'uk-width-1-6@l uk-width-1-5@m';

        // Render LeftNav into the new container
        const leftNavRoot = createRoot(leftNavContainer);
        leftNavRoot.render(<LeftNav items={navListLeftDashboard} />);
        const { firstChild } = dashboardContainer;

        dashboardContainer.insertBefore(leftNavContainer, firstChild);
      } else {
        // If the container element is not found, try loading again after a delay
        setTimeout(loadContent, 300);
      }
    }
  };

  // Initial attempt to load the content
  loadContent();
});

// Render Navbar using createRoot
document.addEventListener('DOMContentLoaded', () => {
  // Function to get the current URL path
  const getCurrentPath = () => window.location.pathname;

  // Check if the current path is not "/dashboard"
  if (getCurrentPath() !== '/dashboard') {
    // If not on the "/dashboard" page, render the Navbar
    const headerRoot = createRoot(document.getElementById('header'));
    headerRoot.render(<Navbar items={navList} />);
  }
});

// Render Template using createRoot
const root = createRoot(document.getElementById('root'));
root.render(<Template />);

// deprecated
// ReactDOM.render(<Navbar items={navList}/>, document.getElementById("header"));
// ReactDOM.render(<Template />, document.getElementById("root"));
