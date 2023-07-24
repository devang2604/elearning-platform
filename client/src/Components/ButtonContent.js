import React from 'react'
import { useNavigate } from 'react-router-dom'

  const ButtonContent = () => {
  const navigate = useNavigate();
  const renderInstitute = () => { navigate('/institutelogin');  }
  const renderPrimary = () => { navigate('/primary');  }
  const renderJrcollege = () => { navigate('/jrcollege');  }
  const renderCreativity = () => { navigate('/creativity');  }
  const renderUgcourse = () => { navigate('/ugcourse');  }
  const renderCoding = () => { navigate('/coding');  }
  const renderKids = () => { navigate('/kids');  }
  const renderGovernment = () => { navigate('/government');  }
 


  return (
  <>
  <div className='ButtonContent'>
       
      <button className='Contentbutton' onClick={renderInstitute}  >Institutional Teaching Evironment</button>
      <button className='Contentbutton' onClick={renderCoding} >Coding</button>
      <button className='Contentbutton' onClick={renderKids} >Kids Content</button>
   
 
      <button className='Contentbutton ' onClick={renderPrimary}  >Class 1-10</button>
      <button className='Contentbutton' onClick={renderJrcollege}  >Class 11-12 & Competitive Exams</button>
      <button className='Contentbutton' onClick={renderGovernment}  >Government Exams</button>
      <button className='Contentbutton' onClick={renderUgcourse}  >UG,PG & Competitive Exam</button>
      <button className='Contentbutton' onClick={renderCreativity}  >Creativity & Art</button>

  </div>
  </>
  )
}

export default ButtonContent
