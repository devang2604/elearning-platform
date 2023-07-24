import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import TeacherLogin from '../Components/TeacherLogin'
import MyCourseContent from '.././ComponentsCSS/homepage.css'


const RegisterasTeacher = () => {
  return (
    <div>
      <Header/>
      <div className='mainMycoursecss'>
      <TeacherLogin/>
      </div>
      <Footer/>
    </div>
  )
}

export default RegisterasTeacher
