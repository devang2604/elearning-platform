import React from 'react'
import Header from './Header'
import Footer from './Footer'
import myCoursecss from '../ComponentsCSS/homepage.css'
import ReactPlayer from 'react-player'
import VideoPlayer from './videoplayer'

const Kidscontent = () => {
  return (
    <>
    <Header/>
<div className='mainMycoursecss'>
    <h1 >Hello </h1>
  
    {/* <ReactPlayer url={'https://youtu.be/n5OCv74iwnQ'} controls={true} /> */}
    <VideoPlayer VideoUrl="https://youtu.be/n5OCv74iwnQ" autoplay controls={true}/>
    </div>
    <Footer/>

    </>
  )
}

export default Kidscontent
