import React, { useState, useEffect ,useMemo } from "react";
import Sidebar from "../Directive/Sidebar/Index";
import Header from "../Directive/Header/Index";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { BASE_URL } from "../Constants/Index";
import axios from "axios";
import { format } from "date-fns";
import Select from 'react-select';
import toast, { Toaster } from 'react-hot-toast';
function Index() {
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategory, setSubCategories] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionId,setOptionId]= useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const[deleteModel,setDeleteModel] =useState(false);

  const handleDeleteModel =()=>{
   setDeleteModel(!deleteModel);
  }
  const handelSearchQuery = (e) => {
    setSearchQuery(e.target.value.toString());
  };
 

  const handleOnchangeName = (e) => {
    setName(e.target.value);
  };
  const handleEditCategory = (categoryId) => {
    setEditModal(true);
    setCategoryId(categoryId);
    editFetchData(categoryId);
  };
  const editFetchData =(categoryId)=>{
    axios
    .get(`${BASE_URL}/subcategory/get_One_SubCategory/${categoryId}`)
    .then((response) => {
      console.log(response.data.data);
      setSelectedCategory(response.data.data.subCategoryName);
      setName(response.data.data.subCategoryName);
    })
    .catch((error) => {
      console.error("API error:", error);
      // Handle the error (e.g., show an error message)
    });
  }
 
  const handleUpdateSubCategory = () => {
    const requestBody = {
      categoryName: selectedCategory,
      subCategoryName: name,
    };
    axios
      .patch(
        `${BASE_URL}/subcategory/edit_SubCategory/${categoryId}`, requestBody)
      .then((response) => {
      
        if (response.data.status === false) {
      toast.error("Error");
         
        } else {
         toast.success("Edit subcategory successfully")
           setSuccessMsg("");
            setEditModal(false);
            HandleSubCategories();
        
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handleaDeleteCategory = (categoryId) => {
    setCategoryId(categoryId)
    setDeleteModel(true);
   
  };
  const deleteCategoryData =()=>{
    axios
    .patch(`${BASE_URL}/subcategory/remove_SubCategory/${categoryId}`)
    .then((response) => {
      handleDeleteModel();
      HandleSubCategories();
    })
    .catch((error) => {
      console.error("Delete API error:", error);
    });
  }

  const EditToggle = () => {
    fetchCategories();
    setEditModal(!editModal);
  };
  const toggle = () => {
    fetchCategories();
    setSelectedOption("")
    setModal(!modal);
  };
  useEffect(() => {
    HandleSubCategories();
  }, []);

  const shouldDisplayRow = (data) => {
    if (!searchQuery) {
      return ""; // Show all rows if no search query is applied
    }
    const fieldsToFilter = [
      "updatedAt",
      "subCategoryName",
      "isActive",
    
    ];
    const shouldDisplay = fieldsToFilter.some((fieldName) => {
      const fieldValue = data[fieldName];
     
      return fieldValue.toString().toLowerCase().includes(searchQuery);
    });
    return shouldDisplay ? "" : "none";
  };
  const fetchCategories = () => {
    axios
      .get(`${BASE_URL}/categories/get_All_category`)
      .then((response) => {
  
        setCategories(response.data.data.userData);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const HandleSubCategories = () => {
    axios
      .get(`${BASE_URL}/subcategory/get_All_SubCategory`)
      .then((response) => {
        setSubCategories(response.data.data.adminData);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handleSelectOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setOptionId(selectedOption.value);
  };

  const categoryOptions = useMemo(
    () =>
      categories.map((category) => ({
        value: category._id,
        label: category.categoryName,
      })),
    [categories]
  );
  const handleSelectChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleSubmitSubCategory = () => {
    const requestBody = {
      categoryName: optionId,
      subCategoryName: name,
    };
    axios
      .post(`${BASE_URL}/subcategory/add_SubCategory`, requestBody)
      .then((response) => {
 
     
        if (response.data.status === false) {
          toast.error("Error");
   
      
        } else {
            toast.success("Success")
            setModal(false);
            setName("");
            setSelectedOption("")
            HandleSubCategories();
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handleActiveStatus = (categoryId) => {
    console.log(categoryId);
    axios
      .patch(`${BASE_URL}/subcategory/active_SubCategory/${categoryId}`)
      .then((response) => {
      
        HandleSubCategories();
      })
      .catch((error) => {
        console.error("Delete API error:", error);
      });
  };
  return (
    <div>
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
                          + Add Subcategory
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
                                searchQuerySpan={1}
                                aria-controls="file_export"
                                rowSpan={1}
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
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Position: activate to sort column ascending"
                                style={{ width: "271.525px" }}
                              >
                                SubCategory Name
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
                                Update Date
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                rowSpan={1}
                                colSpan={1}
                                searchQuerySpan={1}
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
                                searchQuerySpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {subCategory ? (
                              subCategory.map((category, index) => (
                                <tr className="odd" key={category._id}     
                                style={{ display: shouldDisplayRow(category) }}>
                                  <td className="sorting_1">{index + 1}</td>
                                  <td>{category.subCategoryName}</td>

                                  <td>
                                    {format(
                                      new Date(category.updatedAt),
                                      "dd-MM-yyyy"
                                    )}
                                  </td>
                                  <td>
                                    {category.isActive === true ? (
                                      <Button
                                        className="btn btn-success "
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
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Create Subcategory</ModalHeader>
         <ModalBody>
            <form className="needs-validation">
              <div className="row">
                <div className="col-md-12 mb-2 mb-md-0">
                  <label className="form-label" htmlFor="validationCustom01">
                    Course Category Name
                  </label>
                  <Select
        value={selectedOption}
        onChange={handleSelectOptionChange}
        options={categoryOptions}
        placeholder="Select Course Category"
        isSearchable={true} // Enable searchable option
        
      />
                </div>
                <div className="col-md-12 mb-2 mb-md-0">
                  <label className="form-label" htmlFor="validationCustom01">
                    Subcategory Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="SubCategory Name"
                    value={name}
                    onChange={(e) => handleOnchangeName(e)}
                  />
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="btn" onClick={toggle}>
              Cancle
            </Button>
            <Button color="btn btn-success" onClick={handleSubmitSubCategory}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>

        {/* edit model */}
        <Modal isOpen={editModal} toggle={EditToggle}>
          <ModalHeader toggle={EditToggle}>Edit Subcategory</ModalHeader>
       
          <ModalBody>
            <form className="needs-validation">
              <div className="row">
                <div className="col-md-12 mb-2 mb-md-0">
                  <label className="form-label" htmlFor="validationCustom01">
                    Course Category Name
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={handleSelectChange}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value="" disabled>
                      Select Course Category
                    </option>
                    {categories.length > 0 ? (
                      categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.categoryName}
                        </option>
                      ))
                    ) : (
                      // Render something else when categories.length is zero
                      <option value="" disabled>
                        No categories available
                      </option>
                    )}
                  </select>
                </div>
                <div className="col-md-12 mb-2 mb-md-0">
                  <label className="form-label" htmlFor="validationCustom01">
                    Subcategory Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="SubCategory Name"
                    value={name}
                    onChange={(e) => handleOnchangeName(e)}
                  />
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="btn" onClick={EditToggle}>
              Cancle
            </Button>
            <Button color="btn btn-success" onClick={handleUpdateSubCategory}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default Index;
