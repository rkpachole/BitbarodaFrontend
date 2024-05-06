import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import bitlogo from "../../..//assets/Images/bitlogo.png";
import belowImg from "../../../assets/Images/belowImg.png";
function Index() {
  const [openlist, setOpenList] = useState(false);
  const handleOpenlist = () => {
    setOpenList(!openlist);
  };
  const [aria, setAria] = useState(false);

  const handlearia = () => {
    setAria(true);
  };
  return (
    <div>
      <div className="left-sidebar">
        {/* Sidebar scroll*/}
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <Link to="/" className="text-nowrap logo-img mt-2">
              <img src={bitlogo} alt="" />
            </Link>
            <div
              className="close-btn d-lg-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i className="ti ti-x fs-8 text-muted" />
            </div>
          </div>
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav scroll-sidebar" data-simplebar>
            <ul id="sidebarnav">
             
              
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Courses</span>
              </li>
             
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/manage-category"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-calendar" />
                  </span>
                  <span className="hide-menu">Manage Categoies</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/manage-subcategory"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-message-dots" />
                  </span>
                  <span className="hide-menu">Manage Subcategory</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/universities-category"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-mail" />
                  </span>
                  <span className="hide-menu">University Category</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/managecourses"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-notes" />
                  </span>
                  <span className="hide-menu">Manage Course</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/careertransition"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-notes" />
                  </span>
                  <span className="hide-menu">career Transitions</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/hiringpartner"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-notes" />
                  </span>
                  <span className="hide-menu">Hiring Partner</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/learningpartner"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-notes" />
                  </span>
                  <span className="hide-menu">Learning Partner</span>
                </Link>
              </li>
            

              {/* PAGES */}
              {/* ============================= */}
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4" />
                <span className="hide-menu">Admission</span>
              </li>
           
               
                <li className="sidebar-item">
                  <Link to="/all-leads-datas" className="sidebar-link">
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">All Leads</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="/source"
                    aria-expanded="false"
                  >
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Source</span>
                  </Link>
                </li>

                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="/branch"
                    aria-expanded="false"
                  >
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Branch</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="/lead"
                    aria-expanded="false"
                  >
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Lead Status</span>
                  </Link>
                </li>
                <li className="nav-small-cap">
                  <i className="ti ti-dots nav-small-cap-icon fs-4" />
                  <span className="hide-menu">Batch Scheduling</span>
                </li>
                <li className="sidebar-item">
                  <Link
                    className="sidebar-link"
                    to="/lecture"
                    aria-expanded="false"
                  >
                    <div className="round-16 d-flex align-items-center justify-content-center">
                      <i className="ti ti-circle" />
                    </div>
                    <span className="hide-menu">Report Lecture</span>
                  </Link>
                </li>
                
            
            </ul>

            <div className="unlimited-access position-relatived">
              <img src={belowImg} alt=""></img>
            </div>
          </nav>
          {/* <div className="fixed-profile p-3 bg-light-secondary rounded sidebar-ad mt-3">
              <div className="hstack gap-3">
                <div className="john-img">
                  <img src="../../dist/images/profile/user-1.jpg" className="rounded-circle" width={40} height={40} alt="" />
                </div>
                <div className="john-title">
                  <h6 className="mb-0 fs-4 fw-semibold">Mathew</h6>
                  <span className="fs-2 text-dark">Designer</span>
                </div>
                <button className="border-0 bg-transparent text-primary ms-auto" tabIndex={0} type="button" aria-label="logout" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="logout">
                  <i className="ti ti-power fs-6" />
                </button>
              </div>
            </div>   */}
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
      </div>
    </div>
  );
}

export default Index;
