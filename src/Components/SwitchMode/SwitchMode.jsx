import React, { useState } from "react";

import Sun from "./Sun.svg";
import Moon from "./Moon.svg";

const SwitchMode = () => {
  const [toggle, setToggle] = useState("dark_mode");
  const [label, setLabel] = useState("Dark Mode");
  /** Enabling Dark and Light Mode */
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  return (
    <>
      <div className="toggle_container">
        <img src={toggle === "light_mode" ? Sun : Moon} width={"20px"} />{" "}
        <span
          onClick={(e) => {
            if (e.target.className === "light_mode") {
              setToggle("dark_mode");
              setLabel("Dark Mode");
              setLightMode();
            } else {
              setToggle("light_mode");
              setLabel("Light Mode");
              setDarkMode();
            }
          }}
          className={toggle}
        >
          {label}
        </span>
      </div>
    </>
  );
};

export default SwitchMode;
