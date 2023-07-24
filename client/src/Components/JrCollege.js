import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Maincontent from './Maincontent'

const JrCollege = () => {
  return (
    <>
 
      <Header/>
      <div className='mainMycoursecss'>
      <div className='grid-container'>

    
    <Maincontent buttonText=" CLASS XI SCIENCE" className="grid-item"/>
    <Maincontent buttonText=" CLASS XII SCIENCE" className="grid-item"/>
    <Maincontent buttonText=" CLASS XI COMMERCE" className="grid-item"/>
    <Maincontent buttonText=" CLASS XII COMMERCE" className="grid-item"/>
    <Maincontent buttonText=" CLASS XI ARTS" className="grid-item"/>
    <Maincontent buttonText=" CLASS XII ARTS" className="grid-item"/>
    <Maincontent buttonText="NEET" className="grid-item"/>
    <Maincontent buttonText="JEE" className="grid-item"/>
    <Maincontent buttonText="CET" className="grid-item"/>
    <Maincontent buttonText="CA" className="grid-item"/>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default JrCollege
