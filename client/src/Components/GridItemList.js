import React from 'react'
import ButtonCss from './../ComponentsCSS/ButtonCss.css'
const GridItemList = (props) => {
    return (
        <>
            <div className='profile-head displayCourse'>

                <p className='griditem3' >{props.RenderType}{props.renderElement} </p>
            </div>
        </>
    )
}

export default GridItemList
