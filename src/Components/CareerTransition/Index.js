import React, { useState, useEffect } from "react";
import Sidebar from "../Directive/Sidebar/Index";
import Header from "../Directive/Header/Index";
import toast,{Toaster} from "react-hot-toast";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from "reactstrap";
import { BASE_URL } from "../Constants/Index";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import pdf from "../../assets/Images/pdf.png";
import excel from "../../assets/Images/excel.png";
import printer from "../../assets/Images/printer.png";
import { format } from "date-fns";
import { Link } from "react-router-dom";


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
  const [searchquery, setsearchquery] = useState("");
  const [careerList, setCareerList] = useState([]);
 const [editModel, setEditModal]= useState(false);
 const [id, setId] = useState("");
 const[deleteModel,setDeleteModel] =useState(false);

  const handleDeleteModel =()=>{
   setDeleteModel(!deleteModel);
  }
 const handleEditModel =()=>{
  setEditModal(!editModel);
 }

 const EditApi =(id)=>{
  setId(id)
  axios.get(`${BASE_URL}/careerTransitions/get_One_careerTransitions/${id}`)
  .then((response)=>{
    setDesignation(response.data.data.Dessignation)
    setName(response.data.data.Name)
    setFileName(response.data.data.companyLogo)
// console.log("response.data.data.course.courseName",response.data.data.course.map(item=>item.courseName))
    setSelectedCourse(response.data.data.course.courseName)
     setPastDesignation(response.data.data.pastDesignatiion)
  })
  .catch((err)=>{
    console.log(err)
  })
  setEditModal(true);
  
 }
 const handlUpdateCategory =()=>{
  const selectedCourseObject = courses.find(
    (course) => course._id === selectedCourse
  );
  console.log(selectedCourseObject)
  if (selectedCourseObject) {
    const dataToSend =  {
        courseName: selectedCourseObject.courseName,
        courseId: selectedCourseObject._id, }
    

  const requestBody = {
    Name: name,
    pastDesignatiion: pastDesignation,
    companyLogo: image,
    Dessignation: designation,
    course: dataToSend,
  };
  axios.patch(`${BASE_URL}/careerTransitions/edit_CareerTransitions/${id}`,requestBody)
  .then((response)=>{
   if(response.data.status === false){
    toast.error("Error")
   }else{
    toast.success("Success");
    fetchList();
    setEditModal(false);
    setName("");
    setDesignation("");
    setPastDesignation("");
    setFileName(null);
    setSelectedCourse("");
   }

  })
  .catch((err)=>{
    console.log(err)
  })
}
 }
