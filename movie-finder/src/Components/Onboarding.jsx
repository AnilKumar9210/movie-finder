import React, { useContext, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import "./Onboarding.css";
import { AppContext } from "../Context/Context";

const Onboarding = () => {
  const navigate = useNavigate ();
  const {login} = useContext (AppContext);
  useEffect (()=> {
    if (login) {
      navigate ('/home')
    }
  },[])

  const handleNavigate = ()=> {
    navigate('/login')
  }

  return (
    <div className="onboarding-container" onClick={handleNavigate}>
      <button className="button">
        <svg
          viewBox="0 0 448 512"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          width="26px"
        >
          <path
            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
      <TypeAnimation
        sequence={[
          "Welcome to Movie finder",
          2000,
          "Find your favorite movies and series",
          2000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "1.5em", display: "inline-block", color: "white" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Onboarding;
