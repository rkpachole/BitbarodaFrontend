import React, { useState } from "react";

function YourComponent() {
  const [selectValue, setSelectValue] = useState(1);
  const [lectureRows, setLectureRows] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [valuesArray, setValuesArray] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputValue.trim() !== "") {
        setValuesArray([...valuesArray, inputValue]);
        setInputValue("");
      }
    }
  };

  const [lecture, setLecture] = useState([
    { id: 0, specialization: "", lectureReport: "", value: "" },
  ]);

  const handleSelectValue = (event) => {
    const value = parseInt(event.target.value);
    setSelectValue(value);
    setLectureRows(value);
    setLecture(
      Array.from({ length: value }, (_, index) => ({
        id: index,
        specialization: "",
        lectureReport: "",
        value: "",
      }))
    );
  };

  const handleAddLectureRow = () => {
    setLecture([
      ...lecture,
      { id: lecture.length, specialization: "", lectureReport: "", value: "" },
    ]);
    setLectureRows(lectureRows + 1);
  };

  const handleRemoveLectureRow = (index) => {
    const updatedLecture = lecture.filter((row) => row.id !== index);
    setLecture(updatedLecture);
    setLectureRows(lectureRows - 1);
  };

  const handleLectureInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedLecture = [...lecture];
    updatedLecture[index][name] = value;
    setLecture(updatedLecture);
  };

  return (
    <div>
      <label className="form-Label" htmlFor="Specification">
        By Specialization
      </label>
      <select
        className="form-select"
        value={selectValue}
        onChange={handleSelectValue}
        id="byspecification"
      >
        <option className="active">Select By Specialization</option>
        <option value={1}>Any One</option>
        <option value={2}>Any Two</option>
        <option value={3}>Any Three</option>
        <option value={4}>Any Four</option>
      </select>

      <div className="col-md-12 mb-3">
        <table className="table table-bordered" id="specializationtable">
          <tbody>
            <tr style={{ color: "#fff", backgroundColor: "#415164" }}>
              <th style={{ textAlign: "center" }}>Specialization</th>
              <th style={{ textAlign: "center" }}>Lecture Reports</th>
              <th style={{ textAlign: "center" }}>Duration</th>
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
            {Array.from({ length: lectureRows }).map((_, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="specialization"
                    value={lecture[index]?.specialization || ""}
                    onChange={(event) => handleLectureInputChange(index, event)}
                    placeholder="Specializations"
                  />
                </td>
                <td>
                  <select
                    className="form-select"
                    name="lectureReport"
                    value={lecture[index]?.lectureReport || ""}
                    onChange={(event) => handleLectureInputChange(index, event)}
                  >
                    <option value="">Select Lecture Reports</option>
                    <option value="admission">ADMISSION</option>
                    <option value="SEMsem-6">SEM-6</option>
                  </select>
                </td>
                <td>
                  <input
                    type="number"
                    name="value"
                    value={lecture[index]?.value || ""}
                    onChange={(event) => handleLectureInputChange(index, event)}
                    className="form-control"
                    placeholder="Duration"
                  />
                </td>
                <td>
                  <center>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleRemoveLectureRow(index)}
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
      <div>
        <h2>Array Contents:</h2>
        <pre>{JSON.stringify(valuesArray)}</pre>
        <label>
          Enter values one by one:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
            onFocus={(e) => e.target.select()}
          />
        </label>
      </div>
    </div>
  );
}

export default YourComponent;
