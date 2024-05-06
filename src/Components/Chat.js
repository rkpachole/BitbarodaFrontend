import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function chat() {
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
                    <h4 className="fw-semibold mb-8">Chat Application</h4>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a className="text-muted " href="index.html">
                            Dashboard
                          </a>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          Chats
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <div className="col-3">
                    <div className="text-center mb-n5">
                      <img
                        src="../../dist/images/breadcrumb/ChatBc.png"
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
              <div className="d-flex">
                <div className="w-30 d-none d-lg-block border-end user-chat-box">
                  <div className="px-4 pt-9 pb-6">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <div className="position-relative">
                          <img
                            src="../../dist/images/profile/user-1.jpg"
                            alt="user1"
                            width={54}
                            height={54}
                            className="rounded-circle"
                          />
                          <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-success">
                            <span className="visually-hidden">New alerts</span>
                          </span>
                        </div>
                        <div className="ms-3">
                          <h6 className="fw-semibold mb-2">Mathew Anderson</h6>
                          <p className="mb-0 fs-2">Marketing Director</p>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="text-dark fs-6 nav-icon-hover "
                          href="javascript:void(0)"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item d-flex align-items-center gap-2 border-bottom"
                              href="javascript:void(0)"
                            >
                              <span>
                                <i className="ti ti-settings fs-4" />
                              </span>
                              Setting
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item d-flex align-items-center gap-2"
                              href="javascript:void(0)"
                            >
                              <span>
                                <i className="ti ti-help fs-4" />
                              </span>
                              Help and feadback
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item d-flex align-items-center gap-2"
                              href="javascript:void(0)"
                            >
                              <span>
                                <i className="ti ti-layout-board-split fs-4" />
                              </span>
                              Enable split View mode
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item d-flex align-items-center gap-2 border-bottom"
                              href="javascript:void(0)"
                            >
                              <span>
                                <i className="ti ti-table-shortcut fs-4" />
                              </span>
                              Keyboard shortcut
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item d-flex align-items-center gap-2"
                              href="javascript:void(0)"
                            >
                              <span>
                                <i className="ti ti-login fs-4" />
                              </span>
                              Sign Out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <form className="position-relative mb-4">
                      <input
                        type="text"
                        className="form-control search-chat py-2 ps-5"
                        id="text-srh"
                        placeholder="Search Contact"
                      />
                      <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
                    </form>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Recent Chats
                        <i className="ti ti-chevron-down ms-1 fs-5" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Sort by time
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item border-bottom"
                            href="javascript:void(0)"
                          >
                            Sort by Unread
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Hide favourites
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="app-chat">
                    <ul
                      className="chat-users"
                      style={{ height: "calc(100vh - 496px)" }}
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
                                height: "auto",
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
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user bg-light"
                                    id="chat_user_1"
                                    data-user-id={1}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-1.jpg"
                                          alt="user1"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-success">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Michell Flintoff
                                        </h6>
                                        <span className="fs-3 text-truncate text-body-color d-block">
                                          You: Yesterdy was great...
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      15 minutes
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                    id="chat_user_2"
                                    data-user-id={2}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-2.jpg"
                                          alt="user-2"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-danger">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Bianca Anderson
                                        </h6>
                                        <span className="fs-3 text-truncate text-dark fw-semibold d-block">
                                          Nice looking dress you...
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      30 minutes
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                    id="chat_user_3"
                                    data-user-id={3}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-8.jpg"
                                          alt="user-8"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-warning">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Andrew Johnson
                                        </h6>
                                        <span className="fs-3 text-truncate text-body-color d-block">
                                          Sent a photo
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      2 hours
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                    id="chat_user_4"
                                    data-user-id={4}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-4.jpg"
                                          alt="user-4"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-success">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Mark Strokes
                                        </h6>
                                        <span className="fs-3 text-truncate text-body-color d-block">
                                          Lorem ispusm text sud...
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      5 days
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                    id="chat_user_5"
                                    data-user-id={5}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-1.jpg"
                                          alt="user1"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-success">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Mark, Stoinus &amp; Rishvi..
                                        </h6>
                                        <span className="fs-3 text-truncate text-dark fw-semibold d-block">
                                          Lorem ispusm text ...
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      5 days
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                    id="chat_user_2"
                                    data-user-id={2}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-2.jpg"
                                          alt="user-2"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-danger">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Bianca Anderson
                                        </h6>
                                        <span className="fs-3 text-truncate text-dark fw-semibold d-block">
                                          Nice looking dress you...
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      30 minutes
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                    id="chat_user_3"
                                    data-user-id={3}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-8.jpg"
                                          alt="user-8"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-warning">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Andrew Johnson
                                        </h6>
                                        <span className="fs-3 text-truncate text-body-color d-block">
                                          Sent a photo
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      2 hours
                                    </p>
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
                </div>
                <div className="w-70 w-xs-100 chat-container">
                  <div className="chat-box-inner-part h-100">
                    <div className="chat-not-selected h-100 d-none">
                      <div className="d-flex align-items-center justify-content-center h-100 p-5">
                        <div className="text-center">
                          <span className="text-primary">
                            <i className="ti ti-message-dots fs-10" />
                          </span>
                          <h6 className="mt-2">Open chat from the list</h6>
                        </div>
                      </div>
                    </div>
                    <div className="chatting-box d-block">
                      <div className="p-9 border-bottom chat-meta-user d-flex align-items-center justify-content-between">
                        <div className="hstack gap-3 current-chat-user-name">
                          <div className="position-relative">
                            <img
                              src="../../dist/images/profile/user-1.jpg"
                              alt="user1"
                              width={48}
                              height={48}
                              className="rounded-circle"
                            />
                            <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-success">
                              <span className="visually-hidden">
                                New alerts
                              </span>
                            </span>
                          </div>
                          <div className>
                            <h6 className="mb-1 name fw-semibold" />
                            <p className="mb-0">Away</p>
                          </div>
                        </div>
                        <ul className="list-unstyled mb-0 d-flex align-items-center">
                          <li>
                            <a
                              className="text-dark px-2 fs-7 bg-hover-primary nav-icon-hover position-relative z-index-5 "
                              href="javascript:void(0)"
                            >
                              <i className="ti ti-phone" />
                            </a>
                          </li>
                          <li>
                            <a
                              className="text-dark px-2 fs-7 bg-hover-primary nav-icon-hover position-relative z-index-5 "
                              href="javascript:void(0)"
                            >
                              <i className="ti ti-video" />
                            </a>
                          </li>
                          <li>
                            {/* <a class="text-dark px-2 fs-7 bg-hover-primary nav-icon-hover position-relative z-index-5 " href="javascript:void(0)" type="button" data-bs-toggle="offcanvas" data-bs-target="#app-chat-offcanvas" aria-controls="offcanvasScrolling">
                            <i class="ti ti-menu-2"></i>
                          </a> */}
                            <a
                              className="chat-menu text-dark px-2 fs-7 bg-hover-primary nav-icon-hover position-relative z-index-5"
                              href="javascript:void(0)"
                            >
                              <i className="ti ti-menu-2" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="position-relative overflow-hidden d-flex">
                        <div className="position-relative d-flex flex-grow-1 flex-column">
                          <div
                            className="chat-box p-9"
                            style={{ height: "calc(100vh - 442px)" }}
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
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light rounded-1 d-inline-block text-dark fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-end">
                                          <div className="text-end">
                                            <h6 className="fs-2 text-muted">
                                              2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light-info text-dark rounded-1 d-inline-block fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light rounded-1 d-inline-block text-dark fs-3">
                                              {" "}
                                              I want more detailed information.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-end">
                                          <div className="text-end">
                                            <h6 className="fs-2 text-muted">
                                              2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light-info text-dark mb-1 d-inline-block rounded-1  fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                            <div className="p-2 bg-light-info text-dark rounded-1 fs-3">
                                              {" "}
                                              They got there early, and they got
                                              really good seats.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="rounded-2 overflow-hidden">
                                              <img
                                                src="../../dist/images/products/product-1.jpg"
                                                alt=""
                                                className="w-100"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* 2 */}
                                      <div
                                        className="chat-list chat"
                                        data-user-id={2}
                                      >
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light rounded-1 d-inline-block text-dark fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-end">
                                          <div className="text-end">
                                            <h6 className="fs-2 text-muted">
                                              2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light-info text-dark rounded-1 d-inline-block fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light rounded-1 d-inline-block text-dark fs-3">
                                              {" "}
                                              I want more detailed information.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-end">
                                          <div className="text-end">
                                            <h6 className="fs-2 text-muted">
                                              2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light-info text-dark mb-1 d-inline-block rounded-1  fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                            <div className="p-2 bg-light-info text-dark rounded-1 fs-3">
                                              {" "}
                                              They got there early, and they got
                                              really good seats.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="rounded-2 overflow-hidden">
                                              <img
                                                src="../../dist/images/products/product-1.jpg"
                                                alt=""
                                                className="w-100"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* 3 */}
                                      <div
                                        className="chat-list chat"
                                        data-user-id={3}
                                      >
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light rounded-1 d-inline-block text-dark fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-end">
                                          <div className="text-end">
                                            <h6 className="fs-2 text-muted">
                                              2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light-info text-dark rounded-1 d-inline-block fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light rounded-1 d-inline-block text-dark fs-3">
                                              {" "}
                                              I want more detailed information.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-end">
                                          <div className="text-end">
                                            <h6 className="fs-2 text-muted">
                                              2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light-info text-dark mb-1 d-inline-block rounded-1  fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                            <div className="p-2 bg-light-info text-dark rounded-1 fs-3">
                                              {" "}
                                              They got there early, and they got
                                              really good seats.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="rounded-2 overflow-hidden">
                                              <img
                                                src="../../dist/images/products/product-1.jpg"
                                                alt=""
                                                className="w-100"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* 4 */}
                                      <div
                                        className="chat-list chat"
                                        data-user-id={4}
                                      >
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light rounded-1 d-inline-block text-dark fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-end">
                                          <div className="text-end">
                                            <h6 className="fs-2 text-muted">
                                              2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light-info text-dark rounded-1 d-inline-block fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light rounded-1 d-inline-block text-dark fs-3">
                                              {" "}
                                              I want more detailed information.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-end">
                                          <div className="text-end">
                                            <h6 className="fs-2 text-muted">
                                              2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light-info text-dark mb-1 d-inline-block rounded-1  fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                            <div className="p-2 bg-light-info text-dark rounded-1 fs-3">
                                              {" "}
                                              They got there early, and they got
                                              really good seats.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="rounded-2 overflow-hidden">
                                              <img
                                                src="../../dist/images/products/product-1.jpg"
                                                alt=""
                                                className="w-100"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* 5 */}
                                      <div
                                        className="chat-list chat"
                                        data-user-id={5}
                                      >
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light rounded-1 d-inline-block text-dark fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-end">
                                          <div className="text-end">
                                            <h6 className="fs-2 text-muted">
                                              2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light-info text-dark rounded-1 d-inline-block fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light rounded-1 d-inline-block text-dark fs-3">
                                              {" "}
                                              I want more detailed information.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-end">
                                          <div className="text-end">
                                            <h6 className="fs-2 text-muted">
                                              2 hours ago
                                            </h6>
                                            <div className="p-2 bg-light-info text-dark mb-1 d-inline-block rounded-1  fs-3">
                                              {" "}
                                              If I don’t like something, I’ll
                                              stay away from it.{" "}
                                            </div>
                                            <div className="p-2 bg-light-info text-dark rounded-1 fs-3">
                                              {" "}
                                              They got there early, and they got
                                              really good seats.{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="hstack gap-3 align-items-start mb-7 justify-content-start">
                                          <img
                                            src="../../dist/images/profile/user-8.jpg"
                                            alt="user8"
                                            width={40}
                                            height={40}
                                            className="rounded-circle"
                                          />
                                          <div>
                                            <h6 className="fs-2 text-muted">
                                              Andrew, 2 hours ago
                                            </h6>
                                            <div className="rounded-2 overflow-hidden">
                                              <img
                                                src="../../dist/images/products/product-1.jpg"
                                                alt=""
                                                className="w-100"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="simplebar-placeholder"
                                style={{ width: "auto", height: "577px" }}
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
                                  transform: "translate3d(0px, 7px, 0px)",
                                  display: "block",
                                }}
                              />
                            </div>
                          </div>
                          <div className="px-9 py-6 border-top chat-send-message-footer">
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="d-flex align-items-center gap-2 w-85">
                                <a
                                  className="position-relative nav-icon-hover z-index-5"
                                  href="javascript:void(0)"
                                >
                                  {" "}
                                  <i className="ti ti-mood-smile text-dark bg-hover-primary fs-7" />
                                </a>
                                <input
                                  type="text"
                                  className="form-control message-type-box text-muted border-0 p-0 ms-2"
                                  placeholder="Type a Message"
                                />
                              </div>
                              <ul className="list-unstyledn mb-0 d-flex align-items-center">
                                <li>
                                  <a
                                    className="text-dark px-2 fs-7 bg-hover-primary nav-icon-hover position-relative z-index-5 "
                                    href="javascript:void(0)"
                                  >
                                    <i className="ti ti-photo-plus" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="text-dark px-2 fs-7 bg-hover-primary nav-icon-hover position-relative z-index-5 "
                                    href="javascript:void(0)"
                                  >
                                    <i className="ti ti-paperclip" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="text-dark px-2 fs-7 bg-hover-primary nav-icon-hover position-relative z-index-5 "
                                    href="javascript:void(0)"
                                  >
                                    <i className="ti ti-microphone" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div
                          className="app-chat-offcanvas border-start"
                          style={{ height: "calc(100vh - 380px)" }}
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
                                    <div className="p-3 d-flex align-items-center justify-content-between">
                                      <h6 className="fw-semibold mb-0">
                                        Media{" "}
                                        <span className="text-muted">(36)</span>
                                      </h6>
                                      <a
                                        className="chat-menu d-lg-none d-block text-dark fs-6 bg-hover-primary nav-icon-hover position-relative z-index-5"
                                        href="javascript:void(0)"
                                      >
                                        <i className="ti ti-x" />
                                      </a>
                                    </div>
                                    <div className="offcanvas-body p-9">
                                      <div className="media-chat mb-7">
                                        <div className="row">
                                          <div className="col-4 px-1">
                                            <div className="rounded-1 overflow-hidden mb-2">
                                              <img
                                                src="../../dist/images/products/product-1.jpg"
                                                alt=""
                                                className="w-100"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-4 px-1">
                                            <div className="rounded-1 overflow-hidden mb-2">
                                              <img
                                                src="../../dist/images/products/product-2.jpg"
                                                alt=""
                                                className="w-100"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-4 px-1">
                                            <div className="rounded-1 overflow-hidden mb-2">
                                              <img
                                                src="../../dist/images/products/product-3.jpg"
                                                alt=""
                                                className="w-100"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-4 px-1">
                                            <div className="rounded-1 overflow-hidden mb-2">
                                              <img
                                                src="../../dist/images/products/product-4.jpg"
                                                alt=""
                                                className="w-100"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-4 px-1">
                                            <div className="rounded-1 overflow-hidden mb-2">
                                              <img
                                                src="../../dist/images/products/product-1.jpg"
                                                alt=""
                                                className="w-100"
                                              />
                                            </div>
                                          </div>
                                          <div className="col-4 px-1">
                                            <div className="rounded-1 overflow-hidden mb-2">
                                              <img
                                                src="../../dist/images/products/product-2.jpg"
                                                alt=""
                                                className="w-100"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="files-chat">
                                        <h6 className="fw-semibold mb-3">
                                          Files{" "}
                                          <span className="text-muted">
                                            (36)
                                          </span>
                                        </h6>
                                        <a
                                          href="javascript:void(0)"
                                          className="hstack gap-3 file-chat-hover justify-content-between mb-9"
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
                                          <span className="position-relative nav-icon-hover download-file">
                                            <i className="ti ti-download text-dark fs-6 bg-hover-primary" />
                                          </span>
                                        </a>
                                        <a
                                          href="javascript:void(0)"
                                          className="hstack gap-3 file-chat-hover justify-content-between mb-9"
                                        >
                                          <div className="d-flex align-items-center gap-3">
                                            <div className="rounded-1 bg-light p-6">
                                              <img
                                                src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-figma.svg"
                                                alt=""
                                                width={24}
                                                height={24}
                                              />
                                            </div>
                                            <div>
                                              <h6 className="fw-semibold">
                                                homepage-design.fig
                                              </h6>
                                              <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                <span>2 MB</span>
                                                <span>2 Dec 2023</span>
                                              </div>
                                            </div>
                                          </div>
                                          <span className="position-relative nav-icon-hover download-file">
                                            <i className="ti ti-download text-dark fs-6 bg-hover-primary" />
                                          </span>
                                        </a>
                                        <a
                                          href="javascript:void(0)"
                                          className="hstack gap-3 file-chat-hover justify-content-between mb-9"
                                        >
                                          <div className="d-flex align-items-center gap-3">
                                            <div className="rounded-1 bg-light p-6">
                                              <img
                                                src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-chrome.svg"
                                                alt=""
                                                width={24}
                                                height={24}
                                              />
                                            </div>
                                            <div>
                                              <h6 className="fw-semibold">
                                                about-us.html
                                              </h6>
                                              <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                <span>2 MB</span>
                                                <span>2 Dec 2023</span>
                                              </div>
                                            </div>
                                          </div>
                                          <span className="position-relative nav-icon-hover download-file">
                                            <i className="ti ti-download text-dark fs-6 bg-hover-primary" />
                                          </span>
                                        </a>
                                        <a
                                          href="javascript:void(0)"
                                          className="hstack gap-3 file-chat-hover justify-content-between mb-9"
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
                                          <span className="position-relative nav-icon-hover download-file">
                                            <i className="ti ti-download text-dark fs-6 bg-hover-primary" />
                                          </span>
                                        </a>
                                        <a
                                          href="javascript:void(0)"
                                          className="hstack gap-3 file-chat-hover justify-content-between"
                                        >
                                          <div className="d-flex align-items-center gap-3">
                                            <div className="rounded-1 bg-light p-6">
                                              <img
                                                src="https://demos.adminmart.com/premium/bootstrap/modernize-bootstrap/package/dist/images/chat/icon-javascript.svg"
                                                alt=""
                                                width={24}
                                                height={24}
                                              />
                                            </div>
                                            <div>
                                              <h6 className="fw-semibold">
                                                custom.js
                                              </h6>
                                              <div className="d-flex align-items-center gap-3 fs-2 text-muted">
                                                <span>2 MB</span>
                                                <span>2 Dec 2023</span>
                                              </div>
                                            </div>
                                          </div>
                                          <span className="position-relative nav-icon-hover download-file">
                                            <i className="ti ti-download text-dark fs-6 bg-hover-primary" />
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="simplebar-placeholder"
                              style={{ width: "auto", height: "618px" }}
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
                                transform: "translate3d(0px, 27px, 0px)",
                                display: "block",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="offcanvas offcanvas-start user-chat-box chat-offcanvas"
                  tabIndex={-1}
                  id="chat-sidebar"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                      {" "}
                      Chats{" "}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="px-4 pt-9 pb-6">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <div className="position-relative">
                          <img
                            src="../../dist/images/profile/user-1.jpg"
                            alt="user1"
                            width={54}
                            height={54}
                            className="rounded-circle"
                          />
                          <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-success">
                            <span className="visually-hidden">New alerts</span>
                          </span>
                        </div>
                        <div className="ms-3">
                          <h6 className="fw-semibold mb-2">Mathew Anderson</h6>
                          <p className="mb-0 fs-2">Marketing Director</p>
                        </div>
                      </div>
                      <div className="dropdown">
                        <a
                          className="text-dark fs-6 nav-icon-hover "
                          href="javascript:void(0)"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ti ti-dots-vertical" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item d-flex align-items-center gap-2 border-bottom"
                              href="javascript:void(0)"
                            >
                              <span>
                                <i className="ti ti-settings fs-4" />
                              </span>
                              Setting
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item d-flex align-items-center gap-2"
                              href="javascript:void(0)"
                            >
                              <span>
                                <i className="ti ti-help fs-4" />
                              </span>
                              Help and feadback
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item d-flex align-items-center gap-2"
                              href="javascript:void(0)"
                            >
                              <span>
                                <i className="ti ti-layout-board-split fs-4" />
                              </span>
                              Enable split View mode
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item d-flex align-items-center gap-2 border-bottom"
                              href="javascript:void(0)"
                            >
                              <span>
                                <i className="ti ti-table-shortcut fs-4" />
                              </span>
                              Keyboard shortcut
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item d-flex align-items-center gap-2"
                              href="javascript:void(0)"
                            >
                              <span>
                                <i className="ti ti-login fs-4" />
                              </span>
                              Sign Out
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <form className="position-relative mb-4">
                      <input
                        type="text"
                        className="form-control search-chat py-2 ps-5"
                        id="text-srh"
                        placeholder="Search Contact"
                      />
                      <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3" />
                    </form>
                    <div className="dropdown">
                      <a
                        className="text-muted fw-semibold d-flex align-items-center"
                        href="javascript:void(0)"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Recent Chats
                        <i className="ti ti-chevron-down ms-1 fs-5" />
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Sort by time
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item border-bottom"
                            href="javascript:void(0)"
                          >
                            Sort by Unread
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0)"
                          >
                            Hide favourites
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="app-chat">
                    <ul
                      className="chat-users"
                      style={{ height: "calc(100vh - 200px)" }}
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
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user bg-light"
                                    id="chat_user_1"
                                    data-user-id={1}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-1.jpg"
                                          alt="user1"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-success">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Michell Flintoff
                                        </h6>
                                        <span className="fs-3 text-truncate text-body-color d-block">
                                          You: Yesterdy was great...
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      15 mins
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                    id="chat_user_2"
                                    data-user-id={2}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-2.jpg"
                                          alt="user-2"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-danger">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Bianca Anderson
                                        </h6>
                                        <span className="fs-3 text-truncate text-dark fw-semibold d-block">
                                          Nice looking dress you...
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      30 mins
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                    id="chat_user_3"
                                    data-user-id={3}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-8.jpg"
                                          alt="user-8"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-warning">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Andrew Johnson
                                        </h6>
                                        <span className="fs-3 text-truncate text-body-color d-block">
                                          Sent a photo
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      2 hrs
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                    id="chat_user_4"
                                    data-user-id={4}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-4.jpg"
                                          alt="user-4"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-success">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Mark Strokes
                                        </h6>
                                        <span className="fs-3 text-truncate text-body-color d-block">
                                          Lorem ispusm text sud...
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      5 days
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                    id="chat_user_5"
                                    data-user-id={5}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-1.jpg"
                                          alt="user1"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-success">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Mark, Stoinus &amp; Rishvi..
                                        </h6>
                                        <span className="fs-3 text-truncate text-dark fw-semibold d-block">
                                          Lorem ispusm text ...
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      5 days
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                    id="chat_user_2"
                                    data-user-id={2}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-2.jpg"
                                          alt="user-2"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-danger">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Bianca Anderson
                                        </h6>
                                        <span className="fs-3 text-truncate text-dark fw-semibold d-block">
                                          Nice looking dress you...
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      30 mins
                                    </p>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="javascript:void(0)"
                                    className="px-4 py-3 bg-hover-light-black d-flex align-items-start justify-content-between chat-user"
                                    id="chat_user_3"
                                    data-user-id={3}
                                  >
                                    <div className="d-flex align-items-center">
                                      <span className="position-relative">
                                        <img
                                          src="../../dist/images/profile/user-8.jpg"
                                          alt="user-8"
                                          width={48}
                                          height={48}
                                          className="rounded-circle"
                                        />
                                        <span className="position-absolute bottom-0 end-0 p-1 badge rounded-pill bg-warning">
                                          <span className="visually-hidden">
                                            New alerts
                                          </span>
                                        </span>
                                      </span>
                                      <div className="ms-3 d-inline-block w-75">
                                        <h6
                                          className="mb-1 fw-semibold chat-title"
                                          data-username="James Anderson"
                                        >
                                          Andrew Johnson
                                        </h6>
                                        <span className="fs-3 text-truncate text-body-color d-block">
                                          Sent a photo
                                        </span>
                                      </div>
                                    </div>
                                    <p className="fs-2 mb-0 text-muted">
                                      2 hrs
                                    </p>
                                  </a>
                                </li>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="simplebar-placeholder"
                          style={{ width: "auto", height: "571px" }}
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
                            height: "123px",
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
    </div>
  );
}

export default chat;
