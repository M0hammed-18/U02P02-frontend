import React from "react";
import Nav from "../Nav";
import axios from "axios";
// import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import "./style.css";
import { useNavigate } from "react-router";

const Shop = () => {
  // const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const Navigate =useNavigate()

  const getLocalStorage = async () => {
    const item = await JSON.parse(localStorage.getItem("newUser"));
    setLocal(item);
  };

  const getData = async () => {
    if(local){
    const item = await axios.get(
      `http://localhost:4000/users/cart/${local.email}`
    );
    setAccount(item.data);
    }else{
      Navigate("/login")
    }
  };

  useEffect(() => {
    getLocalStorage();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [local]);

  // Navigate to character info

  // Remove from favorite
  const removeFavorite = (id) => {
    axios.put(`http://localhost:4000/users/removecart/${local.email}/${id}`);
    getLocalStorage();
  };
  return (
    <>
      <div>
        <Nav />
       
        <div  className="maindsplay">
        
        {account.length &&
          account.map((item, i) => {
            return (
              <div className="mainshop">
                <img src={item.img} alt="#" className="imagshop" />
                <h5 id="itemname">{item.name}</h5>
              <h6 id="itempricedel">{item.price}</h6>
                <h4>{item.kind}</h4>

                <AiFillDelete id="balldel"
                  onClick={() => {
                    removeFavorite(item._id);
                  }}
                />
              </div>
            );
          })}
          </div>
      </div>
    </>
  );
};

export default Shop;
