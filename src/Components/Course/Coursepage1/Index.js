import React, { useEffect, useState } from "react";
import Footer from "../CoursePageFooter";
import Logo from "../../../assets/courseImg/logo_bit.png"
import Select from "react-select";
import s11 from "../../../assets/courseImg/sl1.png";
import s12 from "../../../assets/courseImg/sl2.png";
import s13 from "../../../assets/courseImg/sl3.png";
import scr1 from "../../../assets/courseImg/scr1.png";
import scr2 from "../../../assets/courseImg/scr2.png";
import scr3 from "../../../assets/courseImg/scr3.png";
import scr4 from "../../../assets/courseImg/scr4.png";
import liimg from "../../../assets/courseImg/liimg.png";
import picimg from "../../../assets/courseImg/picimg.png";
import learnpath from "../../../assets/courseImg/learnpath.png";
import am1 from "../../../assets/courseImg/am1.png";
import am2 from "../../../assets/courseImg/am2.png";
import am3 from "../../../assets/courseImg/am3.png";
import am4 from "../../../assets/courseImg/am4.png";
import successStory from "../../../assets/courseImg/success-story.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wor from "../../../assets/courseImg/wor.png";

import assr from "../../../assets/courseImg/assr.png";
import infinity from "../../../assets/courseImg/infinity.png";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import brooke2 from "../../../assets/courseImg/brooke2.png";
import axios from "axios";
import { BASE_URL } from "../../Constants/Index";
import "../../../assets/coursecss/bootstrap.css";
import "../../../assets/coursecss/bootstrap.css.map";
import "../../../assets/coursecss/responsive.css";
import "../../../assets/coursecss/style.css";
import Link from "antd/es/typography/Link";


