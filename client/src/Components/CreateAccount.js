import React, { useState } from "react";
import hompagecss from "../../src/ComponentsCSS/homepage.css";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Createaccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, phone, password }
      );
      if(res && res.data.success){
        toast.success(res.data.message)
        navigate('/login');
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.success("Something went wrong");
    }
  };

  console.log(process.env.REACT_APP_API);
  return (
    <>
      <Header />
      <div className="mainMycoursecss">
        <div id="divofloginform">
          <form className="loginForm loginFormheight">
            <div>
              <h3>Create Account</h3>
              <label>Name :</label>
              <input
                type="text"
                value={name}
                placeholder="Name "
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
              <label>Email :</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email "
                required
              ></input>
              <label>Phone No. :</label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                required
              ></input>
              <label>Create Password :</label>
              <input
                type="password"
                value={createPassword}
                onChange={(e) => setCreatePassword(e.target.value)}
                placeholder=" Create Password "
                required
              ></input>
              <label>Confirm Password :</label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" Confirm Password "
                required
              ></input>
              <button id="resetbutton">Reset</button>
              <button id="signinbutton">Signin</button>
              <Link to="/createaccount"> Forgot Password</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Createaccount;
