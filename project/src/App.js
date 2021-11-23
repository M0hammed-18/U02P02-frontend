import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Weapon from "./components/Weapon";
import axios from "axios";
import Login from "./components/SignUp";
import Home from "./components/Home"
import Nav from "./components/Nav"
import SignUp from "./components/SignUp"
function App() {
  return (
    <>
    
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/weapon" element={<Weapon />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
