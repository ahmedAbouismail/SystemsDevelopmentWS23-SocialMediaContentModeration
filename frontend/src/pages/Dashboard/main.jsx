import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus, faMagnifyingGlass, faDownload } from '@fortawesome/free-solid-svg-icons';


const CustomPagination = ({ pagination, data }) => {
    if (!pagination || !pagination.paginationProps) {
      return null;
    }
  
    const { paginationProps } = pagination;
  
    return (
      <div className='datatable-pagination'>
        {/* Rows per page selector */}
        <label>
          Rows per page:{' '}
          <select
            value={paginationProps.rowsPerPage}
            onChange={(e) => paginationProps.onChangeRowsPerPage(Number(e.target.value))}
          >
            {[5, 10, 20, 50, 100].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
  
        {/* Actual pagination controls */}
        <div>
          {paginationProps.rowsPerPage * paginationProps.page < paginationProps.rowsPerPage * paginationProps.rowsPerPage && (
            <button onClick={() => paginationProps.onNextPage()}>Next</button>
          )}
          {' '}
          {paginationProps.page > 0 && <button onClick={() => paginationProps.onPreviousPage()}>Previous</button>}
          {' '}
          <span>
            Page{' '}
            <strong>
              {paginationProps.page + 1} of {Math.ceil(paginationProps.rowsPerPage * data.length / paginationProps.rowsPerPage)}
            </strong>{' '}
          </span>
        </div>
      </div>
    );
  };

const MainDashboard = () => {
  
  const [isLoggedIn, setLoggedIn] = useState(true); 
  const navigate = useNavigate();
  const handleLogout = async() => {
    try {
      const response = await fetch('http://localhost:8000/dashboard/logout', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },       
      });

      if (response.ok) {
        console.log('erfolgreich ausgeloggt')
        setLoggedIn(false);
        navigate('/login');
      } else {
        // Fehler beim Logout
        console.error('Logout fehlgeschlagen:', response.statusText);
      }
    } catch (error) {
      console.error('Fehler beim Logout:', error.message);
    }
  };
  /* Dummy daten löschen und in datatable anpassen */
  const columns = [
    { name: 'Name', selector: 'name', sortable: true },
    { name: 'Category', selector: 'category', sortable: true },
    { name: 'Source', selector: 'source', sortable: true },
    { name: 'Date', selector: 'date', sortable: true },
    { name: 'Text', selector: 'text', sortable: true },
    { name: 'Link', selector: 'link', sortable: true },
    {
        name: 'Actions',
        cell: (row) => (
          <>
            <div>
              <a>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </a>
              <div id={row.id} data-uk-dropdown="mode:click; animation: uk-animation-slide-top-small; duration: 100">
                <ul className="uk-nav uk-dropdown-nav dashboard-dropdow-menu">
                  <li><a onClick={() => handleEdit(row)}>Edit</a></li>
                  <li><a onClick={() => handleDelete(row)}>Delete</a></li>
                  <li><a onClick={() => handleDownload(row)}>Download</a></li>
                </ul>
              </div>
            </div>
          </>
        ),
      },
  ];
  
  const data = [
    { name: 'John Doe', category: 'xenophobic', source: 'Instagram', date: '09/12/2023', text: 'EXAMPLE', link: 'https:example.com' },
    { name: 'John Doe', category: 'xenophobic', source: 'Instagram', date: '09/12/2023', text: 'EXAMPLE', link: 'https:example.com' },
    { name: 'John Doe', category: 'xenophobic', source: 'Instagram', date: '09/12/2023', text: 'EXAMPLE', link: 'https:example.com' },
    { name: 'John Doe', category: 'xenophobic', source: 'Instagram', date: '09/12/2023', text: 'EXAMPLE', link: 'https:example.com' },
    { name: 'John Doe', category: 'xenophobic', source: 'Instagram', date: '09/12/2023', text: 'EXAMPLE', link: 'https:example.com' },
    { name: 'John Doe', category: 'xenophobic', source: 'Instagram', date: '09/12/2023', text: 'EXAMPLE', link: 'https:example.com' },
  
  
  ];
  /* Options for each data of the dataTable */
  const handleEdit = (row) => {
    console.log('Edit', row);
    // TODO
  };

  const handleDelete = (row) => {
    console.log('Delete', row);
    // TODO
  };

  const handleDownload = (row) => {
    console.log('Download', row);
    // TODO
  };
 
  return (
            <div className="" id="dashboard-container" data-uk-grid>
                <div className="uk-width-expand@m">
                    <div className="dashboard-main-menu-container" data-uk-grid>
                        <div className='uk-width-auto@m uk-width-1-1'>
                            <nav className="">
                                {/* TODO: write functions */}
                                <ul className="uk-subnav dashboard-main-menu uk-margin-remove-bottom">
                                    <li>
                                        <p className='h1-dashboard'>My Dashboard</p>
                                    </li>
                                    <li>
                                        <a href="#" className='uk-button button-primary-dashboard'>Add New Entry <FontAwesomeIcon icon={faPlus}  className="button-right-icon"/></a>
                                    </li>
                                    <li>
                                        <a href="#" className='uk-button button-default-dashboard'> <FontAwesomeIcon icon={faMagnifyingGlass} className="button-left-icon" /> Search</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='uk-width-expand@l uk-width-1-1 dashboard-minus-margin-top'>
                            <div className='uk-flex uk-flex-right@l uk-flex-left'>
                                <nav className="">
                                    <ul className="uk-subnav main-menu uk-margin-remove-bottom uk-flex-right">
                                        <li>
                                            <a href="#" className='uk-button button-default-dashboard'>Export <FontAwesomeIcon icon={faDownload} className="button-right-icon" /></a>
                                        </li>
                                        <li>
                                          <button onClick={handleLogout} className='uk-button button-default-dashboard'>Log out</button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className='main-datatable'>

                        <DataTable
                            columns={columns}
                            data={data}
                            pagination
                            selectableRows
                            striped
                            //paginationComponent={(props) => <CustomPagination {...props} data={data} />}
                            //paginationPerPage={25}
                        />

                    </div>
                </div>
            </div>


        
  );
}

export default MainDashboard;
