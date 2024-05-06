import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
function Calendar() {
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
                    <h4 className="fw-semibold mb-8">Calendar</h4>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a className="text-muted " href="index.html">
                            Dashboard
                          </a>
                        </li>
                        <li className="breadcrumb-item" aria-current="page">
                          Calendar
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
            <div className="card">
              <div>
                <div className="row gx-0">
                  <div className="col-lg-12">
                    <div className="p-4 calender-sidebar app-calendar">
                      <div
                        id="calendar"
                        className="fc fc-media-screen fc-direction-ltr fc-theme-standard"
                        style={{ height: "1052px" }}
                      >
                        <div className="fc-header-toolbar fc-toolbar fc-toolbar-ltr">
                          <div className="fc-toolbar-chunk">
                            <button
                              type="button"
                              title="Previous month"
                              aria-pressed="false"
                              className="fc-prev-button fc-button fc-button-primary"
                            >
                              <span className="fc-icon fc-icon-chevron-left" />
                            </button>
                            <button
                              type="button"
                              title="Next month"
                              aria-pressed="false"
                              className="fc-next-button fc-button fc-button-primary"
                            >
                              <span className="fc-icon fc-icon-chevron-right" />
                            </button>
                            <button
                              type="button"
                              title="Add Event"
                              aria-pressed="false"
                              className="fc-addEventButton-button fc-button fc-button-primary"
                            >
                              Add Event
                            </button>
                          </div>
                          <div className="fc-toolbar-chunk">
                            <h2 className="fc-toolbar-title" id="fc-dom-1">
                              July 2023
                            </h2>
                          </div>
                          <div className="fc-toolbar-chunk">
                            <div className="fc-button-group">
                              <button
                                type="button"
                                title="month view"
                                aria-pressed="true"
                                className="fc-dayGridMonth-button fc-button fc-button-primary fc-button-active"
                              >
                                month
                              </button>
                              <button
                                type="button"
                                title="week view"
                                aria-pressed="false"
                                className="fc-timeGridWeek-button fc-button fc-button-primary"
                              >
                                week
                              </button>
                              <button
                                type="button"
                                title="day view"
                                aria-pressed="false"
                                className="fc-timeGridDay-button fc-button fc-button-primary"
                              >
                                day
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-labelledby="fc-dom-1"
                          className="fc-view-harness fc-view-harness-active"
                        >
                          <div className="fc-dayGridMonth-view fc-view fc-daygrid">
                            <table
                              role="grid"
                              className="fc-scrollgrid  fc-scrollgrid-liquid"
                            >
                              <thead role="rowgroup">
                                <tr
                                  role="presentation"
                                  className="fc-scrollgrid-section fc-scrollgrid-section-header "
                                >
                                  <th role="presentation">
                                    <div className="fc-scroller-harness">
                                      <div
                                        className="fc-scroller"
                                        style={{ overflow: "hidden" }}
                                      >
                                        <table
                                          role="presentation"
                                          className="fc-col-header "
                                          style={{ width: "1104px" }}
                                        >
                                          <colgroup />
                                          <thead role="presentation">
                                            <tr role="row">
                                              <th
                                                role="columnheader"
                                                className="fc-col-header-cell fc-day fc-day-sun"
                                              >
                                                <div className="fc-scrollgrid-sync-inner">
                                                  <a
                                                    aria-label="Sunday"
                                                    className="fc-col-header-cell-cushion"
                                                  >
                                                    Sun
                                                  </a>
                                                </div>
                                              </th>
                                              <th
                                                role="columnheader"
                                                className="fc-col-header-cell fc-day fc-day-mon"
                                              >
                                                <div className="fc-scrollgrid-sync-inner">
                                                  <a
                                                    aria-label="Monday"
                                                    className="fc-col-header-cell-cushion"
                                                  >
                                                    Mon
                                                  </a>
                                                </div>
                                              </th>
                                              <th
                                                role="columnheader"
                                                className="fc-col-header-cell fc-day fc-day-tue"
                                              >
                                                <div className="fc-scrollgrid-sync-inner">
                                                  <a
                                                    aria-label="Tuesday"
                                                    className="fc-col-header-cell-cushion"
                                                  >
                                                    Tue
                                                  </a>
                                                </div>
                                              </th>
                                              <th
                                                role="columnheader"
                                                className="fc-col-header-cell fc-day fc-day-wed"
                                              >
                                                <div className="fc-scrollgrid-sync-inner">
                                                  <a
                                                    aria-label="Wednesday"
                                                    className="fc-col-header-cell-cushion"
                                                  >
                                                    Wed
                                                  </a>
                                                </div>
                                              </th>
                                              <th
                                                role="columnheader"
                                                className="fc-col-header-cell fc-day fc-day-thu"
                                              >
                                                <div className="fc-scrollgrid-sync-inner">
                                                  <a
                                                    aria-label="Thursday"
                                                    className="fc-col-header-cell-cushion"
                                                  >
                                                    Thu
                                                  </a>
                                                </div>
                                              </th>
                                              <th
                                                role="columnheader"
                                                className="fc-col-header-cell fc-day fc-day-fri"
                                              >
                                                <div className="fc-scrollgrid-sync-inner">
                                                  <a
                                                    aria-label="Friday"
                                                    className="fc-col-header-cell-cushion"
                                                  >
                                                    Fri
                                                  </a>
                                                </div>
                                              </th>
                                              <th
                                                role="columnheader"
                                                className="fc-col-header-cell fc-day fc-day-sat"
                                              >
                                                <div className="fc-scrollgrid-sync-inner">
                                                  <a
                                                    aria-label="Saturday"
                                                    className="fc-col-header-cell-cushion"
                                                  >
                                                    Sat
                                                  </a>
                                                </div>
                                              </th>
                                            </tr>
                                          </thead>
                                        </table>
                                      </div>
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <tbody role="rowgroup">
                                <tr
                                  role="presentation"
                                  className="fc-scrollgrid-section fc-scrollgrid-section-body  fc-scrollgrid-section-liquid"
                                >
                                  <td role="presentation">
                                    <div className="fc-scroller-harness fc-scroller-harness-liquid">
                                      <div
                                        className="fc-scroller fc-scroller-liquid-absolute"
                                        style={{ overflow: "hidden auto" }}
                                      >
                                        <div
                                          className="fc-daygrid-body fc-daygrid-body-unbalanced "
                                          style={{ width: "1102px" }}
                                        >
                                          <table
                                            role="presentation"
                                            className="fc-scrollgrid-sync-table"
                                            style={{
                                              width: "1102px",
                                              height: "966px",
                                            }}
                                          >
                                            <colgroup />
                                            <tbody role="presentation">
                                              <tr role="row">
                                                <td
                                                  aria-labelledby="fc-dom-2"
                                                  role="gridcell"
                                                  data-date="2023-06-25"
                                                  className="fc-day fc-day-sun fc-day-past fc-day-other fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="June 25, 2023"
                                                        id="fc-dom-2"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        25
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-4"
                                                  role="gridcell"
                                                  data-date="2023-06-26"
                                                  className="fc-day fc-day-mon fc-day-past fc-day-other fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="June 26, 2023"
                                                        id="fc-dom-4"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        26
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-6"
                                                  role="gridcell"
                                                  data-date="2023-06-27"
                                                  className="fc-day fc-day-tue fc-day-past fc-day-other fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="June 27, 2023"
                                                        id="fc-dom-6"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        27
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-8"
                                                  role="gridcell"
                                                  data-date="2023-06-28"
                                                  className="fc-day fc-day-wed fc-day-past fc-day-other fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="June 28, 2023"
                                                        id="fc-dom-8"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        28
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-10"
                                                  role="gridcell"
                                                  data-date="2023-06-29"
                                                  className="fc-day fc-day-thu fc-day-past fc-day-other fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="June 29, 2023"
                                                        id="fc-dom-10"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        29
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-12"
                                                  role="gridcell"
                                                  data-date="2023-06-30"
                                                  className="fc-day fc-day-fri fc-day-past fc-day-other fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="June 30, 2023"
                                                        id="fc-dom-12"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        30
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-14"
                                                  role="gridcell"
                                                  data-date="2023-07-01"
                                                  className="fc-day fc-day-sat fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 1, 2023"
                                                        id="fc-dom-14"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        1
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-event-harness"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      >
                                                        <a
                                                          tabIndex={0}
                                                          className="fc-event fc-event-start fc-event-end fc-event-past fc-daygrid-event fc-daygrid-block-event fc-h-event event-fc-color fc-bg-danger"
                                                        >
                                                          <div className="fc-event-main">
                                                            <div className="fc-event-main-frame">
                                                              <div className="fc-event-title-container">
                                                                <div className="fc-event-title fc-sticky">
                                                                  Event Conf.
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </a>
                                                      </div>
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr role="row">
                                                <td
                                                  aria-labelledby="fc-dom-16"
                                                  role="gridcell"
                                                  data-date="2023-07-02"
                                                  className="fc-day fc-day-sun fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 2, 2023"
                                                        id="fc-dom-16"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        2
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-18"
                                                  role="gridcell"
                                                  data-date="2023-07-03"
                                                  className="fc-day fc-day-mon fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 3, 2023"
                                                        id="fc-dom-18"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        3
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-20"
                                                  role="gridcell"
                                                  data-date="2023-07-04"
                                                  className="fc-day fc-day-tue fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 4, 2023"
                                                        id="fc-dom-20"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        4
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-22"
                                                  role="gridcell"
                                                  data-date="2023-07-05"
                                                  className="fc-day fc-day-wed fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 5, 2023"
                                                        id="fc-dom-22"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        5
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-24"
                                                  role="gridcell"
                                                  data-date="2023-07-06"
                                                  className="fc-day fc-day-thu fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 6, 2023"
                                                        id="fc-dom-24"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        6
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-26"
                                                  role="gridcell"
                                                  data-date="2023-07-07"
                                                  className="fc-day fc-day-fri fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 7, 2023"
                                                        id="fc-dom-26"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        7
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                        style={{
                                                          top: "0px",
                                                          left: "0px",
                                                          right: "-157.95px",
                                                        }}
                                                      >
                                                        <a
                                                          tabIndex={0}
                                                          className="fc-event fc-event-start fc-event-past fc-daygrid-event fc-daygrid-block-event fc-h-event event-fc-color fc-bg-success"
                                                        >
                                                          <div className="fc-event-main">
                                                            <div className="fc-event-main-frame">
                                                              <div className="fc-event-title-container">
                                                                <div className="fc-event-title fc-sticky">
                                                                  Seminar #4
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </a>
                                                      </div>
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "32px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-28"
                                                  role="gridcell"
                                                  data-date="2023-07-08"
                                                  className="fc-day fc-day-sat fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 8, 2023"
                                                        id="fc-dom-28"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        8
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "32px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr role="row">
                                                <td
                                                  aria-labelledby="fc-dom-30"
                                                  role="gridcell"
                                                  data-date="2023-07-09"
                                                  className="fc-day fc-day-sun fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 9, 2023"
                                                        id="fc-dom-30"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        9
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-event-harness"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      >
                                                        <a
                                                          tabIndex={0}
                                                          className="fc-event fc-event-end fc-event-past fc-daygrid-event fc-daygrid-block-event fc-h-event event-fc-color fc-bg-success"
                                                        >
                                                          <div className="fc-event-main">
                                                            <div className="fc-event-main-frame">
                                                              <div className="fc-event-title-container">
                                                                <div className="fc-event-title fc-sticky">
                                                                  Seminar #4
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </a>
                                                      </div>
                                                      <div
                                                        className="fc-daygrid-event-harness"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      >
                                                        <a
                                                          tabIndex={0}
                                                          className="fc-event fc-event-start fc-event-end fc-event-past fc-daygrid-event fc-daygrid-dot-event event-fc-color fc-bg-primary"
                                                        >
                                                          <div className="fc-daygrid-event-dot" />
                                                          <div className="fc-event-time">
                                                            4p
                                                          </div>
                                                          <div className="fc-event-title">
                                                            Meeting #5
                                                          </div>
                                                        </a>
                                                      </div>
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-32"
                                                  role="gridcell"
                                                  data-date="2023-07-10"
                                                  className="fc-day fc-day-mon fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 10, 2023"
                                                        id="fc-dom-32"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        10
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-34"
                                                  role="gridcell"
                                                  data-date="2023-07-11"
                                                  className="fc-day fc-day-tue fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 11, 2023"
                                                        id="fc-dom-34"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        11
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-event-harness fc-daygrid-event-harness-abs"
                                                        style={{
                                                          top: "0px",
                                                          left: "0px",
                                                          right: "-157.475px",
                                                        }}
                                                      >
                                                        <a
                                                          tabIndex={0}
                                                          className="fc-event fc-event-start fc-event-end fc-event-past fc-daygrid-event fc-daygrid-block-event fc-h-event event-fc-color fc-bg-danger"
                                                        >
                                                          <div className="fc-event-main">
                                                            <div className="fc-event-main-frame">
                                                              <div className="fc-event-title-container">
                                                                <div className="fc-event-title fc-sticky">
                                                                  Seminar #6
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </a>
                                                      </div>
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "32px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-36"
                                                  role="gridcell"
                                                  data-date="2023-07-12"
                                                  className="fc-day fc-day-wed fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 12, 2023"
                                                        id="fc-dom-36"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        12
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-event-harness"
                                                        style={{
                                                          marginTop: "32px",
                                                        }}
                                                      >
                                                        <a
                                                          tabIndex={0}
                                                          className="fc-event fc-event-start fc-event-end fc-event-past fc-daygrid-event fc-daygrid-dot-event event-fc-color fc-bg-success"
                                                        >
                                                          <div className="fc-daygrid-event-dot" />
                                                          <div className="fc-event-time">
                                                            10:30a
                                                          </div>
                                                          <div className="fc-event-title">
                                                            Meeting 3
                                                          </div>
                                                        </a>
                                                      </div>
                                                      <div
                                                        className="fc-daygrid-event-harness"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      >
                                                        <a
                                                          tabIndex={0}
                                                          className="fc-event fc-event-start fc-event-end fc-event-past fc-daygrid-event fc-daygrid-dot-event event-fc-color fc-bg-primary"
                                                        >
                                                          <div className="fc-daygrid-event-dot" />
                                                          <div className="fc-event-time">
                                                            12p
                                                          </div>
                                                          <div className="fc-event-title">
                                                            Meetup #
                                                          </div>
                                                        </a>
                                                      </div>
                                                      <div
                                                        className="fc-daygrid-event-harness"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      >
                                                        <a
                                                          tabIndex={0}
                                                          className="fc-event fc-event-start fc-event-end fc-event-past fc-daygrid-event fc-daygrid-dot-event event-fc-color fc-bg-warning"
                                                        >
                                                          <div className="fc-daygrid-event-dot" />
                                                          <div className="fc-event-time">
                                                            2:30p
                                                          </div>
                                                          <div className="fc-event-title">
                                                            Submission
                                                          </div>
                                                        </a>
                                                      </div>
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-38"
                                                  role="gridcell"
                                                  data-date="2023-07-13"
                                                  className="fc-day fc-day-thu fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 13, 2023"
                                                        id="fc-dom-38"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        13
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-event-harness"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      >
                                                        <a
                                                          tabIndex={0}
                                                          className="fc-event fc-event-start fc-event-end fc-event-past fc-daygrid-event fc-daygrid-dot-event event-fc-color fc-bg-success"
                                                        >
                                                          <div className="fc-daygrid-event-dot" />
                                                          <div className="fc-event-time">
                                                            7a
                                                          </div>
                                                          <div className="fc-event-title">
                                                            Attend event
                                                          </div>
                                                        </a>
                                                      </div>
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-40"
                                                  role="gridcell"
                                                  data-date="2023-07-14"
                                                  className="fc-day fc-day-fri fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 14, 2023"
                                                        id="fc-dom-40"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        14
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-42"
                                                  role="gridcell"
                                                  data-date="2023-07-15"
                                                  className="fc-day fc-day-sat fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 15, 2023"
                                                        id="fc-dom-42"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        15
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr role="row">
                                                <td
                                                  aria-labelledby="fc-dom-44"
                                                  role="gridcell"
                                                  data-date="2023-07-16"
                                                  className="fc-day fc-day-sun fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 16, 2023"
                                                        id="fc-dom-44"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        16
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-event-harness"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      >
                                                        <a
                                                          tabIndex={0}
                                                          className="fc-event fc-event-start fc-event-end fc-event-past fc-daygrid-event fc-daygrid-dot-event event-fc-color fc-bg-warning"
                                                        >
                                                          <div className="fc-daygrid-event-dot" />
                                                          <div className="fc-event-time">
                                                            4p
                                                          </div>
                                                          <div className="fc-event-title">
                                                            Submission #1
                                                          </div>
                                                        </a>
                                                      </div>
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-46"
                                                  role="gridcell"
                                                  data-date="2023-07-17"
                                                  className="fc-day fc-day-mon fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 17, 2023"
                                                        id="fc-dom-46"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        17
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-48"
                                                  role="gridcell"
                                                  data-date="2023-07-18"
                                                  className="fc-day fc-day-tue fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 18, 2023"
                                                        id="fc-dom-48"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        18
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-50"
                                                  role="gridcell"
                                                  data-date="2023-07-19"
                                                  className="fc-day fc-day-wed fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 19, 2023"
                                                        id="fc-dom-50"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        19
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-52"
                                                  role="gridcell"
                                                  data-date="2023-07-20"
                                                  className="fc-day fc-day-thu fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 20, 2023"
                                                        id="fc-dom-52"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        20
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-54"
                                                  role="gridcell"
                                                  data-date="2023-07-21"
                                                  className="fc-day fc-day-fri fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 21, 2023"
                                                        id="fc-dom-54"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        21
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-56"
                                                  role="gridcell"
                                                  data-date="2023-07-22"
                                                  className="fc-day fc-day-sat fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 22, 2023"
                                                        id="fc-dom-56"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        22
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr role="row">
                                                <td
                                                  aria-labelledby="fc-dom-58"
                                                  role="gridcell"
                                                  data-date="2023-07-23"
                                                  className="fc-day fc-day-sun fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 23, 2023"
                                                        id="fc-dom-58"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        23
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-60"
                                                  role="gridcell"
                                                  data-date="2023-07-24"
                                                  className="fc-day fc-day-mon fc-day-past fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 24, 2023"
                                                        id="fc-dom-60"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        24
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-62"
                                                  role="gridcell"
                                                  data-date="2023-07-25"
                                                  className="fc-day fc-day-tue fc-day-today fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 25, 2023"
                                                        id="fc-dom-62"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        25
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-64"
                                                  role="gridcell"
                                                  data-date="2023-07-26"
                                                  className="fc-day fc-day-wed fc-day-future fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 26, 2023"
                                                        id="fc-dom-64"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        26
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-66"
                                                  role="gridcell"
                                                  data-date="2023-07-27"
                                                  className="fc-day fc-day-thu fc-day-future fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 27, 2023"
                                                        id="fc-dom-66"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        27
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-68"
                                                  role="gridcell"
                                                  data-date="2023-07-28"
                                                  className="fc-day fc-day-fri fc-day-future fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 28, 2023"
                                                        id="fc-dom-68"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        28
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-event-harness"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      >
                                                        <a
                                                          tabIndex={0}
                                                          className="fc-event fc-event-start fc-event-end fc-event-future fc-daygrid-event fc-daygrid-block-event fc-h-event event-fc-color fc-bg-primary"
                                                        >
                                                          <div className="fc-event-main">
                                                            <div className="fc-event-main-frame">
                                                              <div className="fc-event-title-container">
                                                                <div className="fc-event-title fc-sticky">
                                                                  Project
                                                                  submission #2
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </a>
                                                      </div>
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-70"
                                                  role="gridcell"
                                                  data-date="2023-07-29"
                                                  className="fc-day fc-day-sat fc-day-future fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 29, 2023"
                                                        id="fc-dom-70"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        29
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                              </tr>
                                              <tr role="row">
                                                <td
                                                  aria-labelledby="fc-dom-72"
                                                  role="gridcell"
                                                  data-date="2023-07-30"
                                                  className="fc-day fc-day-sun fc-day-future fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 30, 2023"
                                                        id="fc-dom-72"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        30
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-74"
                                                  role="gridcell"
                                                  data-date="2023-07-31"
                                                  className="fc-day fc-day-mon fc-day-future fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="July 31, 2023"
                                                        id="fc-dom-74"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        31
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-76"
                                                  role="gridcell"
                                                  data-date="2023-08-01"
                                                  className="fc-day fc-day-tue fc-day-future fc-day-other fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="August 1, 2023"
                                                        id="fc-dom-76"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        1
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-78"
                                                  role="gridcell"
                                                  data-date="2023-08-02"
                                                  className="fc-day fc-day-wed fc-day-future fc-day-other fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="August 2, 2023"
                                                        id="fc-dom-78"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        2
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-80"
                                                  role="gridcell"
                                                  data-date="2023-08-03"
                                                  className="fc-day fc-day-thu fc-day-future fc-day-other fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="August 3, 2023"
                                                        id="fc-dom-80"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        3
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-82"
                                                  role="gridcell"
                                                  data-date="2023-08-04"
                                                  className="fc-day fc-day-fri fc-day-future fc-day-other fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="August 4, 2023"
                                                        id="fc-dom-82"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        4
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                                <td
                                                  aria-labelledby="fc-dom-84"
                                                  role="gridcell"
                                                  data-date="2023-08-05"
                                                  className="fc-day fc-day-sat fc-day-future fc-day-other fc-daygrid-day"
                                                >
                                                  <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                                    <div className="fc-daygrid-day-top">
                                                      <a
                                                        aria-label="August 5, 2023"
                                                        id="fc-dom-84"
                                                        className="fc-daygrid-day-number"
                                                      >
                                                        5
                                                      </a>
                                                    </div>
                                                    <div className="fc-daygrid-day-events">
                                                      <div
                                                        className="fc-daygrid-day-bottom"
                                                        style={{
                                                          marginTop: "0px",
                                                        }}
                                                      />
                                                    </div>
                                                    <div className="fc-daygrid-day-bg" />
                                                  </div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
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
            {/* BEGIN MODAL */}
            <div
              className="modal fade"
              id="eventModal"
              tabIndex={-1}
              aria-labelledby="eventModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="eventModalLabel">
                      Add / Edit Event
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className>
                          <label className="form-label">Event Title</label>
                          <input
                            id="event-title"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mt-4">
                        <div>
                          <label className="form-label">Event Color</label>
                        </div>
                        <div className="d-flex">
                          <div className="n-chk">
                            <div className="form-check form-check-primary form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="event-level"
                                defaultValue="Danger"
                                id="modalDanger"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="modalDanger"
                              >
                                Danger
                              </label>
                            </div>
                          </div>
                          <div className="n-chk">
                            <div className="form-check form-check-warning form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="event-level"
                                defaultValue="Success"
                                id="modalSuccess"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="modalSuccess"
                              >
                                Success
                              </label>
                            </div>
                          </div>
                          <div className="n-chk">
                            <div className="form-check form-check-success form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="event-level"
                                defaultValue="Primary"
                                id="modalPrimary"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="modalPrimary"
                              >
                                Primary
                              </label>
                            </div>
                          </div>
                          <div className="n-chk">
                            <div className="form-check form-check-danger form-check-inline">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="event-level"
                                defaultValue="Warning"
                                id="modalWarning"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="modalWarning"
                              >
                                Warning
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 d-none">
                        <div className>
                          <label className="form-label">Enter Start Date</label>
                          <input
                            id="event-start-date"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 d-none">
                        <div className>
                          <label className="form-label">Enter End Date</label>
                          <input
                            id="event-end-date"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-update-event"
                      data-fc-event-public-id
                    >
                      Update changes
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary btn-add-event"
                    >
                      Add Event
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* END MODAL */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
