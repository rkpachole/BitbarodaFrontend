
import React, { useState, useEffect } from "react";
import Sidebar from "../Directive/Sidebar/Index";
import Header from "../Directive/Header/Index";
import { BASE_URL } from "../Constants/Index";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import pdf from "../../assets/Images/pdf.png";
import excel from "../../assets/Images/excel.png";
import printer from "../../assets/Images/printer.png";
import { format } from "date-fns";
import { Link } from "react-router-dom";

import axios from "axios";

function Index() {
  const [modal, setModel] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [pastDesignation, setPastDesignation] = useState("");
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [image, setFileName] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [learningPartnerList, setLearningPartnerList] = useState([]);

  const handleDesignation = (event) => {
    setDesignation(event.target.value);
  };
  const handlePastDesignation = (event) => {
    setPastDesignation(event.target.value);
  };
  const handleOnchangeName = (event) => {
    setName(event.target.value);
  };
  const handelSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  useEffect(() => {
    fetchDataList();
    fetchList();
  }, []);

  const handleSubmitCategory = () => {
    const selectedCourseObject = courses.find(
      (course) => course._id === selectedCourse
    );
    if (selectedCourseObject) {
      const dataToSend = [
        {
          courseName: selectedCourseObject.courseName,
          courseId: selectedCourseObject._id,
        },
      ];

      const requestBody = {
        Name: name,
        logo: image,
        course: dataToSend,
      };

      axios
        .post(`${BASE_URL}/learningPartnerList/add_learningPartnerList`, requestBody)
        .then((response) => {
          // console.log("response",response.data);
          setName("");
          setDesignation("");
          setPastDesignation("");
          setSelectedCourse("");
          if (response.data.status === false) {
            setErrorMsg(response.data.message);
            setTimeout(() => {
              setErrorMsg("");
            }, 2000);
          } else {
            setSuccessMsg(response.data.message);
            setTimeout(() => {
              setSuccessMsg("");
              setModel(false);
            }, 2000);
          }
        })
        .catch((error) => {
          console.error("API error:", error);
        });
    }
  };
  const fetchDataList = () => {
    axios
      .get(`${BASE_URL}/course/get_All_Course`)
      .then((response) => {
        setCourses(response.data.data.adminCourses);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
    console.log(event.target.value);
  };
  const handleOpenModel = () => {
    setModel(!modal);
  };

  const handleOnFileChange = (e) => {
    const file = e.target.files[0];
    handleFormSubmit(file);

    if (file) {
      const fileReader = new FileReader();

      fileReader.onloadend = () => {
        setPreviewImage(fileReader.result);
      };

      fileReader.readAsDataURL(file);
    }
  };
  const handleFormSubmit = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(`${BASE_URL}/course/add_Course_file`, formData)

      .then((response) => {
        setFileName(response.data.data);
        console.log(response.data.data);
        if (response.data.status === false) {
          setErrorMsg(response.data.message);
          setTimeout(() => {
            setErrorMsg("");
          }, 1000);
        } else {
          setSuccessMsg(response.data.message);
          setTimeout(() => {
            setSuccessMsg("");
          }, 1000);
        }
        setSuccessMsg(response.data.message);
        setTimeout(() => {
          setSuccessMsg("");
        }, 1000);
      })
      .catch((error) => {
        // Handle error
        console.error("Error uploading PDF:", error);
      });
  };
  const fetchList = () => {
    axios
      .get(`${BASE_URL}/learningPartner/get_All_LearningPartner`)
      .then((response) => {
        console.log(response.data.data);
        setLearningPartnerList(response.data.data.adminlearningPartner);
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
      "name",
      "email",
      "course",
      "isActive"
     
    ];
    const shouldDisplay = fieldsToFilter.some((fieldName) => {
      const fieldValue = data[fieldName];
      if (Array.isArray(fieldValue)) {
        if (fieldName === "course" ) {
          return fieldValue.some((subCat) =>
            subCat.courseName.toLowerCase().includes(searchQuery)
          );
        } else {
          return fieldValue.some((value) =>
            value.toString().toLowerCase().includes(searchQuery)
          );
        }
      }
      return fieldValue.toString().toLowerCase().includes(searchQuery);
    });
    return shouldDisplay ? "" : "none";
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
                      <button className="btn" onClick={handleOpenModel}>
                       + Add Learning partner
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
                  <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0">Learning Partner</h4>
                    <div className="page-title-right">
                      <ul className="breadcrumb">
                        <li>
                          <div className="text-end">
                            <img src={pdf} alt=""></img>
                            <img src={excel} alt=""></img>
                            <img src={printer} alt=""></img>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <div
                      id="file_export_wrapper"
                      className="dataTables_wrapper"
                    >
                      <table
                        id="employeeData"
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
                              searchQuery={1}
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
                              searchQuery={1}
                              colSpan={1}
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                              style={{ width: "164.675px" }}
                            >
                              Partner Name
                            </th>

                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              colSpan={1}
                              searchQuery={1}
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
                              searchQuery={1}
                              aria-label="Position: activate to sort column ascending"
                              style={{ width: "271.525px" }}
                            >
                          Logo
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              searchQuery={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "123.15px" }}
                            >
                              Course
                            </th>
                           
                         
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              searchQuery={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "123.15px" }}
                            >
                              Status
                            </th>
                          </tr>
                          {/* end row */}
                        </thead>
                        <tbody>
                          {learningPartnerList &&
                            learningPartnerList.map((data, index) => (
                              <tr className="odd" key={data._id}
                              style={{ display: shouldDisplayRow(data) }}>
                                <td>{index + 1}</td>
                                <td>
                                  {data.name ? data.name : ""}
                                  <div className="iconset">
                                    <FontAwesomeIcon
                                      icon={faEye}
                                      style={{
                                        color: "#13DEB9",
                                        marginRight: "10px",
                                      }}
                                    />
                                    <i
                                      className="fa fa-edit"
                                      style={{
                                        color: "#13DEB9",
                                        marginRight: "10px",
                                      }}
                                    ></i>
                                    <i
                                      className="fa fa-trash"
                                      style={{ color: "#FA896B" }}
                                    />
                                  </div>
                                </td>
                                <td>{data.email}</td>
                               
                                <td>
                                  {data.course.map((list, i) => (
                                    <div key={i}>
                                      <span>{list.courseName}</span>
                                    </div>
                                  ))}
                                </td>
                                {/* <td>
                                {format(
                                      new Date(data.createdAt),
                                      "dd-MM-yyyy"
                                    )}
                                 </td> */}
                                <td>{data.logo}</td>
                                <td>{data.isActive === true ? <button className="btn btn-success">True</button>:<button className="btn btn-danger">True</button>}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
           
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={modal} toggle={handleOpenModel}>
          <ModalHeader toggle={handleOpenModel}>Create Learning partner</ModalHeader>
          {successMsg && <span className="text-success">{successMsg}</span>}
          {errorMsg && <span className="text-danger">{errorMsg}</span>}
          <ModalBody>
            <form className="needs-validation">
              <div className="row">
                <div className="col-md-12 mb-2 mb-md-0">
                  <label className="form-label">Learning Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="partner Name"
                    value={name}
                    onChange={(e) => handleOnchangeName(e)}
                  />
                </div>
                <div className="col-md-12 mb-2 mb-md-0">
                  <Label className="form-label" htmlFor="validationCustom01">
                    Logo
                  </Label>

                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleOnFileChange}
                  />
                  {successMsg && (
                    <span className="text-success">{successMsg}</span>
                  )}
                  {errorMsg && <span className="text-danger">{errorMsg}</span>}
                  {previewImage && (
                    <div>
                      <h3>Preview Image</h3>
                      <img
                        src={previewImage}
                        alt="Preview"
                        style={{
                          width: "200px",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="col-md-12 mb-2 mb-md-0">
                  <label className="form-label">Course</label>

                  <select
                    value={selectedCourse}
                    onChange={handleCourseChange}
                    className="form-select"
                  >
                    <option value="">Select Course</option>
                    {courses &&
                      courses.map((course) => (
                        <option key={course._id} value={course._id}>
                          {course.courseName}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleOpenModel}>
              Cancle
            </Button>{" "}
            <Button color="secondary" onClick={handleSubmitCategory}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
}

export default Index;
