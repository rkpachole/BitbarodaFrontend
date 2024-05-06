import React, { useState, useEffect } from "react";
import Sidebar from "../../../Directive/Sidebar/Index";
import Header from "../../../Directive/Header/Index";
import { BASE_URL } from "../../../Constants/Index";

import { format } from "date-fns";

import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {Button,Input} from "reactstrap";

function Index() {
const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourselabel, setSelectedCourseLabel] = useState("");
  const history = useHistory();
  const [rowsData, setRowsData] = useState([
    { s_No: "", mainPoint: "", detail: "" },
  ]);
 const {id} =useParams();
  const [numberOfRows, setNumberOfRows] = useState(1);



  const handleEdit = () => {
  axios
      .get(`${BASE_URL}/lectureReport/get_One_LectureReport/${id}`)
      .then((response) => {
        console.log("response", response.data.data._id);
        setSelectedCourse(response.data.data.courseId);
        setNumberOfRows(response.data.data.lecture.length);
        setRowsData(response.data.data.lecture);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  const handleInputChange = (e, rowIndex, field) => {
    console.log(e, rowIndex, field);
    const updatedRowsData = [...rowsData];
    if (!updatedRowsData[rowIndex]) {
      updatedRowsData[rowIndex] = { s_No: "", mainPoint: "", detail: "" };
    }
    updatedRowsData[rowIndex][field] = e.target.value;
    setRowsData(updatedRowsData);
    console.log(updatedRowsData);
  };



  const addFunction = () => {
    setNumberOfRows((prevRows) => prevRows + 1);
    setRowsData((prevRowsData) => [
      ...prevRowsData,
      { s_No: prevRowsData.length + 1, mainPoint: "", detail: "" },
    ]);
  };

  const deleteLecturereporttable = (rowIndex) => {
    setRowsData((prevRowsData) =>
      prevRowsData.filter((_, index) => index !== rowIndex)
    );
    setNumberOfRows((prevRows) => prevRows - 1);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      courseName: selectedCourselabel,
      courseId: selectedCourse,
      lecture: rowsData,
    };
    axios
      .patch(`${BASE_URL}/lectureReport/edit_LectureReport/${id}`, requestBody)
      .then((response) => {
        console.log(response);
        history.push(`/lecture`);
        toast.success("Update Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

 
 
  useEffect(() => {
    fetchDataList();
    handleEdit();

  }, []);

 

  

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

  const handleCourseChange = (selectedOption) => {
    setSelectedCourseLabel(selectedOption.label);
    setSelectedCourse(selectedOption.value);
  };

  const options = courses.map((course) => ({
    value: course._id,
    label: course.courseName,
  }));


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
      <ToastContainer />
      <div className="body-wrapper">
        <Header />
        <div className="container-fluid">
         
              <div className="card">
              <div className="card-body">
       <form onSubmit={handleUpdateSubmit}>
        <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label"> Main Course <span className="red-text">*</span> </label>
          <Select
                    value={options.find(
                      (option) => option.value === selectedCourse
                    )}
                    onChange={handleCourseChange}
                    options={options}
                    selectedOption={selectedCourse}
                    placeholder="Select Course"
                    isSearchable={true}
                  />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label>Srno.<span className="red-color">*</span></label>
                <Input
                    type="number"
                    className="form-control"
                    placeholder="number"
                    value={numberOfRows}
                    onChange={(e) => setNumberOfRows(parseInt(e.target.value))}
                  />
              
              </div>
            </div>
            <div className="col-md-12">
              <table className="table table-bordered" id="dynamic_field_table"> 
                <tbody><tr style={{color: '#fff', backgroundColor: '#415164'}}>
                    <th style={{textAlign: 'center'}}>Srno</th>
                    <th style={{textAlign: 'center'}}>Main Points</th>
                    <th style={{textAlign: 'center'}}>Details</th>
                    <th style={{textAlign: 'center'}}>Action</th>
                  </tr>
                  {Array.from({ length: numberOfRows }).map((_, index) => (
                        <tr key={index}>
                          <td>
                            <input
                              type="number"
                              name="s_No"
                              className="form-control"
                              value={rowsData[index]?.s_No || index + 1}
                              onChange={(e) =>
                                handleInputChange(e, index, "s_No")
                              }
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="mainPoint"
                              className="form-control"
                              value={rowsData[index]?.mainPoint || ""}
                              onChange={(e) =>
                                handleInputChange(e, index, "mainPoint")
                              }
                            />
                          </td>
                          <td>
                            <textarea
                              className="form-control"
                              name="detail"
                              value={rowsData[index]?.detail || ""}
                              onChange={(e) =>
                                handleInputChange(e, index, "detail")
                              }
                            />
                          </td>
                          <td>
                            <center>
                              <span
                                className="btn btn-success"
                                onClick={addFunction}
                              >
                                <i className="fa fa-plus" />
                              </span>
                              <span
                                style={{ marginLeft: "5px" }}
                                onClick={() => deleteLecturereporttable(index)}
                                id="deletebut"
                                type="button"
                                className="btn btn-danger"
                              >
                                <i className="fa fa-trash" />
                              </span>
                            </center>
                          </td>
                        </tr>
                      ))}
                 
                    </tbody>
                    </table> 
            </div>
          </div>
          <Button color="secondary" type="submit">
              Submit
            </Button>
        </form>
      </div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Index;
