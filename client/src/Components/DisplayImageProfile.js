import React from 'react'
import hompagecss from '../../src/ComponentsCSS/homepage.css'

const DisplayImageProfile = (props) => {
  return (
    <div>
      <img id="personPhoto"  src={props.ImageUrl}/>
    </div>
  )
}

export default DisplayImageProfile
      