
// import React, { useState } from "react";
// import { useEffect } from "react";
// import { VscSearch, VscChromeClose } from "react-icons/vsc";
// import axios from "axios";

import { FaSearch } from 'react-icons/fa'

import "./style.css";
// import { useNavigate } from "react-router-dom";



const Search = ({ searchpages }) => {


  return (
    <div className="search">
    <div className="searchInputs">
              <div className="searchBar">
                  <input className="searchQueryInput" type="text" placeholder="Search" onChange={searchpages}/>
                  <button className="searchQuerySubmit" type="submit">
                      <FaSearch />
                  </button>
              </div>
          </div>
  </div>

  );
};

export default Search;

