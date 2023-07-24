import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Maincontent from './Maincontent'

const Government = () => {
  return (
    <>
 
    <Header/>
    <div className='mainMycoursecss'>
    <div className='grid-container'>

  
  <Maincontent buttonText=" UPSC CIVIL SERVICES" className="grid-item"/>
  <Maincontent buttonText=" SSC CGL" className="grid-item"/>
  <Maincontent buttonText=" SSC GDL" className="grid-item"/>
  <Maincontent buttonText=" NDA" className="grid-item"/>
  <Maincontent buttonText=" NAVY" className="grid-item"/>
  <Maincontent buttonText=" ARMY" className="grid-item"/>
  <Maincontent buttonText=" ARI FORCE" className="grid-item"/>

    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Government
