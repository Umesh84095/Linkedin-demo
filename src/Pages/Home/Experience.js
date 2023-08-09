import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Experience.css";
import { addExperience, deleteExperience } from "../redux/actions";

const Experience = (props) => {
  const experience = useSelector((state) => state.experience);
  const dispatch = useDispatch();

  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    yearsWorked: "",
  });
  console.log(experience);
  const handleAddExperience = () => {
    if (
      newExperience.company.trim() !== "" &&
      newExperience.position.trim() !== "" &&
      newExperience.yearsWorked.trim() !== ""
    ) {
      // console.log("newExperience",newExperience);
      dispatch(addExperience(newExperience));
      setNewExperience({ company: "", position: "", yearsWorked: "" });
    }
  };

  const handleDeleteExperience = (index) => {
    dispatch(deleteExperience(index));
  };

  return (
    <div className="container">
      <div className="profile-section">
        <div className="experience-section">
          <h3>Experience</h3>
          <ul className="experience-list">
            {experience.map((exp, index) => (
              <li key={index} className="experience-list-item">
                <div>
                  <p>{exp.company}</p>
                  <p>{exp.position}</p>
                  <p>{exp.yearsWorked}</p>
                </div>
                {props.edit && (
                  <button onClick={() => handleDeleteExperience(index)}>
                    Delete
                  </button>
                )}
              </li>
            ))}
          </ul>
          {props.edit && (
            <div className="add-section">
              <input
                type="text"
                placeholder="Company"
                value={newExperience.company}
                onChange={(e) => {
                  const companyName = e.target.value;
                  if (
                    /^[A-Za-z0-9\s]+$/.test(companyName) ||
                    companyName === ""
                  ) {
                    setNewExperience({
                      ...newExperience,
                      company: companyName,
                    });
                  }
                }}
              />

              <input
                type="text"
                placeholder="Years Worked"
                value={newExperience.yearsWorked}
                onChange={(e) => {
                  const yearsWorked = e.target.value;
                  if (/^\d*$/.test(yearsWorked) || yearsWorked === "") {
                    setNewExperience({ ...newExperience, yearsWorked });
                  }
                  else{
                    alert("Please enter a valid number");
                  } 
                }}
              />

              <input
                type="text"
                placeholder="Position"
                value={newExperience.position}
                onChange={(e) =>
                  setNewExperience({
                    ...newExperience,
                    position: e.target.value,
                  })
                }
              />
              <button onClick={handleAddExperience}>Add Experience</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