function Index() {
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

  const [sec4content, setsec4content] = useState([]);
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
 const[id,setId]= useState(null);
  const [sec9image, setsec9image] = useState("");
  const [sec9Heading, setsec9Heading] = useState("");
  const [sec9Discription, setsec9Discription] = useState("");
  const [sec9content, setsec9Content] = useState("");
  const [uploadReport, setUploadReport] = useState("");
  const [sec9ImageGroup, setsec9ImageGroup] = useState("");
  const [sec10Heading, setSec10Heading] = useState("");
  const [sec10Img, setSec10Img] = useState("");
  const [sec10Description, setSec10Description] = useState("");
  const [courseData,setCourseData]= useState([]);

 
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedCourseLabel, setSelectedCourseLabel] = useState("");
  const [courses, setCourses] = useState([]);
  const colourStyles = {
    control: styles => ({ ...styles, overflow: 'hidden', color: 'black !important',backgroundColor: "transparent" || 'transparent', fontSize: 13,  paddingLeft: 'center', height:36}),
    singleValue: styles => ({ ...styles, color: '#fff' }),
  }
  const handleCourseChange = (selectedOption) => {
    setSelectedCourseLabel(selectedOption.label);
    setSelectedCourse(selectedOption.value);
    fetchDataList(selectedOption.value);
  };

  const options = courses.map((course) => ({
    value: course._id,
    label: course.courseName,
  }));
  const fetchCourseList = () => {
    axios
      .get(`${BASE_URL}/course/get_All_Course`)
      .then((response) => {
        setCourses(response.data.data.adminCourses);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  const owlOptions = {
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    dots: true,
  };

  useEffect(() => {
 fetchCourseList();
 fetchDataList();
  }, []);

  const fetchDataList = () => {
    axios
      .get(
        `${BASE_URL}/coursePage/get_One_CoursePage1/64e73e4da7a8d324c9c8be0a`
      )
      .then((response) => {
        if(response.data.status === false){
           setsec1Heading("");
          setsec1SubHeading1("");
          setsec1Brochure("");
          setsec1Content([]);
          setsec1BannerImage("");
          setSec2Numbers([]);
          setsec3Heading1();
          setsec3Heading2("");
          setsec4Heading("");
          setsec4SubHeading("");
          setsec4content("");
          setsec5BrochurDownLOad("");
          setsec5Title("");
          setsec5Discription("");
          setsec6Heading("");
          setsec7Heading("");
          setsec7Description("");
          setsec8Heading("");
          setsec8Certificate("");
          setsec8Content("");
          setsec8Description("");
          setsec9Heading("");
          setsec9Discription("");
          setsec9Content([]);
          setsec9image("");
          setsec9ImageGroup("");
          setUploadReport("");
          setSec10Description("");
          sec10Heading("");
          setSec10Img("");
        }
        else{
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
          setsec4content(response.data.data.section4.content);
  
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
        }
     
      
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  return (
    <div>
      <div className="container-fluid nav-sec">
    <div className="nav-div">
      <div className="topnavdiv">
        <ul>
          <li>
            <a href="#"><i className="fa-brands fa-facebook-f facebk" /></a>
          </li>
          <li>
            <a href="#"> <i className="fa-brands fa-instagram instagrm" /></a>
          </li>
          <li>
            <a href="#"> <i className="fa-brands fa-linkedin-in linkdin" /></a>
          </li>
          <li>
            <a href="#"><i className="fa-brands fa-twitter twiter" /></a>
          </li>
          <li>
            <a href="#"><i className="fa-brands fa-youtube y-tube" /></a>
          </li>
        </ul>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light mainnav">
        <div className="container-fluid mrcont">
          <a href="#" className="marg-anchr">
            <img src={Logo} className="img-fluid" alt="" /></a>
          <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" fdprocessedid="1cgxpn">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbarSupportedContent" style={{}}>
            <form className="d-flex ms-auto">
              <div className="explorediv">
                <div className="dropdown">
                 <Select
                   value={options.find(  (option) => option.value === selectedCourse   )}
                            onChange={handleCourseChange}
                            options={options}
                            styles={colourStyles}
                            className="selectdropdownhome games-dropdown-2"
                            placeholder="Select Course"
                            isSearchable={true}
                            theme={theme => ({
                              ...theme,
                              colors: {
                                  ...theme.colors,
                                  neutral50: '#fff',  // Placeholder color
                              },
                          })}
                          />
               
                  {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a className="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul> */}
                </div>
                <a href="#" className="exp-btn">Explore</a>
                <a href="#">
                  <div className="userdiv">
                    <i className="fa-solid fa-user" />
                  </div>
                </a>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>
      <section className="banner-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <div className="findiv">
                <div className="postgrad">
                  <h3>{sec1Heading}</h3>
                  <h4>{sec1SubHeading1}</h4>
                  <h5>
                    <i className="fa-regular fa-circle-check" />{" "}
                    {sec1SubHeading2}
                  </h5>
                </div>
                <div className="jobbox">
                  {sec1Content &&
                    sec1Content.map((item, index) => (
                      <div key={index}>
                        <h4 className="brdr-rt">
                          <img src={item.image} alt="" />
                          {item.label}
                        </h4>
                      </div>
                    ))}
                </div>
                <div className="brochflex">
                  <Link className="broch-btn brc-pd">Download Brochure</Link>
                  <Link className="applybtn"> Apply Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="text-center bizimg">
                <img src={sec1BannerImage} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2nd section */}
      <section className="placement-sec">
        <div className="container">
          <div className="row">
            <div className="cardplacement">
              <div className="row">
                {sec2Numbers.map((item, index) => (
                  <div key={index} className="col-lg-3 col-sm-6">
                    <div className="d-order-flexcard2">
                      <div className="diesl">
                        <div className="bg-col">
                          <img src={item.image} alt="" />
                          {/* <i className="fa-solid fa-suitcase" /> */}
                        </div>
                      </div>
                      <div className="mtop-mr2">
                        <h6>
                          {index === 0
                            ? `${item.label1}+`
                            : index === 1
                            ? `${item.label1}LPA`
                            : `${item.label1}%`}
                        </h6>
                        <p>{item.label2}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3rd section  */}
      <section className="hiring-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="partn">
                <h3>{sec3Heading1}</h3>
                <h6>{sec3Heading2}</h6>
              </div>
            </div>
            {/* <div className="col-md-12">
              <div className="owl-slider">
                <div id="hiringcarousel" className="owl-carousel">
                  <div className="item">
                    <div className="slpd">
                  
                      <img src={s11} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                   
                      <img src={s12} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                  
                      <img src={s13} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                   
                      <img src={s11} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img src={s12} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img src={s13} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-12">
              <div className="owl-slider">
                <OwlCarousel {...owlOptions}>
                  <div className="item">
                    <div className="slpd">
                      <img src={s11} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img src={s12} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img src={s13} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img src={s11} alt="" className="img-fluid" />
                    </div>
                  </div>
                  {/* Add more items as needed */}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4 th section */}
      <section className="program-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fadiv">
                <h3>{sec4Heading}</h3>
                <p>{sec4SubHeading}</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                {sec4content &&
                  sec4content.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="progmain">
                        <div className="iconboxprog bgprog">
                          <img src={item.image} alt="" className="sec4Image" />
                        </div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}

                <div className="col-md-12 r">
                  <div className="regr-nowdiv">
                    <Link className="reg-btn"> Register Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 5th section */}
      <section className="car-trans-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="trans-heading">Career Transitions</h3>
            </div>
            <div className="col-md-12">
              <div className="owl-slider">
                <div
                  id="careertransitioncarousel"
                  className="owl-carousel owl-loaded owl-drag"
                >
                  <div
                    className="owl-stage-outer owl-height"
                    style={{ height: "467.422px" }}
                  >
                    <div
                      className="owl-stage"
                      style={{
                        transform: "translate3d(0px, 0px, 0px)",
                        transition: "all 1.6s ease 0s",
                        width: "1884px",
                      }}
                    >
                      <div
                        className="owl-item active"
                        style={{ width: "356.667px", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="card text-center scriptcard">
                            <div className="card-body">
                              <div className="picimgdiv">
                                <img src={picimg} alt="" />
                              </div>
                              <h5 className="card-title fall">
                                Andrew Fallofft
                              </h5>
                              <p className="card-text nsoft">
                                Software Development November 2020
                              </p>
                              <div className="arrdn">
                                <i className="fa-solid fa-arrow-down" />
                              </div>
                              <div>
                                <img
                                  src={successStory}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <p className="regrep">Regulatory Reporting</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "356.667px", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="card text-center scriptcard">
                            <div className="card-body">
                              <div className="picimgdiv">
                                <img src={picimg} alt="" />
                              </div>
                              <h5 className="card-title fall">
                                Andrew Fallofft
                              </h5>
                              <p className="card-text nsoft">
                                Software Development November 2020
                              </p>
                              <div className="arrdn">
                                <i className="fa-solid fa-arrow-down" />
                              </div>
                              <div>
                                <img
                                  src={successStory}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <p className="regrep">Regulatory Reporting</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "356.667px", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="card text-center scriptcard">
                            <div className="card-body">
                              <div className="picimgdiv">
                                <img src={picimg} alt="" />
                              </div>
                              <h5 className="card-title fall">
                                Andrew Fallofft
                              </h5>
                              <p className="card-text nsoft">
                                Software Development November 2020
                              </p>
                              <div className="arrdn">
                                <i className="fa-solid fa-arrow-down" />
                              </div>
                              <div>
                                <img
                                  src={successStory}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <p className="regrep">Regulatory Reporting</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "356.667px", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="card text-center scriptcard">
                            <div className="card-body">
                              <div className="picimgdiv">
                                <img src={picimg} alt="" />
                              </div>
                              <h5 className="card-title fall">
                                Andrew Fallofft
                              </h5>
                              <p className="card-text nsoft">
                                Software Development November 2020
                              </p>
                              <div className="arrdn">
                                <i className="fa-solid fa-arrow-down" />
                              </div>
                              <div>
                                <img
                                  src={successStory}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <p className="regrep">Regulatory Reporting</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "356.667px", marginRight: "20px" }}
                      >
                        <div className="item">
                          <div className="card text-center scriptcard">
                            <div className="card-body">
                              <div className="picimgdiv">
                                <img src={picimg} alt="" />
                              </div>
                              <h5 className="card-title fall">
                                Andrew Fallofft
                              </h5>
                              <p className="card-text nsoft">
                                Software Development November 2020
                              </p>
                              <div className="arrdn">
                                <i className="fa-solid fa-arrow-down" />
                              </div>
                              <div>
                                <img
                                  src={successStory}
                                  className="img-fluid"
                                  alt=""
                                />
                              </div>
                              <p className="regrep">Regulatory Reporting</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="thoubox">
                <div className="sucrate">
                  <h3>{sec5Title}</h3>
                  <p>{sec5Discription}</p>
                </div>
                <div className="downrepbx">
                  <a href="#" className="downrep-btn">
                    Download Placement Report
                    <i className="fa-solid fa-download" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 7 th section  */}
      <section className="million-learner-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="arndtitle">{sec6Heading}</h3>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="scrcard">
                    <div className="screnimg">
                      <img src={scr1} className="img-fluid" alt="..." />
                    </div>
                    <div className="card-bodystar">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <span>4.5</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="scrcard">
                    <div className="screnimg">
                      <img src={scr2} className="img-fluid" alt="..." />
                    </div>
                    <div className="card-bodystar">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <span>4.5</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="scrcard">
                    <div className="screnimg">
                      <img src={scr3} className="img-fluid" alt="..." />
                    </div>
                    <div className="card-bodystar">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <span>4.5</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="scrcard">
                    <div className="screnimg">
                      <img src={scr4} className="img-fluid" alt="..." />
                    </div>
                    <div className="card-bodystar">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <span>4.5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 8 section */}
      <section className="car-trans-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="trans-heading curpdg">Curriculum</h3>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="tabsec-curricullam">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="mypilltabdiv">
                        <ul
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="v-pills-home-tab"
                              data-bs-toggle="pill"
                              href="#v-pills-home"
                              role="tab"
                              aria-controls="v-pills-home"
                            >
                              Excel &amp; Accounting Essentials
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="v-pills-profile-tab"
                              data-bs-toggle="pill"
                              href="#v-pills-profile"
                              role="tab"
                              aria-controls="v-pills-profile"
                            >
                              Corporate Finance
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="v-pills-messages-tab"
                              data-bs-toggle="pill"
                              href="#v-pills-messages"
                              role="tab"
                              aria-controls="v-pills-messages"
                            >
                              Financial Modeling, Forecasting &amp; Analysis
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="v-pills-home-tab"
                              data-bs-toggle="pill"
                              href="#v-pills-home"
                              role="tab"
                              aria-controls="v-pills-home"
                            >
                              Business Valuation, Financial Products and Markets
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="v-pills-profile-tab"
                              data-bs-toggle="pill"
                              href="#v-pills-profile"
                              role="tab"
                              aria-controls="v-pills-profile"
                            >
                              Technology Skills
                            </a>
                          </li>
                          {/* Add as many list items as you want... */}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="v-pills-home"
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          <div className="row mt-2">
                            <div className="col-md-6 bg-white-module">
                              <div className="mdipd">
                                <div className="modulebx">
                                  <p>
                                    This module covers essential tools for data
                                    analysis, including PowerPoint for
                                    presentation, Tableau for data
                                    visualization, and programming languages
                                    such as Python and R for data manipulation
                                    and modeing. Learners will gain an
                                    understanding of data management principles
                                    and be able to apply these tools t analyze
                                    and present data effectively
                                  </p>
                                </div>
                                <div className="learnmode">
                                  <h3>Mode of Learning</h3>
                                  <ul>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span>
                                        Soft skills - Stress Management and
                                        Resilience
                                      </span>
                                    </li>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span>
                                        Soft skills - Business Ethics and
                                        Professionalism
                                      </span>
                                    </li>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span> Final Exam </span>
                                    </li>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span> Placement Intervention 3 </span>
                                    </li>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span> Final Mock Interviews </span>
                                    </li>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span>
                                        Profile link &amp; LinkedIn Challenge
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 bg-aqua-module">
                              <div className="mdipd">
                                <div className="learnmode powmrgn">
                                  <h3>Topics</h3>
                                  <ul>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span>PowerPoint</span>
                                    </li>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span>Tableau</span>
                                    </li>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span>Python</span>
                                    </li>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span>R</span>
                                    </li>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span>Data Management</span>
                                    </li>
                                  </ul>
                                </div>
                                <div className="learnmode presmrgn">
                                  <h3>Learning Outcomes</h3>
                                  <ul>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span>
                                        Develop proficiency in using PowerPoint
                                        to create effective data presentations
                                        and be able to deliver persuasive
                                        presentations to different audiences
                                      </span>
                                    </li>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span>
                                        Learn how to use Tableau to create
                                        interactive and visually appealing data
                                        visualizations
                                      </span>
                                    </li>
                                    <li>
                                      <img
                                        src={liimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                      <span>
                                        Gain proficiency in using programming
                                        languages such as Python and R to
                                        manipulate
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-profile"
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <h4>Profile Tab</h4>
                              <p>Content for Profile Tab...</p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="v-pills-messages"
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                        >
                          <h4>Messages Tab</h4>
                          <p>Content for Messages Tab...</p>
                        </div>
                        {/* Add as many tab content divs as you need... */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 9 section */}
      <section className="million-learner-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h3 className="ques-heading">Have questions? Contact us</h3>
            </div>
            <div className="col-md-6">
              <div className="addr-box">
                <input
                  type="text"
                  placeholder="Full Name"
                  id
                  className="form-control"
                  fdprocessedid="chrr1"
                />
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  id
                  className="form-control"
                  fdprocessedid="rujg1"
                />
                <input
                  type="text"
                  placeholder="Contact Number"
                  id
                  className="form-control"
                  fdprocessedid="xfsww8"
                />
                <select
                  className="form-select form-control"
                  aria-label="Default select example"
                >
                  <option selected>Mumbai - Andheri</option>
                  <option value={1}>Ahmedabad</option>
                  <option value={2}>Banglore</option>
                  <option value={3}>New Delhi</option>
                </select>
                <div className="mt-3 mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I accept the <a href="#">Terms &amp; Conditions</a>
                  </label>
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary submbtn" type="button">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 10 section */}
      <section className="car-trans-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="trans-heading">
                Let Us Walk Through Your Learning Path
              </h3>
            </div>
            <div className="col-md-12">
              <div className>
                <img src={learnpath} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 11 section */}
      <section className="program-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fadiv">
                <h3>{sec7Heading}</h3>
                <p>{sec7Description}</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="owl-slider">
                <div id="implicationcarousel" className="owl-carousel">
                  <div className="item">
                    <div className="slpd">
                      <img src={am1} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img src={am2} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img src={am3} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img src={am4} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img src={am2} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img src={am3} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="enrolbx">
                <a href="#" className="btn btn-primary applybtn">
                  Enrol Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 section */}
      <section className="car-trans-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="trans-heading">Learn From The Expert Faculty</h3>
            </div>
            <div className="col-md-12">
              {/* TESTIMONIALS */}
              <section className="testimonials">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div
                        id="customers-testimonials"
                        className="owl-carousel cust"
                      >
                        {/*TESTIMONIAL 1 */}
                        <div className="item">
                          <div className="shadow-effect">
                            <img
                              className="img-circle"
                              src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                              alt=""
                            />
                            <p>
                              Dramatically maintain clicks-and-mortar solutions
                              without functional solutions. Completely synergize
                              resource taxing relationships via premier niche
                              markets. Professionally cultivate.
                            </p>
                          </div>
                          <div className="testimonial-name">EMILIANO</div>
                        </div>
                        {/*END OF TESTIMONIAL 1 */}
                        {/*TESTIMONIAL 2 */}
                        <div className="item">
                          <div className="shadow-effect">
                            <img
                              className="img-circle"
                              src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                              alt=""
                            />
                            <p>
                              Dramatically maintain clicks-and-mortar solutions
                              without functional solutions. Completely synergize
                              resource taxing relationships via premier niche
                              markets. Professionally cultivate.
                            </p>
                          </div>
                          <div className="testimonial-name">ANNA</div>
                        </div>
                        {/*END OF TESTIMONIAL 2 */}
                        {/*TESTIMONIAL 3 */}
                        <div className="item">
                          <div className="shadow-effect">
                            <img
                              className="img-circle"
                              src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                              alt=""
                            />
                            <p>
                              Dramatically maintain clicks-and-mortar solutions
                              without functional solutions. Completely synergize
                              resource taxing relationships via premier niche
                              markets. Professionally cultivate.
                            </p>
                          </div>
                          <div className="testimonial-name">LARA</div>
                        </div>
                        {/*END OF TESTIMONIAL 3 */}
                        {/*TESTIMONIAL 4 */}
                        <div className="item">
                          <div className="shadow-effect">
                            <img
                              className="img-circle"
                              src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                              alt=""
                            />
                            <p>
                              Dramatically maintain clicks-and-mortar solutions
                              without functional solutions. Completely synergize
                              resource taxing relationships via premier niche
                              markets. Professionally cultivate.
                            </p>
                          </div>
                          <div className="testimonial-name">IAN OWEN</div>
                        </div>
                        {/*END OF TESTIMONIAL 4 */}
                        {/*TESTIMONIAL 5 */}
                        <div className="item">
                          <div className="shadow-effect">
                            <img
                              className="img-circle"
                              src="http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg"
                              alt=""
                            />
                            <p>
                              Dramatically maintain clicks-and-mortar solutions
                              without functional solutions. Completely synergize
                              resource taxing relationships via premier niche
                              markets. Professionally cultivate.
                            </p>
                          </div>
                          <div className="testimonial-name">MICHAEL</div>
                        </div>
                        {/*END OF TESTIMONIAL 5 */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* END OF TESTIMONIALS */}
            </div>
          </div>
        </div>
      </section>

      {/* 13 section */}
      <section className="expert-sec">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-6 col-md-12"
              style={{ backgroundColor: "#ffeacf" }}
            >
              <div className="phn-bx">
                <img src={wor} className="img-fluid" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-12"
              style={{ backgroundColor: "#ffffff" }}
            >
              <h3 className="fachead">Learn From The Expert Faculty</h3>
              <div className="tabsequitydiv">
                <ul id="myTabs" className="nav nav-pills" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="commentary-tab"
                      data-bs-toggle="pill"
                      href="#Commentary"
                    >
                      Financial Planning and Analysis (FP&amp;A) Analyst
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="videos-tab"
                      data-bs-toggle="pill"
                      href="#Videos"
                    >
                      Investment Banking Analyst
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="events-tab"
                      data-bs-toggle="pill"
                      href="#Events"
                    >
                      Equity Research Analyst
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="events-tab"
                      data-bs-toggle="pill"
                      href="#Events"
                    >
                      Treasury Analyst
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="events-tab"
                      data-bs-toggle="pill"
                      href="#Events"
                    >
                      Corporate Development Analyst
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="events-tab"
                      data-bs-toggle="pill"
                      href="#Events"
                    >
                      Private Equity Analyst
                    </a>
                  </li>
                </ul>
                <div className="tab-content mt-3">
                  <div
                    className="tab-pane fade show active"
                    id="Commentary"
                    role="tabpanel"
                    aria-labelledby="commentary-tab"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="pvtdiv">
                          <p>
                            <strong>Private Equity Analyst :</strong> A private
                            equity analyst is an employee of the firm whose
                            responsibilities include conducting the research
                            that impacts the com panies in which the company
                            invests.Their job is to interact with the senior me
                            mbers of private equity firms to get intelligence on
                            the current and potential investments and getting
                            the work done internally with the teammates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="Videos"
                    role="tabpanel"
                    aria-labelledby="videos-tab"
                  >
                    Videos goes here.
                  </div>
                  <div
                    className="tab-pane fade"
                    id="Events"
                    role="tabpanel"
                    aria-labelledby="events-tab"
                  >
                    Events goes here.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 14 section */}
      <section className="certified-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="propad">
                <div className="willbox">
                  <h3>{sec8Heading}</h3>
                  <p>{sec8Description}</p>
                </div>
                <div className="jobbox2">
                  {sec8Content &&
                    sec8Content.map((item, index) => (
                      <div key={index}>
                        <h4 className="brdr-rt">
                          <a href="#">
                            <img src={assr} alt="" />
                            {item.title}
                          </a>
                        </h4>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="text-center cerpdg">
                <img src={sec8Certificate} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 15 section */}
      <section className="grow-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="learningdiv">
                <h3>{sec9Heading}</h3>
                <p>{sec9Discription}</p>
              </div>
              <div className="indepthbx">
                <p>{sec9content}</p>
                <div className="d-grid gap-2">
                  <a
                    href="#"
                    className="btn btn-primary downrep-btn"
                    type="button"
                  >
                    Download Report
                    <i className="fa-solid fa-download" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="text-center">
                <img src={sec9ImageGroup} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 16 section */}
      <section className="program-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fadiv">
                <h3>{sec10Heading}</h3>
                <p>{sec10Description}</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className>
                <img src={infinity} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="adms">
                <p>Need Help? Our admission team is happy to assist you.</p>
                <a href="#" className="btn btn-primary applybtn">
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 17 section */}
      <section className="stories-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fadiv">
                <h3>Create Your Success Story</h3>
                <p>
                  Candidates should possess a minimum of 50% score in their UG
                  graduation.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="ceerarbox">
                <div className="row">
                  <div className="col-md-12">
                    <div className="owl-slider">
                      <div
                        id="success-storycarousel"
                        className="owl-carousel owl-loaded owl-drag"
                      >
                        <div
                          className="owl-stage-outer owl-height"
                          style={{ height: "467.422px" }}
                        >
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(0px, 0px, 0px)",
                              transition: "all 1.6s ease 0s",
                              width: "1884px",
                            }}
                          >
                            <div
                              className="owl-item active"
                              style={{
                                width: "356.667px",
                                marginRight: "20px",
                              }}
                            >
                              <div className="item">
                                <div className="card scriptcard">
                                  <div className="card-body">
                                    <div className="picimgdiv text-center">
                                      <img
                                        src={picimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                    <h5 className="card-title fall text-center">
                                      Andrew Fallofft
                                    </h5>
                                    <div className="popularp">
                                      <p>
                                        It was popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item active"
                              style={{
                                width: "356.667px",
                                marginRight: "20px",
                              }}
                            >
                              <div className="item">
                                <div className="card scriptcard">
                                  <div className="card-body">
                                    <div className="picimgdiv text-center">
                                      <img
                                        src={picimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                    <h5 className="card-title fall text-center">
                                      Andrew Fallofft
                                    </h5>
                                    <div className="popularp">
                                      <p>
                                        It was popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item active"
                              style={{
                                width: "356.667px",
                                marginRight: "20px",
                              }}
                            >
                              <div className="item">
                                <div className="card scriptcard">
                                  <div className="card-body">
                                    <div className="picimgdiv text-center">
                                      <img
                                        src={picimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                    <h5 className="card-title fall text-center">
                                      Andrew Fallofft
                                    </h5>
                                    <div className="popularp">
                                      <p>
                                        It was popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{
                                width: "356.667px",
                                marginRight: "20px",
                              }}
                            >
                              <div className="item">
                                <div className="card scriptcard">
                                  <div className="card-body">
                                    <div className="picimgdiv text-center">
                                      <img
                                        src={picimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                    <h5 className="card-title fall text-center">
                                      Andrew Fallofft
                                    </h5>
                                    <div className="popularp">
                                      <p>
                                        It was popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{
                                width: "356.667px",
                                marginRight: "20px",
                              }}
                            >
                              <div className="item">
                                <div className="card scriptcard">
                                  <div className="card-body">
                                    <div className="picimgdiv text-center">
                                      <img
                                        src={picimg}
                                        className="img-fluid"
                                        alt=""
                                      />
                                    </div>
                                    <h5 className="card-title fall text-center">
                                      Andrew Fallofft
                                    </h5>
                                    <div className="popularp">
                                      <p>
                                        It was popularised in the 1960s with the
                                        release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently
                                        with desktop publishing software like
                                        Aldus PageMaker including versions of
                                        Lorem Ipsum.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div class="col-md-4">
                  <div class="card scriptcard">
                    <div class="card-body">
                      <div class="picimgdiv text-center">
                        <img
                          src="./assets//images/picimg.png"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <h5 class="card-title fall text-center">
                        Andrew Fallofft
                      </h5>
                      <div class="popularp">
                        <p>
                          It was popularised in the 1960s with the release of
                          Letraset sheets containing Lorem Ipsum passages, and
                          more recently with desktop publishing software like
                          Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="card scriptcard">
                    <div class="card-body">
                      <div class="picimgdiv text-center">
                        <img
                          src="./assets//images/picimg.png"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <h5 class="card-title fall text-center">
                        Andrew Fallofft
                      </h5>
                      <div class="popularp">
                        <p>
                          It was popularised in the 1960s with the release of
                          Letraset sheets containing Lorem Ipsum passages, and
                          more recently with desktop publishing software like
                          Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card scriptcard">
                    <div class="card-body">
                      <div class="picimgdiv text-center">
                        <img
                          src="./assets//images/picimg.png"
                          class="img-fluid"
                          alt=""
                        />
                      </div>
                      <h5 class="card-title fall text-center">
                        Andrew Fallofft
                      </h5>
                      <div class="popularp">
                        <p>
                          It was popularised in the 1960s with the release of
                          Letraset sheets containing Lorem Ipsum passages, and
                          more recently with desktop publishing software like
                          Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                  <div className="col-md-12">
                    <div className="adms">
                      <a href="#" className="btn btn-primary applybtn">
                        Prepare to Succeed
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 18 section */}
      <section className="installment-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="centerdiv">
                <div className="circleout">
                  <div className="circlein">
                    <h6>Program Fee</h6>
                    <h4>₹ 1,80,000</h4>
                    <p>(Inclusive of all taxes)</p>
                    <a href="#" className="btn btn-primary applybtn">
                      Enquire Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="instaltabdiv">
                <ul
                  id="myTabs"
                  className="nav nav-pills nav-fill"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="installment-tab"
                      data-bs-toggle="pill"
                      href="#installment"
                    >
                      Installments
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="emi-tab"
                      data-bs-toggle="pill"
                      href="#emi"
                    >
                      EMI Options
                    </a>
                  </li>
                </ul>
                <div className="tab-content mt-3">
                  <div
                    className="tab-pane fade show active"
                    id="installment"
                    role="tabpanel"
                    aria-labelledby="installment-tab"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive intalment-tablediv">
                          <table className="table">
                            <tbody>
                              <tr>
                                <th scope="col">Registration Fees</th>
                                <td>₹ 20,000</td>
                              </tr>
                              <tr>
                                <th scope="row">Loan Amount</th>
                                <td>₹ 160,000</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  9-months EMI (Zero-cost EMI)
                                </th>
                                <td>₹ 17,778</td>
                              </tr>
                              <tr>
                                <th scope="row">
                                  12-months EMI (Zero-cost EMI)
                                </th>
                                <td colSpan={2}>₹ 13,334</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="emi"
                    role="tabpanel"
                    aria-labelledby="emi-tab"
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive intalment-tablediv">
                          <table className="table">
                            <tbody>
                              <tr>
                                <th scope="col">EMI demo</th>
                                <td>₹ 20,000</td>
                              </tr>
                              <tr>
                                <th scope="row">Loan Amount</th>
                                <td>₹ 160,000</td>
                              </tr>
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
        </div>
      </section>
      {/* 19 section */}
      <section className="stories-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fadiv">
                <h3>Wait! I Have Some Questions</h3>
              </div>
            </div>
            <div className="col-md-12">
              <div className="accrordiondiv">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        01. There are many variations of passages ?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the first item's accordion body.
                        </strong>
                        It is shown by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        02. There are many variations of passages ?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the second item's accordion body.
                        </strong>
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        03. There are many variations of passages ?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the third item's accordion body.
                        </strong>
                        It is hidden by default, until the collapse plugin adds
                        the appropriate classes that we use to style each
                        element.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 20 section */}
      <section className="program-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fadiv mb-4">
                <h3>Similar Programs</h3>
              </div>
            </div>
            <div className="col-md-12">
              <div className="owl-slider">
                <div id="programcarousel" className="owl-carousel">
                  <div className="item">
                    <div className="card investcard">
                      <img src={brooke2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">
                          Certified Investment Banking Operat ions Professional
                        </h5>
                        <p className="card-text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                        </p>
                        <div className="d-grid gap-2">
                          <a href="#" className="btn btn-primary downrep-btn">
                            Know more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card investcard">
                      <img src={brooke2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">
                          Certified Investment Banking Operat ions Professional
                        </h5>
                        <p className="card-text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                        </p>
                        <div className="d-grid gap-2">
                          <a href="#" className="btn btn-primary downrep-btn">
                            Know more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card investcard">
                      <img src={brooke2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">
                          Certified Investment Banking Operat ions Professional
                        </h5>
                        <p className="card-text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                        </p>
                        <div className="d-grid gap-2">
                          <a href="#" className="btn btn-primary downrep-btn">
                            Know more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card investcard">
                      <img src={brooke2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">
                          Certified Investment Banking Operat ions Professional
                        </h5>
                        <p className="card-text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                        </p>
                        <div className="d-grid gap-2">
                          <a href="#" className="btn btn-primary downrep-btn">
                            Know more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card investcard">
                      <img src={brooke2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">
                          Certified Investment Banking Operat ions Professional
                        </h5>
                        <p className="card-text">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                        </p>
                        <div className="d-grid gap-2">
                          <a href="#" className="btn btn-primary downrep-btn">
                            Know more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Index;
