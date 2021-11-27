import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Weapon from "./components/Weapon";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Ammo from "./components/Ammo";
import Knife from "./components/knife";
import Arrow from "./components/Arrow";
import Shop from "./components/ShoppingBasket";


function App() {
  return (
    <>
   
      <Routes>
        
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/weapon" element={<Weapon />} />
        <Route exact path="/ammo" element={<Ammo />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/knife" element={<Knife/>}/>
        <Route exact path="/arrow" element={<Arrow/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        
      </Routes>
      
    </>
  );
}

export default App;
