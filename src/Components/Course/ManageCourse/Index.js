import React, { useState, useEffect } from "react";
import Sidebar from "../../Directive/Sidebar/Index";
import Header from "../../Directive/Header/Index";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import whatspIcon from "../../../assets/Images/whtsp.png";
import croud from "../../../assets/Images/croud.png";
import phoneIcon from "../../../assets/Images/phone.png";
import editIcon from "../../../assets/Images/edit.png";
import pdf from "../../../assets/Images/pdf.png";
import excel from "../../../assets/Images/excel.png";
import printer from "../../../assets/Images/printer.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, Label, Input } from "reactstrap";
import Multiselect from "multiselect-react-dropdown";
import { BASE_URL } from "../../Constants/Index";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
const GroupOptions = [
  "individual",
  "bygroup",
  // Add more options as needed
];

const universities = [
  "Select Universities",
  "bitinstitute",
  "other",
  // Add more universities as needed
];
const generateSlug = (InputString) => {
  return InputString.toLowerCase() // Convert the string to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, "") // Remove all characters except letters, numbers, and hyphens
    .replace(/--+/g, "-") // Replace consecutive hyphens with a single hyphen
    .replace(/^-|-$/g, ""); // Remove hyphens from the beginning or end of the string
};

function Index() {
  const [tax, setTax] = useState("");
  const [dataList, setDataList] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [subCourse, setSubCourse] = useState([GroupOptions]);
  const [courseBrocheur, setFileName] = useState([]);
  const [categoryId,setCategoryId] =useState("");
  const [rows, setRows] = useState([
    { admissionFor: "", univercityFees: "", bitFees: "", total: "" },
  ]);

  const [selectedGroupOption, setSelectedGroupOption] = useState();
  const [selectedOption, setSelectedOption] = useState([]);
  const [group, setGroup] = useState(false);
  const [lecture, setLecture] = useState([]);
  const [textareaValue, setTextareaValue] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectSubOption, setSelectedSubOptions] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [certificationName, setCertifictionName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [theoryChecked, setIsTheoryChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);
  const [offlinePrice, setOfflinePrice] = useState("");
  const [onlinePrice, setOnlinePrice] = useState("");
  const [corporateprice, setCorporatePrice] = useState("");
  const [website, setWebsite] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [file, setFile] = useState(null);
  const [courseDuration, setCourseDuration] = useState("");
  const [leadDuration, setLeadDuration] = useState("");
  const [selectVisible, setSelectVisible] = useState([]);
  const [slugUrl, setslugUrl] = useState("");
  const [categories, setCategories] = useState([]);
  const [subCategory, setSubCategories] = useState([]);
  const [formData, setFormData] = useState([]);
  const [selectValue, setSelectValue] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const[deleteModel,setDeleteModel] =useState("");

  const handleDeleteModel =()=>{
   setDeleteModel(false);
  }

  const handleEditClick = (id) => {
    history.push(`/course/edit/${id}`);
  };
  const handleSelectValue = (event) => {
    setSelectValue(event.target.value);
    console.log(event.target.value);
  };
  const lectureHandleInputChange = (index, field, value) => {
    const updatedFormData = [...formData];
    updatedFormData[index] = {
      ...updatedFormData[index],
      [field]: value,
    };
    setFormData(updatedFormData);
  };
  const apiData = formData.map((data) => ({
    Subcourse: data.Subcourse || "",
    lactureReport: data.lactureReport || "",
    Duration: data.Duration || 0,
    lab: data.lab || false,
    theory: data.theory || false,
    notavailable: data.notavailable || false,
    bySpecialization: data.bySpecialization || "",
  }));

  const handleSelectVisible = (event) => {
    setSelectVisible(event.target.value);
  };

  const handleLeadDuration = (event) => {
    setLeadDuration(event.target.value);
  };
  const handleCourseDuration = (event) => {
    setCourseDuration(event.target.value);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    handleFormSubmit();
  };

  const handleFormSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(`${BASE_URL}/course/add_Course_file`, formData)

      .then((response) => {
        setFileName(response.data.data);
        console.log(response.data);
        if (response.data.status === false) {
          setErrorMsg(response.data.message);
          setTimeout(() => {
            setErrorMsg("");
          }, 1000);
        } else {
          setSuccessMsg(response.data.message);
          setTimeout(() => {
            setSuccessMsg("");
          }, 1000);
        }
        setSuccessMsg(response.data.message);
        setTimeout(() => {
          setSuccessMsg("");
        }, 1000);
      })
      .catch((error) => {
        // Handle error
        console.error("Error uploading PDF:", error);
      });
  };

  const handleMetaDescriptionChange = (event) => {
    setMetaDescription(event.target.value);
  };
  const handleMetaTitleValue = (e) => {
    setMetaTitle(e.target.value);
    const Url = generateSlug(e.target.value);
    setslugUrl(Url);
    console.log(e.target.value, Url);
  };

  const handleLabCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleTheoryCheckboxChange = (event) => {
    setIsTheoryChecked(event.target.checked);
  };
  const handleNoCheckboxChange = (event) => {
    setNoChecked(event.target.checked);
  };
  // const handleMultiSubcateogry = (selectedList) => {
  //   setSelectedSubOptions(selectedList);
  // };

  // const handleMultiSelectChange = (selectedList, selectedItem) => {
  //   setSelectedOptions(selectedList);
  // };
  // const handleTextareaChange = (event) => {
  //   setTextareaValue(event.target.value);
  // };
  const handleTax = (e) => {
    setTax(e.target.value);
  };
  const HandleSubCategories = () => {
    axios
      .get(`${BASE_URL}/subcategory/get_All_SubCategory`)
      .then((response) => {
        setSubCategories(response.data.data.userData);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handleAddLectureRow = () => {
    setLecture((prevRows) => [
      ...prevRows,
      {
        specialization: "",
        lactureReport: "",
        value: 0,
      },
    ]);
  };
  const handleLectureInputChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...lecture];
    newRows[index][name] = value;
    setLecture(newRows);
  };
  const handleRemoveLectureRow = (rowId) => {
    setLecture((prevRows) => prevRows.filter((row, index) => index !== rowId));
  };
  const handleGroupOptions = (event) => {
    if (event.target.value === "bygroup") {
      setGroup(true);
      setSelectedGroupOption(event.target.value);
    } else {
      setGroup(false);
      setSelectedGroupOption(event.target.value);
    }
  };

  const handelSubCouseRow = () => {
    const newsubCourse = { ...GroupOptions, id: subCourse.length + 1 };
    setSubCourse([...subCourse, newsubCourse]);
  };

  const handleRemoveSubCourseRow = (indexToRemove) => {
    const newsubCourse = subCourse.filter(
      (subCourse, index) => index !== indexToRemove
    );
    setSubCourse(newsubCourse);
  };

  const handleAddRow = () => {
    const newRow = { ...rows };
    setRows([...rows, newRow]);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };
  const handleRemoveRow = (indexToRemove) => {
    const newRows = rows.filter((row, index) => index !== indexToRemove);
    setRows(newRows);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    fetchCategories();
    HandleSubCategories();
  
  }, []);

  const fetchCategories = () => {
    axios
      .get(`${BASE_URL}/categories/get_All_category`)
      .then((response) => {
        setCategories(response.data.data.adminCategories);
      })
      .catch((error) => {
        console.error("API error:", error);
        // Handle the error (e.g., show an error message)
      });
  };
  // const handleAddCourse = () => {

  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    // const selectedValues = selectedOptions.map((option) => option.value);
    // console.log("selectedValues", selectedValues);
    // Call the function to send the form data to the API

    const requestBody = {
      category: selectedOptions,
      subCategory: selectSubOption,
      courseName: courseName,
      certificateName: certificationName,
      byGroup: selectedGroupOption,
      isByGroup: apiData,
      bySpecialization: selectValue,
      isbySpecialization: lecture,
      studyMaterial: { lab: isChecked, theory: theoryChecked, no: noChecked },
      univercity: selectedOption,
      isBitInstitute: [
        {
          offlinePrice: offlinePrice,
          onlinePrice: onlinePrice,
          corporatePrice: corporateprice,
        },
      ],
      isOtherUnivercity: rows,
      website: website,
      courseBrocheur: courseBrocheur,
      courseDuration: courseDuration,
      leadDuration: leadDuration,
      courseVisible: selectVisible,
      metaTitle: metaTitle,
      metaDiscription: metaDescription,
      slugUrl: slugUrl,
    };
    axios
      .post(`${BASE_URL}/course/add_Course`, requestBody)
      .then((response) => {
     
        if (response.data.status === false) {
          setErrorMsg(response.data.message);
          setTimeout(() => {
            setErrorMsg("");
          }, 2000);
        } else {
          setSuccessMsg(response.data.message);
          setTimeout(() => {
            setSuccessMsg("");
            // setSelectedGroupOption("");
            // setGroup("");
            // setLecture(null);
            // setSelectedOptions("");
            // setSelectedSubOptions(null);
            // setCourseName("");
            // setCertifictionName("");
            // setIsChecked("");
            // setIsTheoryChecked();
            // setOnlinePrice("");
            // setOfflinePrice("");
            // setCorporatePrice("");
            // setWebsite("");
            // setMetaTitle("");
            // setMetaDescription("");
            // setCourseDuration("");
            // setLeadDuration("");
            // setSelectVisible(null);
            // setCategories("");
            // setSubCategories(null);
            // setFormData(null);
            // setSelectValue(null);
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const EditToggle = () => {
    setEditModal(!editModal);
  };
  useEffect(() => {
    fetchDataList();
  }, []); // Pas
  const handleaDeleteCategory = (categoryId) => {
    console.log(categoryId);
    axios
      .patch(`${BASE_URL}/categories/remove_Category/${categoryId}`)
      .then((response) => {
        console.log("Delete API response:", response.data);
        fetchDataList();
      })
      .catch((error) => {
        console.error("Delete API error:", error);
      });
  };

  const handleEditCategory = (categoryId) => {
    console.log(categoryId);

    setEditModal(true);

    axios
      .get(`${BASE_URL}/course/get_One_Course/${categoryId}`)
      .then((response) => {
        console.log(response.data.data);
        setCourseName(response.data.data.courseName);
        setCertifictionName(response.data.data.certificateName);
        setSelectedOptions(
          response.data.data.category.map((item) => ({
            name: item.name,
            id: item.id,
          }))
        );
        setMetaDescription(response.data.data.metaDiscription);
        setMetaTitle(response.data.data.metaTitle);
        setWebsite(response.data.data.website);

        setTax(response.data.data.tax);
      })
      .catch((error) => {
        console.error("API error:", error);
        // Handle the error (e.g., show an error message)
      });
  };

  const fetchDataList = () => {
    axios
      .get(`${BASE_URL}/course/get_All_Course`)
      .then((response) => {
        console.log(response.data.data.adminCourses);
        setDataList(response.data.data.adminCourses);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

    const handelSearchQuery = (e) => {
      setSearchQuery(e.target.value.toLowerCase());
    };

  const shouldDisplayRow = (data) => {
    if (!searchQuery) {
      return ""; // Show all rows if no search query is applied
    }
    const fieldsToFilter = [
      "courseName",
      "subCategory",
      "category",
      "certificateName",
      "offlineFees",
      "courseGrop",
      "courseType",
      "onlineFees",
      "institute",
      "pageFormat",
      "tax",
      "Degree_Process_Fees",
    ];
    const shouldDisplay = fieldsToFilter.some((fieldName) => {
      const fieldValue = data[fieldName];
      if (Array.isArray(fieldValue)) {
        if (fieldName === "subCategory" || fieldName === "category") {
          return fieldValue.some((subCat) =>
            subCat.name.toLowerCase().includes(searchQuery)
          );
        } else {
          return fieldValue.some((value) =>
            value.toString().toLowerCase().includes(searchQuery)
          );
        }
      }
      return fieldValue.toString().toLowerCase().includes(searchQuery);
    });
    return shouldDisplay ? "" : "none";
  };

  const handleaDeleteList = (id) => {
    setCategoryId(id);
    setDeleteModel(true)
   
  };
  const deleteCategoryData =()=>{
    axios
    .patch(`${BASE_URL}/course/remove_Course/${categoryId}`)
    .then((response) => {
      console.log("Delete API response:", response.data);
      fetchDataList();
      handleDeleteModel();
    })
    .catch((error) => {
      console.error("Delete API error:", error);
    });
  }
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
        <Sidebar />
        <div className="body-wrapper">
          <Header />
          <div className="container-fluid">
            <div className="searchQuery">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h6 className="mb-3">
                    <div className="allleardsearch">
                       <input
                        type="search"
                        className="search"
                        value={searchQuery}
                        onChange={handelSearchQuery}
                        placeholder="search query"
                      />
                      <span>
                        <i className="fas fa-search"></i>
                      </span>
                    </div>
                  </h6>
                  <div className="page-title-right">
                    <ul className="breadcrumb">
                      <li>
                        <Link to="/course/addstepform">
                          <button className="btn mb-2">+ Add Course</button>
                        </Link>
                       
                    
                      </li>
                      {/* <li><a href="#">Create leads</a></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="searchQuery">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                      <h4 className="mb-0">Manage Course</h4>
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
                            {/* start searchQuery */}
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
                                Serial No
                              </th>
                              <th
                                className="sorting sorting_asc"
                                tabIndex={0}
                                aria-controls="file_export"
                                searchQuerySpan={1}
                                colSpan={1}
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending"
                                style={{ width: "164.675px" }}
                              >
                                Course
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
                                Category
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
                                SubCategory
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
                                Certificate Course
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
                                Group
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
                                Offline Price
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
                                Online Price
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
                                Institute
                              </th>
                            </tr>
                            {/* end searchQuery */}
                          </thead>
                          <tbody>
                            {dataList &&
                              dataList.map((data, index) => (
                                <tr
                                  className="odd"
                                  key={data._id}
                                  style={{ display: shouldDisplayRow(data) }}
                                >
                                  <td>{index + 1}</td>
                                  <td>
                                    {" "}
                                    {data.courseName}

                                    <div className="iconset">
                                    <Link to={`/course/manage-content/${data._id}`}>
                                    <FontAwesomeIcon
          icon={faEye}
          style={{
            color: "#13DEB9",
            marginRight: "10px",
          }}
        />
                        {/* <button className="btn mb-2">Manage Content</button> */}
                        </Link>
                                    
                                      <i
                                        className="fa fa-edit"
                                        style={{
                                          color: "#13DEB9",
                                          marginRight: "10px",
                                          cursor: "pointer", // Add cursor style to indicate it's clickable
                                        }}
                                        onClick={() =>
                                          handleEditClick(data._id)
                                        } // Attach the click handler
                                      ></i>
                                      <i
                                        className="fa fa-trash"
                                        style={{ color: "#FA896B" }}
                                        onClick={() =>
                                          handleaDeleteList(data._id)
                                        }
                                      />
                                    </div>
                                  </td>
                                  <td>
                                    {" "}
                                    {data.category.map((list, i) => (
                                      <div key={i}>
                                        <span>{list.name}</span>
                                      </div>
                                    ))}
                                  </td>

                                  <td>
                                    {data.subCategory.map((list, i) => (
                                      <div key={i}>
                                        <span>{list.name}</span>
                                      </div>
                                    ))}
                                  </td>
                                  <td>{data.certificateName}</td>
                                  <td>
                                    {data.courseGrop === ""
                                      ? data.courseType
                                      : data.courseGrop}
                                  </td>
                                  <td>{data.offlineFees}</td>
                                  <td>{data.onlineFees}</td>
                                  <td>{data.institute}</td>

                                  {/* {data.isBitInstitute.length > 0 &&
                                    data.isBitInstitute.map((list) => (
                                      <React.Fragment key={list._id}>
                                        <td>{list.offlinePrice}</td>
                                        <td>{list.onlinePrice || ""}</td>{" "}
                                      
                                      </React.Fragment>
                                    ))} */}

                                  {/* {data.isBitInstitute.length === 0 && (
                                    <>
                                      <td></td>
                                      <td></td>
                                    </>
                                  )} */}
                                  {/* <td>{data.website}</td> */}
                                </tr>
                              ))}
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
        <Modal isOpen={editModal} toggle={EditToggle} fullscreen>
          <ModalHeader toggle={EditToggle}>Modal title</ModalHeader>
          <ModalBody>
            <div className="row" style={{ marginTop: "5px!important" }}>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <Form className="needs-validation">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <Label className="form-Label">Course Name</Label>
                            <Input
                              type="text"
                              className="form-control"
                              value={courseName}
                              onChange={(e) => setCourseName(e.target.value)}
                              required
                            />
                            <div className="invalid-feedback">
                              Please Provide Course Name.
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <Label
                              className="form-Label"
                              htmlFor="validationCustom01"
                            >
                              Certificate Name
                            </Label>
                            <Input
                              type="text"
                              className="form-control"
                              value={certificationName}
                              onChange={(e) =>
                                setCertifictionName(e.target.value)
                              }
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="form-Label">By Group</Label>
                            <select
                              className="form-select"
                              onChange={handleGroupOptions}
                              value={selectedGroupOption}
                            >
                              <option value="">select option</option>
                              {GroupOptions.map((option, index) => (
                                <option key={index} value={option}>
                                  {option === "individual"
                                    ? "Individual"
                                    : "By Group"}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="form-Label">Universities</Label>
                            <select
                              className="form-select"
                              onChange={handleSelectChange}
                              value={selectedOption}
                            >
                              {universities.map((university, index) => (
                                <option key={index} value={university}>
                                  {university === "bitinstitute"
                                    ? "BIT Institute"
                                    : "Other"}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row" id="individualstudymaterials">
                        <Label className="form-Label">Study Material</Label>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <Input
                              type="checkbox"
                              checked={isChecked}
                              onChange={handleLabCheckboxChange}
                            />
                            <Label>Lab</Label>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <Input
                              type="checkbox"
                              checked={theoryChecked}
                              onChange={handleTheoryCheckboxChange}
                            />
                            <Label>Theory</Label>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <Input
                              type="checkbox"
                              checked={noChecked}
                              onChange={handleNoCheckboxChange}
                            />
                            <Label>No</Label>
                          </div>
                        </div>
                      </div>
                      {selectedOption === "bitinstitute" ? (
                        <div className="row">
                          <div className="col-md-4">
                            <div className="mb-3">
                              <Label className="form-Label">
                                Offline Price
                              </Label>
                              <Input
                                type="number"
                                className="form-control"
                                value={offlinePrice}
                                onChange={(e) =>
                                  setOfflinePrice(e.target.value)
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <Label className="form-Label">Online Price</Label>
                              <Input
                                type="text"
                                className="form-control"
                                value={onlinePrice}
                                onChange={(e) => setOnlinePrice(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="mb-3">
                              <Label className="form-Label">
                                Corporate Price
                              </Label>
                              <Input
                                type="text"
                                className="form-control"
                                value={corporateprice}
                                onChange={(e) =>
                                  setCorporatePrice(e.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="row" id="universitiesfeeslist">
                          <div
                            className="col-md-12"
                            style={{ overflowX: "auto" }}
                          >
                            <table
                              className="table table-bordered"
                              id="dynamic_univeritiesfee"
                            >
                              <tbody>
                                <tr className="tableColrset">
                                  <th style={{ textAlign: "center" }}>
                                    Admission For
                                  </th>
                                  <th style={{ textAlign: "center" }}>
                                    Universities Fee
                                  </th>
                                  <th style={{ textAlign: "center" }}>
                                    Bit Fees
                                  </th>
                                  <th style={{ textAlign: "center" }}>
                                    Total Fees{" "}
                                  </th>
                                  <th>
                                    <button
                                      type="button"
                                      name="add"
                                      id="Newadd"
                                      className="btn btn-success"
                                      onClick={handleAddRow}
                                    >
                                      +
                                    </button>
                                  </th>
                                </tr>
                                {rows.map((row, index) => (
                                  <tr
                                    key={row.id}
                                    id="rowSesw1"
                                    className="dynamic-added"
                                  >
                                    <td>
                                      <select
                                        className="form-select"
                                        value={row.admissionFor}
                                        name="admissionFor"
                                        onChange={(event) =>
                                          handleInputChange(index, event)
                                        }
                                      >
                                        <option value="">
                                          Select Admission For
                                        </option>
                                        <option value="ASSIGNMENT (RM)">
                                          ASSIGNMENT (RM)
                                        </option>
                                        <option value="RE-REG-III">
                                          RE-REG-III
                                        </option>
                                      </select>
                                    </td>
                                    <td>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="univercityFees"
                                        value={row.univercityFees}
                                        onChange={(event) =>
                                          handleInputChange(index, event)
                                        }
                                        placeholder="Universities Fees"
                                      />
                                    </td>
                                    <td>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        value={row.bitFees}
                                        name="bitFees"
                                        onChange={(event) =>
                                          handleInputChange(index, event)
                                        }
                                        placeholder="Bit Fees"
                                      />
                                    </td>
                                    <td>
                                      <Input
                                        type="text"
                                        name="total"
                                        className="form-control"
                                        placeholder="Bit Fees"
                                        value={row.total}
                                        onChange={(event) =>
                                          handleInputChange(index, event)
                                        }
                                      />
                                    </td>
                                    <td>
                                      {index > 0 && (
                                        <button
                                          type="button"
                                          className="btn btn-danger"
                                          onClick={() => handleRemoveRow(index)}
                                        >
                                          x
                                        </button>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                      <div></div>
                      {group === true ? (
                        <div className="row" id="coursegrp">
                          <div className="col-md-12">
                            <table
                              className="table table-bordered"
                              id="dynamic_field"
                            >
                              <tbody>
                                <tr
                                  style={{
                                    color: "#fff",
                                    backgroundColor: "#415164",
                                  }}
                                >
                                  <th style={{ textAlign: "center" }}>
                                    Subcourse
                                  </th>
                                  <th style={{ textAlign: "center" }}>
                                    Lecture Reports
                                  </th>
                                  <th style={{ textAlign: "center" }}>
                                    Duration
                                  </th>
                                  <th style={{ textAlign: "center" }}>Lab</th>
                                  <th style={{ textAlign: "center" }}>
                                    Theory
                                  </th>
                                  <th style={{ textAlign: "center" }}>
                                    Not Available
                                  </th>
                                  <th>
                                    <button
                                      type="button"
                                      name="add"
                                      id="add"
                                      className="btn btn-success"
                                      onClick={handelSubCouseRow}
                                    >
                                      +
                                    </button>
                                  </th>
                                </tr>
                                {subCourse.map((row, index) => (
                                  <tr
                                    id="row15"
                                    key={row.id}
                                    class="dynamic-added"
                                  >
                                    <td>
                                      <Input
                                        type="number"
                                        value={formData[index]?.Subcourse || ""}
                                        onChange={(e) =>
                                          lectureHandleInputChange(
                                            index,
                                            "Subcourse",
                                            e.target.value
                                          )
                                        }
                                        id="subcourseds15"
                                        placeholder="Enter your Subcourse"
                                        className="typeahead form-control name_list"
                                      />
                                    </td>
                                    <td>
                                      <Input
                                        type="number"
                                        id="cdurations15"
                                        value={
                                          formData[index]?.lactureReport || ""
                                        }
                                        onChange={(e) =>
                                          lectureHandleInputChange(
                                            index,
                                            "lactureReport",
                                            e.target.value
                                          )
                                        }
                                        className="form-control"
                                      />
                                    </td>
                                    <td>
                                      <Input
                                        type="number"
                                        name="cdurations[]"
                                        value={formData[index]?.Duration || ""}
                                        onChange={(e) =>
                                          lectureHandleInputChange(
                                            index,
                                            "Duration",
                                            e.target.value
                                          )
                                        }
                                        className="form-control"
                                      />
                                    </td>
                                    <td>
                                      <Input
                                        className="form-control"
                                        type="checkbox"
                                        name="sublabs[]"
                                        checked={formData[index]?.lab || false}
                                        onChange={(e) =>
                                          lectureHandleInputChange(
                                            index,
                                            "lab",
                                            e.target.checked
                                          )
                                        }
                                      />
                                    </td>
                                    <td>
                                      <Input
                                        type="checkbox"
                                        name="subtheory[]"
                                        checked={
                                          formData[index]?.theory || false
                                        }
                                        onChange={(e) =>
                                          lectureHandleInputChange(
                                            index,
                                            "theory",
                                            e.target.checked
                                          )
                                        }
                                      />
                                    </td>
                                    <td>
                                      <Input
                                        type="checkbox"
                                        name="sub_no[]"
                                        checked={
                                          formData[index]?.notavailable || false
                                        }
                                        onChange={(e) =>
                                          lectureHandleInputChange(
                                            index,
                                            "notavailable",
                                            e.target.checked
                                          )
                                        }
                                      />
                                    </td>
                                    <td>
                                      <button
                                        type="button"
                                        name="remove"
                                        id={15}
                                        className="btn btn-danger btn_remove"
                                        onClick={() =>
                                          handleRemoveSubCourseRow(index)
                                        }
                                      >
                                        x
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {group === true ? (
                        <div className="row" id="coursespecification">
                          <div className="col-md-12">
                            <div className="mb-3">
                              <Label
                                className="form-Label"
                                htmlFor="Specification"
                              >
                                By Specialization
                              </Label>
                              <select
                                className="form-select"
                                value={selectValue}
                                onChange={handleSelectValue}
                                id="byspecification"
                              >
                                <option className="active">
                                  Select By Specialization
                                </option>
                                <option value={1}>Any One</option>
                                <option value={2}>Any Two</option>
                                <option value={3}>Any Three</option>
                                <option value={4}>Any Four</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <table
                              className="table table-bordered"
                              id="specializationtable"
                            >
                              <tbody>
                                <tr
                                  style={{
                                    color: "#fff",
                                    backgroundColor: "#415164",
                                  }}
                                >
                                  <th style={{ textAlign: "center" }}>
                                    Specialization
                                  </th>
                                  <th style={{ textAlign: "center" }}>
                                    Lecture Reports
                                  </th>
                                  <th style={{ textAlign: "center" }}>
                                    <span
                                      className="btn btn-primary"
                                      id="add_specializations"
                                      onClick={handleAddLectureRow}
                                    >
                                      {" "}
                                      +
                                    </span>
                                  </th>
                                </tr>
                                {lecture.map((row, index) => (
                                  <tr
                                    key={row.id}
                                    id="rowspeciall1801"
                                    data-select2-id="rowspeciall1801"
                                  >
                                    <td>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        name="specialization"
                                        value={row.specialization}
                                        onChange={(event) =>
                                          handleLectureInputChange(index, event)
                                        }
                                        placeholder="Specializations"
                                      />
                                    </td>
                                    <td data-select2-id="81">
                                      <select
                                        className="form-select"
                                        name="lactureReport"
                                        value={row.lactureReport}
                                        onChange={(event) =>
                                          handleLectureInputChange(index, event)
                                        }
                                      >
                                        <option value="">
                                          Select Lecture Reports
                                        </option>
                                        <option value="admission">
                                          ADMISSION
                                        </option>
                                        <option value="SEMsem-6">SEM-6</option>
                                      </select>
                                    </td>
                                    <td>
                                      <Input
                                        type="number"
                                        name="value"
                                        value={row.value}
                                        onChange={(event) =>
                                          handleLectureInputChange(index, event)
                                        }
                                        className="form-control"
                                        placeholder="Duration"
                                      />
                                    </td>
                                    <td>
                                      <center>
                                        <button
                                          type="button"
                                          className="btn btn-danger"
                                          onClick={() =>
                                            handleRemoveLectureRow(index)
                                          }
                                        >
                                          x
                                        </button>
                                      </center>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label
                              className="form-Label"
                              htmlFor="validationCustom04"
                            >
                              Tax
                            </Label>
                            <select
                              className="form-select"
                              onChange={handleTax}
                              value={tax}
                              defaultValue="18"
                            >
                              <option className="active" value="">
                                Select Tax
                              </option>
                              <option value={18}>18</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="form-Label">Website</Label>
                            <Input
                              type="text"
                              className="form-control"
                              value={website}
                              onChange={(e) => setWebsite(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="form-Label">Meta Title</Label>
                            <Input
                              type="text"
                              className="form-control"
                              value={metaTitle}
                              onChange={handleMetaTitleValue}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label>Meta Description</Label>
                            <textarea
                              className="form-control"
                              rows="5"
                              value={metaDescription}
                              onChange={handleMetaDescriptionChange}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="form-Label">
                              Course Brocheure
                            </Label>
                            <br />
                            <embed
                              id="blah"
                              src="https://erpbitbaroda.com/public/pdf/pdf.png"
                              alt="Pdf"
                              height={200}
                              width={200}
                            />
                            <br />
                            <Input
                              type="file"
                              className="form-control"
                              name="pdfFile"
                              onChange={handleFileChange}
                            />
                            {successMsg && (
                              <span className="text-success">{successMsg}</span>
                            )}
                            {errorMsg && (
                              <span className="text-danger">{errorMsg}</span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label
                              className="form-Label"
                              htmlFor="leaddurations"
                            >
                              Course Duration
                            </Label>
                            <Input
                              type="texr"
                              className="form-control"
                              value={courseDuration}
                              onChange={handleCourseDuration}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="form-Label">Lead Duration</Label>
                            <Input
                              type="texr"
                              className="form-control"
                              value={leadDuration}
                              onChange={handleLeadDuration}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <Label className="form-Label" htmlFor="ShoworHide">
                              Course Visible
                            </Label>
                            <select
                              className="form-select"
                              name="visible"
                              id="visible"
                              value={selectVisible}
                              onChange={handleSelectVisible}
                            >
                              <option value className="active">
                                Select Visible
                              </option>
                              <option value="false">Hide</option>
                              <option value="true">Show</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={EditToggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={EditToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
           {/* delet Model */}
       <Modal isOpen={deleteModel} toggle={handleDeleteModel}>
  <ModalHeader>
   Delete Confirmation
  </ModalHeader>
  <ModalBody>
  Are you sure you want to delete 
  </ModalBody>
  <ModalFooter>
  <Button color="btn" onClick={handleDeleteModel}>
            Cancle
          </Button>
          <Button color="btn btn-danger" onClick={deleteCategoryData}>
            Delete
          </Button>
         
         </ModalFooter>
</Modal>  
      </div>
    </div>
  );
}

export default Index;
