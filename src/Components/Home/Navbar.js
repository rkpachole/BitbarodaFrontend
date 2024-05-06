import React from 'react'
import Logo from "../../assets/courseImg/logo_bit.png"
function Navbar() {
  return (
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
                  <button className="btn btn-secondary dropdown-toggle drp-downbtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" fdprocessedid="irtk8u">
                    Course
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a className="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
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
  )
}



export default Navbar