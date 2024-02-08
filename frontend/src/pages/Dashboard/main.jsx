/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { saveAs } from 'file-saver';
import UIkit from 'uikit';
import apiEndpoints from '../../apiConfig';
import LeftNav from '../../components/left-nav';
import Navbar from '../../components/nav';

/**
 * MainDashboard Component: Represents the main dashboard of the application.
 * Manages user login, fetches and displays data, handles user actions like logout and CSV export.
 * Utilizes state variables, effect hooks, and UI components such as DataTable.
 * @returns {JSX.Element} JSX for rendering the MainDashboard component.
 */

function MainDashboard() {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const [initData, setInitData] = useState([]);
  const navigate = useNavigate();

  /**
   * Renders the content of the "Post Content" cell in DataTable.
   * Breaks lines based on newline characters in the post content.
   * @param {Object} row - Data row for a specific post.
   * @returns {JSX.Element} JSX for rendering post content in DataTable cell.
   */
  const renderPostContentCell = (row) => (
    <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
      {row.post_content.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br key={index} />
        </React.Fragment>
      ))}
    </div>
  );

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

  const columns = [
    {
      name: 'Post Content',
      selector: (row) => row.post_content,
      sortable: true,
      cell: renderPostContentCell,
    },
    { name: 'Post Link', selector: (row) => row.post_link, sortable: true },
    { name: 'Post Image', selector: (row) => row.post_image, sortable: true },
    { name: 'User Prediction', selector: (row) => row.user_prediction, sortable: true },
    { name: 'Post Platform', selector: (row) => row.post_platform, sortable: true },
    {
      name: 'Classifier Response',
      selector: (row) => row.classifier_response,
      sortable: true,
    },
  ];

  /**
   * Handles user logout by sending a request to the server and updating the UI accordingly.
   * Displays notifications in case of success or failure.
   * @returns {void}
   */
  const handleLogout = async () => {
    try {
      const response = await fetch(apiEndpoints.getDashboardLogout, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token') || ''}`,
        },
      });

      if (response.ok) {
        setLoggedIn(false);
        localStorage.removeItem('token');
        navigate('/');
        // Render the Navbar after logout
        const headerRoot = createRoot(document.getElementById('header'));
        headerRoot.render(<Navbar items={navList} />);
      } else {
        // Fehler beim Logout
        // console.error('Logout fehlgeschlagen:', response.statusText);
        UIkit.notification('Logout failed');
      }
    } catch (error) {
      UIkit.notification('Failed logout');
      // console.error('Fehler beim Logout:', error.message);
    }
  };

  /**
   * Exports the DataTable content to CSV file.
   * Converts the data to CSV format and triggers a file download.
   * @returns {void}
   */
  const handleExportCSV = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.csv';
    const fileName = 'data';
    const tableToCSV = () => {
      const header = columns.map((column) => column.name).join(',');
      const rows = initData.map((row) => columns.map((column) => column.selector(row)).join(','));
      return [header, ...rows].join('\n');
    };

    const exportToCSV = () => {
      const blob = new Blob([tableToCSV()], { type: fileType });
      saveAs(blob, fileName + fileExtension);
    };

    exportToCSV();
  };

  /**
   * Fetches and downloads an image from the server based on the provided ID.
   * Converts base64 image data to a Blob and triggers the image download.
   * Displays a notification in case of an error.
   * @param {string} id - ID of the image to be fetched and downloaded.
   * @returns {void}
   */
  async function handleGetImage(id) {
    try {
      const url = apiEndpoints.downloadImage.concat('/', id);
      const response = await fetch(url);
      const data = await response.json();
      const imageBase64 = data.image;
      // Convert base64 image data to Blob
      const byteCharacters = atob(imageBase64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i += 1) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/*' });//  Adjust to "any"
      const blobUrl = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = 'image.png';
      downloadLink.click();
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      // console.error('Fehler beim holen vom Bild');
      UIkit.notification('Error while loading image');
    }
  }

  /**
   * Effect hook to fetch data when the component mounts.
   * Initiates a request to retrieve dashboard data and updates state variables accordingly.
   * Handles loading state and errors during the data fetch.
   * @returns {void}
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoints.getDashboard, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token') || ''}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setInitData(data);
        const updatedData = data.map((item) => ({
          ...item,
          post_image: item.post_image !== 'NoImage' && item.post_image !== null ? <button type='button' onClick={() => { handleGetImage(item.post_image); }}>Download Image</button> : ' ',
        }));
        setTableData(updatedData);
        setLoading(false);
      } catch (error) {
        // Handle errors
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  if (loading) {
    return <p>Loading...</p>;
  }
  /* Dashboard Nav */
  const navListLeftDashboard = [
    {
      name: 'Overview',
      url: '/dashboard',
    },
  ];
  return (
    <div className='dashboard-container' id='dashboard-container' data-uk-grid>
      <LeftNav items={navListLeftDashboard} />
      <div className='uk-width-expand@m'>
        <div className='dashboard-main-menu-container' data-uk-grid>
          <div className='uk-width-auto@m uk-width-1-1'>
            <p className='h1-dashboard uk-margin-medium-top'>My Dashboard</p>
          </div>
          <div className='uk-width-expand@l uk-width-1-1 dashboard-minus-margin-top'>
            <div className='uk-flex uk-flex-right@l uk-flex-left'>
              <nav className=''>
                <ul className='uk-subnav main-menu uk-margin-remove-bottom uk-flex-right'>
                  <li>
                    <button
                      type='submit'
                      onClick={handleExportCSV}
                      className='uk-button button-default-dashboard'
                    >
                      Export
                      <FontAwesomeIcon
                        icon={faDownload}
                        className='button-right-icon'
                      />
                    </button>
                  </li>
                  <li>
                    <button
                      type='submit'
                      onClick={handleLogout}
                      className='uk-button button-default-dashboard'
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className='main-datatable'>
          <DataTable
            columns={columns}
            data={tableData}
            pagination
            selectableRows
            striped
            noHeader
            dense
            customStyles={{
              rows: {
                style: {
                  minHeight: '75px',
                  marginBottom: '10px',
                },
              },
              headRow: {
                style: {
                  minHeight: '40px',
                },
              },
            }}
            paginationPerPage={10}
            paginationRowsPerPageOptions={[5, 10, 15, 20]}
          />
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
