import React, { useState, useEffect } from "react";
import Sidebar from "../Directive/Sidebar/Index";
import Header from "../Directive/Header/Index";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import { BASE_URL } from "../Constants/Index";
import { format } from "date-fns";
import toast, { Toaster } from 'react-hot-toast';
function Index() {
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [dataList, setDataList] = useState([]);
  const[deleteModel,setDeleteModel] =useState("");

 const handleDeleteModel =()=>{
  setDeleteModel(false);
 }

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
      .get(`${BASE_URL}/university/get_One_University/${categoryId}`)
      .then((response) => {
        setName(response.data.data.universityName);
        console.log(response.data.data.universityName);
      })
      .catch((error) => {
        console.error("API error:", error);
        // Handle the error (e.g., show an error message)
      });
  };
  const handleUpdateUniversity = () => {
    const requestBody = {
      universityName: name,
    };
    axios
      .patch(
        `${BASE_URL}/university/edit_University/${categoryId}`,
        requestBody
      )
      .then((response) => {
      
        if (response.data.status === false) {
        
          toast.error("Error");
        } else {
          setSuccessMsg(response.data.message);
          toast.success(" update Successfully")
            fetchAllUniversity();
            setName("");
            setEditModal(false);
        
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handleaDeleteUniversity = (categoryId) => {
    setDeleteModel(true);
    setCategoryId(categoryId);
  };
const deleteCategoryData =()=>{
  axios
      .patch(`${BASE_URL}/university/remove_University/${categoryId}`)
      .then((response) => {
        console.log("Delete API response:", response.data);
        fetchAllUniversity();
        setDeleteModel(false);
      })
      .catch((error) => {
        console.error("Delete API error:", error);
      });
}
  const toggle = () => {
    fetchCategories();
    setModal(!modal);
  };
  useEffect(() => {
    fetchAllUniversity();
  }, []);

  const fetchCategories = () => {
    axios
      .get(`${BASE_URL}/categories/get_All_category`)
      .then((response) => {
        setCategories(response.data.data.adminCategories);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const fetchAllUniversity = () => {
    axios
      .get(`${BASE_URL}/university/get_All_University`)
      .then((response) => {
        setUniversities(response.data.data.adminData);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const shouldDisplayRow = (data) => {
    if (!searchQuery) {
      return ""; // Show all rows if no search query is applied
    }
    const fieldsToFilter = [
      
      "universityName",
      "createdAt",
      "isActive",
    
    ];
    const shouldDisplay = fieldsToFilter.some((fieldName) => {
      const fieldValue = data[fieldName];
     
      return fieldValue.toString().toLowerCase().includes(searchQuery);
    });
    return shouldDisplay ? "" : "none";
  };
  const handleUniversity = () => {
    const requestBody = {
      universityName: name,
    };
    axios
      .post(`${BASE_URL}/university/add_university`, requestBody)
      .then((response) => {
     
        if (response.data.status === false) {
         toast.error("Error");
         } else {
         toast.success("successfully added");
            fetchAllUniversity();
            setName("");
            setModal(false);
         
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handelSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  
  };


  const handleActiveStatus = (categoryId) => {
    console.log(categoryId);
    axios
      .patch(`${BASE_URL}/university/active_University/${categoryId}`)
      .then((response) => {
        fetchAllUniversity();
        console.log("Delete API response:", response.data.data);
      })
      .catch((error) => {
        console.error("Delete API error:", error);
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
      <Toaster />
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
                      onChange={handelSearchQuery}
                      placeholder="search query"
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
                        + Add university
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
                      <tr>
                            <th
                              className="sorting sorting_asc"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              colSpan={1}
                              searchQuerySpan={1}
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
                               searchQuerySpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                              style={{ width: "271.525px" }}
                            >
                              Universities Categories Name
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              searchQuerySpan={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "123.15px" }}
                            >
                              Date Created{" "}
                            </th>
                            <th
                              // className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              searchQuerySpan={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "123.15px" }}
                            >
                              Action
                            </th>
                          </tr>
                          {/* end row */}
                        </thead>
                        <tbody>
                          {universities ? (
                            universities.map((category, index) => (
                              <tr className="odd" key={category._id}
                              style={{ display: shouldDisplayRow(category) }}>
                                <td className="sorting_1">{index + 1}</td>
                                <td>{category.universityName}</td>

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
                                  <div className="btn btn-outline-success editIcon">
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
                                    className="btn btn-outline-danger editIcon"
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
                 
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* end col */}
          </div>{" "}
        </div>
         <Modal isOpen={deleteModel} toggle={handleDeleteModel}>
  <ModalHeader>
   Delete Confirmation
  </ModalHeader>
  <ModalBody>
  Are you sure you want to delete 
  </ModalBody>
  <ModalFooter>
  <Button color="btn" onClick={handleDeleteModel}>
            Cancle
          </Button>
          <Button color="btn btn-danger" onClick={deleteCategoryData}>
            Delete
          </Button>
          </ModalFooter>
        </Modal>  
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Universities Category Name</ModalHeader>
       
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
            <Button color="btn" onClick={toggle}>
              Cancle
            </Button>
            <Button color="btn btn-success" onClick={handleUniversity}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>

        {/* edit model */}
        <Modal isOpen={editModal} toggle={EditToggleClose}>
          <ModalHeader toggle={EditToggleClose}>
            Edit Universities Name
          </ModalHeader>
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
            <Button color="btn" onClick={EditToggleClose}>
              Cancle
            </Button>
            <Button color="btn btn-success" onClick={handleUpdateUniversity}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default Index;
