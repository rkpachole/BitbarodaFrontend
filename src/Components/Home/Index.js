import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Select from "react-select";
import mentotring from "../../assets/courseImg/mentotring.png";
import s12 from "../../assets/courseImg/sl1.png";
import s11 from "../../assets/courseImg/sl1.png";
import Slider from "react-slick";
import cerficate from "../../assets/courseImg/cerficate.png";
import crn from "../../assets/courseImg/crn.png";
import s13 from "../../assets/courseImg/sl3.png";
import scr1 from "../../assets/courseImg/scr1.png";
import scr2 from "../../assets/courseImg/scr2.png";
import scr3 from "../../assets/courseImg/scr3.png";
import scr4 from "../../assets/courseImg/scr4.png";
import liimg from "../../assets/courseImg/liimg.png";
import picimg from "../../assets/courseImg/picimg.png";
import learnpath from "../../assets/courseImg/learnpath.png";
import am1 from "../../assets/courseImg/am1.png";
import am2 from "../../assets/courseImg/am2.png";
import am3 from "../../assets/courseImg/am3.png";
import am4 from "../../assets/courseImg/am4.png";
import successStory from "../../assets/courseImg/success-story.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wor from "../../assets/courseImg/wor.png";
import FirstImage from "../../assets/courseImg/first-image.png";

import assr from "../../assets/courseImg/assr.png";
import infinity from "../../assets/courseImg/infinity.png";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import brooke2 from "../../assets/courseImg/brooke2.png";

import "../../assets/coursecss/bootstrap.css";
import "../../assets/coursecss/bootstrap.css.map";
import "../../assets/coursecss/responsive.css";
import "../../assets/coursecss/style.css";

import imag1 from "../../assets/courseImg/imag1.png";
import img from "../../assets/courseImg/img.png";
import imag2 from "../../assets/courseImg/imag2 (1).png";
import imag3 from "../../assets/courseImg/imag2 (2).png";
import star1 from "../../assets/courseImg/star1 (1).png";
import star2 from "../../assets/courseImg/star1 (2).png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

import arrowIcon from "../../assets/courseImg/arrowIcon.png";
import dowanloadIcon from "../../assets/courseImg/dowanloadIcon.png";


