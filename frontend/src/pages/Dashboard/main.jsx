import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faPlus,
  faMagnifyingGlass,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { saveAs } from "file-saver";
import apiEndpoints from "../../apiConfig";

const CustomPagination = ({ pagination, data }) => {
  if (!pagination || !pagination.paginationProps) {
    return null;
  }

  const { paginationProps } = pagination;

  return (
    <div className="datatable-pagination">
      {/* Rows per page selector */}
      <label>
        Rows per page:{" "}
        <select
          value={paginationProps.rowsPerPage}
          onChange={(e) =>
            paginationProps.onChangeRowsPerPage(Number(e.target.value))
          }
        >
          {[5, 10, 20, 50, 100].map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      </label>

      {/* Actual pagination controls */}
      <div>
        {paginationProps.rowsPerPage * paginationProps.page <
          paginationProps.rowsPerPage * paginationProps.rowsPerPage && (
          <button onClick={() => paginationProps.onNextPage()}>Next</button>
        )}{" "}
        {paginationProps.page > 0 && (
          <button onClick={() => paginationProps.onPreviousPage()}>
            Previous
          </button>
        )}{" "}
        <span>
          Page{" "}
          <strong>
            {paginationProps.page + 1} of{" "}
            {Math.ceil(
              (paginationProps.rowsPerPage * data.length) /
                paginationProps.rowsPerPage
            )}
          </strong>{" "}
        </span>
      </div>
    </div>
  );
};

const MainDashboard = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const tableRef = useRef(null);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(apiEndpoints.getDashboardLogout, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("erfolgreich ausgeloggt");
        setLoggedIn(false);
        localStorage.removeItem("token");
        navigate("/");
      } else {
        // Fehler beim Logout
        console.error("Logout fehlgeschlagen:", response.statusText);
      }
    } catch (error) {
      console.error("Fehler beim Logout:", error.message);
    }
  };

  const handleExportCSV = () => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".csv";
    const fileName = "data";

    const exportToCSV = () => {
      const blob = new Blob([tableToCSV()], { type: fileType });
      saveAs(blob, fileName + fileExtension);
    };

    const tableToCSV = () => {
      const header = columns.map((column) => column.name).join(",");
      const rows = tableData.map((row) =>
        columns.map((column) => row[column.selector]).join(",")
      );
      return [header, ...rows].join("\n");
    };

    exportToCSV();
  };

  const handleRowClick = (row) => {
    console.log("Row clicked:", row);
  };

  const columns = [
    {
      name: "Post Content",
      selector: "post_content",
      sortable: true,
      cell: (row) => (
        <div style={{ whiteSpace: "normal", wordWrap: "break-word" }}>
          {row.post_content.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      ),
    },
    { name: "Post Link", selector: "post_link", sortable: true },
    { name: "Post Image", selector: "post_image", sortable: true },
    { name: "User Prediction", selector: "user_prediction", sortable: true },
    { name: "Post Platform", selector: "post_platform", sortable: true },
    {
      name: "Classifier Response",
      selector: "classifier_response",
      sortable: true,
    },
  ];

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoints.getDashboard);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.error("data", data);
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
    <div
      className="dashboard-container"
      id="dashboard-container"
      data-uk-grid
    >
      <div className="uk-width-expand@m">
        <div
          className="dashboard-main-menu-container"
          data-uk-grid
        >
          <div className="uk-width-auto@m uk-width-1-1">
            <p className="h1-dashboard uk-margin-medium-top">My Dashboard</p>
          </div>
          <div className="uk-width-expand@l uk-width-1-1 dashboard-minus-margin-top">
            <div className="uk-flex uk-flex-right@l uk-flex-left">
              <nav className="">
                <ul className="uk-subnav main-menu uk-margin-remove-bottom uk-flex-right">
                  <li>
                    <button
                      onClick={handleExportCSV}
                      className="uk-button button-default-dashboard"
                    >
                      Export{" "}
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="button-right-icon"
                      />{" "}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="uk-button button-default-dashboard"
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="main-datatable">
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
                  minHeight: "75px",
                  marginBottom: "10px",
                },
              },
              headRow: {
                style: {
                  minHeight: "40px",
                },
              },
            }}
            paginationPerPage={10}
            paginationRowsPerPageOptions={[5, 10, 15, 20]}
            onRowClicked={handleRowClick}
          />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
