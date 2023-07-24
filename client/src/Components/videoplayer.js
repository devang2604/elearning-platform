import React from 'react'
import ReactPlayer from 'react-player'
import ButtonCss from '../ComponentsCSS/ButtonCss.css'
import Header from './Header'
import Footer from './Footer'
const videoplayer = (props) => {
    
  return (
    <>
    <div >
    <Header  />
    <div className='mainMycoursecss' >
      <ReactPlayer  className='videoCSS' url={props.VideoUrl} controls={true} />
    </div>
    <Footer/>
    </div>
  </>
  )
}

export default videoplayer
