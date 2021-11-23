import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"

const Weapon = () => {
  const [weapn, setWeapn] = useState([]);

  const getweapon = async () => {
    const display = await axios.get('http://localhost:4000/product');
    console.log(display);
    setWeapn(display.data);
    
  };
  useEffect(() => {
    getweapon();
  }, []);

  return (
    <>
      {weapn.map((item) => {
        return (
          <div className="full">
            <img src={item.img} id="imag"/>
            <h4>{item.name}</h4>
            <h6>{item.price}</h6>
          </div>
        );
      })}
    </>
  );
};
export default Weapon;
