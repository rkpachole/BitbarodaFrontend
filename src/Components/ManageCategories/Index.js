import React, { useState, useEffect,useMemo  } from "react";
import Sidebar from "../Directive/Sidebar/Index";
import Header from "../../Components/Directive/Header/Index";
import { Link } from "react-router-dom";
import "../../assets/css/managecat.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import { BASE_URL } from "../Constants/Index";
import { format } from "date-fns";
import toast, { Toaster } from 'react-hot-toast';

function Index({ history }) {
  // const { format } = require("date-fns");
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState("");
 const [searchQuery, setSearchQuery] = useState("");
 const[deleteModel,setDeleteModel] =useState(false);

 const handleDeleteModel =()=>{
  setDeleteModel(false);
 }
 const handelSearchQuery = (e) => {
  setSearchQuery(e.target.value.toLowerCase());
};
  
const shouldDisplayRow = useMemo(() => {
  if (!searchQuery) {
    return () => ""; // Return a function that shows all rows if no search query is applied
  }

  return (data) => {
    const fieldsToFilter = [
      "categoryName",
      "updatedAt",
      "isActive",
    ];
    const shouldDisplay = fieldsToFilter.some((fieldName) => {
      const fieldValue = data[fieldName];
      return fieldValue.toString().toLowerCase().includes(searchQuery);
    });
    return shouldDisplay ? "" : "none";
  };
}, [searchQuery]);

  const toggle = () => {
    if (modal) {
      setSuccessMsg("");
      setName("");
    }
    setModal(!modal);
  };
  const EditToggle = () => {
    setEditModal(!editModal);
  };
  const handleUpdateCategory = () => {
    const requestBody = {
      categoryName: categoryName,
    };
    axios
      .patch(`${BASE_URL}/categories/edit_Category/${categoryId}`, requestBody)
      .then((response) => {
        fetchCategories();
        if (response.data.status === false) {
          toast.error('Error');
         } else {
          toast.success('Update Successfuly!');
          EditToggle();
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handleSubmitCategory = () => {
    const requestBody = {
      categoryName: name,
    };
    axios
      .post(`${BASE_URL}/categories/add_category`, requestBody)
      .then((response) => {
        setName("");
         if (response.data.status === false) {
          toast.error('Error');
        } else {
          toast.success('category add Successfully');
          fetchCategories();
            setModal(false);
        
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios
      .get(`${BASE_URL}/categories/get_All_category`)
      .then((response) => {
        console.log("API response:", response.data.data.adminData);
        // Update the state with the fetched data
        setCategories(response.data.data.adminData);
      })
      .catch((error) => {
        console.error("API error:", error);
        // Handle the error (e.g., show an error message)
      });
  };

  const handleEditCategory = (categoryId) => {
    setEditModal(true);
    setCategoryId(categoryId);
    axios
      .get(`${BASE_URL}/categories/get_One_category/${categoryId}`)
      .then((response) => {
        setCategoryName(response.data.data.categoryName);
      })
      .catch((error) => {
        console.error("API error:", error);
        // Handle the error (e.g., show an error message)
      });
  };

  const handleaDeleteCategory = (categoryId) => {
    setCategoryId(categoryId)
    setDeleteModel(true);

   
  };
  const deleteCategoryData =()=>{
    axios
    .patch(`${BASE_URL}/categories/remove_Category/${categoryId}`)
    .then((response) => {
      console.log("Delete API response:", response.data);
      fetchCategories();
      handleDeleteModel();
    })
    .catch((error) => {
      console.error("Delete API error:", error);
    });
  }
  const handleActiveStatus = (categoryId) => {
    console.log(categoryId);
    axios
      .patch(`${BASE_URL}/categories/active_Category/${categoryId}`)
      .then((response) => {
        console.log("Delete API response:", response.data.data);
        fetchCategories();
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
      <Toaster />
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
                        + Add    Category
                      </button>
                    </li>
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
                              searchqueryspan={1}
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                              style={{ width: "164.675px" }}
                            >
                              Serial No.
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              searchqueryspan={1}
                              aria-controls="file_export"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                              style={{ width: "271.525px" }}
                            >
                              Category Name
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              searchqueryspan={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "123.15px" }}
                            >
                              Update Date
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                               searchqueryspan={1}
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
                              searchqueryspan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "123.15px" }}
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories ? (
                            categories.map((category, index) => (
                              <tr className="odd" key={category._id}
                              style={{ display: shouldDisplayRow(category) }}>
                                <td className="sorting_1">{index + 1}</td>
                                <td>{category.categoryName}</td>

                                <td>
                                  {format(
                                    new Date(category.updatedAt),
                                    "dd-MM-yyyy"
                                  )}
                                </td>
                                <td>
                                  {category.isActive === true ? (
                                    <Button
                                      className="btn btn-success editIcon"
                                      onClick={() =>
                                        handleActiveStatus(category._id)
                                      }
                                    >
                                      Active
                                    </Button>
                                  ) : (
                                    <Button
                                      className="btn btn-danger editIcon"
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
                                        handleEditCategory(category._id)
                                      }
                                    />
                                  </div>
                                  <div
                                    onClick={() =>
                                      handleaDeleteCategory(category._id)
                                    }
                                    className="btn btn-outline-danger editIcon"
                                  >
                                    <i className="fa fa-trash" />
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <div>
                              <span>No Data</span>
                            </div>
                          )}
                        </tbody>
                      </table>
                      
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* delet Model */}
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
      {/* model */}

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Category Name</ModalHeader>
       
        <ModalBody>
          <form className="needs-validation">
            <div className="row">
              <div className="col-md-12 mb-2 mb-md-0">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Category name"
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="btn" onClick={toggle}>
            Cancle
          </Button>{" "}
          <Button color="btn btn-success" onClick={handleSubmitCategory}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
      {/* edit model */}
      <Modal isOpen={editModal} toggle={EditToggle}>
        <ModalHeader toggle={EditToggle}>Edit Category Name</ModalHeader>
  
        <ModalBody>
          <form className="needs-validation">
            <div className="row">
              <div className="col-md-12 mb-2 mb-md-0">
                <input
                  value={categoryName ? categoryName : ""}
                  onChange={(e) => setCategoryName(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Category name"
                />
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="btn" onClick={EditToggle}>
            Cancle
          </Button>{" "}
          <Button color="btn btn-success" onClick={handleUpdateCategory}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Index;
