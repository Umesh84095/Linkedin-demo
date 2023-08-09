import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./About.css";
import { updateAbout } from "../redux/actions";


const About = (props) => {
  const user = useSelector((state) => state.user.about);
  const dispatch = useDispatch();
  const [about, setAbout] = useState(user.about || "");

  

  const onChangeAbout = (e) => {
    setAbout(e.target.value);
    dispatch(updateAbout({about: e.target.value}));
  };
 
  return (
    <div className="container">
        <div className="about-section">
          <h3>About</h3>
          <div className="add-section">
            {props.edit ? (
              <textarea
                type="text"
                placeholder="Add About"
                value={about}
                onChange={onChangeAbout}
              />
            ) : (
              <p>{about}</p>
            )}
          </div>
        </div>
    </div>
  );
};

export default About;