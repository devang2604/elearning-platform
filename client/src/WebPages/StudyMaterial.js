import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Mainpage from '../Components/MainPage'
import Footercss from './../ComponentsCSS/Footer.css'
import Studycss from '../../src/ComponentsCSS/studymaterial.css'


import MainpageData from './../Components/ContentHome'
import Createaccount from '../Components/CreateAccount'
import ButtonContent from '../Components/ButtonContent'

const StudyMaterial = () => {
  return (
    <div  >
     <Header/>
       <Mainpage/>
   <Footer/>
    
    </div>
  )
}

export default StudyMaterial
