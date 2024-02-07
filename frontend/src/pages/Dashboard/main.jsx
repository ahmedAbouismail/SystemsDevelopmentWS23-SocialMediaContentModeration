import React, { useState, useEffect } from 'react';
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
  const navigate = useNavigate();

  const renderPostContentCell = (row) => (
    <div style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
      {row.post_content.split('\n').map((line, index) => {
        const uniqueKey = `${row.index}-${index}`;
        return (
          <React.Fragment key={uniqueKey}>
            {line}
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );

  const columns = [
    {
      name: 'Post Content',
      selector: (row) => renderPostContentCell(row),
      cell: (row) => renderPostContentCell(row),
    },
    {
      name: 'Post Link',
      selector: (row) => row.post_link,
    },
    {
      name: 'Post Image',
      selector: (row) => row.post_image,
    },
    {
      name: 'User Prediction',
      selector: (row) => row.user_prediction,
    },
    {
      name: 'Post Platform',
      selector: (row) => row.post_platform,
    },
    {
      name: 'Classifier Response',
      selector: (row) => row.classifier_response,
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

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoints.getDashboard);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTableData(data);
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
            columns={columns}
            data={tableData}
            pagination
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
