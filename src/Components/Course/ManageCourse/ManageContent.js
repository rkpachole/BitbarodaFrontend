import React, { useState, useEffect } from "react";
import Sidebar from "../../Directive/Sidebar/Index";
import Header from "../../Directive/Header/Index";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Constants/Index.js";
import { Input, Label } from "reactstrap";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
function ManageContent() {
 
  const [file, setFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [courseBrocheur, setFileName] = useState("");
 const {id} = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);



  const history = useHistory();
  const [reportFile, setReportFile] = useState("");
  const [courseData, setCourseData] = useState([]);

  ///get api data

  const [sec1Content, setsec1Content] = useState([]);
  const [sec1SubHeading1, setsec1SubHeading1] = useState("");
  const [sec1SubHeading2, setsec1SubHeading2] = useState("");
  const [sec1BannerImage, setsec1BannerImage] = useState("");
  const [sec1Brochure, setsec1Brochure] = useState("");
  const [sec1Heading, setsec1Heading] = useState("");

  const [sec2Numbers, setSec2Numbers] = useState([]);
  const [sec3Heading1, setsec3Heading1] = useState("");
  const [sec3Heading2, setsec3Heading2] = useState("");
  const [sec4SubHeading, setsec4SubHeading] = useState("");

  const [sec4Heading, setsec4Heading] = useState("");

  const [sec4content, setSec4Content] = useState([]);
  const [sec5Discription, setsec5Discription] = useState("");
  const [sec5Title, setsec5Title] = useState("");
  const [sec5BrochurDownLOad, setsec5BrochurDownLOad] = useState("");
  const [sec6Heading, setsec6Heading] = useState("");
  const [sec7Description, setsec7Description] = useState("");
  const [sec7Heading, setsec7Heading] = useState("");
  const [sec8Heading, setsec8Heading] = useState("");
  const [sec8Description, setsec8Description] = useState("");
  const [sec8Certificate, setsec8Certificate] = useState("");
  const [sec8Content, setsec8Content] = useState([]);

  const [sec9image, setsec9image] = useState("");
  const [sec9Heading, setsec9Heading] = useState("");
  const [sec9Discription, setsec9Discription] = useState("");
  const [sec9content, setsec9Content] = useState("");
  const [uploadReport, setUploadReport] = useState("");
  const [sec9ImageGroup, setsec9ImageGroup] = useState("");
  const [sec10Heading, setSec10Heading] = useState("");
  const [sec10Img, setSec10Img] = useState("");
  const [sec10Description, setSec10Description] = useState("");


  const handleIconChange = (index, e) => {
    const updatedSec2Numbers = [...sec2Numbers];
    updatedSec2Numbers[index].image = URL.createObjectURL(e.target.files[0]);
    setSec2Numbers(updatedSec2Numbers);
  };
  
  const handleNumberChange = (index, e) => {
    const updatedSec2Numbers = [...sec2Numbers];
    updatedSec2Numbers[index].label1 = e.target.value;
    setSec2Numbers(updatedSec2Numbers);
  };
  
  const handleTitleChange = (index, e) => {
    const updatedSec2Numbers = [...sec2Numbers];
    updatedSec2Numbers[index].label2 = e.target.value;
    setSec2Numbers(updatedSec2Numbers);
  };
  
  const handleIconChangeSec4 = (e, index) => {
    const updatedSec4Content = [...sec4content];
    updatedSec4Content[index] = {
      ...updatedSec4Content[index],
      image: URL.createObjectURL(e.target.files[0]), // Assuming you want to show a preview of the uploaded image
    };
    setSec4Content(updatedSec4Content);
  };
  const handleDescriptionChangeSec4 = (e, index) => {
    const updatedSec4Content = sec4content.map((item, i) =>
      i === index ? { ...item, description: e.target.value } : item
    );
    setSec4Content(updatedSec4Content);
  };
  const handleTitleChangeSec4 = (e, index) => {
    const updatedSec4Content = [...sec4content];
    updatedSec4Content[index].title = e.target.value;
    setSec4Content(updatedSec4Content);
  };

  const handleImageChangeCertificate = (event) => {
    const selectedFile = event.target.files[0];
    setsec8Certificate(selectedFile);
  };
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedImage(selectedFile);
  };
  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleIconChange1 = (event) => {
    const selectedFile = event.target.files[0];
    // setSelectedIcon1(selectedFile);
  };

  const handleReportFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setReportFile(selectedFile);
    handleReportSubmit(selectedFile);
  };

  const handleReportSubmit = (reportFile) => {
    if (reportFile) {
      const formData = new FormData();
      formData.append("file", reportFile);
      axios
        .post(`${BASE_URL}/course/add_Course_file`, formData)

        .then((response) => {
          setReportFile(response.data.data.file_name);
          console.log(response.data.data.file_name);
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
            setReportFile(null);
          }, 1000);
        })
        .catch((error) => {
          // Handle error
          console.error("Error uploading PDF:", error);
        });
    } else {
      setErrorMsg("Please select a file");
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    handleFormSubmit(selectedFile);
  };

  const handleFormSubmit = (file) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      axios
        .post(`${BASE_URL}/course/add_Course_file`, formData)

        .then((response) => {
          setFileName(response.data.data.file_name);
          console.log(response.data.data.file_name);
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
            setFile(null);
          }, 1000);
        })
        .catch((error) => {
          // Handle error
          console.error("Error uploading PDF:", error);
        });
    } else {
      setErrorMsg("Please select a file");
    }
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const requestBody = {
      section1: sec1Content,
      // section2:section2,
      // section3:section3,
      // section4:section4,
      // section5:section5,
      // section6:section6,
      // section7:section7,
      // section8:section8,
      // section9:section9,
      // section10:section10,
    };

    axios
      .patch(`${BASE_URL}/coursePage/edit_CoursePage1/${id}`, requestBody)
      .then((response) => {
        console.log("hjdfsgfdshsd", response);
        if (response.data.status === false) {
          setErrorMsg(response.data.message);
          setTimeout(() => {
            setErrorMsg("");
          }, 2000);
        } else {
          setSuccessMsg(response.data.message);
          setTimeout(() => {
            setSuccessMsg("");
            history.push("/managecourses");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  useEffect(() => {
    fetchDataList();
    
  },[]);


  const fetchDataList = () => {
    axios
      .get(`${BASE_URL}/coursePage/get_One_CoursePage1/${id}`)
      .then((response) => {
        if (response.data && response.data.data && response.data.data.section1) {
          console.log(response.data.data)
        setsec1Heading(response.data.data.section1.heading);
        setsec1SubHeading1(response.data.data.section1.subHeading1);
        setsec1SubHeading2(response.data.data.section1.subHeading2);
        setsec1Brochure(response.data.data.section1.brochure);
        setsec1BannerImage(response.data.data.section1.bannerImage);
        setsec1Content(response.data.data.section1.courseSummary);

        setSec2Numbers(response.data.data.section2.numbers);
        setsec3Heading1(response.data.data.section3.heading1);
        setsec3Heading2(response.data.data.section3.heading2);

        // section 4
        setsec4Heading(response.data.data.section4.heading);
        setsec4SubHeading(response.data.data.section4.subHeading);
        setSec4Content(response.data.data.section4.content);

        // section 5
        setsec5BrochurDownLOad(response.data.data.section5.brochurDownLOad);
        setsec5Title(response.data.data.section5.title);
        setsec5Discription(response.data.data.section5.description);

        // section 6
        setsec6Heading(response.data.data.section6.heading);
        // section 7
        setsec7Heading(response.data.data.section7.heading);
        setsec7Description(response.data.data.section7.subHeading);

        // section8
        setsec8Heading(response.data.data.section8.heading);
        setsec8Certificate(response.data.data.section8.image);
        setsec8Description(response.data.data.section8.description);
        setsec8Content(response.data.data.section8.contents);

        // section 9
        setsec9Heading(response.data.data.section9.heading);
        setsec9Discription(response.data.data.section9.description);
        setsec9Content(response.data.data.section9.content);
        setUploadReport(response.data.data.section9.uploadReport);
        setsec9ImageGroup(response.data.data.section9.image);
        // section 10
        // setId(response.data.data._id);
        setSec10Description(response.data.data.section10.description);
        setSec10Img(response.data.data.section10.image);
        setSec10Heading(response.data.data.section10.heading);
        }else {
          console.error("API response doesn't contain the expected structure:", response.data);
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  // const fetchCourseAllData = () => {
  //   axios
  //     .get(`${BASE_URL}/coursePage/get_All_CoursePage1`)
  //     .then((response) => {
  //       console.log(response.data.data.adminCoursePage1);
  //       setCourseData(response.data.data.adminCoursePage1);
  //       const courseId = response.data.data.adminCoursePage1.map((item) => {
  //         return item._id;
          
  //       });
  //       setId(courseId)
  //       fetchDataList(courseId);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
 
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
            <div className="col-lg-12">
              {/* --------------------- Section 1---------------- */}
              <div className="card">
                <div className="card-header bg-primary">
                  <h4 className="mb-0 text-white"> Manage Content </h4>
                </div>
                <form action="#">
                  <div>
                    <div className="card-body">
                      <h5>Section 1</h5>
                      <div className="row pt-3">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">Heading 1</Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) => setsec1Heading(e.target.value)}
                              value={sec1Heading}
                              placeholder="heading 1"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">
                              Sub Heading 1
                            </Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) =>
                                setsec1SubHeading1(e.target.value)
                              }
                              value={sec1SubHeading1}
                              placeholder="heading 1"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">
                              SubHeading 2
                            </Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) =>
                                setsec1SubHeading2(e.target.value)
                              }
                              value={sec1SubHeading2}
                              placeholder="subHeading2"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        {sec1Content.map((item, index) => (
                          <div className="col-md-4">
                            <div className="mb-3">
                              <Label className="control-label">
                                Key Feature 1
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                onChange={(e) => setsec1Content(e.target.value)}
                                value={item.label}
                                placeholder="John doe"
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <Label className="form-label">Banner Image</Label>
                            <input
                              type="file"
                              className="form-control"
                              onChange={handleBannerChange}
                            />
                            <img
                              src={sec1BannerImage}
                              style={{ width: "50px", height: "50px" }}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">
                              Upload Brochure (file)
                            </label>
                            <br />
                            <input
                              type="file"
                              className="form-control"
                              onChange={handleFileChange}
                            />
                            {errorMsg && (
                              <span className="text-danger">{errorMsg}</span>
                            )}
                            {successMsg && (
                              <span className="text-success">{successMsg}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="card-body">
                      <h5 className="mb-4">Section 2</h5>
                      {sec2Numbers.map((item, index) => (
  <div key={index} className="row">
    <div className="col-md-4">
      <div className="mb-3">
        <label>Icon 1</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleIconChange(index, e)}
        />
        <div className="diesl"><div className="bg-col">
        {item.image && <img src={item.image} alt="" />}
        </div></div>
       
      </div>
    </div>
    <div className="col-md-4">
      <div className="mb-3">
        <label>Number</label>
        <input
          type="number"
          value={item.label1}
          onChange={(e) => handleNumberChange(index, e)}
          className="form-control"
        />
      </div>
    </div>
    <div className="col-md-4">
      <div className="mb-3">
        <label>Title</label>
        <input
          type="text"
          value={item.label2}
          onChange={(e) => handleTitleChange(index, e)}
          className="form-control"
        />
      </div>
    </div>
  </div>
))}

                    </div>
                    <hr></hr>
                    <div className="card-body">
                      <h5>Section 3</h5>
                      <div className="row pt-3">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">Heading</Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) => setsec3Heading1(e.target.value)}
                              value={sec3Heading1}
                              placeholder="Heading"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">Sub Heading</Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) => setsec3Heading2(e.target.value)}
                              value={sec3Heading2}
                              placeholder="subHeading"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="card-body">
                      <h5>Section 4</h5>
                      <div className="row pt-3">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">Heading</Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) => setsec4Heading(e.target.value)}
                              value={sec4Heading}
                              placeholder="heading"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">Sub Heading</Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) =>
                                setsec4SubHeading(e.target.value)
                              }
                              value={sec4SubHeading}
                              placeholder="SubHeading"
                            />
                          </div>
                        </div>
                      </div>
                      {sec4content.map((item, index) => (
                        <div key={index} className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <Label>Icon 1</Label>
                              <Input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleIconChangeSec4(e, index)}
                              />
                              {item.image && (
                                <img
                                  src={item.image}
                                  alt=""
                                  style={{ maxWidth: "100%" }}
                                />
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <Label>Title</Label>
                              <input
                                type="text"
                                value={item.title}
                                onChange={(e) =>
                                  handleTitleChangeSec4(e, index)
                                }
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <Label className="control-label">
                                Description
                              </Label>
                              <textarea
                                type="text"
                                rows={2}
                                className="form-control"
                                onChange={(e) =>
                                  handleDescriptionChangeSec4(e, index)
                                }
                                value={item.description}
                                placeholder="Sub Heading"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <hr />
                    <div className="card-body">
                      <h5>Section 5</h5>
                      <div className="row pt-3">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label"> Title </Label>
                            <textarea
                              rows={2}
                              type="text"
                              className="form-control"
                              value={sec5Title}
                              onChange={(e) => setsec5Title(e.target.value)}
                              placeholder="Title"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">Description</Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) =>
                                setsec5Discription(e.target.value)
                              }
                              value={sec5Discription}
                              placeholder="Description"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Upload Placement Report
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              onChange={handleReportFileChange}
                            />
                            {sec5BrochurDownLOad && (
                              <img src={sec5BrochurDownLOad} alt="" />
                            )}

                            {errorMsg && (
                              <span className="text-danger">{errorMsg}</span>
                            )}
                            {successMsg && (
                              <span className="text-success">{successMsg}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <div className="card-body">
                      <h5 className="mb-4">Section 6</h5>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">Heading</Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) => setsec6Heading(e.target.value)}
                              value={sec6Heading}
                              placeholder="Heading"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="card-body">
                      <h5 className="mb-4">Section 7</h5>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">Title</Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) => setsec7Heading(e.target.value)}
                              value={sec7Heading}
                              placeholder="Title"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">Description</Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) =>
                                setsec7Description(e.target.value)
                              }
                              value={sec7Description}
                              placeholder="Title"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label> upload Image </Label>
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr></hr>

                    <div className="card-body">
                      <h5 className="mb-4">Section 8</h5>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">Heading</Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) => setsec8Heading(e.target.value)}
                              value={sec8Heading}
                              placeholder="Heading"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">
                              {" "}
                              Description{" "}
                            </Label>
                            <textarea
                              type="text"
                              rows={3}
                              className="form-control"
                              onChange={(e) =>
                                setsec8Description(e.target.value)
                              }
                              value={sec8Description}
                              placeholder="John doe"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <Label> upload Certificate Sample </Label>
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChangeCertificate}
                            />
                            {sec8Certificate && (
                              <img src={sec8Certificate} alt="" />
                            )}
                          </div>
                        </div>
                        {sec8Content.map((item, index) => (
                          <div key={index} className="col-md-4">
                            <div className="mb-3">
                              <Label>Title 1</Label>
                              <Input
                              value={item.title} type="text" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <hr />
                    <div className="card-body">
                      <h5 className="mb-4">Section 9</h5>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label>Heading</Label>
                            <Input 
                            value={sec9Heading}
                            onChange={setsec9Heading}
                            type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label"> Description </Label>
                            <textarea
                              type="text"
                              rows={3}
                              className="form-control"
                              onChange={(e) => setsec9Discription(e.target.value)}
                              value={sec9Discription}
                              placeholder="John doe"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <Label>Report Text </Label>
                            <Input type="text" 
                             value={sec9content}
                             onChange={(e)=>setsec9Content(e.target.value)}
                             placeholder="Report Text" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <Label> upload Report</Label>
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="card-body">
                      <h5>Section 10</h5>
                      <div className="row pt-3">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">Title</Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) => sec10Heading(e.target.value)}
                              value={sec10Heading}
                              placeholder="heading 1"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="control-label">
                              Description
                            </Label>
                            <textarea
                              type="text"
                              rows={2}
                              className="form-control"
                              onChange={(e) => setSec10Description(e.target.value)}
                              value={sec10Description}
                              placeholder="Description"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label> Image (file)</Label>
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={handleImageChange}
                            />
                           {sec10Img && <img src={sec10Img} className="sec10Img" alt=""/>} 
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-actions">
                      <div className="card-body border-top">
                        <button
                          type="submit"
                          onClick={handleSubmitForm}
                          className="btn btn-success rounded-pill px-4"
                        >
                          <div className="d-flex align-items-center">
                            <i className="ti ti-device-floppy me-1 fs-4" />
                            Update
                          </div>
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger rounded-pill px-4 ms-2 text-white"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* ---------------------
                                                    end Person Info
                                                ---------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageContent;
