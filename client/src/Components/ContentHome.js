import React from 'react'
import ImageofContent from './../Images/Logo.png'
import hompagecss from '../../src/ComponentsCSS/homepage.css'
import Footercss from '../../src/ComponentsCSS/Footer.css'
import Studynotes from "./../Components/studynotes"
import Loginform from './LoginForm'
import ButtonContent from './ButtonContent'
function ContentHome() {
  return (
    <>
       <div className='HomePageData' >

     <img src={ImageofContent} className=' imgthumbnail' alt="..."></img>
     <ButtonContent/>
       </div>
    
    </>
  )
}

export default ContentHome
