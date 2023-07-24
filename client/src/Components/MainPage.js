import React from 'react'
import Login from './LoginForm.js'
import MainpageData from './ContentHome.js'
import Createaccount from './CreateAccount.js'
import ButtonContent from './ButtonContent.js'
import hompagecss from '../../src/ComponentsCSS/homepage.css'
import Studynotes from "./studynotes.js"
import Studycss from '../../src/ComponentsCSS/studymaterial.css'

function Mainpage() {
  return (
    <div className='HomePageData'>
      <Studynotes Heading="Study Material"/>
    
      <ButtonContent/>
    </div>
  )
}

export default Mainpage
