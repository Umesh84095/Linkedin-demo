import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Education.css";
import { addEducation, deleteEducation } from "../redux/actions";

const Education = (props) => {
  const education = useSelector((state) => state.education);
  const dispatch = useDispatch();

  const [newEducation, setNewEducation] = useState({
    school: "",
    degree: "",
    graduationYear: "",
  });

  const handleAddEducation = () => {
    if (
      newEducation.school.trim() !== "" &&
      newEducation.degree.trim() !== "" &&
      newEducation.graduationYear.trim() !== ""
    ) {
      dispatch(addEducation(newEducation));
      setNewEducation({ school: "", degree: "", graduationYear: "" });
    }
  };

  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };

  return (
    <div className="container">
      <div className="profile-section">
        <div className="education-section">
          <h3>Education</h3>
          <ul className="education-list">
          <table style={{border:'1px solid' , width:"100%"}}>
            <tr>
            <th>School:</th>
            <th>Degree:</th>
            <th>Year:</th>
            </tr>
            {education.map((edu, index) => (
              <li key={index} className="education-list-item">
                  <tr>
                    <td>{edu.school}</td>
                    
                    <td>{edu.degree}</td>
                    
                    <td>{edu.graduationYear}</td>
                  </tr>
                
                {props.edit && (
                  <button onClick={() => handleDeleteEducation(index)}>
                    Delete
                  </button>
                )}
              </li>
            ))}</table>
          </ul>
          {props.edit && (
            <div className="add-section">
              <input
                type="text"
                placeholder="School"
                value={newEducation.school}
                onChange={(e) => {
                  const schoolName = e.target.value;
                  if (
                    /^[A-Za-z0-9\s]+$/.test(schoolName) ||
                    schoolName === ""
                  ) {
                    setNewEducation({ ...newEducation, school: schoolName });
                  }
                }}
              />

              <input
                type="text"
                placeholder="Degree"
                value={newEducation.degree}
                onChange={(e) => {
                  const degreeName = e.target.value;
                  if (
                    /^[A-Za-z0-9\s]+$/.test(degreeName) ||
                    degreeName === ""
                  ) {
                    setNewEducation({ ...newEducation, degree: degreeName });
                  }
                }}
              />

              <input
                type="text"
                placeholder="Graduation Year"
                value={newEducation.graduationYear}
                onChange={(e) => {
                  const graduationYear = e.target.value;
                  if (
                    /^\d*$/.test(graduationYear) ||
                    (graduationYear === "" && graduationYear.length === 4)
                  ) {
                    setNewEducation({ ...newEducation, graduationYear });
                  } else {
                    alert("Graduation Year should be in numbers");
                  }
                }}
              />
              <button onClick={handleAddEducation}>Add Education</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
