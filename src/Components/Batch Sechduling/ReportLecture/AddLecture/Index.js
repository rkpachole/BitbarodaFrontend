import React, { useState, useEffect } from "react";
import Sidebar from "../../../Directive/Sidebar/Index";
import Header from "../../../Directive/Header/Index";
import { BASE_URL } from "../../../Constants/Index";
import { Input } from "reactstrap";
import { format } from "date-fns";
import Select from "react-select";
import {Button} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";

import axios from "axios";

function Index() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourselabel, setSelectedCourseLabel] = useState("");
  const [numberOfRows, setNumberOfRows] = useState(1);
  const history = useHistory();

  const [rowsData, setRowsData] = useState([
    { s_No: "", mainPoint: "", detail: "" },
  ]);

  const handleInputChange = (e, rowIndex, field) => {
    const updatedRowsData = [...rowsData];
    if (!updatedRowsData[rowIndex]) {
      updatedRowsData[rowIndex] = { s_No: "", mainPoint: "", detail: "" };
    }
    updatedRowsData[rowIndex][field] = e.target.value;
    setRowsData(updatedRowsData);
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

  useEffect(() => {
    fetchDataList();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      courseName: selectedCourselabel,
      courseId: selectedCourse,
      lecture: rowsData,
    };
    axios
      .post(`${BASE_URL}/lectureReport/add_LectureReport`, requestBody)
      .then((response) => {
       
        if (response.data.status === false) {
        
          toast.error("Error message!", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          toast.success("Success message!");
          history.push("/lecture");
        }
      })

      .catch((error) => {
        console.error("API error:", error);
      });
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
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Main Course <span className="red-text">*</span>
                          </label>
                          <Select
                            value={options.find(
                              (option) => option.value === selectedCourse
                            )}
                            onChange={handleCourseChange}
                            options={options}
                            placeholder="Select Course"
                            isSearchable={true}
                          />
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Srno <span className="red-text">*</span>
                          </label>
                          <Input
                            type="number"
                            className="form-control"
                            placeholder="number"
                            value={numberOfRows}
                            onChange={(e) =>
                              setNumberOfRows(parseInt(e.target.value))
                            }
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <table
                      
                          className="table"
                          style={{ width: "100%", marginBottom: "10px" }}
                        >
                          <tbody>
                            <tr
                              style={{
                                color: "#fff",
                                backgroundColor: "#415164",
                              }}
                            >
                              <th style={{ textAlign: "center" }}>Srno</th>
                              <th style={{ textAlign: "center" }}>
                                Main Points
                              </th>
                              <th style={{ textAlign: "center" }}>Details</th>
                              <th style={{ textAlign: "center" }}>Action</th>
                            </tr>
                            {Array.from({ length: numberOfRows }).map(
                              (_, index) => (
                                <tr key={index}>
                                  <td>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      name="s_No"
                                      value={rowsData[index]?.s_No || index + 1}
                                      onChange={(e) =>
                                        handleInputChange(e, index, "s_No")
                                      }
                                     />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="mainPoint"
                                      value={rowsData[index]?.mainPoint || ""}
                                      onChange={(e) =>
                                        handleInputChange(e, index, "mainPoint")
                                      }
                                    />
                                  </td>
                                  <td>
                                    <textarea
                                      className="form-control"
                                      type="text"
                                      name="detail"
                                      value={rowsData[index]?.detail || ""}
                                      onChange={(e) =>
                                        handleInputChange(e, index, "detail")
                                      }
                                    ></textarea>
                                  </td>
                                  <td>
                                    <center>
                                      <span
                                        className="btn btn-success"
                                   
                                      >
                                        <i
                                          className="fa fa-plus"
                                          onClick={addFunction}
                                        />
                                      </span>
                                      <Button
                                        style={{ marginLeft: "5px" }}
                                      id="deletebut"
                                        type="button"
                                        className="btn btn-danger"
                                      >
                                        <i
                                          className="fa fa-trash"
                                          onClick={() => deleteLecturereporttable(index)}
                                   
                                        />
                                      </Button>
                                    </center>
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <Button
                      className="btn btn-primary"
                      type="submit"
                    //   onClick={handleSubmit}
                    >
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
