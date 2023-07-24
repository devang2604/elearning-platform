import myCoursecss from './../ComponentsCSS/homepage.css'
import Header from './Header'
import Footer from './Footer'
import Maincontent from './Maincontent'
import React from 'react'

const Primary = () => {
  return (
    <>
    <Header/>
    <div className='mainMycoursecss'>
      <div className='grid-container'>

    
    <Maincontent buttonText="CLASS I" className="grid-item"/>
    <Maincontent buttonText="CLASS II" className="grid-item"/>
    <Maincontent buttonText="CLASS III" className="grid-item"/>
    <Maincontent buttonText="CLASS IV" className="grid-item"/>
    <Maincontent buttonText="CLASS V" className="grid-item"/>
    <Maincontent buttonText="CLASS VI" className="grid-item"/>
    <Maincontent buttonText="CLASS VII" className="grid-item"/>
    <Maincontent buttonText="CLASS VIII" className="grid-item"/>
    <Maincontent buttonText="CLASS XI" className="grid-item"/>
    <Maincontent buttonText="CLASS X" className="grid-item"/>
      </div>
    <Footer/>  
    </div>
    </>
  )
}

export default Primary
