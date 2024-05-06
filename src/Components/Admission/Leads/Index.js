import React, { useState, useEffect } from "react";
import Sidebar from "../../Directive/Sidebar/Index";
import Header from "../../Directive/Header/Index";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import whatspIcon from "../../../assets/Images/whtsp.png";
import pdf from "../../../assets/Images/pdf.png";
import excel from "../../../assets/Images/excel.png";
import printer from "../../../assets/Images/printer.png";
import { Input, Modal, ModalHeader, ModalBody } from "reactstrap";
import { format } from "date-fns";
import { BASE_URL } from "../../Constants/Index";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { Toaster, toast } from 'react-hot-toast';
function capitalizeFirstLetter(inputString) {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}

function Index() {
  const currentDate = format(new Date(), "dd/MM/yyyy");
  const [activeLink, setActiveLink] = useState(6);
  const [whatsapMode, setWhatsappmode] = useState(false);
  const [allLeadList, setAllLeadsList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, setSearch] = useState("");
  const [followupStatus, setFollowStatusList] = useState([]);
  const [id, setId] = useState(null);
  const [followUpDate, setFollowUpDate] = useState("");
  const [adminLead, setAdminLeads] = useState([]);
  const [serachDate, setSeachDate] = useState("");
  const [nextFollowUPDate, setNextFollowUpDate] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [remarks, setRemarks] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [leadId, setLeadId] = useState("");
  const payload = { userName: userName, userId: userId };
  const [fullName, setFullName] = useState("");
  const [searchFollowUp, setSearchFollowUp] = useState("");
  const history = useHistory();
  const [WalkedInStatus, setWalkedInStatus] = useState("");
  const [email, setemail] = useState("");
  const [city, setcity] = useState("");
  const [firstName, setfirstName] = useState("");
  const [phone, setphone] = useState("");
  const [source, setsource] = useState("");
  const [state, setstate] = useState("");
  const [whatsaap, setwhatsapp] = useState("");
  const [zipcode, setzipCode] = useState("");
  const [course, setCourse] = useState([]);
  const [courseMode, setcourseMode] = useState("");
  const [fromBranch, setfromBranch] = useState("");
  const [toBranch, settoBranch] = useState("");
  const [leadStatus, setleadStatus] = useState("");
  const [createdAt, setcreatedAt] = useState("");
  const [address, setaddress] = useState("");
  const [leadDate, setLeadDate] = useState("");
  const [leadValue, setLeadvalue] = useState("");
  const newDate = new Date();
  const [index, setIndex] = useState("");
  const capitalizedFullName = capitalizeFirstLetter(fullName);

  const [selectedOption, setSelectedOption] = useState(null);
  const [filterdata, setfilterdata] = useState("");
  const [followUpList, setFollowUpList] = useState([]);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    handlefilterdata(selectedOption);
  };

  const handlefilterdata = (selectedOption) => {
    setfilterdata({
      followUpStatusName: selectedOption.label,
      followUpStatusId: selectedOption.value,
    });
  };
  //  setSelectedOption({
  //   followUpStatusName: selectedOption.label,
  //   followUpStatusId: selectedOption.value
  // });

  const handleIndex = (index) => {
    setIndex(index);
  };

  const handleaDeleteList = (dataid) => {
    axios
      .patch(`${BASE_URL}/lead/remove_Lead/${dataid}`)
      .then((response) => {
        fetchAllLeadsList();
      })
      .catch((error) => {
        console.error("Delete API error:", error);
      });
  };
  const handlesearchFollowUp = (e) => {
    setSearchFollowUp(e.target.value.toLowerCase());
  };

  const handelSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };
  const handelSearch = (e) => {
    setSearch(e.target.value);
    handleSearchFollow(e.target.value);
  };
  const handleSearchFollow = (searchQuery) => {
    axios
      .get(`${BASE_URL}/lead/search_Lead`, {
        params: {
          fullName: searchQuery,
        },
      })
      .then((response) => {
        setAllLeadsList(response.data.data);
        
      })
      .catch((error) => {
        console.error("API error:", error);
        // Handle the error (e.g., show an error message)
      });
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const handleEditUniversity = (categoryId) => {
    setWhatsappmode(true);
    setId(categoryId);
    axios
      .get(`${BASE_URL}/lead/get_One_Lead/${categoryId}`)
      .then((response) => {
        console.log(response.data);
        fetechFollowupList(categoryId);

        setLeadId(response.data.data._id);
        setUserName(response.data.data.assignedTo.userName);
        setUserId(response.data.data.assignedTo.userId);
        setFullName(response.data.data.fullName);
        setWalkedInStatus(response.data.data.WalkedInStatus);
        setaddress(response.data.data.address);
        setcity(response.data.data.city);
        setemail(response.data.data.email);
        setfirstName(response.data.data.firstName);
        setphone(response.data.data.phone);
        setsource(response.data.data.source.sourceName);
        setstate(response.data.data.state);
        setwhatsapp(response.data.data.whatsapp);
        setzipCode(response.data.data.zipCode);
        setCourse(response.data.data.course);
        setfromBranch(response.data.data.fromBranchbranchName);
        setleadStatus(response.data.data.leadStatus);
        settoBranch(response.data.data.toBranch.branchName);
        setLeadDate(response.data.data.leadDate);
        setcourseMode(response.data.data.courseMode);
        setcreatedAt(response.data.data.createdAt);
        setaddress(response.data.data.address);
        setLeadvalue(response.data.data.leadValue);
     
      })
      .catch((error) => {
        console.error("API error:", error);
        // Handle the error (e.g., show an error message)
      });
  };

  const handleWhatsaapModel = () => {
    setWhatsappmode(!whatsapMode);
  };

  const onChangeFollowUpDate = (e) => {
    const selectedDate = new Date(e.target.value);
    if (selectedDate <= newDate) {
      setErrorMsg("Please select a future date.");
      setNextFollowUpDate("");
    } else {
      setErrorMsg("");
      const formattedDate = format(selectedDate, "dd/MM/yyyy");
      setNextFollowUpDate(formattedDate);
    }
    setFollowUpDate(e.target.value);
  };

  // const onChangeFollowUpDate = (e) => {
  //   setFollowUpDate(e.target.value);
  //   const nextfollowUpDate = format(new Date(e.target.value), "dd/MM/yyyy");
  //   setNextFollowUpDate(nextfollowUpDate);
  // };

  useEffect(() => {
    fetchAllLeadsList();
  }, []);

  const fetchAllLeadsList = () => {
    axios
      .get(`${BASE_URL}/lead/get_All_Lead`)
      .then((response) => {
        setAllLeadsList(response.data.data.adminLeads);
        const valuewwwww =response.data.data.adminLeads.map((item)=>{
          return item.followUPStatus});
        console.log(valuewwwww)
        fetchFollowupStatus();
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  const fetechFollowupList = (id) => {
    axios
      .get(`${BASE_URL}/followUp/get_FollowUp_ByLeadId/${id}`)
      .then((response) => {
        // setAllLeadsList(response.data.data.adminLeads);

        setAdminLeads(response.data.data);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  // const fetchfollowUpList = () => {
  //   axios
  //     .get(`${BASE_URL}//followUp/get_All_FollowUp`)
  //     .then((response) => {
  //       // setAllLeadsList(response.data.data.adminLeads);
  //       console.log(response.data.data.adminData);
  //       setAdminLeads(response.data.data.adminData);
  //     })
  //     .catch((error) => {
  //       console.error("API error:", error);
  //     });
  // };
  const handleSubmit = (event) => {
    event.preventDefault();

    const requestBody = {
      followUPStatus: filterdata,
      followUpDate: currentDate,
      takenBy: payload,
      latestRemark: remarks,
      nextFollowUPDate: nextFollowUPDate,
      leadId: id,
      followUpBy: payload,
    };
    axios
      .post(`${BASE_URL}/followUp/add_FollowUp`, requestBody)
      .then((response) => {
        if (response.data.status === false) {
          toast.error("followUp Error!");
        } else {
           toast.success("followUp added successfully!");
           fetechFollowupList(id);
     
          setRemarks("");
          setFollowUpDate("");
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handleEditClick = (id) => {
    history.push(`/edit-leads/${id}`);
  };
  const fetchFollowupStatus = () => {
    axios
      .get(`${BASE_URL}/followUpStatus/get_All_FollowUpStatus`)
      .then((response) => {
        setFollowStatusList(response.data.data.adminData);
        handleFollowupList(response.data.data.adminData);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  const handleFollowupList = (data) => {
    const transformedData = data.map((item) => ({
      label: item.followUpStatusName,
      value: item._id,
    }));
    setFollowUpList(transformedData);
  };

  const shouldDisplayFollowupRow = (data) => {
    if (!searchFollowUp) {
      console.log(searchFollowUp);
      return ""; // Show all rows if no search query is applied
    }
    const fieldsToFilter = [
      "followUPStatus",
      "latestRemark",
      "takenBy",
      "followUpDate",
      "latestRemark",
      "nextFollowUPDate",
      "followUpBy",
    ];

    const nestedObjectFields = ["followUPStatus", "takenBy"]; // Add other nested object fields here
    const shouldDisplay = fieldsToFilter.some((fieldName) => {
      const fieldValue = data[fieldName];

      if (Array.isArray(fieldValue)) {
        if (fieldName === "course") {
          return fieldValue.some((subCat) =>
            subCat.courseName.toLowerCase().includes(searchFollowUp)
          );
        } else {
          return fieldValue.some((value) =>
            value.toString().toLowerCase().includes(searchFollowUp)
          );
        }
      } else if (nestedObjectFields.includes(fieldName) && fieldValue) {
        if (fieldName === "followUPStatus") {
          // Search within the nested object
          return (
            fieldValue.followUpStatusName
              .toLowerCase()
              .includes(searchFollowUp) ||
            fieldValue.followUpStatusId.toLowerCase().includes(searchFollowUp)
          );
        } else {
          // Search within other nested objects (source, assignedTo, etc.)
          return Object.values(fieldValue).some((nestedValue) =>
            nestedValue.toString().toLowerCase().includes(searchFollowUp)
          );
        }
      } else {
        return fieldValue.toString().toLowerCase().includes(searchFollowUp);
      }
    });

    return shouldDisplay ? "" : "none";
  };

  const shouldDisplayRow = (data) => {
    if (!searchQuery) {
      return ""; // Show all rows if no search query is applied
    }
    const fieldsToFilter = [
      "lastFollowUpDate",
      "leadDate",
      "leadStatus",
      "isSecuired",
      "fullName",
      "course",
      "phone",
      "whatsapp",
      "email",
      "fromBranch",
      "toBranch",
      "source",
      "courseMode",
      "leadValue",
      "latestRemark",
      "assignedTo",
      "WalkedInStatus",
    ];
    const nestedObjectFields = [
      "source",
      "assignedTo",
      "fromBranch",
      "toBranch",
    ]; // Add other nested object fields here
    const shouldDisplay = fieldsToFilter.some((fieldName) => {
      const fieldValue = data[fieldName];

      if (Array.isArray(fieldValue)) {
        if (fieldName === "course") {
          return fieldValue.some((subCat) =>
            subCat.courseName.toLowerCase().includes(searchQuery)
          );
        } else {
          return fieldValue.some((value) =>
            value.toString().toLowerCase().includes(searchQuery)
          );
        }
      } else if (nestedObjectFields.includes(fieldName) && fieldValue) {
        if (fieldName === "fromBranch" || fieldName === "toBranch") {
          // Search within the nested object
          return (
            fieldValue.branchName.toLowerCase().includes(searchQuery) ||
            fieldValue.id.toLowerCase().includes(searchQuery)
          );
        } else {
          // Search within other nested objects (source, assignedTo, etc.)
          return Object.values(fieldValue).some((nestedValue) =>
            nestedValue.toString().toLowerCase().includes(searchQuery)
          );
        }
      } else {
        return fieldValue.toString().toLowerCase().includes(searchQuery);
      }
    });

    return shouldDisplay ? "" : "none";
  };
  return (
    <div>
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-theme="blue_theme"
        data-layout="vertical"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <Toaster />
        <Sidebar />
        <div className="body-wrapper">
          <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">Leads</h4>
                  <div className="page-title-right">
                    <ul className="breadcrumb">
                      <li>
                        <Link to="/create-leads">
                          <button className="btn mb-0">+ Add New Leads</button>
                        </Link>
                      </li>
                      {/* <li><a href="#">Create leads</a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">
                    {" "}
                    <div className="setline">
                      <div className="links-container">
                        <Link
                          to="#"
                          className={activeLink === 6 ? "active" : ""}
                          onClick={() => handleLinkClick(6)}
                        >
                          All Leads
                        </Link>
                        <Link
                          to="#"
                          className={activeLink === 7 ? "active" : ""}
                          onClick={() => handleLinkClick(7)}
                        >
                          Pending Lead
                        </Link>
                        <Link
                          to="#"
                          className={activeLink === 8 ? "active" : ""}
                          onClick={() => handleLinkClick(8)}
                        >
                          Walked-in Lead
                        </Link>
                        <Link
                          to="#"
                          className={`font-weight-bold ${
                            activeLink === 0 ? "active" : ""
                          }`}
                          onClick={() => handleLinkClick(0)}
                        >
                          Walked-In-Leads
                        </Link>
                        <Link
                          to="#"
                          className={activeLink === 1 ? "active" : ""}
                          onClick={() => handleLinkClick(1)}
                        >
                          Cold Lead
                        </Link>
                        <Link
                          to="#"
                          className={activeLink === 2 ? "active" : ""}
                          onClick={() => handleLinkClick(2)}
                        >
                          Garbage Lead
                        </Link>
                        <Link
                          to="#"
                          className={activeLink === 3 ? "active" : ""}
                          onClick={() => handleLinkClick(3)}
                        >
                          Expire Lead
                        </Link>
                        <Link
                          to="#"
                          className={activeLink === 4 ? "active" : ""}
                          onClick={() => handleLinkClick(4)}
                        >
                          Reference Lead{" "}
                        </Link>
                        {/* <Link
                          to="#"
                          className={activeLink === 5 ? "active" : ""}
                          onClick={() => handleLinkClick(5)}
                        >
                          Expire Leads
                        </Link> */}
                      </div>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <div className="allleardsearch">
                    <input
                      type="search"
                      className="search"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => handelSearchQuery(e)}
                    />
                    <span>
                      <i className="fas fa-search"></i>
                    </span>
                  </div>

                  <div className="page-title-right">
                    <ul className="breadcrumb">
                      <li>
                        <div className="text-end">
                          <img src={pdf} alt=""></img>
                          <img src={excel} alt=""></img>
                          <img src={printer} alt=""></img>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <div
                        id="file_export_wrapper"
                        className="dataTables_wrapper"
                      >
                        <table
                          id="employeeData"
                          className="table border table-striped table-bordered display text-nowrap dataTable"
                          aria-describedby="file_export_info"
                        >
                          <thead>
                            {/* start row */}
                            <tr>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Followup Date
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Position: activate to sort column ascending"
                                style={{ width: "271.525px" }}
                              >
                                Lead Date
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Admission Status
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Lead Status
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Name
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Course
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Mobile
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Whatsapp No.
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Email
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Lead From
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Followup
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Followup Status
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Walked-in Status
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Remarks
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Next Follows
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                From Branch
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                To Branch
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Source
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Course Mode
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Lead Value
                              </th>
                              <th
                                className="sorting"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-label="Office: activate to sort column ascending"
                                style={{ width: "123.15px" }}
                              >
                                Lead Duration
                              </th>
                            </tr>
                            {/* end row */}
                          </thead>
                          <tbody>
                            {allLeadList.length > 0 ? (
                              allLeadList.map((category, index) => (
                                <tr
                                  key={index}
                                  className="odd"
                                  style={{
                                    display: shouldDisplayRow(category),
                                  }}
                                >
                                  <td>{category.lastFollowUpDate}</td>
                                  <td className="sorting_1">
                                    {category.leadDate}
                                    {/* {format( new Date(category.leadDate),"dd-MM-yyyy" )} */}
                                  </td>
                                  <td>
                                    {category.leadStatus === "pending" ? (
                                      <button className="btn btn-danger">
                                        Pending
                                      </button>
                                    ) : (
                                      <button className="btn btn-success">
                                        complete
                                      </button>
                                    )}
                                  </td>
                                  <td>
                                    {category.isSecuired === true ? (
                                      <button className="btn btn-success">
                                        Secured
                                      </button>
                                    ) : (
                                      <button className="btn btn-danger">
                                        UnSecured
                                      </button>
                                    )}
                                  </td>
                                  <td>
                                    {category.fullName}
                                    <div className="iconset">
                                      <FontAwesomeIcon
                                        icon={faEye}
                                        style={{
                                          color: "#13DEB9",
                                          marginRight: "10px",
                                        }}
                                      />
                                      <i
                                        className="fa fa-edit"
                                        style={{
                                          color: "#13DEB9",
                                          marginRight: "10px",
                                        }}
                                        onClick={() =>
                                          handleEditClick(category._id)
                                        }
                                      ></i>
                                      <i
                                        className="fa fa-trash"
                                        style={{ color: "#FA896B" }}
                                        onClick={() =>
                                          handleaDeleteList(category._id)
                                        }
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    {category.course.map((course, i) => (
                                      <div key={i}>
                                        <span>{course.courseName}</span>
                                      </div>
                                    ))}
                                  </td>
                                  <td>{category.phone}</td>
                                  <td>{category.whatsapp}</td>
                                  <td>{category.email}</td>
                                  <td>{category.assignedTo.userName}</td>
                                  <td>
                                    <span className="imgset">
                                      <img
                                        src={whatspIcon}
                                        alt=""
                                        onClick={() =>
                                          handleEditUniversity(category._id)
                                        }
                                      ></img>
                                    </span>
                                  </td>
                                  <td>{category.followUPStatus.followUpStatusName ?category.followUPStatus.followUpStatusName:""} </td>
                                  <td>
                                    {category.WalkedInStatus === true ? (
                                      <button className="btn btn-success">
                                        True
                                      </button>
                                    ) : (
                                      <button className="btn btn-danger">
                                        False
                                      </button>
                                    )}
                                  </td>
                                  <td>{category.latestRemark}</td>
                                  <td>{category.nextFollowUPDate}</td>
                                  <td>{category.fromBranch.branchName}</td>
                                  <td>{category.toBranch.branchName}</td>
                                  <td>{category.source.sourceName}</td>
                                  <td>{category.courseMode}</td>
                                  <td>{category.leadValue}</td>
                                  <td>365 Days left</td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="18">
                                  <div className="centered-container">
                                    <span className="nodata">
                                      No data available
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            )}
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
        <Modal
          size="xl"
          isOpen={whatsapMode}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={handleWhatsaapModel}
        >
          <ModalHeader toggle={handleWhatsaapModel}>
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0">{capitalizedFullName}</h4>
                </div>
                {successMsg && (
                  <span className="text-success">{successMsg}</span>
                )}
                {errorMsg && <span className="text-danger">{errorMsg}</span>}
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="modal-body">
              <ul
                className="nav nav-pills"
                role="tablist"
                style={{ flexDirection: "column" }}
              >
                <details className="nav-item" open>
                  <summary
                    className="nav-link active"
                    data-bs-toggle="tab"
                    href="#navpills-home"
                    role="tab"
                    style={{ backgroundColor: "#159291", color: "white" }}
                  >
                    <div className="setQuotation">
                      <div className="d-none d-sm-block"> profile </div>
                      <div className="plus-icon">+ </div>
                    </div>
                  </summary>
                  <div
                    className="tab-pane active"
                    id="navpills-home"
                    role="tabpanel"
                    style={{ marginLeft: "10px" }}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                        <h6 id="studentsnames">{firstName}</h6>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <h6 id="leademails">{email}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="phoneno">
                          Phone No.
                        </label>
                        <h6 id="phoneno">{phone}</h6>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="whatsappno">
                          Whatsapp No.
                        </label>
                        <h6 id="whatsappno">{whatsaap}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="source">
                          Source
                        </label>
                        <h6 id="source">{source}</h6>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="branch">
                          Branch
                        </label>
                        <h6 id="branch">{fromBranch}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="source">
                          Course{" "}
                        </label>
                        {course.map((item, index) => (
                          <h6 key={index}>{item.courseName}</h6>
                        ))}
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="branch">
                          Course Mode
                        </label>
                        <h6 id="cmode">{courseMode}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="branch">
                          Lead Value
                        </label>
                        <h6 id="lvalue">{leadValue}</h6>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="source">
                          Refernce Name{" "}
                        </label>
                        {/* <h6 id="refrenname" >{userName}</h6> */}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="branch">
                          Reference From
                        </label>
                        <h6>{userName}</h6>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="source">
                          Reference Assign To{" "}
                        </label>
                        <h6>{userName}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="branch">
                          Address
                        </label>
                        <h6 id="address">{address}</h6>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="source">
                          City{" "}
                        </label>
                        <h6>{city}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="branch">
                          State
                        </label>
                        <h6>{state}</h6>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="source">
                          Zipcode{" "}
                        </label>
                        <h6>{zipcode}</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="branch">
                          Lead Created At
                        </label>
                        <h6> {createdAt}</h6>
                      </div>
                    </div>
                  </div>
                </details>
                <details className="nav-item">
                  <summary
                    className="nav-link"
                    role="tab"
                    style={{ backgroundColor: "#40B086", color: "white" }}
                    onClick={() => handleIndex(1)}
                  >
                    <div className="setQuotation">
                      <div className="d-none d-sm-block"> Followup </div>
                      <div className="plus-icon">+ </div>
                    </div>
                  </summary>
                  <div
                    className="tab-pane active"
                    id="navpills-followups"
                    role="tabpanel"
                    style={{ marginLeft: "10px" }}
                  >
                    <form>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Followups Status
                            </label>
                            <Select
                              value={selectedOption}
                              onChange={handleSelectChange}
                              options={followUpList}
                              isSearchable={true}
                              isClearable={true}
                            />
                            {selectedOption && (
                              <p>
                                Selected Follow Up Status:{" "}
                                {selectedOption.label}
                              </p>
                            )}
                          </div>

                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="flfollwpdate"
                            >
                              Followups Date
                            </label>
                            <br />
                            <Input
                              type="text"
                              value={currentDate}
                              disabled
                              // onChange={(e)=>setLeadDate(e.target.value)}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label" htmlFor="Remarks">
                              Remarks
                            </label>
                            <textarea
                              className="form-control"
                              name="flremarsk"
                              id="flremarsk"
                              value={remarks}
                              onChange={(e) => setRemarks(e.target.value)}
                              placeholder="Remarks"
                              defaultValue={""}
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Next Followups Date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              required
                              value={followUpDate}
                              placeholder="followup date"
                              onChange={onChangeFollowUpDate}
                              id="nxtfollowupdate"
                              name="nxtfollowupdate"
                              min={newDate.toISOString().split("T")[0]}
                            />
                            <span className="red-text">{errorMsg}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="btn-submit btn btn-primary"
                        id="send_form"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </form>
                    <div
                      className="row"
                      style={{ marginTop: "50px", overflowX: "auto" }}
                    >
                      <div
                        id="data-follow_wrapper"
                        className="dataTables_wrapper dt-bootstrap4 no-footer"
                      >
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <div
                              className="dataTables_length"
                              id="data-follow_length"
                            >
                              <label>
                                Show{" "}
                                <select
                                  name="data-follow_length"
                                  aria-controls="data-follow"
                                  className="custom-select custom-select-sm form-control form-control-sm"
                                >
                                  <option value={10}>10</option>
                                  <option value={25}>25</option>
                                  <option value={50}>50</option>
                                  <option value={100}>100</option>
                                </select>{" "}
                                entries
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div
                              id="data-follow_filter"
                              className="dataTables_filter"
                            >
                              <label>
                                Search:
                                <input
                                  type="search"
                                  className="form-control form-control-sm"
                                  placeholder
                                  value={searchFollowUp}
                                  onChange={(e) => handlesearchFollowUp(e)}
                                  aria-controls="data-follow"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="table-responsive">
                              <table
                                className="table border"
                                style={{
                                  borderCollapse: "collapse",
                                  borderSpacing: "0px",
                                  width: "100%",
                                }}
                                id="employeeData"
                              >
                                <thead className="text-white">
                                  {/* start row */}
                                  <tr>
                                    <th>
                                      {" "}
                                      <th
                                        className="sorting_disabled"
                                        rowSpan={1}
                                        colSpan={1}
                                        searchQuery={1}
                                        style={{ width: "168px" }}
                                      >
                                        Serial No
                                      </th>
                                    </th>
                                    <th
                                      className="sorting_disabled"
                                      rowSpan={1}
                                      colSpan={1}
                                      searchQuery={1}
                                      style={{ width: "168px" }}
                                    >
                                      Followup Status
                                    </th>
                                    <th
                                      className="sorting_disabled"
                                      rowSpan={1}
                                      colSpan={1}
                                      searchQuery={1}
                                      style={{ width: "97px" }}
                                    >
                                      Taken By
                                    </th>
                                    <th
                                      className="sorting_disabled"
                                      rowSpan={1}
                                      colSpan={1}
                                      searchQuery={1}
                                      style={{ width: "151px" }}
                                    >
                                      Followup Date
                                    </th>
                                    <th
                                      className="sorting_disabled"
                                      rowSpan={1}
                                      colSpan={1}
                                      searchQuery={1}
                                      style={{ width: "180px" }}
                                    >
                                      Remarks
                                    </th>
                                    <th
                                      className="sorting_disabled"
                                      rowSpan={1}
                                      colSpan={1}
                                      searchQuery={1}
                                      style={{ width: "202px" }}
                                    >
                                      Next Followup Date
                                    </th>
                                    <th
                                      className="sorting_disabled"
                                      rowSpan={1}
                                      colSpan={1}
                                      searchQuery={1}
                                      style={{ width: "135px" }}
                                    >
                                      Followup By
                                    </th>
                                  </tr>
                                  {/* end row */}
                                </thead>
                                <tbody>
                                  {adminLead ? (
                                    adminLead.map((category, index) => (
                                      <tr
                                        className="odd"
                                        key={category._id}
                                        style={{
                                          display:
                                            shouldDisplayFollowupRow(category),
                                        }}
                                      >
                                        <td>{index + 1}</td>
                                        <td>
                                          {
                                            category.followUPStatus
                                              .followUpStatusName
                                          }
                                        </td>
                                        <td>{category.takenBy.userName}</td>
                                        <td>
                                          {category.followUpDate
                                            ? category.followUpDate
                                            : ""}
                                        </td>

                                        <td>{category.latestRemark}</td>
                                        <td>{category.nextFollowUPDate}</td>

                                        <td>{category.followUpBy.userName}</td>
                                      </tr>
                                    ))
                                  ) : (
                                    <tr>
                                      <td colSpan="7">
                                        <div className="centered-container">
                                          <span className="nodata">
                                            No data available
                                          </span>
                                        </div>
                                      </td>
                                    </tr>
                                  )}
                                </tbody>
                              </table>
                            </div>

                            <div
                              id="data-follow_processing"
                              className="dataTables_processing card"
                              style={{ display: "none" }}
                            >
                              Processing...
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-5">
                            <div
                              className="dataTables_info"
                              id="data-follow_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 1 of 1 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="data-follow_paginate"
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="data-follow_previous"
                                >
                                  <a
                                    href="#"
                                    aria-controls="data-follow"
                                    data-dt-idx={0}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a
                                    href="#"
                                    aria-controls="data-follow"
                                    data-dt-idx={1}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    1
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="data-follow_next"
                                >
                                  <a
                                    href="#"
                                    aria-controls="data-follow"
                                    data-dt-idx={2}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
                <details className="nav-item">
                  <summary
                    className="nav-link"
                    role="tab"
                    onClick={() => handleIndex(2)}
                    style={{ backgroundColor: "#9ECA89", color: "white" }}
                  >
                    {/* <span className="d-none d-sm-block"></span> */}
                    <div className="setQuotation">
                      <div className="d-none d-sm-block">
                        {" "}
                        Marketing Activity{" "}
                      </div>
                      <div className="plus-icon">+ </div>
                    </div>
                  </summary>
                  <div
                    className="tab-pane active"
                    id="navpills-profile"
                    role="tabpanel"
                    style={{ overflowX: "auto", marginLeft: "10px" }}
                  >
                    <div className="row" style={{ marginTop: "5px" }}>
                      <div
                        id="datatable-buttons_wrapper"
                        className="dataTables_wrapper dt-bootstrap4 no-footer"
                      >
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <div className="dt-buttons btn-group flex-wrap">
                              {" "}
                              <button
                                className="btn btn-secondary buttons-copy buttons-html5"
                                tabIndex={0}
                                aria-controls="datatable-buttons"
                                type="button"
                              >
                                <span>Copy</span>
                              </button>{" "}
                              <button
                                className="btn btn-secondary buttons-excel buttons-html5"
                                tabIndex={0}
                                aria-controls="datatable-buttons"
                                type="button"
                              >
                                <span>Excel</span>
                              </button>{" "}
                              <button
                                className="btn btn-secondary buttons-pdf buttons-html5"
                                tabIndex={0}
                                aria-controls="datatable-buttons"
                                type="button"
                              >
                                <span>PDF</span>
                              </button>{" "}
                              <div className="btn-group">
                                <button
                                  className="btn btn-secondary buttons-collection dropdown-toggle buttons-colvis"
                                  tabIndex={0}
                                  aria-controls="datatable-buttons"
                                  type="button"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <span>Column visibility</span>
                                </button>
                              </div>{" "}
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div
                              id="datatable-buttons_filter"
                              className="dataTables_filter"
                            >
                              <label>
                                Search:346666666666
                                <input
                                  type="search"
                                  className="form-control form-control-sm"
                                  placeholder
                                  value={search}
                                  onChange={(e) => handelSearch(e)}
                                  aria-controls="datatable-buttons"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <table
                              id="datatable-buttons"
                              className="table table-striped table-bordered dt-responsive dataTable no-footer"
                              style={{
                                borderCollapse: "collapse",
                                borderSpacing: "0px",
                                width: "100%",
                              }}
                              role="grid"
                              aria-describedby="datatable-buttons_info"
                            >
                              <thead>
                                <tr role="row">
                                  <th
                                    className="sorting_asc"
                                    tabIndex={0}
                                    aria-controls="datatable-buttons"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-sort="ascending"
                                    aria-label="Gallabox link: activate to sort column descending"
                                    style={{ width: "361px" }}
                                  >
                                    Gallabox link
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable-buttons"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Username: activate to sort column ascending"
                                    style={{ width: "300px" }}
                                  >
                                    Username
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable-buttons"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Password: activate to sort column ascending"
                                    style={{ width: "291px" }}
                                  >
                                    Password
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr role="row" className="odd">
                                  <td className="sorting_1"></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-5">
                            <div
                              className="dataTables_info"
                              id="datatable-buttons_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 1 of 1 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="datatable-buttons_paginate"
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="datatable-buttons_previous"
                                >
                                  <a
                                    href="#"
                                    aria-controls="datatable-buttons"
                                    data-dt-idx={0}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a
                                    href="#"
                                    aria-controls="datatable-buttons"
                                    data-dt-idx={1}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    1
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="datatable-buttons_next"
                                >
                                  <a
                                    href="#"
                                    aria-controls="datatable-buttons"
                                    data-dt-idx={2}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
                <details className="nav-item">
                  <summary
                    className="nav-link"
                    onClick={() => handleIndex(3)}
                    style={{ backgroundColor: "#EDB47D", color: "white" }}
                  >
                    <div className="setQuotation">
                      <div className="d-none d-sm-block">
                        {" "}
                        Whatsapp Messages{" "}
                      </div>
                      <div className="plus-icon">+ </div>
                    </div>
                  </summary>
                  <div
                    className="tab-pane active"
                    id="navpills-messages"
                    role="tabpanel"
                    style={{ marginLeft: "10px" }}
                  >
                    <div className="row" style={{ marginTop: "5px" }}>
                      <div
                        id="datatable-messages-follow_wrapper"
                        className="dataTables_wrapper dt-bootstrap4 no-footer"
                      >
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <div
                              className="dataTables_length"
                              id="datatable-messages-follow_length"
                            >
                              <label>
                                Show{" "}
                                <select
                                  name="datatable-messages-follow_length"
                                  aria-controls="datatable-messages-follow"
                                  className="custom-select custom-select-sm form-control form-control-sm"
                                >
                                  <option value={10}>10</option>
                                  <option value={25}>25</option>
                                  <option value={50}>50</option>
                                  <option value={100}>100</option>
                                </select>{" "}
                                entries
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div
                              id="datatable-messages-follow_filter"
                              className="dataTables_filter"
                            >
                              <label>
                                Search:4e4e4e4e4e4e4e4e4e4e4e4e4et
                                <input
                                  type="search"
                                  className="form-control form-control-sm"
                                  placeholder
                                  aria-controls="datatable-messages-follow"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <table
                              id="datatable-messages-follow"
                              className="table table-striped table-bordered dt-responsive dataTable no-footer"
                              style={{
                                borderCollapse: "collapse",
                                borderSpacing: "0px",
                                width: "100%",
                              }}
                              role="grid"
                              aria-describedby="datatable-messages-follow_info"
                            >
                              <thead>
                                <tr role="row">
                                  <th
                                    className="sorting_disabled"
                                    rowSpan={1}
                                    colSpan={1}
                                    style={{ width: "734px" }}
                                  >
                                    Course
                                  </th>
                                  <th
                                    className="sorting_disabled"
                                    rowSpan={1}
                                    colSpan={1}
                                    style={{ width: "297px" }}
                                  >
                                    Mobile
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr role="row" className="odd">
                                  <td>MS Office Training Course</td>
                                  <td>
                                    <a
                                      href="/leads-whatsapp-messages/88/12501"
                                      target="_blank"
                                    >
                                      9316646739
                                    </a>
                                  </td>
                                </tr>
                                <tr role="row" className="even">
                                  <td>TallyPrime With GST Training Course</td>
                                  <td>
                                    <a
                                      href="/leads-whatsapp-messages/186/12501"
                                      target="_blank"
                                    >
                                      9316646739
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div
                              id="datatable-messages-follow_processing"
                              className="dataTables_processing card"
                              style={{ display: "none" }}
                            >
                              Processing...
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-5">
                            <div
                              className="dataTables_info"
                              id="datatable-messages-follow_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 1 to 2 of 2 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="datatable-messages-follow_paginate"
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="datatable-messages-follow_previous"
                                >
                                  <a
                                    href="#"
                                    aria-controls="datatable-messages-follow"
                                    data-dt-idx={0}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    Previous
                                  </a>
                                </li>
                                <li className="paginate_button page-item active">
                                  <a
                                    href="#"
                                    aria-controls="datatable-messages-follow"
                                    data-dt-idx={1}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    1
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="datatable-messages-follow_next"
                                >
                                  <a
                                    href="#"
                                    aria-controls="datatable-messages-follow"
                                    data-dt-idx={2}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
                <details className="nav-item">
                  <summary
                    onClick={() => handleIndex(4)}
                    className="nav-link"
                    role="tab"
                    style={{ backgroundColor: "#E68574", color: "white" }}
                  >
                    <div className="setQuotation">
                      <div className="d-none d-sm-block"> Quotation </div>
                      <div className="plus-icon">+ </div>
                    </div>
                  </summary>
                  <div
                    className="tab-pane active"
                    id="navpills-quotations"
                    role="tabpanel"
                    style={{ marginLeft: "10px" }}
                  >
                    <p className="mb-0"></p>
                    <form method="post" action="/make-quotation">
                      <input
                        type="hidden"
                        name="_token"
                        defaultValue="ldREeUTqVK6OFQUlvicj6KOh2qbfzl8VVqHNBgyI"
                      />
                      <input
                        type="hidden"
                        name="getquotation"
                        id="getquotationid"
                        defaultValue={12501}
                      />
                      <button className="btn btn-primary">
                        Make Quotation
                      </button>
                    </form>
                    <div
                      className="table-responsive mb-4"
                      style={{
                        borderRadius: "0px!important",
                        border: "0px !important",
                        marginBottom: "0px !important",
                      }}
                    >
                      <div
                        id="datatable-quotations_wrapper"
                        className="dataTables_wrapper dt-bootstrap4 no-footer"
                      >
                        <div className="row">
                          <div className="col-sm-12 col-md-6">
                            <div
                              className="dataTables_length"
                              id="datatable-quotations_length"
                            >
                              <label>
                                Show{" "}
                                <select
                                  name="datatable-quotations_length"
                                  aria-controls="datatable-quotations"
                                  className="custom-select custom-select-sm form-control form-control-sm"
                                >
                                  <option value={10}>10</option>
                                  <option value={25}>25</option>
                                  <option value={50}>50</option>
                                  <option value={100}>100</option>
                                </select>{" "}
                                entries
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6">
                            <div
                              id="datatable-quotations_filter"
                              className="dataTables_filter"
                            >
                              <label>
                                Search:etgffffffffff
                                <input
                                  type="search"
                                  className="form-control form-control-sm"
                                  placeholder
                                  aria-controls="datatable-quotations"
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12">
                            <table
                              id="datatable-quotations"
                              className="centrersleads table table-bordered dt-responsive dataTable no-footer"
                              style={{
                                borderCollapse: "collapse",
                                borderSpacing: "0px",
                                width: "100%",
                              }}
                              role="grid"
                              aria-describedby="datatable-quotations_info"
                            >
                              <thead>
                                <tr role="row">
                                  <th
                                    className="sorting_asc"
                                    tabIndex={0}
                                    aria-controls="datatable-quotations"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Q.Date: activate to sort column descending"
                                    style={{ width: "51px" }}
                                    aria-sort="ascending"
                                  >
                                    Q.Date
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable-quotations"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Due Date: activate to sort column ascending"
                                    style={{ width: "37px" }}
                                  >
                                    Due Date
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable-quotations"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Company Name: activate to sort column ascending"
                                    style={{ width: "73px" }}
                                  >
                                    Company Name
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable-quotations"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Contact Person: activate to sort column ascending"
                                    style={{ width: "62px" }}
                                  >
                                    Contact Person
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable-quotations"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Mobile No.: activate to sort column ascending"
                                    style={{ width: "52px" }}
                                  >
                                    Mobile No.
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable-quotations"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Whatsapp No.: activate to sort column ascending"
                                    style={{ width: "78px" }}
                                  >
                                    Whatsapp No.
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable-quotations"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Email: activate to sort column ascending"
                                    style={{ width: "42px" }}
                                  >
                                    Email
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable-quotations"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Course: activate to sort column ascending"
                                    style={{ width: "52px" }}
                                  >
                                    Course
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable-quotations"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Quotation No.: activate to sort column ascending"
                                    style={{ width: "76px" }}
                                  >
                                    Quotation No.
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable-quotations"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Total Fees: activate to sort column ascending"
                                    style={{ width: "40px" }}
                                  >
                                    Total Fees
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="datatable-quotations"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Status: activate to sort column ascending"
                                    style={{ width: "49px" }}
                                  >
                                    Status
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="odd">
                                  <td
                                    valign="top"
                                    colSpan={11}
                                    className="dataTables_empty"
                                  >
                                    No data available in table
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-5">
                            <div
                              className="dataTables_info"
                              id="datatable-quotations_info"
                              role="status"
                              aria-live="polite"
                            >
                              Showing 0 to 0 of 0 entries
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-7">
                            <div
                              className="dataTables_paginate paging_simple_numbers"
                              id="datatable-quotations_paginate"
                            >
                              <ul className="pagination">
                                <li
                                  className="paginate_button page-item previous disabled"
                                  id="datatable-quotations_previous"
                                >
                                  <a
                                    href="#"
                                    aria-controls="datatable-quotations"
                                    data-dt-idx={0}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    Previous
                                  </a>
                                </li>
                                <li
                                  className="paginate_button page-item next disabled"
                                  id="datatable-quotations_next"
                                >
                                  <a
                                    href="#"
                                    aria-controls="datatable-quotations"
                                    data-dt-idx={1}
                                    tabIndex={0}
                                    className="page-link"
                                  >
                                    Next
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p />
                  </div>
                </details>
              </ul>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
}
export default Index;
