import React from "react";
import Nav from "../Nav/index";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";
import axios from "axios";
import "./style.css";
import { IoLogIn } from "react-icons/io5";
import { BsFillCartFill, } from "react-icons/bs";

const Arrow = () => {
  const navigate = useNavigate()
  const [weapn, setWeapn] = useState([]);

  const getweapon = async () => {
    const display = await axios.get('http://localhost:4000/product');
    console.log(display);
    // eslint-disable-next-line
    setWeapn(display.data.filter(item=>item.kind=='arrow'));
   
    
  };
  useEffect(() => {
    getweapon();
  }, []);
  const kick =()=>{
    localStorage.clear()
     navigate("/SignUp");
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
            
            <img src={item.img} alt="#" id="imag"/>
            <h5 id="itemname">{item.name}</h5>
            <h6>{item.price}</h6>
            <BsFillCartFill />
            
          </div>
        );
      }
      
      )}   </div>
    
    </>
  );
};
export default Arrow;
