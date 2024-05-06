import React, { useState, useEffect } from "react";
import Sidebar from "../../../Directive/Sidebar/Index";
import Header from "../../../Directive/Header/Index";
import axios from "axios";
import { BASE_URL } from "../../../Constants/Index";
import { format } from "date-fns";
import { Button, Form, Label, Input } from "reactstrap";
import Multiselect from "multiselect-react-dropdown";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Select from "react-select";

function EditLead() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedAssign, setSelectedAssign] = useState("");
  const [sourceList, setSourceList] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [surName, setSurname] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [description, setDescription] = useState("");
  const [whatsaap, setWhatsaap] = useState("");
  const [courseMode, setCourseMode] = useState("");
  const [leadValue, setLeadValue] = useState("");
  const [address, setAddress] = useState("");
  const history = useHistory();
  const [selectSubOption, setSelectedSubOptions] = useState([]);
  const [selectSource, setSelectSource] = useState([]);
  const [assignToList, setAssignToList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const currentDate = format(new Date(), "dd/MM/yyyy");
  const [branchList, setBarnchList] = useState([]);
  const [selectFromBranch, setSelectFromBranch] = useState("");
  const [selectToBranch, setSelectToBranch] = useState("");
  const [assign, setAssign] = useState([]);
  const [fromBranchValue, setFromBranchValue] = useState([]);
  const [toBranchValue, setSelectToBranchValue] = useState([]);
  const [checkMsg, setCheckMsg] = useState("");
  const [checkErrorMsg, setCheckErrorMsg] = useState("");
  const [checkErrorMsgPhone, setCheckErrorMsgPhone] = useState("");
  const [checkMsgPhone, setCheckMsgPhone] = useState("");
  const [checkErrorMsgWhatsaap, setCheckErrorMsgWhatsaap] = useState("");
  const [checkMsgWhatsaap, setCheckMsgWhatsaap] = useState("");

  const { id } = useParams();

  const handleSelectCourseMode = (selectedOption) => {
    setCourseMode(selectedOption.value);
  };

  const FullName = `${firstName} ${fatherName} ${surName}`;

  const filterFromData = (id) => {
    if (id) {
      const selectedData = branchList.filter((item) => id.includes(item._id));
      const options = selectedData.map((item) => ({
        branchName: item.branchName,
        id: item._id,
      }));
      const mergedObject = options.reduce((result, obj) => {
        return { ...result, ...obj };
      }, {});
      setFromBranchValue(mergedObject);
    }
  };
  const countryOptions = sourceList.map((category) => ({
    value: category._id,
    label: category.sourceName,
  }));

  const filterToData = (id) => {
    if (id) {
      const selectedData = branchList.filter((item) => id.includes(item._id));
      const options = selectedData.map((item) => ({
        branchName: item.branchName,
        id: item._id,
      }));
      const mergedObject = options.reduce((result, obj) => {
        return { ...result, ...obj };
      }, {});
      setSelectToBranchValue(mergedObject);
    }
  };
  const handleSlelectFromBranch = (selectedOption) => {
    setSelectFromBranch(selectedOption.value);
    filterFromData(selectedOption.value);
  };
  const handleSlelectTOBranch = (selectedOption) => {
    setSelectToBranch(selectedOption.value);
    filterToData(selectedOption.value);
  };

  const filterAssignData = (id) => {
    if (id) {
      const selectedData = assignToList.filter((item) => id.includes(item._id));
      const options = selectedData.map((item) => ({
        userName: item.name,
        userId: item._id,
        email: item.email,
      }));
      const mergedObject = options.reduce((result, obj) => {
        return { ...result, ...obj };
      }, {});
      setAssign(mergedObject);
    }
  };
  const optionsAssignTo = assignToList.map((category) => ({
    value: category._id,
    label: category.name,
  }));
  const handleEditLead = () => {
    axios
      .get(`${BASE_URL}/lead/get_One_Lead/${id}`)
      .then((response) => {
        console.log(response.data.data);
        setDescription(response.data.data.Discription);
        // setW(response.data.data.WalkedInStatus);
        setAddress(response.data.data.address);
        setSelectedAssign(response.data.data.assignedTo.userName);
        setCity(response.data.data.city);
        setSelectedSubOptions(response.data.data.course);
        setCourseMode(response.data.data.courseMode);
        setFatherName(response.data.data.fathersName);
        setFirstName(response.data.data.firstName);
        setSelectFromBranch(response.data.data.fromBranch.branchName);
        // setFull(response.data.data.fullName);
        // setLeadValue(response.data.data.leadDate);
        setLeadValue(response.data.data.leadValue);
        // setNext(response.data.data.nextFollowUPDate);
        setPhone(response.data.data.phone);
        setSelectedCategory(response.data.data.source.sourceName);

        setState(response.data.data.state);
        setSurname(response.data.data.surname);
        setSelectToBranch(response.data.data.toBranch.branchName);
        setWhatsaap(response.data.data.whatsapp);
        setZipcode(response.data.data.zipCode);
        setEmail(response.data.data.email);
      })
      .catch((error) => {
        console.error("API error:", error);
        // Handle the error (e.g., show an error message)
      });
  };
  const filterSourceData = (id) => {
    if (id) {
      const selectedData = sourceList.filter((item) => id.includes(item._id));
      const options = selectedData.map((item) => ({
        sourceName: item.sourceName,
        sourceId: item._id,
      }));
      const mergedObject = options.reduce((result, obj) => {
        return { ...result, ...obj };
      }, {});
      setSelectSource(mergedObject);
      console.log(mergedObject);
    }
  };

  const handleMultiSubcateogry = (selectedList) => {
    setSelectedSubOptions(selectedList);
  };
  const option = dataList.map((item) => ({
    courseName: item.courseName,
    courseId: item._id,
  }));

  const handleSelectChange = (selectedOption) => {
    setSelectedCategory(selectedOption.value);
    filterSourceData(selectedOption.value);
  };

  const handleAssignToChange = (selectedOption) => {
    setSelectedAssign(selectedOption.value);
    filterAssignData(selectedOption.value);
  };
  useEffect(() => {
    fetchDataList();
    fetchSourceList();
    fetchAssignToList();
    fetchAllBranch();
    handleEditLead();
  }, []);

  const fetchAssignToList = () => {
    axios
      .get(`${BASE_URL}/user/get_All_User`)
      .then((response) => {
        setAssignToList(response.data.data.adminData);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  const fetchSourceList = () => {
    axios
      .get(`${BASE_URL}/source/get_All_Source`)
      .then((response) => {
        // console.log(response.data.data.adminsource);
        setSourceList(response.data.data.adminsource);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const fetchDataList = () => {
    axios
      .get(`${BASE_URL}/course/get_All_Course`)
      .then((response) => {
        setDataList(response.data.data.adminCourses);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const fetchAllBranch = () => {
    axios
      .get(`${BASE_URL}/branch/get_All_Branch`)
      .then((response) => {
        setBarnchList(response.data.data.adminbranch);
      })
      .catch((error) => {
        console.log("API error:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    const requestBody = {
      source: selectSource,
      leadDate: currentDate,
      assignedTo: assign,
      fromBranch: fromBranchValue,
      toBranch: toBranchValue,
      firstName: firstName,
      fathersName: fatherName,
      surname: surName,
      email: email,
      phone: phone,
      whatsapp: whatsaap,
      address: address,
      city: city,
      courseMode: courseMode,
      state: state,
      course: selectSubOption,
      zipCode: zipcode,
      leadValue: leadValue,
      Discription: description,
    };
    axios
      .post(`${BASE_URL}/lead/edit_Lead/${id}`, requestBody)
      .then((response) => {
        console.log("response", response);
        if (response.data.status === false) {
          setErrorMsg(response.data.message);
          setTimeout(() => {
            setErrorMsg("");
          }, 2000);
        } else {
          setSuccessMsg(response.data.message);
          setTimeout(() => {
            setSuccessMsg("");

            history.push("/all-leads-datas");
          }, 2000);
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };

  const handelCheckErrorMsg = (data) => {
    const requestBody = {
      fullName: `${firstName} ${data} ${surName}`,
    };
    axios
      .post(`${BASE_URL}/lead/Duplicate_Data`, requestBody)
      .then((response) => {
        console.log("response", response.data);
        if (response.data.status === false) {
          setCheckErrorMsg(response.data.message);
          setTimeout(() => {
            setCheckErrorMsg("");
          }, 3000);
        } else {
          setCheckMsg(response.data.message);
          setTimeout(() => {
            setCheckMsg("");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handelCheckErrorMsgPhone = (phone) => {
    console.log("phone", phone);
    const requestBody = {
      phone: phone,
    };
    axios
      .post(`${BASE_URL}/lead/Duplicate_Data`, requestBody)
      .then((response) => {
        // console.log("response", response.data.message);
        if (response.data.status === false) {
          setCheckErrorMsgPhone(response.data.message);
          setTimeout(() => {
            setCheckErrorMsgPhone("");
          }, 3000);
        } else {
          setCheckMsgPhone(response.data.message);
          setTimeout(() => {
            setCheckMsgPhone("");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handelCheckErrorMsgWhatsaap = (whatsaap) => {
    const requestBody = {
      whatsapp: whatsaap,
    };
    axios
      .post(`${BASE_URL}/lead/Duplicate_Data`, requestBody)
      .then((response) => {
        // console.log("response", response.data.message);
        if (response.data.status === false) {
          setCheckErrorMsgWhatsaap(response.data.message);
          setTimeout(() => {
            setCheckErrorMsgWhatsaap("");
          }, 2000);
        } else {
          setCheckMsgWhatsaap(response.data.message);
          setTimeout(() => {
            setCheckMsgWhatsaap("");
          }, 3000);
        }
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  };
  const handelCheckvalue = (e) => {
    console.log(e.target.value);
    setWhatsaap(e.target.value);
    handelCheckErrorMsgWhatsaap(e.target.value);
  };
  const modeOptions = [
    { value: "online", label: "Online" },
    { value: "offline", label: "Offline" },
    { value: "both", label: "Both" },
  ];
  const handleSetPhone = (e) => {
    setPhone(e.target.value);
    handelCheckErrorMsgPhone(e.target.value);
  };

  const handleFullname = (e) => {
    setFatherName(e.target.value);
    handelCheckErrorMsg(e.target.value);
  };
  const optionsFromBranch = branchList.map((branch) => ({
    value: branch._id,
    label: branch.branchName,
  }));
  const optionsToBranch = branchList.map((branch) => ({
    value: branch._id,
    label: branch.branchName,
  }));
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
      <div className="body-wrapper">
        <Header />
        <div className="container-fluid">
          <div className="row" style={{ marginTop: "5px!important" }}>
            <div className="col-xl-12">
              <div className="card">
                <h4 className="mb-0">Edit Leads</h4>
                <div className="card-body">
                  {successMsg && (
                    <span className="text-success">{successMsg}</span>
                  )}

                  <Form className="needs-validation">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label>
                            {" "}
                            Source<span className="red-text">*</span>{" "}
                          </Label>
                          {/* <select
                            value={selectedCategory}
                            
                            onChange={handleSelectChange}
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected> Select Course Category</option>
                            {sourceList.length > 0 ? (
                              sourceList.map((category) => (
                                <option key={category._id} value={category._id}>
                                  {category.sourceName}
                                </option>
                              ))
                            ) : (
                              // Render something else when categories.length is zero
                              <div>No categories available</div>
                            )}
                          </select> */}
                          <Select
                            value={countryOptions.find(
                              (option) => option.label === selectedCategory
                            )}
                            onChange={handleSelectChange}
                            options={countryOptions}
                            placeholder="Please Select option"
                            isSearchable={true}
                            isClearable={true}
                          />

                          {formSubmitted && selectedCategory.length === 0 && (
                            <div style={{ color: "red" }}>
                              Select Source is required.
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            Lead Date <span className="red-text">*</span>
                          </Label>
                          <Input
                            type="text"
                            value={currentDate}
                            disabled
                            // onChange={(e)=>setLeadDate(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label
                            className="form-Label"
                            htmlFor="validationCustom01"
                          >
                            Assigned To <span className="red-text">*</span>
                          </Label>
                          {/* <select
                            value={selectedAssign}
                            onChange={handleAssignToChange}
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected> Select Course Category</option>
                            {assignToList.length > 0 ? (
                              assignToList.map((category) => (
                                <option key={category._id} value={category._id}>
                                  {category.name}
                                </option>
                              ))
                            ) : (
                              // Render something else when categories.length is zero
                              <div>No categories available</div>
                            )}
                          </select> */}
                          <Select
                            value={optionsAssignTo.find(
                              (option) => option.label === selectedAssign
                            )}
                            // value={selectedAssign}
                            onChange={handleAssignToChange}
                            options={optionsAssignTo}
                            placeholder="Select Course Category"
                            isClearable={true}
                            isSearchable={true}
                          />
                          {formSubmitted && selectedAssign.length === 0 && (
                            <div style={{ color: "red" }}>
                              Select Assign To is required.
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            From Branch <span className="red-text">*</span>
                          </Label>
                          {/* <select
                            value={selectFromBranch}
                            onChange={handleSlelectFromBranch}
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected> Select Course Category</option>
                            {branchList.length > 0 ? (
                              branchList.map((category) => (
                                <option key={category._id} value={category._id}>
                                  {category.branchName}
                                </option>
                              ))
                            ) : (
                              // Render something else when categories.length is zero
                              <div>No categories available</div>
                            )}
                          </select> */}
                          <Select
                            value={optionsFromBranch.find(
                              (option) => option.label === selectFromBranch
                            )}
                            onChange={handleSlelectFromBranch}
                            options={optionsFromBranch}
                            isClearable={true}
                            isSearchable={true}
                            placeholder="Select Course Category"
                          />
                          {formSubmitted && selectFromBranch.length === 0 && (
                            <div style={{ color: "red" }}>
                              {" "}
                              Select From Branch is required.
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            To Branch <span className="red-text">*</span>
                          </Label>
                          <Select
                            value={optionsToBranch.find(
                              (option) => option.label === selectToBranch
                            )}
                            onChange={handleSlelectTOBranch}
                            options={optionsToBranch}
                            isClearable={true}
                            isSearchable={true}
                            placeholder="Select Course Category"
                          />
                          {/* <select
                            value={selectToBranch}
                            onChange={handleSlelectTOBranch}
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected> Select Course Category</option>
                            {branchList.length > 0 ? (
                              branchList.map((category) => (
                                <option key={category._id} value={category._id}>
                                  {category.branchName}
                                </option>
                              ))
                            ) : (
                              // Render something else when categories.length is zero
                              <div>No categories available</div>
                            )}
                          </select> */}
                          {formSubmitted && selectToBranch.length === 0 && (
                            <div style={{ color: "red" }}>
                              Course Mode is required.
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            First Name<span className="red-text">*</span>
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                          {formSubmitted && firstName.trim() === "" && (
                            <div style={{ color: "red" }}>
                              First Name is required.
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            Surname <span className="red-text">*</span>
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            value={surName}
                            onChange={(e) => setSurname(e.target.value)}
                          />
                          {formSubmitted && surName.trim() === "" && (
                            <div style={{ color: "red" }}>
                              Surname is required.
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            Father Name <span className="red-text">*</span>
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            value={fatherName}
                            onChange={handleFullname}
                            // onChange={(e) => setFatherName(e.target.value)}
                          />
                          {formSubmitted && fatherName.trim() === "" && (
                            <div style={{ color: "red" }}>
                              fatherName is required.
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">Full Name</Label>
                          <Input
                            type="text"
                            disabled
                            className="form-control"
                            value={FullName}
                          />
                          <span className="" style={{ color: "green" }}>
                            {checkMsg}
                          </span>
                          <span className="red-text">{checkErrorMsg}</span>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            Email <span className="red-text">*</span>
                          </Label>
                          <Input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          {formSubmitted && email.trim() === "" && (
                            <div style={{ color: "red" }}>
                              {" "}
                              email is required.
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            Phone <span className="red-text">*</span>
                          </Label>
                          <Input
                            type="number"
                            className="form-control"
                            value={phone}
                            onChange={handleSetPhone}
                            // onChange={(e) => setPhone(e.target.value)}
                          />
                          {formSubmitted && phone.trim() === "" && (
                            <div style={{ color: "red" }}>
                              Phone is required.
                            </div>
                          )}
                          <span className="" style={{ color: "green" }}>
                            {checkMsgPhone}
                          </span>
                          <span className="red-text">{checkErrorMsgPhone}</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            Whatsapp No. <span className="red-text">*</span>
                          </Label>
                          <Input
                            className="form-control"
                            value={whatsaap}
                            onChange={handelCheckvalue}
                          />
                          {formSubmitted && whatsaap.trim() === "" && (
                            <div style={{ color: "red" }}>
                              whatsaap is required.
                            </div>
                          )}
                          <span className="" style={{ color: "green" }}>
                            {checkMsgWhatsaap}
                          </span>
                          <span className="red-text">
                            {checkErrorMsgWhatsaap}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            Course Mode <span className="red-text">*</span>
                          </Label>

                          <Select
                            value={modeOptions.find(
                              (option) => option.value === courseMode
                            )}
                            onChange={handleSelectCourseMode}
                            options={modeOptions}
                            isClearable={true}
                            isSearchable={true}
                          />
                          {formSubmitted && courseMode.length === 0 && (
                            <div style={{ color: "red" }}>
                              Course Mode is required.
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            Course <span className="red-text">*</span>
                          </Label>
                          <Multiselect
                            options={option}
                            selectedValues={selectSubOption}
                            selected={selectSubOption}
                            onSelect={handleMultiSubcateogry}
                            onRemove={handleMultiSubcateogry}
                            displayValue="courseName"
                          />
                          {formSubmitted && selectSubOption.length === 0 && (
                            <div style={{ color: "red" }}>
                              Course is required.
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            Address <span className="red-text">*</span>
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                          {formSubmitted && address.trim() === "" && (
                            <div style={{ color: "red" }}>
                              Address is required.
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            City <span className="red-text">*</span>
                          </Label>
                          <Input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          />
                          {formSubmitted && city.trim() === "" && (
                            <div style={{ color: "red" }}>
                              City is required.
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            State <span className="red-text">*</span>
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                          />
                          {formSubmitted && state.trim() === "" && (
                            <div style={{ color: "red" }}>
                              State is required.
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <Label className="form-Label">
                            ZipCode <span className="red-text">*</span>
                          </Label>
                          <Input
                            type="text"
                            className="form-control"
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                          />
                          {formSubmitted && zipcode.trim() === "" && (
                            <div style={{ color: "red" }}>
                              ZipCode is required.
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <Label className="form-Label">
                            Lead Value <span className="red-text">*</span>
                          </Label>
                          <Input
                            type="number"
                            className="form-control"
                            value={leadValue}
                            onChange={(e) => setLeadValue(e.target.value)}
                          />
                          {formSubmitted &&
                            (isNaN(leadValue) || leadValue <= 0) && (
                              <div style={{ color: "red" }}>
                                Lead Value must be a positive number.
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <Label>
                            Description <span className="red-text">*</span>
                          </Label>
                          <textarea
                            className="form-control"
                            rows="1"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                          {formSubmitted && description.trim() === "" && (
                            <div style={{ color: "red" }}>
                              {" "}
                              Description is required.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button
                      className="btn btn-primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditLead;
