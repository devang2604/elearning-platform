import React from "react";
import hompagecss from "../../src/ComponentsCSS/homepage.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

const InstituteLoginForm = () => {
  return (
    <>
      <Header />
      <div className="mainMycoursecss">
        <div id="divofloginform">
          <form className="loginForm loginFormheight">
            <div>
              <h3>Login to Institute</h3>
              <label>Name :</label>
              <input type="text" placeholder="Name "></input>
              <label>Email :</label>
              <input type="email" placeholder="Email "></input>
              <label>Phone No. :</label>
              <input type="number" placeholder="Phone"></input>
              <label>Student Id :</label>
              <input type="text" placeholder=" Student Id "></input>
              <label>Password :</label>
              <input type="password" placeholder="  Password "></input>
              <button id="resetbutton">Reset</button>
              <button id="signinbutton">Sign in</button>
              <Link to="/"> Forgot Password </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InstituteLoginForm;
