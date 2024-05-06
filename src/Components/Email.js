import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ApexCharts from "apexcharts";
function Email() {
  return (
    <div>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <Sidebar />
        {/* --------------------------------------------------- */}
        {/* Main Wrapper */}
        {/* --------------------------------------------------- */}
        <div className="body-wrapper">
          <Header />
          <div className="container-fluid">
            <div className="card bg-light-info shadow-none position-relative overflow-hidden">
              <div className="card-body px-4 py-3">
                <div className="row align-items-center">
                  <div className="col-9">
                    <h4 className="fw-semibold mb-8">Email Application</h4>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a
                            className="text-muted text-decoration-none"
                            href="index.html"
                          >
                            Dashboard
                          </a>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          Email
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="col-3">
                    <div className="text-center mb-n5">
                      <img
                        src="../../dist/images/breadcrumb/emailSv.png"
                        alt=""
                        className="img-fluid mb-n4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card overflow-hidden chat-application">
              <div className="d-flex align-items-center justify-content-between gap-3 m-3 d-lg-none">
                <button
                  className="btn btn-primary d-flex"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#chat-sidebar"
                  aria-controls="chat-sidebar"
                >
                  <i className="ti ti-menu-2 fs-5" />
                </button>
                <form className="position-relative w-100">
                  <input
                    type="text"
                    className="form-control search-chat py-2 ps-5"
                    id="text-srh"
                    placeholder="Search Contact"
                  />
                  <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
                </form>
              </div>
              <div className="d-flex w-100">
                <div className="left-part border-end w-20 flex-shrink-0 d-none d-lg-block">
                  <div className="px-9 pt-4 pb-3">
                    <button className="btn btn-primary fw-semibold py-8 w-100">
                      Compose
                    </button>
                  </div>
                  <ul
                    className="list-group"
                    style={{ height: "calc(100vh - 400px)" }}
                    data-simplebar="init"
                  >
                    <div
                      className="simplebar-wrapper"
                      style={{ margin: "0px" }}
                    >
                      <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer" />
                      </div>
                      <div className="simplebar-mask">
                        <div
                          className="simplebar-offset"
                          style={{ right: "0px", bottom: "0px" }}
                        >
                          <div
                            className="simplebar-content-wrapper"
                            tabIndex={0}
                            role="region"
                            aria-label="scrollable content"
                            style={{
                              height: "100%",
                              overflow: "hidden scroll",
                            }}
                          >
                            <div
                              className="simplebar-content"
                              style={{ padding: "0px" }}
                            >
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-inbox fs-5" />
                                  Inbox
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-brand-telegram fs-5" />
                                  Sent
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-file-text fs-5" />
                                  Draft
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-inbox fs-5" />
                                  Spam
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-trash fs-5" />
                                  Trash
                                </a>
                              </li>
                              <li className="border-bottom my-3" />
                              <li className="fw-semibold text-dark text-uppercase mx-9 my-2 px-3 fs-2">
                                IMPORTANT
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-star fs-5" />
                                  Starred
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-badge fs-5" />
                                  Important
                                </a>
                              </li>
                              <li className="border-bottom my-3" />
                              <li className="fw-semibold text-dark text-uppercase mx-9 my-2 px-3 fs-2">
                                LABELS
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-bookmark fs-5 text-primary" />
                                  Promotional
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-bookmark fs-5 text-warning" />
                                  Social
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-bookmark fs-5 text-success" />
                                  Health
                                </a>
                              </li>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="simplebar-placeholder"
                        style={{ width: "auto", height: "560px" }}
                      />
                    </div>
                    <div
                      className="simplebar-track simplebar-horizontal"
                      style={{ visibility: "hidden" }}
                    >
                      <div
                        className="simplebar-scrollbar"
                        style={{ width: "0px", display: "none" }}
                      />
                    </div>
                    <div
                      className="simplebar-track simplebar-vertical"
                      style={{ visibility: "visible" }}
                    >
                      <div
                        className="simplebar-scrollbar"
                        style={{
                          height: "25px",
                          transform: "translate3d(0px, 0px, 0px)",
                          display: "block",
                        }}
                      />
                    </div>
                  </ul>
                </div>
                <div className="d-flex w-100">
                  <div className="min-width-340">
                    <div className="border-end user-chat-box h-100">
                      <div className="px-4 pt-9 pb-6 d-none d-lg-block">
                        <form className="position-relative">
                          <input
                            type="text"
                            className="form-control search-chat py-2 ps-5"
                            id="text-srh"
                            placeholder="Search"
                          />
                          <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
                        </form>
                      </div>
                      <div className="app-chat">
                        <ul
                          className="chat-users"
                          style={{ height: "calc(100vh - 400px)" }}
                          data-simplebar="init"
                        >
                          <div
                            className="simplebar-wrapper"
                            style={{ margin: "0px" }}
                          >
                            <div className="simplebar-height-auto-observer-wrapper">
                              <div className="simplebar-height-auto-observer" />
                            </div>
                            <div className="simplebar-mask">
                              <div
                                className="simplebar-offset"
                                style={{ right: "0px", bottom: "0px" }}
                              >
                                <div
                                  className="simplebar-content-wrapper"
                                  tabIndex={0}
                                  role="region"
                                  aria-label="scrollable content"
                                  style={{
                                    height: "100%",
                                    overflow: "hidden scroll",
                                  }}
                                >
                                  <div
                                    className="simplebar-content"
                                    style={{ padding: "0px" }}
                                  >
                                    <li>
                                      <a
                                        href="javascript:void(0)"
                                        className="px-4 py-3 bg-hover-light-black d-flex align-items-start chat-user bg-light"
                                        id="chat_user_1"
                                        data-user-id={1}
                                      >
                                        <div className="form-check mb-0">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="flexCheckDefault"
                                          />
                                        </div>
                                        <div className="position-relative w-100 ms-2">
                                          <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="mb-0">
                                              James Smith
                                            </h6>
                                            <span className="badge text-bg-primary fs-2 rounded-4 py-1 px-2">
                                              Promotional
                                            </span>
                                          </div>
                                          <h6 className="fw-semibold text-dark">
                                            Kindly check this latest updated
                                          </h6>
                                          <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                              <span>
                                                <i className="ti ti-star fs-4 me-2 text-dark" />
                                              </span>
                                              <span className="d-block">
                                                <i className="ti ti-alert-circle text-muted" />
                                              </span>
                                            </div>
                                            <p className="mb-0 fs-2 text-muted">
                                              04:00pm
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:void(0)"
                                        className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                        id="chat_user_2"
                                        data-user-id={2}
                                      >
                                        <div className="form-check mb-0">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="flexCheckDefault"
                                          />
                                        </div>
                                        <div className="position-relative w-100 ms-2">
                                          <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="mb-0">
                                              Katherine Flintoff
                                            </h6>
                                            <span className="badge text-bg-danger fs-2 rounded-4 py-1 px-2">
                                              Social
                                            </span>
                                          </div>
                                          <h6 className="fw-semibold text-dark">
                                            Newsletter from AdminMart Team
                                          </h6>
                                          <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                              <span>
                                                <i className="ti ti-star fs-4 me-2 text-warning" />
                                              </span>
                                              <span className="d-block">
                                                <i className="ti ti-alert-circle text-muted" />
                                              </span>
                                            </div>
                                            <p className="mb-0 fs-2 text-muted">
                                              04:00pm
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:void(0)"
                                        className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                        id="chat_user_3"
                                        data-user-id={3}
                                      >
                                        <div className="form-check mb-0">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="flexCheckDefault"
                                          />
                                        </div>
                                        <div className="position-relative w-100 ms-2">
                                          <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="mb-0">
                                              Bianca Macdowells
                                            </h6>
                                            <span className="badge text-bg-success fs-2 rounded-4 py-1 px-2">
                                              Health
                                            </span>
                                          </div>
                                          <h6 className="text-dark">
                                            Kindly check this latest updated
                                          </h6>
                                          <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                              <span>
                                                <i className="ti ti-star fs-4 me-2 text-muted" />
                                              </span>
                                              <span className="d-block">
                                                <i className="ti ti-alert-circle text-warning" />
                                              </span>
                                            </div>
                                            <p className="mb-0 fs-2 text-muted">
                                              04:00pm
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:void(0)"
                                        className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                        id="chat_user_4"
                                        data-user-id={4}
                                      >
                                        <div className="form-check mb-0">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="flexCheckDefault"
                                          />
                                        </div>
                                        <div className="position-relative w-100 ms-2">
                                          <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="mb-0">
                                              Michael Knight
                                            </h6>
                                            <span className="badge text-bg-primary fs-2 rounded-4 py-1 px-2">
                                              Social
                                            </span>
                                          </div>
                                          <h6 className="fw-semibold text-dark">
                                            Developer Community needs help
                                          </h6>
                                          <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                              <span>
                                                <i className="ti ti-star fs-4 me-2 text-muted" />
                                              </span>
                                              <span className="d-block">
                                                <i className="ti ti-alert-circle text-muted" />
                                              </span>
                                            </div>
                                            <p className="mb-0 fs-2 text-muted">
                                              04:00pm
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:void(0)"
                                        className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                        id="chat_user_5"
                                        data-user-id={5}
                                      >
                                        <div className="form-check mb-0">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="flexCheckDefault"
                                          />
                                        </div>
                                        <div className="position-relative w-100 ms-2">
                                          <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="mb-0">
                                              Jonathan Higgings
                                            </h6>
                                            <span className="badge text-bg-primary fs-2 rounded-4 py-1 px-2">
                                              Promotional
                                            </span>
                                          </div>
                                          <h6 className="fw-semibold text-dark">
                                            Kindly check this latest updated
                                          </h6>
                                          <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                              <span>
                                                <i className="ti ti-star fs-4 me-2 text-muted" />
                                              </span>
                                              <span className="d-block">
                                                <i className="ti ti-alert-circle text-muted" />
                                              </span>
                                            </div>
                                            <p className="mb-0 fs-2 text-muted">
                                              04:00pm
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:void(0)"
                                        className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                        id="chat_user_2"
                                        data-user-id={2}
                                      >
                                        <div className="form-check mb-0">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="flexCheckDefault"
                                          />
                                        </div>
                                        <div className="position-relative w-100 ms-2">
                                          <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="mb-0">
                                              Mike Torello
                                            </h6>
                                            <span className="badge text-bg-primary fs-2 rounded-4 py-1 px-2">
                                              Health
                                            </span>
                                          </div>
                                          <h6 className="fw-semibold text-dark">
                                            From your hosting provider - action
                                          </h6>
                                          <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                              <span>
                                                <i className="ti ti-star fs-4 me-2 text-muted" />
                                              </span>
                                              <span className="d-block">
                                                <i className="ti ti-alert-circle text-muted" />
                                              </span>
                                            </div>
                                            <p className="mb-0 fs-2 text-muted">
                                              04:00pm
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:void(0)"
                                        className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                        id="chat_user_3"
                                        data-user-id={3}
                                      >
                                        <div className="form-check mb-0">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="flexCheckDefault"
                                          />
                                        </div>
                                        <div className="position-relative w-100 ms-2">
                                          <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="mb-0">
                                              Bianca Macdowells
                                            </h6>
                                            <span className="badge text-bg-success fs-2 rounded-4 py-1 px-2">
                                              Health
                                            </span>
                                          </div>
                                          <h6 className="fw-semibold text-dark">
                                            Kindly check this latest updated
                                          </h6>
                                          <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                              <span>
                                                <i className="ti ti-star fs-4 me-2 text-muted" />
                                              </span>
                                              <span className="d-block">
                                                <i className="ti ti-alert-circle text-warning" />
                                              </span>
                                            </div>
                                            <p className="mb-0 fs-2 text-muted">
                                              04:00pm
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="javascript:void(0)"
                                        className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                        id="chat_user_3"
                                        data-user-id={3}
                                      >
                                        <div className="form-check mb-0">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue
                                            id="flexCheckDefault"
                                          />
                                        </div>
                                        <div className="position-relative w-100 ms-2">
                                          <div className="d-flex align-items-center justify-content-between mb-2">
                                            <h6 className="mb-0">
                                              Michael Knight
                                            </h6>
                                            <span className="badge text-bg-primary fs-2 rounded-4 py-1 px-2">
                                              Social
                                            </span>
                                          </div>
                                          <h6 className="fw-semibold text-dark">
                                            Developer Community
                                          </h6>
                                          <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                              <span>
                                                <i className="ti ti-star fs-4 me-2 text-muted" />
                                              </span>
                                              <span className="d-block">
                                                <i className="ti ti-alert-circle text-muted" />
                                              </span>
                                            </div>
                                            <p className="mb-0 fs-2 text-muted">
                                              04:00pm
                                            </p>
                                          </div>
                                        </div>
                                      </a>
                                    </li>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="simplebar-placeholder"
                              style={{ width: "auto", height: "846px" }}
                            />
                          </div>
                          <div
                            className="simplebar-track simplebar-horizontal"
                            style={{ visibility: "hidden" }}
                          >
                            <div
                              className="simplebar-scrollbar"
                              style={{ width: "0px", display: "none" }}
                            />
                          </div>
                          <div
                            className="simplebar-track simplebar-vertical"
                            style={{ visibility: "visible" }}
                          >
                            <div
                              className="simplebar-scrollbar"
                              style={{
                                height: "25px",
                                transform: "translate3d(0px, 0px, 0px)",
                                display: "block",
                              }}
                            />
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    <div className="chat-container h-100 w-100">
                      <div className="chat-box-inner-part h-100">
                        <div className="chatting-box app-email-chatting-box">
                          <div className="p-9 py-3 border-bottom chat-meta-user">
                            <ul className="list-unstyled mb-0 d-flex align-items-center">
                              <li className="d-lg-none d-block">
                                <a
                                  className="text-dark back-btn px-2 fs-5 bg-hover-primary nav-icon-hover position-relative z-index-5"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-arrow-left" />
                                </a>
                              </li>
                              <li
                                className="position-relative"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Star"
                              >
                                <a
                                  className="text-dark px-2 fs-5 bg-hover-primary nav-icon-hover position-relative z-index-5"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-star" />
                                </a>
                              </li>
                              <li
                                className="position-relative"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="important"
                              >
                                <a
                                  className="d-block text-dark px-2 fs-5 bg-hover-primary nav-icon-hover position-relative z-index-5"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-alert-circle" />
                                </a>
                              </li>
                              <li
                                className="position-relative"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                data-bs-title="Delete"
                              >
                                <a
                                  className="text-dark px-2 fs-5 bg-hover-primary nav-icon-hover position-relative z-index-5"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-trash" />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="position-relative overflow-hidden">
                            <div className="position-relative">
                              <div
                                className="chat-box p-9"
                                style={{ height: "calc(100vh - 428px)" }}
                                data-simplebar="init"
                              >
                                <div
                                  className="simplebar-wrapper"
                                  style={{ margin: "-20px" }}
                                >
                                  <div className="simplebar-height-auto-observer-wrapper">
                                    <div className="simplebar-height-auto-observer" />
                                  </div>
                                  <div className="simplebar-mask">
                                    <div
                                      className="simplebar-offset"
                                      style={{ right: "0px", bottom: "0px" }}
                                    >
                                      <div
                                        className="simplebar-content-wrapper"
                                        tabIndex={0}
                                        role="region"
                                        aria-label="scrollable content"
                                        style={{
                                          height: "100%",
                                          overflow: "hidden scroll",
                                        }}
                                      >
                                        <div
                                          className="simplebar-content"
                                          style={{ padding: "20px" }}
                                        >
                                          <div
                                            className="chat-list chat active-chat"
                                            data-user-id={1}
                                          >
                                            <div className="hstack align-items-start mb-7 pb-1 align-items-center justify-content-between">
                                              <div className="d-flex align-items-center gap-2">
                                                <img
                                                  src="../../dist/images/profile/user-8.jpg"
                                                  alt="user8"
                                                  width={48}
                                                  height={48}
                                                  className="rounded-circle"
                                                />
                                                <div>
                                                  <h6 className="fw-semibold mb-0">
                                                    Alexandra Flintoff
                                                  </h6>
                                                  <p className="mb-0">
                                                    hello@loremipsum.com
                                                  </p>
                                                </div>
                                              </div>
                                              <span className="badge text-bg-primary fs-2 rounded-4 py-1 px-2">
                                                Promotional
                                              </span>
                                            </div>
                                            <div className="border-bottom pb-7 mb-7">
                                              <h4 className="fw-semibold text-dark mb-3">
                                                Kindly check this latest updated
                                              </h4>
                                              <p className="mb-3 text-dark">
                                                Hello Andrew,
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Quisque bibendum hendrerit
                                                lobortis. Nullam ut lacus eros.
                                                Sed at luctus urna, eu fermentum
                                                diam. In et tristique mauris.
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Ut id ornare metus, sed auctor
                                                enim. Pellentesque nisi magna,
                                                laoreet a augue eget, tempor
                                                volutpat diam.
                                              </p>
                                              <p className="mb-0 text-dark">
                                                Regards,
                                              </p>
                                              <h6 className="fw-semibold mb-0 text-dark pb-1">
                                                Alexandra Flintoff
                                              </h6>
                                            </div>
                                            <div className="mb-3">
                                              <h6 className="fw-semibold mb-0 text-dark mb-3">
                                                Attachments
                                              </h6>
                                              <div className="d-block d-sm-flex align-items-center gap-4">
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 mb-2 mb-sm-0"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-adobe.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        service-task.pdf
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 file-chat-hover"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-zip-folder.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        work-project.zip
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="chat-list chat"
                                            data-user-id={2}
                                          >
                                            <div className="hstack align-items-start mb-7 pb-1 align-items-center justify-content-between">
                                              <div className="d-flex align-items-center gap-2">
                                                <img
                                                  src="../../dist/images/profile/user-1.jpg"
                                                  alt="user8"
                                                  width={48}
                                                  height={48}
                                                  className="rounded-circle"
                                                />
                                                <div>
                                                  <h6 className="fw-semibold mb-0">
                                                    Alexandra Flintoff
                                                  </h6>
                                                  <p className="mb-0">
                                                    hello@loremipsum.com
                                                  </p>
                                                </div>
                                              </div>
                                              <span className="badge text-bg-primary fs-2 rounded-4 py-1 px-2">
                                                Promotional
                                              </span>
                                            </div>
                                            <div className="border-bottom pb-7 mb-7">
                                              <h4 className="fw-semibold text-dark mb-3">
                                                Kindly check this latest updated
                                              </h4>
                                              <p className="mb-3 text-dark">
                                                Hello Andrew,
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Quisque bibendum hendrerit
                                                lobortis. Nullam ut lacus eros.
                                                Sed at luctus urna, eu fermentum
                                                diam. In et tristique mauris.
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Ut id ornare metus, sed auctor
                                                enim. Pellentesque nisi magna,
                                                laoreet a augue eget, tempor
                                                volutpat diam.
                                              </p>
                                              <p className="mb-0 text-dark">
                                                Regards,
                                              </p>
                                              <h6 className="fw-semibold mb-0 text-dark pb-1">
                                                Alexandra Flintoff
                                              </h6>
                                            </div>
                                            <div className="mb-3">
                                              <h6 className="fw-semibold mb-0 text-dark mb-3">
                                                Attachments
                                              </h6>
                                              <div className="d-block d-sm-flex align-items-center gap-4">
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 mb-2 mb-sm-0"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-adobe.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        service-task.pdf
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 file-chat-hover"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-zip-folder.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        work-project.zip
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="chat-list chat"
                                            data-user-id={3}
                                          >
                                            <div className="hstack align-items-start mb-7 pb-1 align-items-center justify-content-between">
                                              <div className="d-flex align-items-center gap-2">
                                                <img
                                                  src="../../dist/images/profile/user-2.jpg"
                                                  alt="user8"
                                                  width={48}
                                                  height={48}
                                                  className="rounded-circle"
                                                />
                                                <div>
                                                  <h6 className="fw-semibold mb-0">
                                                    Alexandra Flintoff
                                                  </h6>
                                                  <p className="mb-0">
                                                    hello@loremipsum.com
                                                  </p>
                                                </div>
                                              </div>
                                              <span className="badge text-bg-primary fs-2 rounded-4 py-1 px-2">
                                                Promotional
                                              </span>
                                            </div>
                                            <div className="border-bottom pb-7 mb-7">
                                              <h4 className="fw-semibold text-dark mb-3">
                                                Kindly check this latest updated
                                              </h4>
                                              <p className="mb-3 text-dark">
                                                Hello Andrew,
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Quisque bibendum hendrerit
                                                lobortis. Nullam ut lacus eros.
                                                Sed at luctus urna, eu fermentum
                                                diam. In et tristique mauris.
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Ut id ornare metus, sed auctor
                                                enim. Pellentesque nisi magna,
                                                laoreet a augue eget, tempor
                                                volutpat diam.
                                              </p>
                                              <p className="mb-0 text-dark">
                                                Regards,
                                              </p>
                                              <h6 className="fw-semibold mb-0 text-dark pb-1">
                                                Alexandra Flintoff
                                              </h6>
                                            </div>
                                            <div className="mb-3">
                                              <h6 className="fw-semibold mb-0 text-dark mb-3">
                                                Attachments
                                              </h6>
                                              <div className="d-block d-sm-flex align-items-center gap-4">
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 mb-2 mb-sm-0"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-adobe.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        service-task.pdf
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 file-chat-hover"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-zip-folder.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        work-project.zip
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="chat-list chat"
                                            data-user-id={4}
                                          >
                                            <div className="hstack align-items-start mb-7 pb-1 align-items-center justify-content-between">
                                              <div className="d-flex align-items-center gap-2">
                                                <img
                                                  src="../../dist/images/profile/user-3.jpg"
                                                  alt="user8"
                                                  width={48}
                                                  height={48}
                                                  className="rounded-circle"
                                                />
                                                <div>
                                                  <h6 className="fw-semibold mb-0">
                                                    Alexandra Flintoff
                                                  </h6>
                                                  <p className="mb-0">
                                                    hello@loremipsum.com
                                                  </p>
                                                </div>
                                              </div>
                                              <span className="badge text-bg-primary fs-2 rounded-4 py-1 px-2">
                                                Promotional
                                              </span>
                                            </div>
                                            <div className="border-bottom pb-7 mb-7">
                                              <h4 className="fw-semibold text-dark mb-3">
                                                Kindly check this latest updated
                                              </h4>
                                              <p className="mb-3 text-dark">
                                                Hello Andrew,
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Quisque bibendum hendrerit
                                                lobortis. Nullam ut lacus eros.
                                                Sed at luctus urna, eu fermentum
                                                diam. In et tristique mauris.
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Ut id ornare metus, sed auctor
                                                enim. Pellentesque nisi magna,
                                                laoreet a augue eget, tempor
                                                volutpat diam.
                                              </p>
                                              <p className="mb-0 text-dark">
                                                Regards,
                                              </p>
                                              <h6 className="fw-semibold mb-0 text-dark pb-1">
                                                Alexandra Flintoff
                                              </h6>
                                            </div>
                                            <div className="mb-3">
                                              <h6 className="fw-semibold mb-0 text-dark mb-3">
                                                Attachments
                                              </h6>
                                              <div className="d-block d-sm-flex align-items-center gap-4">
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 mb-2 mb-sm-0"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-adobe.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        service-task.pdf
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 file-chat-hover"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-zip-folder.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        work-project.zip
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="chat-list chat"
                                            data-user-id={5}
                                          >
                                            <div className="hstack align-items-start mb-7 pb-1 align-items-center justify-content-between">
                                              <div className="d-flex align-items-center gap-2">
                                                <img
                                                  src="../../dist/images/profile/user-4.jpg"
                                                  alt="user8"
                                                  width={48}
                                                  height={48}
                                                  className="rounded-circle"
                                                />
                                                <div>
                                                  <h6 className="fw-semibold mb-0">
                                                    Alexandra Flintoff
                                                  </h6>
                                                  <p className="mb-0">
                                                    hello@loremipsum.com
                                                  </p>
                                                </div>
                                              </div>
                                              <span className="badge text-bg-primary fs-2 rounded-4 py-1 px-2">
                                                Promotional
                                              </span>
                                            </div>
                                            <div className="border-bottom pb-7 mb-7">
                                              <h4 className="fw-semibold text-dark mb-3">
                                                Kindly check this latest updated
                                              </h4>
                                              <p className="mb-3 text-dark">
                                                Hello Andrew,
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Quisque bibendum hendrerit
                                                lobortis. Nullam ut lacus eros.
                                                Sed at luctus urna, eu fermentum
                                                diam. In et tristique mauris.
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Ut id ornare metus, sed auctor
                                                enim. Pellentesque nisi magna,
                                                laoreet a augue eget, tempor
                                                volutpat diam.
                                              </p>
                                              <p className="mb-0 text-dark">
                                                Regards,
                                              </p>
                                              <h6 className="fw-semibold mb-0 text-dark pb-1">
                                                Alexandra Flintoff
                                              </h6>
                                            </div>
                                            <div className="mb-3">
                                              <h6 className="fw-semibold mb-0 text-dark mb-3">
                                                Attachments
                                              </h6>
                                              <div className="d-block d-sm-flex align-items-center gap-4">
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 mb-2 mb-sm-0"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-adobe.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        service-task.pdf
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 file-chat-hover"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-zip-folder.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        work-project.zip
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="chat-list chat"
                                            data-user-id={6}
                                          >
                                            <div className="hstack align-items-start mb-7 pb-1 align-items-center justify-content-between">
                                              <div className="d-flex align-items-center gap-2">
                                                <img
                                                  src="../../dist/images/profile/user-5.jpg"
                                                  alt="user8"
                                                  width={48}
                                                  height={48}
                                                  className="rounded-circle"
                                                />
                                                <div>
                                                  <h6 className="fw-semibold mb-0">
                                                    Alexandra Flintoff
                                                  </h6>
                                                  <p className="mb-0">
                                                    hello@loremipsum.com
                                                  </p>
                                                </div>
                                              </div>
                                              <span className="badge text-bg-primary fs-2 rounded-4 py-1 px-2">
                                                Promotional
                                              </span>
                                            </div>
                                            <div className="border-bottom pb-7 mb-7">
                                              <h4 className="fw-semibold text-dark mb-3">
                                                Kindly check this latest updated
                                              </h4>
                                              <p className="mb-3 text-dark">
                                                Hello Andrew,
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Quisque bibendum hendrerit
                                                lobortis. Nullam ut lacus eros.
                                                Sed at luctus urna, eu fermentum
                                                diam. In et tristique mauris.
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Ut id ornare metus, sed auctor
                                                enim. Pellentesque nisi magna,
                                                laoreet a augue eget, tempor
                                                volutpat diam.
                                              </p>
                                              <p className="mb-0 text-dark">
                                                Regards,
                                              </p>
                                              <h6 className="fw-semibold mb-0 text-dark pb-1">
                                                Alexandra Flintoff
                                              </h6>
                                            </div>
                                            <div className="mb-3">
                                              <h6 className="fw-semibold mb-0 text-dark mb-3">
                                                Attachments
                                              </h6>
                                              <div className="d-block d-sm-flex align-items-center gap-4">
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 mb-2 mb-sm-0"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-adobe.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        service-task.pdf
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 file-chat-hover"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-zip-folder.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        work-project.zip
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="chat-list chat"
                                            data-user-id={7}
                                          >
                                            <div className="hstack align-items-start mb-7 pb-1 align-items-center justify-content-between">
                                              <div className="d-flex align-items-center gap-2">
                                                <img
                                                  src="../../dist/images/profile/user-6.jpg"
                                                  alt="user8"
                                                  width={48}
                                                  height={48}
                                                  className="rounded-circle"
                                                />
                                                <div>
                                                  <h6 className="fw-semibold mb-0">
                                                    Alexandra Flintoff
                                                  </h6>
                                                  <p className="mb-0">
                                                    hello@loremipsum.com
                                                  </p>
                                                </div>
                                              </div>
                                              <span className="badge text-bg-primary fs-2 rounded-4 py-1 px-2">
                                                Promotional
                                              </span>
                                            </div>
                                            <div className="border-bottom pb-7 mb-7">
                                              <h4 className="fw-semibold text-dark mb-3">
                                                Kindly check this latest updated
                                              </h4>
                                              <p className="mb-3 text-dark">
                                                Hello Andrew,
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Quisque bibendum hendrerit
                                                lobortis. Nullam ut lacus eros.
                                                Sed at luctus urna, eu fermentum
                                                diam. In et tristique mauris.
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Ut id ornare metus, sed auctor
                                                enim. Pellentesque nisi magna,
                                                laoreet a augue eget, tempor
                                                volutpat diam.
                                              </p>
                                              <p className="mb-0 text-dark">
                                                Regards,
                                              </p>
                                              <h6 className="fw-semibold mb-0 text-dark pb-1">
                                                Alexandra Flintoff
                                              </h6>
                                            </div>
                                            <div className="mb-3">
                                              <h6 className="fw-semibold mb-0 text-dark mb-3">
                                                Attachments
                                              </h6>
                                              <div className="d-block d-sm-flex align-items-center gap-4">
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 mb-2 mb-sm-0"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-adobe.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        service-task.pdf
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 file-chat-hover"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-zip-folder.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        work-project.zip
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                          <div
                                            className="chat-list chat"
                                            data-user-id={8}
                                          >
                                            <div className="hstack align-items-start mb-7 pb-1 align-items-center justify-content-between">
                                              <div className="d-flex align-items-center gap-2">
                                                <img
                                                  src="../../dist/images/profile/user-7.jpg"
                                                  alt="user8"
                                                  width={48}
                                                  height={48}
                                                  className="rounded-circle"
                                                />
                                                <div>
                                                  <h6 className="fw-semibold mb-0">
                                                    Alexandra Flintoff
                                                  </h6>
                                                  <p className="mb-0">
                                                    hello@loremipsum.com
                                                  </p>
                                                </div>
                                              </div>
                                              <span className="badge text-bg-primary fs-2 rounded-4 py-1 px-2">
                                                Promotional
                                              </span>
                                            </div>
                                            <div className="border-bottom pb-7 mb-7">
                                              <h4 className="fw-semibold text-dark mb-3">
                                                Kindly check this latest updated
                                              </h4>
                                              <p className="mb-3 text-dark">
                                                Hello Andrew,
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Quisque bibendum hendrerit
                                                lobortis. Nullam ut lacus eros.
                                                Sed at luctus urna, eu fermentum
                                                diam. In et tristique mauris.
                                              </p>
                                              <p className="mb-3 text-dark">
                                                Ut id ornare metus, sed auctor
                                                enim. Pellentesque nisi magna,
                                                laoreet a augue eget, tempor
                                                volutpat diam.
                                              </p>
                                              <p className="mb-0 text-dark">
                                                Regards,
                                              </p>
                                              <h6 className="fw-semibold mb-0 text-dark pb-1">
                                                Alexandra Flintoff
                                              </h6>
                                            </div>
                                            <div className="mb-3">
                                              <h6 className="fw-semibold mb-0 text-dark mb-3">
                                                Attachments
                                              </h6>
                                              <div className="d-block d-sm-flex align-items-center gap-4">
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 mb-2 mb-sm-0"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-adobe.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        service-task.pdf
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                                <a
                                                  href="javascript:void(0)"
                                                  className="hstack gap-3 file-chat-hover"
                                                >
                                                  <div className="d-flex align-items-center gap-3">
                                                    <div className="rounded-1 bg-light p-6">
                                                      <img
                                                        src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-zip-folder.svg"
                                                        alt=""
                                                        width={24}
                                                        height={24}
                                                      />
                                                    </div>
                                                    <div>
                                                      <h6 className="fw-semibold">
                                                        work-project.zip
                                                      </h6>
                                                      <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                        <span>2 MB</span>
                                                        <span>2 Dec 2023</span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="simplebar-placeholder"
                                    style={{ width: "auto", height: "537px" }}
                                  />
                                </div>
                                <div
                                  className="simplebar-track simplebar-horizontal"
                                  style={{ visibility: "hidden" }}
                                >
                                  <div
                                    className="simplebar-scrollbar"
                                    style={{ width: "0px", display: "none" }}
                                  />
                                </div>
                                <div
                                  className="simplebar-track simplebar-vertical"
                                  style={{ visibility: "visible" }}
                                >
                                  <div
                                    className="simplebar-scrollbar"
                                    style={{
                                      height: "25px",
                                      transform: "translate3d(0px, 0px, 0px)",
                                      display: "block",
                                    }}
                                  />
                                </div>
                              </div>
                              <div className="px-9 py-3 border-top chat-send-message-footer">
                                <div className="d-flex align-items-center justify-content-between">
                                  <ul className="list-unstyledn mb-0 d-flex align-items-center gap-7">
                                    <li>
                                      <a
                                        className="text-dark bg-hover-primary d-flex align-items-center gap-1"
                                        href="javascript:void(0)"
                                      >
                                        <i className="ti ti-arrow-back-up fs-5" />
                                        Reply
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="text-dark bg-hover-primary d-flex align-items-center gap-1"
                                        href="javascript:void(0)"
                                      >
                                        <i className="ti ti-arrow-forward-up fs-5" />
                                        Forward
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="offcanvas offcanvas-start user-chat-box"
                  tabIndex={-1}
                  id="chat-sidebar"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                      {" "}
                      Email{" "}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="px-9 pt-4 pb-3">
                    <button className="btn btn-primary fw-semibold py-8 w-100">
                      Compose
                    </button>
                  </div>
                  <ul
                    className="list-group"
                    style={{ height: "calc(100vh - 150px)" }}
                    data-simplebar="init"
                  >
                    <div
                      className="simplebar-wrapper"
                      style={{ margin: "0px" }}
                    >
                      <div className="simplebar-height-auto-observer-wrapper">
                        <div className="simplebar-height-auto-observer" />
                      </div>
                      <div className="simplebar-mask">
                        <div
                          className="simplebar-offset"
                          style={{ right: "0px", bottom: "0px" }}
                        >
                          <div
                            className="simplebar-content-wrapper"
                            tabIndex={0}
                            role="region"
                            aria-label="scrollable content"
                            style={{
                              height: "100%",
                              overflow: "hidden scroll",
                            }}
                          >
                            <div
                              className="simplebar-content"
                              style={{ padding: "0px" }}
                            >
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-inbox fs-5" />
                                  Inbox
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-brand-telegram fs-5" />
                                  Sent
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-file-text fs-5" />
                                  Draft
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-inbox fs-5" />
                                  Spam
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-trash fs-5" />
                                  Trash
                                </a>
                              </li>
                              <li className="border-bottom my-3" />
                              <li className="fw-semibold text-dark text-uppercase mx-9 my-2 px-3 fs-2">
                                IMPORTANT
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-star fs-5" />
                                  Starred
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-badge fs-5" />
                                  Important
                                </a>
                              </li>
                              <li className="border-bottom my-3" />
                              <li className="fw-semibold text-dark text-uppercase mx-9 my-2 px-3 fs-2">
                                LABELS
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-bookmark fs-5 text-primary" />
                                  Promotional
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-bookmark fs-5 text-warning" />
                                  Social
                                </a>
                              </li>
                              <li className="list-group-item border-0 p-0 mx-9">
                                <a
                                  className="d-flex align-items-center gap-2 list-group-item-action text-dark px-3 py-8 mb-1 rounded-1"
                                  href="javascript:void(0)"
                                >
                                  <i className="ti ti-bookmark fs-5 text-success" />
                                  Health
                                </a>
                              </li>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="simplebar-placeholder"
                        style={{ width: "auto", height: "560px" }}
                      />
                    </div>
                    <div
                      className="simplebar-track simplebar-horizontal"
                      style={{ visibility: "hidden" }}
                    >
                      <div
                        className="simplebar-scrollbar"
                        style={{ width: "0px", display: "none" }}
                      />
                    </div>
                    <div
                      className="simplebar-track simplebar-vertical"
                      style={{ visibility: "visible" }}
                    >
                      <div
                        className="simplebar-scrollbar"
                        style={{
                          height: "178px",
                          transform: "translate3d(0px, 0px, 0px)",
                          display: "block",
                        }}
                      />
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
