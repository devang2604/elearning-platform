import React from 'react'
import myCoursecss from './../ComponentsCSS/homepage.css'
import Header from './Header'
import Footer from './Footer'
import Maincontent from './Maincontent'

const CodingContent = () => {
  return (
    <>
      <Header/>
    <div className='mainMycoursecss'>
      <div className='grid-container'>

    
    <Maincontent buttonText="Web Devlopment" className="grid-item"/>
    <Maincontent buttonText="Java" className="grid-item"/>
    <Maincontent buttonText="C/C++" className="grid-item"/>
    <Maincontent buttonText="Python & Fameworks" className="grid-item"/>
    <Maincontent buttonText="ReactJs & ReactNative" className="grid-item"/>
    <Maincontent buttonText="AngularJs" className="grid-item"/>
    <Maincontent buttonText="ExpressJs & NextJs" className="grid-item"/>
    <Maincontent buttonText="Node JS" className="grid-item"/>
    <Maincontent buttonText="Javascri[t" className="grid-item"/>
    <Maincontent buttonText="Other" className="grid-item"/>
      </div>
    <Footer/>  
    </div>
    </>
  )
}

export default CodingContent
