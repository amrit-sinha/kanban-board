import React, { useState } from "react";
import "./NavBar.css";
import getLogoByKey from "./assets/logo";

const NavBar = ({
  grouping,
  setGrouping,
  ordering,
  setOrdering,
  grpOptions,
  orderOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const settingsLogo = getLogoByKey("settings");
  return (
    <div className="navbar">
      <div className="container">
        <div className="displayBtn" onClick={() => setIsOpen(!isOpen)}>
          {" "}
          <img src = {settingsLogo} alt="Display settings icon" className="logo"></img>
          Display
        </div>
        {isOpen && (
          <div className="sortModal">
            <div className="filterRow">
              <div>Grouping</div>
              <select
                className="dropdown"
                onChange={(e) => setGrouping(e.target.value)}
                defaultValue={grouping}
              >
                {grpOptions.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </select>
            </div>
            <div className="filterRow">
              <div>Ordering</div>
              <select
                className="dropdown"
                onChange={(e) => setOrdering(e.target.value)}
                defaultValue={ordering}
              >
                {orderOptions.map((option, idx) => (
                  <option key={idx}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
