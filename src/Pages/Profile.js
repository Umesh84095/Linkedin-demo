import React, { useState, useEffect } from "react";
import "./Profile.css";
import Skills from "./Home/Skills";
import Education from "./Home/Education";
import About from "./Home/About";
import { useNavigate } from "react-router-dom";
import Experience from "./Home/Experience";

const Profile = () => {

    const [editing, setEditing] = useState(false);
    useEffect(() => {
    setEditing(true);
    }, [editing]);

  const Navigate=useNavigate();
  const handleSaveProfile = () => {
      Navigate("/Dashboard");
      setEditing(false);
  };
  return (
    <>
    <div className="container">
      <div className="profile-section">
        <h2>Profile</h2>
        {(
          <button className="edit-button" onClick={handleSaveProfile}>Save</button>
        )}
        <About edit={editing}/>
        <Skills edit={editing}/>
        <Education edit={editing}/>   
        <Experience edit={editing}/>
      </div>
    </div>
    </>
  );
};

export default Profile;