import React from 'react'
import HeaderC from './Header'
import FooterC from './Footer'
import PropTypes from 'prop-types'
import Login from '../Components/LoginForm'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Layout = (props) => {
  return (
    <div>
     
      <main>
        <ToastContainer/>
        (props.children)
        <Login/>
      </main>
      <FooterC />
    </div>
  )
}

export default Layout
