import React, { useState, useEffect } from "react";
import Sidebar from "../../Directive/Sidebar/Index";
import Header from "../../Directive/Header/Index";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Constants/Index.js";
import { format } from "date-fns";
import { Button, Form, Label, Input } from "reactstrap";
import Multiselect from "multiselect-react-dropdown";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import toast, { Toaster } from 'react-hot-toast';
const GroupOptions = [
  "individual",
  "bygroup",
  // Add more options as needed
];

const countryOptions = [
  { value: "page1", label: "option 1" },
  { value: "page2", label: "option 2" },
  { value: "page3", label: "option 3" },
  // ... add more options ...
];
const universityOptions = [
  { value: "bitinstitute", label: "BIT Institute" },
  { value: "otherUnivercity", label: "University" },
];
const generateSlug = (InputString) => {
  return InputString.toLowerCase() // Convert the string to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^a-z0-9-]/g, "") // Remove all characters except letters, numbers, and hyphens
    .replace(/--+/g, "-") // Replace consecutive hyphens with a single hyphen
    .replace(/^-|-$/g, ""); // Remove hyphens from the beginning or end of the string
};

function Index() {
  const [isChecked, setIsChecked] = useState(false);
  const [theoryChecked, setIsTheoryChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedCourseGroup, setSelectedCouseGroup] = useState("");
  const [subCourseList, setSubCourseList] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [formData, setFormData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectSubOption, setSelectedSubOptions] = useState([]);
  const [selectedUniversity, setSelectedUniversity] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [certificationName, setCertifictionName] = useState("");
  const [file, setFile] = useState(null);
  const [offlinePrice, setOfflinePrice] = useState("");
  const [onlinePrice, setOnlinePrice] = useState("");
  const [corporateprice, setCorporatePrice] = useState("");
  const [specializationRow, setSpecializatonRow] = useState([]);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [subCourseIdfilter, setSubCourseValue] = useState({});
  const [courseDuration, setCourseDuration] = useState("");

  const [slugUrl, setslugUrl] = useState("");
  const [categories, setCategories] = useState([]);
  const [subCategory, setSubCategories] = useState([]);
  const [subCourse, setSubCourse] = useState([GroupOptions]);
  const [courseBrocheur, setFileName] = useState("");
  const [baseFees, setBaseFees] = useState("");
  const [gsttaks, setGstTaks] = useState("");
  const [selected, setSelected] = useState("");
  const [backend, setBackend] = useState("");
  const [admissionfees, setAdmissionFees] = useState("");
  const [admissionrn, setAdmissionrn] = useState("");
  const [reReg2, setReReg_2] = useState("");
  const [reReg3, setReReg3] = useState("");
  const [examFees, setExamFeeas] = useState("");
  const [exam_RM, setExamRg] = useState("");
  const [assignmentrm, setAssignmentRm] = useState("");
  const [degreeProcess, setDgreProcess] = useState("");
  const [lateFree, setLateFees] = useState("");
  const [examEhf, setExamEfh] = useState("");
  const [universitiesList, setUniversitiesList] = useState([]);
  const history = useHistory();
  const [courseType, setCourseType] = useState("");
  const [selectedCountryValue, setSelectedCountryValue] = useState("");
  const [selectValue, setSelectValue] = useState([]);

  const [lectureRows, setLectureRows] = useState(2);
  const [metaKeyboard, setMetaKeyBoard] = useState("");
  const [valuesArray, setValuesArray] = useState([]);
  const [studyMateria, setStudyMateria] = useState([]);

  const handleAddstdyRow = () => {
    setStudyMateria([
      ...studyMateria,
      { image_URL: "", video_URL: "", mail_massage_URL: "" },
    ]);
  };
  const handleRemovemateriRow = (index) => {
    const updatedStudyMateria = studyMateria.filter((_, i) => i !== index);
    setStudyMateria(updatedStudyMateria);
  };
  const lectureMaterialStudy = (index, event) => {
    const { name, value } = event.target;
    const updatedStudyMateria = [...studyMateria];
    updatedStudyMateria[index][name] = value;
    setStudyMateria(updatedStudyMateria);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    handleFormSubmit(selectedFile);
  };

  const handleFormSubmit = (file) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      axios
        .post(`${BASE_URL}/course/add_Course_file`, formData)

        .then((response) => {
          setFileName(response.data.data.file_name);
        
          if (response.data.status === false) {
              toast.error("Upload Error");
          } else {
            toast.success("Uploaded Successfully");
          } 
        
        })
        .catch((error) => {
          // Handle error
          console.error("Error uploading PDF:", error);
        });
    } else {
      setErrorMsg("Please select a file");
    }
  };

  const removeValueAtIndex = (index) => {
    const updatedArray = [...valuesArray];
    updatedArray.splice(index, 1);
    setValuesArray(updatedArray);
  };
  const handleInputChange = (event) => {
    setMetaKeyBoard(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (metaKeyboard.trim() !== "") {
        setValuesArray([...valuesArray, metaKeyboard]);
        setMetaKeyBoard("");
      }
    }
  };
  const [lecture, setLecture] = useState([
    { id: 0, lectureReport: "", duration: "" },
  ]);

  const handleSelectValue = (event) => {
    const value = parseInt(event.target.value);
    setSelectValue(value);
    setLectureRows(value);
    setLecture(
      Array.from({ length: value }, (_, index) => ({
        course: "",
        lectureReport: "",
        duration: "",
      }))
    );
  };
  // console.log("console.log", lecture);
  const handleAddLectureRow = () => {
    setLecture([
      ...lecture,
      {
        id: lecture.length,
        lectureReport: "",
        duration: "",
      },
    ]);
    setLectureRows(lectureRows + 1);
  };

  const handleRemoveLectureRow = (index) => {
    const updatedLecture = lecture.filter((row) => row.id !== index);
    setLecture(updatedLecture);
    setLectureRows(lectureRows - 1);
  };

  const handleLectureInputChange = (index, field, value) => {
    console.log(index, field, value);
    const updatedLecture = [...lecture];
    updatedLecture[index] = {
      ...updatedLecture[index],
      [field]: value,
    };
    setLecture(updatedLecture);
    setSpecializatonRow(updatedLecture);
    const transformedArray = updatedLecture.map((item) => {
      const { value, label } = item.course;
      const transformedCourse = { id: value, name: label };
      return { ...item, course: transformedCourse };
    });
    console.log("transformedArray", transformedArray);
  };

  const handleCountryChange = (selectedOption) => {
    setSelectedCountryValue(selectedOption.value);
  };
  const handleSelectCourseGroup = (e) => {
    setSelectedCouseGroup(e.target.value);
  };
  const handleRadioChange = (event) => {
    setSelected(event.target.value);
    console.log(event.target.value);
  };
  const handleRadioBackend = (event) => {
    setBackend(event.target.value);
    console.log(event.target.value);
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

  const handleMultiUniversity = (selectedList) => {
    setSelectedUniversity(selectedList);
  };
  const handleMultiSubcateogry = (selectedList) => {
    setSelectedSubOptions(selectedList);
  };

  const handleMultiSelectChange = (selectedList) => {
    setSelectedOptions(selectedList);
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

  const handleLabCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const handleTheoryCheckboxChange = (event) => {
    setIsTheoryChecked(event.target.checked);
  };
  const handleNoCheckboxChange = (event) => {
    setNoChecked(event.target.checked);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption.value);
    console.log(selectedOption.value);
  };

  useEffect(() => {
    fetchCategories();
    HandleSubCategories();
  }, []);

  const options = categories.map((item) => ({
    name: item.categoryName,
    id: item._id,
  }));
  console.log(options);
  const optionsubCategory = subCategory.map((item) => ({
    name: item.subCategoryName,
    id: item._id,
  }));
  const optionuniversities = universitiesList.map((item) => ({
    name: item.universityName,
    id: item._id,
  }));
  const handleCourseType = (e) => {
    setCourseType(e.target.value);
    console.log(e.target.value);
  };
  const fetchCategories = () => {
    axios
      .get(`${BASE_URL}/categories/get_All_category`)
      .then((response) => {
        setCategories(response.data.data.adminData);
      })
      .catch((error) => {
        console.error("API error:", error);
        // Handle the error (e.g., show an error message)
      });
  };
  const fetchSubCourse = () => {
    axios
      .get(`${BASE_URL}/course/get_All_Individual_Course`)
      .then((response) => {
      
        setSubCourseList(response.data.data.adminCourses);
      })
      .catch((error) => {
        console.error("API error:", error);
        // Handle the error (e.g., show an error message)
      });
  };

  const subCourseListFilter = subCourseList.map((course) => ({
    value: course._id,
    label: course.courseName,
  }));
  console.log("subCourseListFilter", subCourseListFilter);
  // const handleAddCourse = () => {

  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    const requestBody = {
      category: selectedOptions,
      subCategory: selectSubOption,
      courseName: courseName,
      certificateName: certificationName,
      coourseType: courseType,
      institute: selectedOption,
      offlinePrice: offlinePrice,
      metaKeyWords: valuesArray,
      onlinePrice: onlinePrice,
      corporatePrice: corporateprice,
      courseDuration: courseDuration,
      baseFees: baseFees ? baseFees : 0,
      fronrendVisible: selected,
      backendVisible: backend,

      courseGrop: selectedCourseGroup,
      univercity: selectedUniversity,
      Admission: admissionfees,
      Admission_RM: admissionrn ,
      ReReg_2: reReg2 ?reReg2 :0,
      ReReg_3: reReg3 ?reReg3:0 ,
      Exam_RM: exam_RM ?exam_RM :0,
      Exam_EFH: examEhf ?examEhf:0,
      Assignment_RM: assignmentrm ?assignmentrm:0,
      Degree_Process_Fees: degreeProcess ?degreeProcess:0,
      Late_Fees: lateFree ?lateFree:0,
      tax: gsttaks? gsttaks :18,
      metaTitle: metaTitle,
      metaDiscription: metaDescription,
      slugUrl: slugUrl,
      pageFormat: selectedCountryValue ? selectedCountryValue : "page1",
      laturesReport: [{ id: "64cfa5ec377ef6cf5f8db721" }],
      lab: isChecked,
      theory: theoryChecked,
      notavailable: noChecked,
      studyMaterial_URL: studyMateria,
      Subcourse: apiData,
      specialization: specializationRow,
      Brochure: courseBrocheur,
    };
    console.log("specializationRow", courseName);
    axios
      .post(`${BASE_URL}/course/add_Course`, requestBody)
      .then((response) => {
        console.log("hjdfsgfdshsd", response);
        if (response.data.status === false) {
          toast.error("Error");
        } else {
           toast.success("Success");
            history.push("/managecourses");
       
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  useEffect(() => {
    fetchAllUniversity();
    fetchSubCourse();
  }, []);

  const fetchAllUniversity = () => {
    axios
      .get(`${BASE_URL}/university/get_All_University`)
      .then((response) => {
       
        setUniversitiesList(response.data.data.adminData);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  const handleNext = () => {
    // if(currentStep === 2 && !courseName && certificationName && selectedOptions && selectSubOption){
    //   setErrorMsg("Please Enter All Field");
    //   return;
    // }
    // console.log("courseBrocheur",courseBrocheur);
    // if (currentStep === 2 && courseBrocheur === "") {
    //   setErrorMsg("PDF upload is required.");
    //   return;
    // }else{
    //   setErrorMsg("");
    // }
    setErrorMsg("");
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleRemoveSubCourseRow = (indexToRemove) => {
    const newsubCourse = subCourse.filter(
      (subCourse, index) => index !== indexToRemove
    );
    setSubCourse(newsubCourse);
  };

  const lectureHandleInputChange = (index, field, value) => {
    console.log(index, field, value);
    if (index === 0) {
      setSubCourseValue(value);
    }

    const updatedFormData = [...formData];
    updatedFormData[index] = {
      ...updatedFormData[index],
      [field]: value,
    };
    setFormData(updatedFormData);
  };

  const apiData = formData.map((data) => ({
    id: subCourseIdfilter.value || "",
    name: subCourseIdfilter.label || "",
    lactureReport: data.lactureReport || "",
    duration: data.Duration || 0,
    lab: data.lab || false,
    theory: data.theory || false,
    notavailable: data.notavailable || false,
  }));
  console.log(apiData);

  const handelSubCouseRow = () => {
    const newsubCourse = { ...GroupOptions, id: subCourse.length + 1 };
    setSubCourse([...subCourse, newsubCourse]);
  };

  return (
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
      <Toaster />
      <div className="body-wrapper">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body wizard-content">
                  <div>
                    <header>
                      <h4>
                        {currentStep === 1
                          ? "Create Course"
                          : currentStep === 2
                          ? "Course Page Formate"
                          : "Course Details"}
                      </h4>
                    </header>
                    {successMsg && (
                      <span className="text-success">{successMsg}</span>
                    )}
                    {errorMsg && (
                      <span className="text-danger">{errorMsg}</span>
                    )}
                    <form
                      className="validation-wizard wizard-circle mt-5 wizard clearfix"
                      role="application"
                      id="steps-uid-7"
                      noValidate="novalidate"
                    >
                      <div className="steps clearfix">
                        <ul role="tablist">
                          <li
                            role="tab"
                            // className="first done"
                            className={
                              currentStep === 1 ? "first current" : "first done"
                            }
                            aria-disabled="false"
                            aria-selected={currentStep === 1 ? "true" : "false"}
                          >
                            <a
                              id="steps-uid-7-t-0"
                              href="#steps-uid-7-h-0"
                              aria-controls="steps-uid-7-p-0"
                            >
                              <span className="current-info audible">
                                current step:{" "}
                              </span>
                              <span className="step">1</span> Step 1
                            </a>
                          </li>
                          <li
                            role="tab"
                            className={
                              currentStep === 2
                                ? "current"
                                : currentStep < 2
                                ? "disabled"
                                : "done"
                            }
                            aria-disabled={currentStep === 2 ? "false" : "true"}
                            aria-selected={currentStep === 2 ? "true" : "false"}
                          >
                            <span className="step">2</span> Step 2
                          </li>
                          <li
                            role="tab"
                            className={
                              currentStep === 3
                                ? "current"
                                : currentStep < 3
                                ? "disabled"
                                : "done"
                            }
                            aria-disabled={currentStep === 3 ? "false" : "true"}
                            aria-selected={currentStep === 3 ? "true" : "false"}
                          >
                            <a
                              id="steps-uid-7-t-2"
                              href="#steps-uid-7-h-2"
                              aria-controls="steps-uid-7-p-2"
                            >
                              <span className="step">3</span> Step 3
                            </a>
                          </li>
                          {/* <li
                            role="tab"
                            className={
                              currentStep === 4
                                ? "last current"
                                : currentStep < 4
                                ? "disabled"
                                : "last current done"
                            }
                            aria-disabled={currentStep === 4 ? "false" : "true"}
                            aria-selected={currentStep === 4 ? "true" : "false"}
                          >
                            <a
                              id="steps-uid-7-t-3"
                              href="#steps-uid-7-h-3"
                              aria-controls="steps-uid-7-p-3"
                            >
                              <span className="step">4</span> Step 4
                            </a>
                          </li> */}
                        </ul>
                      </div>
                      <div className="content clearfix">
                        {currentStep === 1 && (
                          <div>
                            <section
                              id="steps-uid-7-p-0"
                              role="tabpanel"
                              className="body current"
                              aria-hidden="false"
                            >
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <Label className="form-Label">
                                      Institute
                                    </Label>

                                    <Select
                                      value={universityOptions.find(
                                        (option) =>
                                          option.value === selectedOption
                                      )}
                                      onChange={handleSelectChange}
                                      options={universityOptions}
                                      placeholder="Please select Institute"
                                      isSearchable={true}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <Label className="form-Label">
                                      Category
                                    </Label>
                                    <Multiselect
                                      placeholder="select"
                                      options={options}
                                      selected={selectedOptions}
                                      onSelect={handleMultiSelectChange}
                                      onRemove={handleMultiSelectChange}
                                      displayValue="name"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <Label className="form-Label">
                                      Subcateogry
                                    </Label>
                                    <Multiselect
                                      placeholder="select"
                                      options={optionsubCategory}
                                      selected={selectSubOption}
                                      onSelect={handleMultiSubcateogry}
                                      onRemove={handleMultiSubcateogry}
                                      displayValue="name"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <Label className="form-Label">
                                      Course Name
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      value={courseName}
                                      onChange={(e) =>
                                        setCourseName(e.target.value)
                                      }
                                      required
                                    />
                                    <div className="invalid-feedback">
                                      Please Provide Course Name.
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="row">
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
                              </div>

                              {selectedOption === "bitinstitute" && (
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="mb-3">
                                      <Label className="form-Label">
                                        Course Group
                                      </Label>
                                      <select
                                        className="form-select"
                                        onChange={handleCourseType}
                                        value={courseType}
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
                                  <div className="col-md-4">
                                    <div className="mb-3">
                                      <Label className="form-Label">
                                        Base Fees
                                      </Label>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        value={baseFees}
                                        onChange={(e) =>
                                          setBaseFees(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="mb-3">
                                      <Label className="form-Label">
                                        Online Fees
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        value={onlinePrice}
                                        onChange={(e) =>
                                          setOnlinePrice(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="mb-3">
                                      <Label className="form-Label">
                                        Offline Fees
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
                                      <Label className="form-Label">
                                        Corporate Fees
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
                                  <div className="col-md-4">
                                    <div className="mb-3">
                                      <Label className="form-Label">
                                        GST Tax
                                      </Label>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        value={gsttaks}
                                        onChange={(e) =>
                                          setGstTaks(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="mb-3">
                                      <Label className="form-Label">
                                        Course Duration
                                      </Label>
                                      <Input
                                        type="number"
                                        className="form-control"
                                        value={courseDuration}
                                        onChange={(e) =>
                                          setCourseDuration(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="mb-3">
                                      <Label className="form-Label">
                                        Frontend
                                      </Label>{" "}
                                      <br />{" "}
                                      <div className="radflex">
                                        <div>
                                          <Input
                                            className="setradio"
                                            type="radio"
                                            name="sellerType"
                                            onChange={handleRadioChange}
                                            value="false"
                                          />
                                          <Label> Hide </Label>
                                        </div>
                                        <div>
                                          <Input
                                            type="radio"
                                            className="setradio"
                                            name="sellerType"
                                            onChange={handleRadioChange}
                                            value="true"
                                          />
                                          <Label> Show </Label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="mb-3">
                                      <Label className="form-Label">
                                        Backend
                                      </Label>
                                      <br />
                                      <div className="radflex">
                                        <div>
                                          <Input
                                            className="setradio"
                                            type="radio"
                                            name="tanivu"
                                            onChange={handleRadioBackend}
                                            value="false"
                                          />
                                          <Label> Hide </Label>
                                        </div>
                                        <div>
                                          <Input
                                            type="radio"
                                            className="setradio"
                                            name="tanivu"
                                            onChange={handleRadioBackend}
                                            value="true"
                                          />
                                          <Label> Show </Label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedOption === "otherUnivercity" && (
                                <div>
                                  <div className="row">
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Course Group
                                        </Label>
                                        <select
                                          className="form-select"
                                          onChange={handleSelectCourseGroup}
                                          value={selectedCourseGroup}
                                        >
                                          <option value="univercity">
                                            {" "}
                                            Univercity{" "}
                                          </option>
                                          <option value="coaching">
                                            coaching{" "}
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          University Name
                                        </Label>
                                        <Multiselect
                                          placeholder="select"
                                          options={optionuniversities}
                                          selected={selectedUniversity}
                                          onSelect={handleMultiUniversity}
                                          onRemove={handleMultiUniversity}
                                          displayValue="name"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Admission Fees
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          value={admissionfees}
                                          onChange={(e) =>
                                            setAdmissionFees(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Addmisson_RN Fees
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          value={admissionrn}
                                          onChange={(e) =>
                                            setAdmissionrn(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>

                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          ReREg-2
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          value={reReg2}
                                          onChange={(e) =>
                                            setReReg_2(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          ReREg-3
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          value={reReg3}
                                          onChange={(e) =>
                                            setReReg3(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Exam Fees
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          value={examFees}
                                          onChange={(e) =>
                                            setExamFeeas(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Exam (RM)
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          value={exam_RM}
                                          onChange={(e) =>
                                            setExamRg(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Exam (EFH)
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          value={examEhf}
                                          onChange={(e) =>
                                            setExamEfh(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Assignment (RM)
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          value={assignmentrm}
                                          onChange={(e) =>
                                            setAssignmentRm(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Degree Process Fees
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          value={degreeProcess}
                                          onChange={(e) =>
                                            setDgreProcess(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Late Fees
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          value={lateFree}
                                          onChange={(e) =>
                                            setLateFees(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          GST Tax
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          value={gsttaks}
                                          onChange={(e) =>
                                            setGstTaks(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Course Duration
                                        </Label>
                                        <Input
                                          type="number"
                                          className="form-control"
                                          value={courseDuration}
                                          onChange={(e) =>
                                            setCourseDuration(e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Frontend
                                        </Label>{" "}
                                        <br />{" "}
                                        <div className="radflex">
                                          <div>
                                            <Input
                                              className="setradio"
                                              type="radio"
                                              name="sellerType"
                                              onChange={handleRadioChange}
                                              value="false"
                                            />
                                            <Label> Hide </Label>
                                          </div>
                                          <div>
                                            <Input
                                              type="radio"
                                              className="setradio"
                                              name="sellerType"
                                              onChange={handleRadioChange}
                                              value="true"
                                            />
                                            <Label> Show </Label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div className="mb-3">
                                        <Label className="form-Label">
                                          Backend
                                        </Label>
                                        <br />
                                        <div className="radflex">
                                          <div>
                                            <Input
                                              className="setradio"
                                              type="radio"
                                              name="tanivu"
                                              onChange={handleRadioBackend}
                                              value="false"
                                            />
                                            <Label> Hide </Label>
                                          </div>
                                          <div>
                                            <Input
                                              type="radio"
                                              className="setradio"
                                              name="tanivu"
                                              onChange={handleRadioBackend}
                                              value="true"
                                            />
                                            <Label> Show </Label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </section>
                          </div>
                        )}

                        {currentStep === 2 && (
                          <div>
                            <section
                              id="steps-uid-7-p-1"
                              role="tabpanel"
                              className="body current"
                              aria-hidden="false"
                              style={{}}
                            >
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="mb-3">
                                    <Label htmlFor="jobTitle2">
                                      Select Page Format
                                    </Label>

                                    <Select
                                      value={countryOptions.find(
                                        (option) =>
                                          option.value === selectedCountryValue
                                      )}
                                      onChange={handleCountryChange}
                                      options={countryOptions}
                                      placeholder="Please Select option"
                                      isSearchable={true}
                                      isClearable={true}
                                    />
                                  </div>
                                  <div className="col-md-12">
                                    <div
                                      className="mb-3"
                                      style={{
                                        textDecorationLine: "underline",
                                      }}
                                    >
                                      {selectedCountryValue === "page1" ? (
                                        <Link
                                          to="/course/page1"
                                          target="_blank"
                                        >
                                          Course page1 Link
                                        </Link>
                                      ) : selectedCountryValue === "page2" ? (
                                        <Link
                                          to="/course/page2"
                                          target="_blank"
                                        >
                                          Course page2 Link
                                        </Link>
                                      ) : selectedCountryValue === "page3" ? (
                                        <Link
                                          to="/course/page3"
                                          target="_blank"
                                        >
                                          Course Page3 Link
                                        </Link>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="mb-3">
                                    <Label>Meta Title</Label>
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
                                    <Label htmlFor="webUrl3">Slug URL</Label>
                                    <Input
                                      type="url"
                                      disabled
                                      className="form-control required"
                                      value={slugUrl}
                                    />
                                  </div>
                                </div>

                                <div className="col-md-12">
                                  <div className="mb-3">
                                    <Label>Meta Keywords</Label>
                                    <Input
                                      type="text"
                                      value={metaKeyboard}
                                      onChange={handleInputChange}
                                      onKeyPress={handleInputKeyPress}
                                    />
                                    <div>
                                      {valuesArray.map((value, index) => (
                                        <div key={index} className="value-box">
                                          <span className="value-text">
                                            {value}
                                          </span>
                                          <i
                                            onClick={() =>
                                              removeValueAtIndex(index)
                                            }
                                            className="fa fa-trash delete-icon"
                                          ></i>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>

                                <div className="col-md-12">
                                  <div className="mb-3">
                                    <Label>Meta Description:</Label>
                                    <textarea
                                      name="shortDescription"
                                      id="shortDescription3"
                                      value={metaDescription}
                                      onChange={handleMetaDescriptionChange}
                                      rows={3}
                                      className="form-control"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Course Brochure
                                    </label>
                                    <br />
                                    <embed
                                      id="blah"
                                      src="https://erpbitbaroda.com/public/pdf/pdf.png"
                                      alt="Pdf"
                                      height={100}
                                      width={100}
                                    />
                                    <br />
                                    <input
                                      type="file"
                                      className="form-control"
                                      onChange={handleFileChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        )}
                        {currentStep === 3 && (
                          <div>
                            <section
                              id="steps-uid-7-p-1"
                              role="tabpanel"
                              className="body current"
                              aria-hidden="false"
                              style={{}}
                            >
                              {courseType === "individual" && (
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <Label className="form-Label">
                                        Duration
                                      </Label>
                                      <Input />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <Label className="form-Label"></Label>
                                      <Link
                                        target="_blank"
                                        className="text-decoration-underline"
                                        to="/create-lecture-report"
                                      >
                                        + Add Lecture Report{" "}
                                      </Link>
                                    </div>
                                  </div>
                                  {/* <div className="col-md-6">
                                    <div className="mb-3">
                                      <Label className="form-Label">
                                        Study Material
                                      </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        value={study}
                                        onChange={(e) =>
                                          set(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div> */}
                                  {/* 
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
                                     setFileName   onChange={handleFileChange}
                                      />

                                      {errorMsg && (
                                        <span className="text-danger">
                                          {errorMsg}
                                        </span>
                                      )}
                                    </div>
                                  </div> */}
                                  <div className="row">
                                    <div className="col-md-12 mb-3">
                                      <label>study Material</label>
                                      <table className="table table-bordered">
                                        <tbody>
                                          <tr
                                            style={{
                                              color: "#fff",
                                              backgroundColor: "#415164",
                                            }}
                                          >
                                            <th style={{ textAlign: "center" }}>
                                              Image URL
                                            </th>
                                            <th style={{ textAlign: "center" }}>
                                              Video URL
                                            </th>
                                            <th style={{ textAlign: "center" }}>
                                              Message or Email Template URL
                                            </th>
                                            <th style={{ textAlign: "center" }}>
                                              <span
                                                className="btn btn-primary"
                                                id="add_specializations"
                                                onClick={handleAddstdyRow}
                                              >
                                                {" "}
                                                +
                                              </span>
                                            </th>
                                          </tr>
                                          {studyMateria.map((row, index) => (
                                            <tr key={index}>
                                              <td>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  name="image_URL"
                                                  value={row.image_URL}
                                                  onChange={(event) =>
                                                    lectureMaterialStudy(
                                                      index,
                                                      event
                                                    )
                                                  }
                                                  placeholder="image url"
                                                />
                                              </td>
                                              <td>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  name="video_URL"
                                                  value={row.video_URL}
                                                  onChange={(event) =>
                                                    lectureMaterialStudy(
                                                      index,
                                                      event
                                                    )
                                                  }
                                                  placeholder="video url"
                                                />
                                              </td>
                                              <td>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  name="mail_massage_URL"
                                                  value={row.mail_massage_URL}
                                                  onChange={(event) =>
                                                    lectureMaterialStudy(
                                                      index,
                                                      event
                                                    )
                                                  }
                                                  placeholder="message url"
                                                />
                                              </td>
                                              <td>
                                                <center>
                                                  <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                      handleRemovemateriRow(
                                                        index
                                                      )
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
                                    <Label className="form-Label">
                                      Study Material
                                    </Label>
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
                                </div>
                              )}
                              {courseType === "bygroup" && (
                                <div className="row">
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
                                          <th style={{ textAlign: "center" }}>
                                            Lab
                                          </th>
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
                                              <Select
                                                value={
                                                  formData[index]?.Subcourse ||
                                                  null
                                                }
                                                onChange={(selectedOption) =>
                                                  lectureHandleInputChange(
                                                    index,
                                                    "Subcourse",
                                                    selectedOption
                                                  )
                                                }
                                                options={subCourseList.map(
                                                  (category) => ({
                                                    value: category._id,
                                                    label: category.courseName,
                                                  })
                                                )}
                                                placeholder="Select Sub course Category"
                                                isSearchable={true}
                                                isClearable={true}
                                              />
                                              {/* <select
                                                value={
                                                  formData[index]?.Subcourse ||
                                                  ""
                                                }
                                                onChange={(e) =>
                                                  lectureHandleInputChange(
                                                    index,
                                                    "Subcourse",
                                                    e.target.value
                                                  )
                                                }
                                                // onChange={lectureHandleInputChange}
                                                className="form-select name_list"
                                                aria-label="Default select example"
                                              >
                                                <option value="">
                                                  Select Sub course Category
                                                </option>
                                                {subCourseList.length > 0 ? (
                                                  subCourseList.map(
                                                    (category) => (
                                                      <option
                                                        key={category._id}
                                                        value={category._id}
                                                      >
                                                        {category.courseName}
                                                      </option>
                                                    )
                                                  )
                                                ) : (
                                                  <option disabled>
                                                    No Sub course available
                                                  </option>
                                                )}
                                              </select> */}
                                            </td>
                                            <td>
                                              <select
                                                // type="number"
                                                className="form-select"
                                                value={
                                                  formData[index]
                                                    ?.lactureReport || ""
                                                }
                                                onChange={(e) =>
                                                  lectureHandleInputChange(
                                                    index,
                                                    "lactureReport",
                                                    e.target.value
                                                  )
                                                }
                                              >
                                                <option value="">
                                                  select Lecture
                                                </option>

                                                {/* Add more options here */}
                                              </select>
                                            </td>
                                            <td>
                                              <Input
                                                type="number"
                                                name="cdurations[]"
                                                value={
                                                  formData[index]?.Duration ||
                                                  ""
                                                }
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
                                                checked={
                                                  formData[index]?.lab || false
                                                }
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
                                                  formData[index]?.theory ||
                                                  false
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
                                                  formData[index]
                                                    ?.notavailable || false
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
                                                  handleRemoveSubCourseRow(
                                                    index
                                                  )
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
                                  <div className="col-md-12">
                                    <div className="mb-3">
                                      <label
                                        className="form-Label"
                                        htmlFor="Specification"
                                      >
                                        By Specialization
                                      </label>
                                      <select
                                        className="form-select"
                                        value={selectValue}
                                        onChange={handleSelectValue}
                                      >
                                        <option className="active">
                                          Select By Specialization
                                        </option>
                                        <option value={3}>Any One</option>
                                        <option value={4}>Any Two</option>
                                        <option value={5}>Any Three</option>
                                        <option value={6}>Any Four</option>
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
                                            Subcourse
                                          </th>
                                          <th style={{ textAlign: "center" }}>
                                            Lecture Reports
                                          </th>
                                          <th style={{ textAlign: "center" }}>
                                            Duration
                                          </th>
                                          <th style={{ textAlign: "center" }}>
                                            <span
                                              className="btn btn-primary"
                                              id="add_specializations"
                                              onClick={handleAddLectureRow}
                                            >
                                              +
                                            </span>
                                          </th>
                                        </tr>
                                        {Array.from({
                                          length: lectureRows,
                                        }).map((_, index) => (
                                          <tr key={index}>
                                            <td>
                                              <Select
                                                name="course"
                                                value={
                                                  lecture[index]?.course || null
                                                }
                                                onChange={(selectedOption) =>
                                                  handleLectureInputChange(
                                                    index,
                                                    "course",
                                                    selectedOption
                                                  )
                                                }
                                                options={subCourseList.map(
                                                  (category) => ({
                                                    value: category._id,
                                                    label: category.courseName,
                                                  })
                                                )}
                                                placeholder="Select Sub course Category"
                                                isSearchable={true}
                                                isClearable={true}
                                              />
                                            </td>
                                            <td>
                                              <select
                                                className="form-select"
                                                value={
                                                  lecture[index]
                                                    ?.lectureReport || ""
                                                }
                                                onChange={(event) =>
                                                  handleLectureInputChange(
                                                    index,
                                                    "lectureReport",
                                                    event.target.value
                                                  )
                                                }
                                              >
                                                <option value="">
                                                  Select Lecture Reports
                                                </option>
                                              </select>
                                            </td>
                                            <td>
                                              <input
                                                type="number"
                                                // name="duration"
                                                value={
                                                  lecture[index]?.duration || ""
                                                }
                                                onChange={(event) =>
                                                  handleLectureInputChange(
                                                    index,
                                                    "duration",
                                                    event.target.value
                                                  )
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
                                                    handleRemoveLectureRow(
                                                      index
                                                    )
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
                                  <Label className="form-Label">
                                    Study Material
                                  </Label>
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
                              )}
                            </section>
                          </div>
                        )}
                        {currentStep === 4 && (
                          <div>
                            <h6
                              id="steps-uid-7-h-0"
                              tabIndex={-1}
                              className="title"
                            >
                              Marketing Material
                            </h6>
                            <section
                              id="steps-uid-7-p-1"
                              role="tabpanel"
                              className="body current "
                              aria-hidden="false"
                              style={{}}
                            >
                              <div className="row">
                                <div className="col-md-12 mb-3">
                                  <table className="table table-bordered">
                                    <tbody>
                                      <tr
                                        style={{
                                          color: "#fff",
                                          backgroundColor: "#415164",
                                        }}
                                      >
                                        <th style={{ textAlign: "center" }}>
                                          Sub Course
                                        </th>
                                        <th style={{ textAlign: "center" }}>
                                          Image URL
                                        </th>
                                        <th style={{ textAlign: "center" }}>
                                          Video URL
                                        </th>
                                        <th style={{ textAlign: "center" }}>
                                          Message or Email Template URL
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
                                          <td data-select2-id="81">
                                            <select
                                              className="form-select"
                                              name="lactureReport"
                                              value={row.lactureReport}
                                              onChange={(event) =>
                                                handleLectureInputChange(
                                                  index,
                                                  "lactureReport",
                                                  event.target.value
                                                )
                                              }
                                            >
                                              <option value="">
                                                Select Lecture Reports
                                              </option>
                                              <option value="admission">
                                                ADMISSION
                                              </option>
                                              <option value="SEMsem-6">
                                                SEM-6
                                              </option>
                                            </select>
                                          </td>
                                          <td>
                                            {/* <Input
                                              type="text"
                                              className="form-control"
                                              name="specialization"
                                              value={row.specialization}
                                              onChange={(event) =>
                                                handleLectureInputChange(
                                                  index,
                                                  event
                                                )
                                              }
                                              placeholder="image url"
                                            /> */}
                                          </td>

                                          <td>
                                            <Input
                                              type="text"
                                              name="value"
                                              value={row.value}
                                              onChange={(event) =>
                                                handleLectureInputChange(
                                                  index,
                                                  event
                                                )
                                              }
                                              className="form-control"
                                              placeholder="video url"
                                            />
                                          </td>
                                          <td>
                                            <Input
                                              type="text"
                                              name="value"
                                              value={row.value}
                                              onChange={(event) =>
                                                handleLectureInputChange(
                                                  index,
                                                  event
                                                )
                                              }
                                              className="form-control"
                                              placeholder="message url"
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
                            </section>
                          </div>
                        )}
                      </div>

                      <div className="actions clearfix">
                        <ul role="menu" aria-Label="Pagination">
                          {currentStep > 1 && (
                            <li>
                              <button type="button" onClick={handlePrevious}>
                                Previous
                              </button>
                            </li>
                          )}
                          {currentStep < 3 && (
                            <li>
                              <button type="button" onClick={handleNext}>
                                Next
                              </button>
                            </li>
                          )}
                          {currentStep === 3 &&  (
                            <li>
                              <button type="submit" onClick={handleSubmit}>
                                Submit
                              </button>
                            </li>
                          )}
                        
                        </ul>
                      </div>
                    </form>
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

export default Index;
