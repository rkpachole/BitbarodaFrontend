import React from 'react'
import logo_bit from "../../assets/courseImg/logo_bit.png";
import bitlogoName from "../../assets/courseImg/bitlogoname.png";
export default function Footer() {
  return (
    <div>
       <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-9 col-lg-6">
              <div>
                <div className="logo-foot">
                  <div>
                    <a href="#">
                      <img src={logo_bit} className="img-fluid" />
                      <img src={bitlogoName} className="img-fluid" alt="" />
                    </a>
                  </div>
                </div>
                <div className="mbl-div">
                  <ul className="mbl-link">
                    <li>
                      <div className="off-flex">
                        <div className="h-off">
                          <span>
                            <i className="fa-solid fa-location-dot" />Head Office :
                          </span>
                        </div>
                        <p className="manu">
                          B/208, Manubhai Tower, Opp. M.S. University, Sayajigunj,
                          Vadodara-390005, Gujarat, India.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="off-flex">
                        <div className="h-off">
                          <span> <i className="fa-solid fa-phone" />Call : </span>
                        </div>
                        <p className="ms-3"><a href="#">+91 93272 19987</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="off-flex">
                        <div className="h-off">
                          <span>
                            <i className="fa-solid fa-envelope" />Mail :
                          </span>
                        </div>
                        <p className="ms-3"><a href="#">info@bitbaroda.com</a></p>
                      </div>
                    </li>
                    <li>
                      <div className="off-flex">
                        <div className="h-off">
                          <span> Follow Us : </span>
                        </div>
                        <div className="Social-media">
                          <a className="facbk" href="javascript:void(0)"><i className="fa-brands fa-facebook-f" /></a>
                          <a href="javascript:void(0)"><i className="fab fa-instagram" /></a>
                          <a href="javascript:void(0)"><i className="fab fa-youtube" /></a>
                          <a href="javascript:void(0)"><i className="fab fa-twitter" /></a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="foot-po">
                <h3>Company</h3>
                <ul>
                  <li>
                    <a href="javascript:void(0)" className="about"> Blog</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="privacy_policy">
                      Career</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="return_policy">Contact</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)" className="termscondition">Centers</a>
                  </li>
                </ul>
                <div>
                  <h3>Our Branches</h3>
                  <ul className="manja">
                    <li>
                      <a href="#"><i className="fa-solid fa-location-dot" /> Manjalpur</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-solid fa-location-dot" /> Waghodia</a>
                    </li>
                    <li>
                      <a href="#"><i className="fa-solid fa-location-dot" /> Ellora Park</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-3">
              <div className="foot-po">
                <h3>Become</h3>
                <ul>
                  <li>
                    <a href="javascript:void(0)"> Careers Services </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"> Become a Affiliate </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"> Become a Affiliate </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"> Become a Franchise </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pp-flex">
                <a href="javascript:void(0)" className="termsbefore">Terms and Conditions
                </a>
                <a href="javascript:void(0)" className="termsbefore">Refund Policy
                </a>
                <a href="javascript:void(0)">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
