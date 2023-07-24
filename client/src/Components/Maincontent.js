import React from 'react'
import ButtonCss from './../ComponentsCSS/ButtonCss.css'

const Maincontent = (props) => {
  return (
    <>
    <div >
        <div>
          <button className='ButtonofContent2'>{props.buttonText}</button>
        </div>
    
    </div>
   </>
  )
}

export default Maincontent
