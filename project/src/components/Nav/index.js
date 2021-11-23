import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

const Nav = () => {
  return (
    <>
      <div className="wrapper">
        <NavLink to="" className="links">
          <img
            id="logo"
            src="https://us.123rf.com/450wm/nachai/nachai2106/nachai210600403/170938073-target-vector-icon-that-crosshair-and-round-circle-shape-sign-or-symbol-for-sight-to-accurate-aim-an.jpg?ver=6"
          />
        </NavLink>
        <div className="navMenu">
          <NavLink to="/weapon" className="links">
            Weapon
          </NavLink>
          <NavLink to="/signup" className="links">
            signup
          </NavLink>
          <NavLink to="/login" className="links">
            login
          </NavLink>
          <NavLink to="/">
            <BsFillCartFill />
          </NavLink>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default Nav;
