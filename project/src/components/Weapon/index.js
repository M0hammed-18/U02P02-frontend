import React from "react";
import Nav from "../Nav/index";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./style.css";
import { IoLogIn } from "react-icons/io5";
import { BsFillCartFill } from "react-icons/bs";

const Weapon = () => {
  const [weapn, setWeapn] = useState([]);

  const getweapon = async () => {
    const display = await axios.get("http://localhost:4000/product");
    console.log(display);
    setWeapn(display.data.filter((item) =>  item.kind == "weapon"));
  };
  useEffect(() => {
    getweapon();
  }, []);

  return (
    <>
      <Nav />

      <IoLogIn />
      <div className="mainwrapper">
        {weapn.map((item) => {
          return (
            <div className="full">
              <img src={item.img} id="imag" />
              <h5 id="itemname">{item.name}</h5>
              <h6>{item.price}</h6>
              <BsFillCartFill />
            </div>
          );
        })}{" "}
      </div>
    </>
  );
};
export default Weapon;
