import React, { useState, useEffect } from "react";
import Sidebar from "../../Directive/Sidebar/Index";
import Header from "../../Directive/Header/Index";
import { BASE_URL } from "../../Constants/Index";
import format from "date-fns/format";
import { useHistory } from 'react-router-dom';

import axios from "axios";
import { Button } from "reactstrap";


function Index() {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState("");
  const [partnerList, setPartnerList] = useState("");
 

  const handleEdit = (id) => {
    history.push(`/edit-lecture-report/${id}`);
   
  };
  const handleDelete =(id)=>{
    axios.patch( `${BASE_URL}/lectureReport/remove_LectureReport/${id}`)
 .then((response) => {
     console.error("API error:", response.data.data);
     HandlePartnerList();
   })
   .catch((error)=>{
    console(error)
   })
  }
  const toggleModal = () => {
    history.push(`/create-lecture-report`);

  };




  const shouldDisplayRow = (data) => {
    if (!searchQuery) {
      return ""; // Show all rows if no search query is applied
    }
    const fieldsToFilter = ["name", "course", "isActive"];
    const shouldDisplay = fieldsToFilter.some((fieldName) => {
      const fieldValue = data[fieldName];

      return fieldValue.toString().toLowerCase().includes(searchQuery);
    });
    return shouldDisplay ? "" : "none";
  };
 

  useEffect(() => {
 HandlePartnerList();
  }, []);

  const handelSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  
  };
  const HandlePartnerList = () => {
    axios
      .get(`${BASE_URL}/lectureReport/get_All_LectureReport`)
      .then((response) => {
        console.error("API error:", response.data.data);
        setPartnerList(response.data.data.adminData);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
const handleActiveStatus = (id) =>{
axios.patch(`${BASE_URL}/lectureReport/active_LectureReport/${id}`)
  .then((response)=>{
    HandlePartnerList();
    console.error("API error:", response.data.data);
  })
  .catch((error)=>{
    console(error)
  })
}
  return (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-theme="blue_theme"
      data-layout="vertical"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <Sidebar />
   
      <div className="body-wrapper">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h6 className="mb-3">
                  <div className="allleardsearch">
                    <input
                      type="search"
                      className="search"
                      value={searchQuery}
                      onChange={(e) => handelSearchQuery(e)}
                      placeholder="Enter search query"
                    />
                    <span>
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                </h6>
                <div className="page-title-right">
                  <ul className="breadcrumb">
                    <li>
                      <button className="btn" onClick={toggleModal}>
                        + Add new Lecture
                      </button>
                    </li>
                    {/* <li><a href="#">Create leads</a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <div
                      id="file_export_wrapper"
                      className="dataTables_wrapper"
                    >
                      <div className="dt-buttons">
                        <button
                          className="dt-button buttons-copy buttons-html5 btn btn-primary mr-1"
                          tabIndex={0}
                          aria-controls="file_export"
                        >
                          <span>Copy</span>
                        </button>{" "}
                        <button
                          className="dt-button buttons-csv buttons-html5 btn btn-primary mr-1"
                          tabIndex={0}
                          aria-controls="file_export"
                        >
                          <span>CSV</span>
                        </button>{" "}
                        <button
                          className="dt-button buttons-excel buttons-html5 btn btn-primary mr-1"
                          tabIndex={0}
                          aria-controls="file_export"
                        >
                          <span>Excel</span>
                        </button>{" "}
                        <button
                          className="dt-button buttons-pdf buttons-html5 btn btn-primary mr-1"
                          tabIndex={0}
                          aria-controls="file_export"
                        >
                          <span>PDF</span>
                        </button>{" "}
                        <button
                          className="dt-button buttons-print btn btn-primary mr-1"
                          tabIndex={0}
                          aria-controls="file_export"
                        >
                          <span>Print</span>
                        </button>{" "}
                      </div>
                      <table
                        id="file_export"
                        className="table border table-striped table-bordered display text-nowrap dataTable"
                        aria-describedby="file_export_info"
                      >
                        <thead>
                          {/* start row */}
                          <tr>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "123.15px" }}
                            >
                              Serial No
                            </th>
                            <th
                              className="sorting sorting_asc"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              colSpan={1}
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                              style={{ width: "164.675px" }}
                            >
                              Main Course
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                              style={{ width: "271.525px" }}
                            >
                              Email
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "123.15px" }}
                            >
                              Detail
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "123.15px" }}
                            >
                              Status
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "123.15px" }}
                            >
                              createdAt
                            </th>
                          </tr>
                          {/* end row */}
                        </thead>
                        <tbody>
                          {partnerList &&
                            partnerList.map((data, index) => (
                              <tr
                                className="odd"
                                key={data._id}
                                style={{ display: shouldDisplayRow(data) }}
                              >
                                <td>{index + 1}</td>
                                <td>
                                  {data.courseName}
                                  <div className="iconset">
                                    <i
                                      className="fa fa-edit"
                                      onClick={() => handleEdit(data._id)}
                                      style={{
                                        color: "#13DEB9",
                                        marginRight: "10px",
                                      }}
                                    ></i>
                                    <i
                                      className="fa fa-trash"
                                      onClick={() => handleDelete(data._id)}
                                      // onClick={handleDelete(data._id)}
                                      style={{ color: "#FA896B" }}
                                    />
                                  </div>
                                </td>
                                <td>{data.email}</td>

                                <td>
                                  {data.lecture.map((list, i) => (
                                    <div key={i}>
                                      <span>{list.detail}</span>
                                    </div>
                                  ))}
                                </td>
                                <td>
                                  {format(
                                    new Date(data.createdAt),
                                    "dd-MM-yyyy"
                                  )}
                                </td>
                                <td>
                                  {data.isActive === true ? (
                                    <Button className="btn btn-success"
                                     onClick={()=>handleActiveStatus(data._id)}>
                                     Active
                                    </Button>
                                  ) : (
                                    <Button className="btn btn-danger"
                                      onClick={()=>handleActiveStatus(data._id)}>
                                      Deactive
                                    </Button>
                                  )}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  className="dataTables_info"
                  id="file_export_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing 31 to 40 of 57 entries
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  );
}

export default Index;
