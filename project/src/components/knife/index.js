import React from "react";
import Nav from "../Nav/index";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";
import axios from "axios";
import "./style.css";
import { IoLogIn } from "react-icons/io5";

const Knife = () => {
  const navigate = useNavigate()
  const [weapn, setWeapn] = useState([]);

  const getweapon = async () => {
    const display = await axios.get('http://localhost:4000/product');
    console.log(display);
    setWeapn(display.data.filter(item=>item.kind=='knife'));
   
    
  };
  useEffect(() => {
    getweapon();
  }, []);
  const kick =()=>{
    localStorage. clear()
     navigate("/home");
  }
  return (
    <>
    <Nav/>
    <input   onClick={kick} id="but"
                type="submit"
                className="btn btn-danger btn-block"
                value="Back"
                
              />
              <IoLogIn/>
              <div className="mainwrapper">
      {weapn.map((item) => {
        return (
          
          <div className="full">
            
            <img src={item.img} id="imag"/>
            <h5>{item.name}</h5>
            <h6>{item.price}</h6>
            
          </div>
        );
      }
      
      )}   </div>
    
    </>
  );
};
export default Knife;
