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
import CoursePage3 from "../../../assets/courseImg/Coursepage3.jpg";
// import CoursePage2 from "../../assets/courseImg/Coursepage2";

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
   
  }, []);

  const fetchDataList = (id) => {
    axios
      .get(
        `${BASE_URL}/coursePage/get_One_CoursePage1/${id}`
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
       <div className="App">
    <div className="container-fulid">
     
      <img  src={CoursePage3}  alt="" className="coursepage3img"/>
      </div>
    
    </div>
    </div>
  );
}

export default Index;
