import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {  useNavigate } from "react-router";

const Home = () => {

   const Navigate = useNavigate()
   const login =()=>{
     Navigate("/login")
   }
   const signUp =()=>{
    Navigate("/signUp")
  }
  return (
  
    <>
      <div className="contenerr">
        <div className="row">
          <form className="start">
            <input onClick={login}
              type="submit"
              className="btn btn-danger btn-block"
              value="Login"
            />
            <input onClick={signUp}
              type="submit"
              className="btn btn-danger btn-block"
              value="Register"
            />
          </form>
          <div>
            <h3 className="head">Weapons Shop</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <img
              id="banner"
              src="https://previews.123rf.com/images/omnimoney/omnimoney1807/omnimoney180700005/106233273-modern-guns-automatic-weapon-machine-gun-and-pistol.jpg"
            />
            <img
              id="banner"
              src="https://m.media-amazon.com/images/S/aplus-media/sota/ad0d2cc6-f856-4c23-aa67-a2216f8b9ecd.__CR0,0,300,300_PT0_SX300_V1___.jpg"
            />
          </div>
        </div>
        <div className="banner"></div>
      </div>
    </>
  );
};
export default Home;
