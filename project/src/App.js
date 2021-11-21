import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      
      <h1>
        Hello
      </h1>
      <Routes>
      <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