const faqs = [
  {
    id: 1,
    header: "Top Programs",
    // text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: 2,
    header: "Finance",
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
  {
    id: 3,
    header: "Analytics",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
  },
  {
    id: 4,
    header: "Technology",
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
  {
    id: 5,
    header: "Marketing",
    // text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
  {
    id: 6,
    header: "Management",
    // text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
  },
];

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  useEffect(() => {
    // Expand the content of the first item when it's active by default
    if (active === id && contentEl.current) {
      contentEl.current.style.height = `${contentEl.current.scrollHeight}px`;
    } else {
      contentEl.current.style.height = '0px';
    }
  }, [active, id]);

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="rc-accordion-title">{header}</h5>
          <i className="fa fa-chevron-down rc-accordion-icon"></i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? 'show' : ''}`}
        style={
          active === id
            ? { height: 'auto' }
            : { height: '0px' }
        }
      >
        <div className="rc-accordion-body">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  )}

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
function Index() {
  const [active, setActive] = useState(faqs[0].id);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = (id) => {
    setActive(id === active ? null : id);
  };

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: "#FAB005",
      background: "#F8F4EB",
      marginRight: "30px",
      top: "-4px",
      boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.15)",
      borderRadius: 35, // Adjust the value as needed
    }),
    menu: (provided) => ({
      ...provided,
      borderColor: "#FAB005",
      borderRadius: 30, // Adjust the value as needed
    }),
  };
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 700, // Autoplay interval in milliseconds
    arrows: true,
    dots: true,
    slidesToShow: 4, // Adjust as needed
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const owlOptions = {
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    dots: true,
  };

  const careerTransitionOptions = {
    items: 1, // Display one item at a time
    loop: true, // Infinite loop
    autoplay: true, // Autoplay enabled
    autoplayTimeout: 600, // Autoplay interval in milliseconds
    autoplayHoverPause: true, // Pause autoplay on hover
    dots: true,
    dotClass: "custom-dot",
    // items: 3,
    // loop: true,
    margin: 20,
    // autoplay: true,
    // autoplayTimeout: 1000, // Autoplay interval in milliseconds
    // autoplayHoverPause: true, // Pause autoplay on hover
    responsive: {
      0: {
        items: 1, // Display one item on small screens
      },
      768: {
        items: 2, // Display two items on medium screens
      },
      992: {
        items: 3, // Display three items on large screens and above
      },
    },
  };

  // const [active, setActive] = useState(null);

  // const handleToggle = (index) => {
  //     if (active === index) {
  //         setActive(null);
  //     } else {
  //         setActive(index);
  //     }
  // }

  return (
    <div>
      <Navbar />
      <section className="banner-home">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="findiv">
                <div className="home">
                  <h6 className="first-heading">E-LERNING LMS </h6>
                  <h3>
                    Create & <span className="first-heading">sell online</span>{" "}
                  </h3>
                  <h3>
                    <span className="first-heading">Course</span> with the best{" "}
                  </h3>
                  <h3>WordPress LMS plugin</h3>
                  <h5>Own your future learning new skills online</h5>
                </div>
                <div className="setSearchbar">
                  <div className="setserachIcon">
                    {/* <FontAwesomeIcon
                      icon={faSearch}
                      style={{
                        color: "#FAB005",
                        margin: "3px", // Adjust the margin value as needed
                        padding: "18px",
                      }}
                    /> */}
                    <input
                      className="searchInput"
                      type="text"
                      placeholder="Search ..."
                    />
                  </div>
                  <div className="dropdownxyz">
                    <div className="formRight">
                      <Select
                        styles={customStyles}
                        className="myselect"
                        value={selectedOption}
                        onChange={handleOptionChange}
                        options={options}
                        placeholder="Select an option..."
                      />
                    </div>
                    <div className="backgroundset">
                      <img src={arrowIcon} alt="" className="custom-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="text-center firstimage">
                <img src={FirstImage} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2nd section */}
      <section className="placement-sec">
        <div className="container">
          <div className="row">
            <div className="cardplacementsec2">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="d-order-flexcard2 brdr-sec2">
                    <div className="section2">
                      <div className="yellow-col">
                        <img src={imag1} alt="" />
                      </div>
                    </div>
                    <div className="mtop-mr2">
                      <img src={star1} alt="" />
                      <img src={star1} alt="" />
                      <img src={star1} alt="" />
                      <img src={star1} alt="" />
                      <img src={star1} alt="" />
                      <p>On Capture</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="d-order-flexcard2 brdr-sec2">
                    <div className="section2">
                      <div className="green-col">
                        <img src={img} alt="" />
                      </div>
                    </div>
                    <div className="mtop-mr2">
                      <h6>25000 +</h6>
                      <p>Happy Customers</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="d-order-flexcard2 brdr-sec2">
                    <div className="section2">
                      <div className="green-col">
                        <img src={imag2} alt="" />
                      </div>
                    </div>
                    <div className="mtop-mr2">
                      <img src={star2} alt="" />
                      <img src={star2} alt="" />
                      <img src={star2} alt="" />
                      <img src={star2} alt="" />
                      <img src={star2} alt="" />
                      <p>On Trusrpilot</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="d-order-flexcard2">
                    <div className="section2">
                      <div className="last-col">
                        <img src={imag3} alt="" />
                      </div>
                    </div>
                    <div className="mtop-mr2">
                      <h6>Power Elite</h6>
                      <p>Author Product</p>
                    </div>
                  </div>
                </div>
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
                <h3>500+ Multinational Hiring Partners</h3>
                <h6>A World Of Opportunities For You</h6>
              </div>
            </div>
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
          <div className="boxset">
            <div className="setsection3">
              <h5>We Have An 80% Placement Success Rate</h5>
              <h6>
                Learn more about how we’ve been impacting thousands of careers.
              </h6>
            </div>
          </div>
          <button className=" btn boxsetbtn">
            Dowanload Placement Report
            <img src={dowanloadIcon} alt="" />
          </button>
        </div>
      </section>
      {/* 4 th section */}
      <section className="program-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="fadiv">
                <h3>Our Programs</h3>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  <div className="accordian">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        active={active}
                        handleToggle={handleToggle}
                        faq={faq}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="item">
                        <div className="card investcard">
                          <img
                            src={brooke2}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              Certified Investment Banking Operat ions
                              Professional
                            </h5>
                            <p className="card-text">
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum
                            </p>
                            <div className="d-grid gap-2">
                              <a
                                href="#"
                                className="btn btn-primary downrep-btn"
                              >
                                Know more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="item">
                        <div className="card investcard">
                          <img
                            src={brooke2}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              Certified Investment Banking Operat ions
                              Professional
                            </h5>
                            <p className="card-text">
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum
                            </p>
                            <div className="d-grid gap-2">
                              <a
                                href="#"
                                className="btn btn-primary downrep-btn"
                              >
                                Know more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="item">
                        <div className="card investcard">
                          <img
                            src={brooke2}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              Certified Investment Banking Operat ions
                              Professional
                            </h5>
                            <p className="card-text">
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum
                            </p>
                            <div className="d-grid gap-2">
                              <a
                                href="#"
                                className="btn btn-primary downrep-btn"
                              >
                                Know more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="item">
                        <div className="card investcard">
                          <img
                            src={brooke2}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              Certified Investment Banking Operat ions
                              Professional
                            </h5>
                            <p className="card-text">
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum
                            </p>
                            <div className="d-grid gap-2">
                              <a
                                href="#"
                                className="btn btn-primary downrep-btn"
                              >
                                Know more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="item">
                        <div className="card investcard">
                          <img
                            src={brooke2}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              Certified Investment Banking Operat ions
                              Professional
                            </h5>
                            <p className="card-text">
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum
                            </p>
                            <div className="d-grid gap-2">
                              <a
                                href="#"
                                className="btn btn-primary downrep-btn"
                              >
                                Know more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="item">
                        <div className="card investcard">
                          <img
                            src={brooke2}
                            className="card-img-top"
                            alt="..."
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              Certified Investment Banking Operat ions
                              Professional
                            </h5>
                            <p className="card-text">
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum
                            </p>
                            <div className="d-grid gap-2">
                              <a
                                href="#"
                                className="btn btn-primary downrep-btn"
                              >
                                Know more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-lg-3 col-md-6">
                  <div className="progmain">
                    <div className="iconboxprog bgprog">
                      <i className="fa-solid fa-suitcase" />
                    </div>
                    <h4>Guaranteed Job Placement</h4>
                    <p>
                      This Program comes with a job guarantee which offers you a
                      chance to be placed at over 500 top-tier partner
                      organizations hiring for the role. Our career related
                      services include resume development, profile enhancement,
                      career mentorship, interview preparation workshops and
                      one-on-one career counselling to ensure you land the right
                      job.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="progmain">
                    <div className="iconboxprog bgskil">
                      <i className="fa-solid fa-list-check" />
                    </div>
                    <h4>Learn Job-relevant Skills</h4>
                    <p>
                      Equip yourself with crucial skills such as financial
                      statement analysis, modelling, valuation, equity research,
                      and transaction execution, along with Excel and
                      PowerPoint.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="progmain">
                    <div className="iconboxprog bglern">
                      <i className="fa-solid fa-house-laptop" />
                    </div>
                    <h4>Learn by Doing</h4>
                    <p>
                      Our course uses the latest in learning engagement
                      solutions, such as simulation tools that allow learners to
                      experience live happenings at the workplace.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="progmain">
                    <div className="iconboxprog bgpersnl">
                      <i className="fa-solid fa-headphones-simple" />
                    </div>
                    <h4>Personal Branding</h4>
                    <p>
                      Enhance your professional presence through our personal
                      branding project and LinkedIn challenge, giving you the
                      ultimate advantage in current competitive job market.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="progmain">
                    <div className="iconboxprog bglern">
                      <i className="fa-solid fa-network-wired" />
                    </div>
                    <h4>Webinar Sessions with Industry Stalwarts</h4>
                    <p>
                      Seize a remarkable opportunity to engage with influential
                      thought leaders and esteemed indsutry experts through our
                      captivating webinars. Uncover fresh perspectives, broaden
                      your network, and propel your professional growth to new
                      heights.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="progmain">
                    <div className="iconboxprog bgprog">
                      <i className="fa-solid fa-blog" />
                    </div>
                    <h4>In-class Simulations</h4>
                    <p>
                      Immerse yourself in the exhilarating realm of real-time
                      financial decision-making through our cutting-edge
                      corporate finance simulations. Acquire hands-on expertise
                      in financial modelling techniques, empowering you with
                      practical skills and insights that transcend theory.
                    </p>
                  </div>
                </div> */}
                <div className="col-md-12 r">
                  <div className="regr-nowdiv">
                    <a href="#" className="reg-btn">
                      {" "}
                      Register Now
                    </a>
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
                <OwlCarousel {...careerTransitionOptions}>
                  <div className="item">
                    <div className="card text-center scriptcard">
                      <div className="card-body">
                        <div className="picimgdiv">
                          <img src={picimg} className="img-fluid" alt="" />
                        </div>

                        <h5 className="card-title fall">Andrew Fallofft</h5>
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
                  <div className="item">
                    <div className="card text-center scriptcard">
                      <div className="card-body">
                        <div className="picimgdiv">
                          <img src={picimg} className="img-fluid" alt="" />
                        </div>

                        <h5 className="card-title fall">Andrew Fallofft</h5>
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
                  <div className="item">
                    <div className="card text-center scriptcard">
                      <div className="card-body">
                        <div className="picimgdiv">
                          <img src={picimg} className="img-fluid" alt="" />
                        </div>
                        <h5 className="card-title fall">Andrew Fallofft</h5>
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
                  <div className="item">
                    <div className="card text-center scriptcard">
                      <div className="card-body">
                        <div className="picimgdiv">
                          <img src={picimg} className="img-fluid" alt="" />
                        </div>
                        <h5 className="card-title fall">Andrew Fallofft</h5>
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
                  <div className="item">
                    <div className="card text-center scriptcard">
                      <div className="card-body">
                        <div className="picimgdiv">
                          <img src={picimg} className="img-fluid" alt="" />
                        </div>
                        <h5 className="card-title fall">Andrew Fallofft</h5>
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

                  {/* Add more items as needed */}
                </OwlCarousel>
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
              <h3 className="arndtitle">
                Trusted By Millions Of Learners Around The World
              </h3>
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
                <h3>
                  How Will I Learn The Practical Implications Of The Course?
                </h3>
                <p>
                  Let's have a look at some of the crucial projects that you
                  will undertake as part of this program:
                </p>
              </div>
            </div>
            {/* <div className="col-md-12">
              <div className="owl-slider">
                <div id="implicationcarousel" className="owl-carousel">
                  <div className="item">
                    <div className="slpd">
                      <img
                        src={am1}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img
                        src={am1}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img
                        src={am3}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img
                        src={am4}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img
                        src={am2}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="slpd">
                      <img
                        src={am3}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-12">
              <div className="owl-slider">
                <Slider {...sliderSettings}>
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

                  {/* Add more slides as needed */}
                </Slider>
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
                  <h3>Will I Get Certified?</h3>
                  <p>
                    Upon completing this Program, you shall receive a
                    Certificate for Postgraduate Financial Analysis Program.
                    This particular certification will add a significant amount
                    of value to your professional credentials.
                  </p>
                </div>
                <div className="jobbox2">
                  <div>
                    <h4 className="brdr-rt">
                      <a href="#">
                        <img src={assr} alt="" />
                        Earn Your Certificate
                      </a>
                    </h4>
                  </div>
                  <div>
                    <h4>
                      <a href="#">
                        <img src={crn} alt="" />
                        Share your Achievement
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="text-center cerpdg">
                <img src={cerficate} className="img-fluid" alt="" />
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
                <h3>Grow Learning</h3>
                <p>
                  We’re focused on giving you an integrated learning experience.
                  With our one-of-its-kind career support services, we continue
                  to support you as you take a step into your career with a
                  renewed perspective. Get access to over 500+ placement
                  partners and explore unlimited opportunities.
                </p>
              </div>
              <div className="indepthbx">
                <p>An In-Depth Look At The Financial Analysis Job Landscape</p>
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
                <img src={mentotring} alt="" className="img-fluid" />
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
                <h3>What Is The Program Eligibility And Admission Process</h3>
                <p>
                  Candidates should possess a minimum of 50% score in their UG
                  graduation.
                </p>
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
