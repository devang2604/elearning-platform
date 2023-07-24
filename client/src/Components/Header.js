import React from 'react'
import headercss from '../../src/ComponentsCSS/Header.css'
import Logo from '../../src/Images/Logo.png'
import {Link} from 'react-router-dom'
import Homepage from '../WebPages/Homepage'
import StudyMaterial from '../WebPages/StudyMaterial'
import MyCourse from '../WebPages/MyCourse' 
import ProfilePage from '../WebPages/ProfilePage'
import YourProgress from '../WebPages/RegisterasTeacher'

import { useNavigate } from 'react-router-dom'




const Header = () => {
  
  const navigate = useNavigate();
  const renderLogin = () => {
    navigate('/login');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary appheader">
  <div className="container-fluid ">
    
    <Link className="navbar-brand" to="/"><img src={Logo} id='logoimageheader'/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/studymaterial">Study Material</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="/mycourse">My Courses</Link>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile"> <i class="bi bi-person-vcard-fill"></i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-vcard-fill" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5ZM9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8Zm1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96c.026-.163.04-.33.04-.5ZM7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"/>
</svg> Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/registerteacher" >Teacher Register</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search" >
      <button className="btn btn-outline-success buttonLogin" onClick={renderLogin}  type="submit">Sign in/up</button>
        <input className="form-control me-2" id='searchbarheader' type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

  </div>
</nav>
    </div>
  )
}

export default Header;
<span className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</span>