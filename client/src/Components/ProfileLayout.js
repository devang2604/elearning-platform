import React from 'react'
import hompagecss from '../../src/ComponentsCSS/homepage.css'
import ButtonCss from './../ComponentsCSS/ButtonCss.css'
import DropDownProfile from './DropDownProfile'
import imageC from './../Images/person.svg'
import DisplayImageProfile from './DisplayImageProfile'

const ProfileLayout = () => {
  return (
    <div className='mainMycoursecss'>
         <form id='Mainclassidcourse' className='MainMycourse '>
      <div className='row' >

        <div className='col-md-4' >
           <DisplayImageProfile ImageUrl={imageC}/>
        </div> 
        <div className='col-md-6'>
          <div className='profile-head'>
            <h5></h5>
            <h3>Name : Yuvraj P.Sankilwar</h3>
            <h4>Skills : Web Developer </h4>
            <h4>  Software Developer </h4>
            <h4> React Developer </h4>
            <h4> Qualifications : B.Tech Graduate  </h4>
          </div>
        </div>
 
      </div>
    </form>

    <DropDownProfile Item1="Past History" Item2="" Item3="" className="grid-item" category="History"/>
    <DropDownProfile Item3="" Item1="Your Classroom Progress" className="grid-item" Item2="Quiz Score" category="Progress"/>
    <DropDownProfile Item1="Ask Doubts" Item2="FAQ" Item3="" className="grid-item" category="Doubts"/>
    <DropDownProfile Item1="Log out" Item2="Log In" Item3="Create Account" className="grid-item" category="Login Related "/>
    
    </div>
    
  )
}

export default ProfileLayout

