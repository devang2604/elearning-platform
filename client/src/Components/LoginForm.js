import React from 'react'
import hompagecss from '../../src/ComponentsCSS/homepage.css'
import {Link} from "react-router-dom"
import CreateAccount from './CreateAccount';
import Footer from './Footer';
import Header from './Header';

 
function Loginform() {
  return (
 <>

 <Header  />
 <div className='mainMycoursecss'>
   <div id='divofloginform'>
  <form className='loginForm'>
    <div>

    <h3>Login</h3>
    <label>Login ID :</label>
    <input type='text' placeholder='UserName or Email'></input>
    <label>Password :</label>
    <input type='password' placeholder=' Password '></input>
    <button id='resetbutton'>Reset</button>
    <button id='signinbutton'>Signin</button>
    <Link to="/createaccount"> Create an account </Link>
    </div>

  </form>
</div>
</div>
<Footer/>
 </>
  )
}

export default Loginform
