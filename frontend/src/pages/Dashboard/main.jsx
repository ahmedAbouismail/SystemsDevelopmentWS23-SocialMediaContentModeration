import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { saveAs } from 'file-saver';
import apiEndpoints from '../../apiConfig';

function MainDashboard() {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const tableRef = useRef(null);
  const navigate = useNavigate();

  const renderPostContentCell = (row) => (
    <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
      {row.post_content.split('\n').map((line) => (
        <React.Fragment key={row.index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );

  const columns = [
    {
      name: 'Post Content',
      selector: 'post_content',
      sortable: true,
      cell: renderPostContentCell,
    },
    { name: 'Post Link', selector: 'post_link', sortable: true },
    { name: 'Post Image', selector: 'post_image', sortable: true },
    { name: 'User Prediction', selector: 'user_prediction', sortable: true },
    { name: 'Post Platform', selector: 'post_platform', sortable: true },
    {
      name: 'Classifier Response',
      selector: 'classifier_response',
      sortable: true,
    },
  ];

  const handleLogout = async () => {
    try {
      const response = await fetch(apiEndpoints.getDashboardLogout, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setLoggedIn(false);
        localStorage.removeItem('token');
        navigate('/');
      } else {
        // Fehler beim Logout
        console.error('Logout fehlgeschlagen:', response.statusText);
      }
    } catch (error) {
      console.error('Fehler beim Logout:', error.message);
    }
  };

  const handleExportCSV = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.csv';
    const fileName = 'data';
    const tableToCSV = () => {
      const header = columns.map((column) => column.name).join(',');
      const rows = tableData.map((row) => columns.map((column) => row[column.selector]).join(','));
      return [header, ...rows].join('\n');
    };

    const exportToCSV = () => {
      const blob = new Blob([tableToCSV()], { type: fileType });
      saveAs(blob, fileName + fileExtension);
    };

    exportToCSV();
  };

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
      console.error('Fehler beim holen vom Bild');
    }
  }

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoints.getDashboard);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const updatedData = data.map((item) => ({
          ...item,
          post_image: item.post_image !== 'NoImage' ? <button type='button' onClick={() => { handleGetImage(item.post_image); }}>Download Image</button> : ' ',
        }));
        console.error('data', data);
        setTableData(updatedData);
        setLoading(false);
      } catch (error) {
        // Handle errors
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  if (loading) {
    return <p>Loading...</p>; // You can add a loading spinner or message here
  }

  return (
    <div className='dashboard-container' id='dashboard-container' data-uk-grid>
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
            ref={tableRef}
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
