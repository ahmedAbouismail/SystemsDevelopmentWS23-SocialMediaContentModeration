import React, { useState, useEffect } from 'react';
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
    /***** Hier DB einbinden ****/
  /*const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //TODO richtige URL fehlt 
        const response = await axios.get('http://localhost:8000/report/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  /**** Daten Vorbereiten ****/
  /*
  const columns = [
    { name: 'Category', selector: 'user_prediction', sortable: true },
    { name: 'Source', selector: 'post_platform', sortable: true },
    { name: 'Image', selector: 'post_image', sortable: true },
    { name: 'Link', selector: 'post_link', sortable: true },
    { name: 'Text', selector: 'post_content', sortable: true },
    { name: 'Classifier', selector: 'classifier_response', sortable: true },
    {
      name: 'Actions',
      cell: (row) => (
        <>
          <div>
            <a>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </a>
            <div id={row.id} data-uk-dropdown="mode:click; animation: uk-animation-slide-top-small; duration: 100">
              <ul className="uk-nav uk-dropdown-nav">
                <li><a onClick={() => handleEdit(row)}>Edit</a></li>
                <li><a onClick={() => handleDelete(row)}>Delete</a></li>
                <li><a onClick={() => handleDownload(row)}>Download</a></li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
  ];*/
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
                <div className="uk-width-expand">
                    <div className="dashboard-main-menu-container" data-uk-grid>
                        <div className='uk-width-auto'>
                            <nav className="">
                                {/* TODO: write functions */}
                                <ul className="uk-subnav dashboard-main-menu uk-margin-remove-bottom uk-visible@s">
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
                        <div className='uk-width-expand'>
                            <div className='uk-flex uk-flex-right'>
                                <nav className="">
                                    <ul className="uk-subnav main-menu uk-margin-remove-bottom uk-flex-right uk-visible@s">
                                        <li>
                                            <a href="#" className='uk-button button-default-dashboard'>Admin</a>
                                        </li>
                                        <li>
                                            <a href="#" className='uk-button button-default-dashboard'>Export <FontAwesomeIcon icon={faDownload} className="button-right-icon" /></a>
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
