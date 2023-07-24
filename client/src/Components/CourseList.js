import React from 'react'
import hompagecss from '../../src/ComponentsCSS/homepage.css'
import DisplayList from './DisplayList'
const CourseList = () => {
  return (
    <>
    <div className='mainMycoursecss'>


    
      
      <DisplayList ContentName='Name of Content' renderElement='Web Development in 100 Days' RenderType='Course Name :' />
      <DisplayList ContentName='Name of Content' />
      <DisplayList ContentName='Name of Content' />
      <DisplayList ContentName='Name of Content' />
    </div>
      </>
    
  )
}

export default CourseList
