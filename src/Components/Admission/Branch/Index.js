import React, { useState, useEffect } from "react";
import Sidebar from "../../Directive/Sidebar/Index";
import Header from "../../Directive/Header/Index";
import { BASE_URL } from "../../Constants/Index";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import { format } from "date-fns";
import { Form, Label, Input } from "reactstrap";

function Index() {
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [barnchList, setBarnchList] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [dataList, setDataList] = useState([]);
  const [selectVisible, setSelectVisible] = useState([]);


  const shouldDisplayRow = (data) => {
    if (!searchQuery) {
      return ""; // Show all rows if no search query is applied
    }
    const fieldsToFilter = [
      "branchName",
      "createdAt",
      "isActive",
     
    ];
    const shouldDisplay = fieldsToFilter.some((fieldName) => {
      const fieldValue = data[fieldName];
    
      return fieldValue.toString().toLowerCase().includes(searchQuery);
    });
    return shouldDisplay ? "" : "none";
  };
  const EditToggleClose = () => {
    setEditModal(!editModal);
    setName("");
  };
  const handleOnchangeName = (e) => {
    setName(e.target.value);
  };
  const handleEditUniversity = (categoryId) => {
    setEditModal(true);
    setCategoryId(categoryId);
    axios
      .get(`${BASE_URL}/branch/get_One_Branch/${categoryId}`)
      .then((response) => {
        setName(response.data.data.branchName);
      })
      .catch((error) => {
        console.error("API error:", error);
        // Handle the error (e.g., show an error message)
      });
  };
  const handleUpdateUniversity = () => {
    const requestBody = {
      branchName: name,
    };
    axios
      .patch(`${BASE_URL}/branch/edit_Branch/${categoryId}`, requestBody)
      .then((response) => {
        fetchAllBranch();
        setName("");
        if (response.data.status === false) {
          setErrorMsg(response.data.message);
          setTimeout(() => {
            setErrorMsg("");
          }, 2000);
        } else {
          setSuccessMsg(response.data.message);
          setTimeout(() => {
            setSuccessMsg("");
            setEditModal(false);
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handleActiveStatus = (categoryId) => {
    console.log(categoryId);
    axios
      .patch(`${BASE_URL}/branch/active_Branch/${categoryId}`)
      .then((response) => {
        fetchAllBranch();
        setName("");
        if (response.data.status === false) {
          setErrorMsg(response.data.message);
          setTimeout(() => {
            setErrorMsg("");
          }, 2000);
        } else {
          setSuccessMsg(response.data.message);
          setTimeout(() => {
            setSuccessMsg("");
            setEditModal(false);
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handleaDeleteUniversity = (categoryId) => {
    console.log(categoryId);
    axios
      .patch(`${BASE_URL}/branch/remove_Branch/${categoryId}`)
      .then((response) => {
        console.log("Delete API response:", response.data);
        fetchAllBranch();
      })
      .catch((error) => {
        console.error("Delete API error:", error);
      });
  };

  const toggle = () => {
    fetchAllBranch();
    setModal(!modal);
  };

  useEffect(() => {
    fetchAllBranch();
  }, []);

  const fetchAllBranch = () => {
    axios
      .get(`${BASE_URL}/branch/get_All_Branch`)
      .then((response) => {
        console.log(response.data.data.adminbranch);
        setBarnchList(response.data.data.adminbranch);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  const handleBranchName = () => {
    const requestBody = {
      branchName: name,
    };
    axios
      .post(`${BASE_URL}/branch/add_Branch`, requestBody)
      .then((response) => {
        setName("");
        if (response.data.status === false) {
          setErrorMsg(response.data.message);
          setTimeout(() => {
            setErrorMsg("");
          }, 2000);
        } else {
          setSuccessMsg(response.data.message);
          setTimeout(() => {
            setSuccessMsg("");
            fetchAllBranch();
            setModal(false);
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handelSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLowerCase());

  };

  const handleSearch = () => {
    console.log("searchQuery", searchQuery);
    axios
      .get(`${BASE_URL}/branch/search_Branch`, {
        params: {
          branchName: searchQuery,
        },
      })
      .then((response) => {
        setBarnchList(response.data.data);
      })
      .catch((error) => {
        console.error("API error:", error);
        // Handle the error (e.g., show an error message)
      });
  };
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
          {/* start page title */}
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
                      <button className="btn" onClick={toggle}>
                        {" "}
                        + Create Branch{" "}
                      </button>
                    </li>
                    {/* <li><a href="#">Create leads</a></li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* end page title */}
          <div className="row" style={{ marginTop: "10px" }}>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <div
                      id="file_export_wrapper"
                      className="dataTables_wrapper"
                    >
                      <div className="dt-buttons">
                        {" "}
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
                        id="employeeData"
                        className="table border table-striped table-bordered display text-nowrap dataTable"
                        aria-describedby="file_export_info"
                      >
                        <thead>
                          {/* start row */}
                          <tr>
                            <th
                              className="sorting sorting_asc"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              searchQuery={1}
                              colSpan={1}
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                              style={{ width: "164.675px" }}
                            >
                              Serial No.
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              searchQuery={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                              style={{ width: "271.525px" }}
                            >
                              Branch Name
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              colSpan={1}
                              searchQuery={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "123.15px" }}
                            >
                              Date Created{" "}
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              colSpan={1}
                              searchQuery={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "123.15px" }}
                            >
                              Action
                            </th>
                          </tr>
                          {/* end row */}
                        </thead>
                        <tbody>
                          {barnchList.length > 0 ? (
                            barnchList.map((category, index) => (
                              <tr className="odd" key={category._id}
                              style={{ display: shouldDisplayRow(category) }}>
                                <td className="sorting_1">{index + 1}</td>
                                <td>{category.branchName}</td>

                                <td>
                                  {format(
                                    new Date(category.createdAt),
                                    "dd-MM-yyyy"
                                  )}
                                </td>
                                <td>
                                  {category.isActive === true ? (
                                    <Button
                                      className="btn btn-success"
                                      onClick={() =>
                                        handleActiveStatus(category._id)
                                      }
                                    >
                                      Active
                                    </Button>
                                  ) : (
                                    <Button
                                      className="btn btn-danger"
                                      onClick={() =>
                                        handleActiveStatus(category._id)
                                      }
                                    >
                                      Deactive
                                    </Button>
                                  )}
                                </td>
                                <td>
                                  <div className="btn btn-outline-success">
                                    <i
                                      className="fa fa-edit"
                                      onClick={() =>
                                        handleEditUniversity(category._id)
                                      }
                                    />
                                  </div>
                                  <div
                                    onClick={() =>
                                      handleaDeleteUniversity(category._id)
                                    }
                                    className="btn btn-outline-danger"
                                  >
                                    <i className="fa fa-trash" />
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            // Render something else when categories.length is zero
                            <div>No categories available</div>
                          )}
                        </tbody>
                      </table>
                      <div
                        className="dataTables_info"
                        id="file_export_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 31 to 40 of 57 entries
                      </div>
                      <div
                        className="dataTables_paginate paging_simple_numbers"
                        id="file_export_paginate"
                      >
                        <a
                          className="paginate_button previous"
                          aria-controls="file_export"
                          aria-role="link"
                          data-dt-idx="previous"
                          tabIndex={0}
                          id="file_export_previous"
                        >
                          Previous
                        </a>
                        <span>
                          <a
                            className="paginate_button "
                            aria-controls="file_export"
                            aria-role="link"
                            data-dt-idx={0}
                            tabIndex={0}
                          >
                            1
                          </a>
                          <a
                            className="paginate_button "
                            aria-controls="file_export"
                            aria-role="link"
                            data-dt-idx={1}
                            tabIndex={0}
                          >
                            2
                          </a>
                          <a
                            className="paginate_button "
                            aria-controls="file_export"
                            aria-role="link"
                            data-dt-idx={2}
                            tabIndex={0}
                          >
                            3
                          </a>
                          <a
                            className="paginate_button current"
                            aria-controls="file_export"
                            aria-role="link"
                            aria-current="page"
                            data-dt-idx={3}
                            tabIndex={0}
                          >
                            4
                          </a>
                          <a
                            className="paginate_button "
                            aria-controls="file_export"
                            aria-role="link"
                            data-dt-idx={4}
                            tabIndex={0}
                          >
                            5
                          </a>
                          <a
                            className="paginate_button "
                            aria-controls="file_export"
                            aria-role="link"
                            data-dt-idx={5}
                            tabIndex={0}
                          >
                            6
                          </a>
                        </span>
                        <a
                          className="paginate_button next"
                          aria-controls="file_export"
                          aria-role="link"
                          data-dt-idx="next"
                          tabIndex={0}
                          id="file_export_next"
                        >
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end col */}
          </div>{" "}
        </div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}></ModalHeader>
          {successMsg && <span className="text-success">{successMsg}</span>}
          {errorMsg && <span className="text-danger">{errorMsg}</span>}
          <ModalBody>
            <form className="needs-validation">
              <div className="row">
                <div className="col-md-12 mb-2 mb-md-0">
                  <Label className="form-Label" htmlFor="ShoworHide">
                    Branch Name
                  </Label>
                  <Input
                    type="text"
                    placeholder="branch name"
                    value={name}
                    onChange={handleOnchangeName}
                  />
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Cancle
            </Button>{" "}
            <Button color="secondary" onClick={handleBranchName}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>

        {/* edit model */}
        <Modal isOpen={editModal} toggle={EditToggleClose}>
          <ModalHeader toggle={EditToggleClose}>Edit Branch Name</ModalHeader>
          {successMsg && <span className="text-success">{successMsg}</span>}
          {errorMsg && <span className="text-danger">{errorMsg}</span>}
          <ModalBody>
            <form className="needs-validation">
              <div className="row">
                <div className="col-md-12 mb-2 mb-md-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Universities Category Name"
                    value={name}
                    onChange={handleOnchangeName}
                  />
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={EditToggleClose}>
              Cancle
            </Button>{" "}
            <Button color="secondary" onClick={handleUpdateUniversity}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default Index;
