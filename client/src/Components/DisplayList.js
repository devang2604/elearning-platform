import React from 'react'
import imageC from './../Images/Logo.png'
import ButtonCss from './../ComponentsCSS/ButtonCss.css'
import DropDownProfile from './DropDownProfile'


import DisplayImageProfile from './DisplayImageProfile'
import ContentImage from './../Images/Logo.png'
import GridItemList from './GridItemList'
import Videoplayer from './videoplayer'
import { useNavigate } from 'react-router-dom'


      const DisplayList = (props) => {
  const navigate = useNavigate();
  const renderCourse = () => { navigate('/videoplayer');  }

    return (
        <div >
            <form id='DisplayListCss' className='MainDisplayList '>
                <div className='row ' >

                    <div className='col-md-4' >
                    </div>
                    <div className='col-md-4  gridcontainer'>
                        <img src={ContentImage} className='DisplayListImage' />
                       <div className='griditem gridcontainer2'>

                       <p  className='griditem2'>{props.RenderType}{props.renderElement}  </p>
                      <GridItemList  />
                       <div className='gridcontainer3'>
                      <GridItemList renderElement='Yuvraj ' RenderType='Instructor  :  '  />
                      <GridItemList renderElement='12 July 2023 ' RenderType='Date of Launch  :  '  />
                      <GridItemList renderElement='5 Start ' RenderType='Ratings  :  '  />
                     <button onClick={renderCourse} VideoUrl='https://youtu.be/Y8iSU_5keAg'>Play</button>
                       </div>

                       </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default DisplayList
