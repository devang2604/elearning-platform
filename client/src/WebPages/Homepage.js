
import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ContentHome from '../Components/ContentHome'
import Loginform from '../Components/LoginForm'

const Homepage = () => {
  return (
    <>
      <Header/>
      <ContentHome className='contentHome'/>
      
      <Footer/>
    </>
  )
}

export default Homepage