const DeleteApi =()=>{
  setDeleteModel(true);
}
 const handleDeleteCategory =()=>{
  axios.get(`${BASE_URL}/careerTransitions/remove_CareerTransitions/${id}`)
  .then((response)=>{
    console.log(response)
   toast.success("delete successfully")
    fetchList();
    setDeleteModel(false);
  })
  .catch((err)=>{
    console.log(err)
  })
 }
  const handelsearchquery = (e) => {
    setsearchquery(e.target.value.toLowerCase());
  };
  const handleDesignation = (event) => {
    setDesignation(event.target.value);
  };
  const handlePastDesignation = (event) => {
    setPastDesignation(event.target.value);
  };
  const handleOnchangeName = (event) => {
    setName(event.target.value);
  };

  const fetchList = () => {
    axios
      .get(`${BASE_URL}/careerTransitions/get_All_careerTransitions`)
      .then((response) => {
        console.log(response.data.data);
        setCareerList(response.data.data.admincareerTransitions);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
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
      const dataToSend = 
        {
          courseName: selectedCourseObject.courseName,
          courseId: selectedCourseObject._id,
        }
    

      const requestBody = {
        Name: name,
        pastDesignatiion: pastDesignation,
        companyLogo: image,
        Dessignation: designation,
        course: dataToSend,
      };

      axios.post(`${BASE_URL}/careerTransitions/add_CareerTransitions`, requestBody)
        .then((response) => {
         if (response.data.status === false) {
          toast.error(" Error");
          } else {
        
             toast.success("Success");
             fetchList();
              setModel(false);
              setName("");
              setDesignation("");
              setPastDesignation("");
              setSelectedCourse("");
           
          }
        })
        .catch((error) => {
          console.error("API error:", error);
        });
    }else{
      toast.error("Enter All Fields");
    }
  };
  const fetchDataList = () => {
    axios
      .get(`${BASE_URL}/course/get_All_Course`)
      .then((response) => {
        console.log(response.data.data.adminCourses);
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
  const shouldDisplayRow = (data) => {
    if (!searchquery) {
      return ""; // Show all rows if no search query is applied
    }
    
    const fieldsToFilter = [
      "Name",
      "Dessignation",
      "pastDesignatiion",
      "course",
      "isActive"
    ];
  
    const shouldDisplay = fieldsToFilter.some((fieldName) => {
      const fieldValue = data[fieldName];
      if (Array.isArray(fieldValue)) {
        if (fieldName === "course") {
          return fieldValue.some((subCat) =>
            subCat.courseName.toLowerCase().includes(searchquery)
          );
        } else {
          return fieldValue.some((value) =>
            value.toString().toLowerCase().includes(searchquery)
          );
        }
      } else if (fieldName === "course" && typeof fieldValue === "object") {
        return fieldValue.courseName.toLowerCase().includes(searchquery);
      }
      return fieldValue.toString().toLowerCase().includes(searchquery);
    });
  
    return shouldDisplay ? "" : "none";
  };
  
  const handleFormSubmit = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(`${BASE_URL}/course/add_Course_file`, formData)

      .then((response) => {
        setFileName(response.data.data.file_name);
        console.log(response.data.data);
        if (response.data.status === false) {
          toast.error("Eorro");
        } else {
          toast.success("Uploaded Successfully");
        }
       
      })
      .catch((error) => {
        // Handle error
        console.error("Error uploading PDF:", error);
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
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-flex align-items-center justify-content-between">
                <h6 className="mb-3">
                  <div className="allleardsearch">
                    <input
                      type="search"
                      className="search"
                      value={searchquery}
                      onChange={(e) => handelsearchquery(e)}
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
                       + Career Transition
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
                  {/* <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0">Career Transition</h4>
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
                  </div> */}
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
                              searchquery={1}
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
                              searchquery={1}
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
                              searchquery={1}
                              aria-label="Position: activate to sort column ascending"
                              style={{ width: "271.525px" }}
                            >
                              Dessignation
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="file_export"
                              rowSpan={1}
                              searchquery={1}
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
                              searchquery={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "123.15px" }}
                            >
                              PastDesignatiion
                            </th>
                          </tr>
                          {/* end row */}
                        </thead>
                        <tbody>
                          {careerList &&
                            careerList.map((data, index) => (
                              <tr className="odd" key={data._id}
                              style={{ display: shouldDisplayRow(data) }}>
                                <td>{index + 1}</td>
                                <td>
                                  {data.Name ? data.Name : ""}
                                  <div className="iconset">
                                   
                                    <i
                                      className="fa fa-edit"
                                      style={{
                                        color: "#13DEB9",
                                        marginRight: "10px",
                                       
                                      }}
                                      onClick={() =>
                                        EditApi(data._id)
                                      } 

                                    ></i>
                                    <i
                                      className="fa fa-trash"
                                      style={{ color: "#FA896B" }}
                                      onClick={() =>
                                        DeleteApi(data._id)
                                      } 
                                    />
                                  </div>
                                </td>
                               
                                <td>{data.Dessignation}</td>
                                <td>
                                  {data.course.courseName}
                                   </td>
                                {/* <td>
                                {format(
                                      new Date(data.createdAt),
                                      "dd-MM-yyyy"
                                    )}
                                 </td> */}
                                <td>{data.pastDesignatiion}</td>
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
        <Modal isOpen={editModel} toggle={handleEditModel}>
          <ModalHeader toggle={handleEditModel}> Edit Career Transition</ModalHeader>
        
          <ModalBody>
            <form className="needs-validation">
              <div className="row">
                <div className="col-md-12 mb-2 mb-md-0">
                  <label className="form-label">Student Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="SubCategory Name"
                    value={name}
                    onChange={(e) => handleOnchangeName(e)}
                  />
                </div>
                <div className="col-md-12 mb-2 mb-md-0">
                  <Label className="form-label" htmlFor="validationCustom01">
                    Company Logo
                  </Label>

                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleOnFileChange}
                  />
               
                
                  {/* {previewImage && (
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
                  )} */}
                </div>
                <div className="col-md-12 mb-2 mb-md-0">
                  <label className="form-label">Past Designatiion </label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="SubCategory Name"
                    value={pastDesignation}
                    onChange={(e) => handlePastDesignation(e)}
                  />
                </div>
                <div className="col-md-12 mb-2 mb-md-0">
                  <label className="form-label">Designation</label>

                  <Input
                    type="text"
                    className="form-control"
                    placeholder="SubCategory Name"
                    value={designation}
                    onChange={(e) => handleDesignation(e)}
                  />
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
            <Button color="btn" onClick={handleEditModel}>
              Cancle
            </Button>{" "}
            <Button color="btn btn-success" onClick={handlUpdateCategory}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={modal} toggle={handleOpenModel}>
          <ModalHeader toggle={handleOpenModel}> Add Career Transition</ModalHeader>
          <ModalBody>
            <form className="needs-validation">
              <div className="row">
                <div className="col-md-12 mb-2 mb-md-0">
                  <label className="form-label">Student Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="SubCategory Name"
                    value={name}
                    onChange={(e) => handleOnchangeName(e)}
                  />
                </div>
                <div className="col-md-12 mb-2 mb-md-0">
                  <Label className="form-label" htmlFor="validationCustom01">
                    Company Logo
                  </Label>

                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleOnFileChange}
                  />
                
               
                </div>
                <div className="col-md-12 mb-2 mb-md-0">
                  <label className="form-label">Past Designatiion </label>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="SubCategory Name"
                    value={pastDesignation}
                    onChange={(e) => handlePastDesignation(e)}
                  />
                </div>
                <div className="col-md-12 mb-2 mb-md-0">
                  <label className="form-label">Designation</label>

                  <Input
                    type="text"
                    className="form-control"
                    placeholder="SubCategory Name"
                    value={designation}
                    onChange={(e) => handleDesignation(e)}
                  />
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
            <Button color="btn" onClick={handleOpenModel}>
              Cancle
            </Button>
            <Button color="btn btn-success" onClick={handleSubmitCategory}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
        {/* delete model */}
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
          <Button color="btn btn-danger" onClick={handleDeleteCategory}>
            Delete
          </Button>
         
         </ModalFooter>
</Modal> 
      </div>
    </div>
  );
  
}

export default Index;
