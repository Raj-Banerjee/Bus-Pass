import React from 'react'
import tcsLogo from '../images/TCS_Logo.jpg'
import './footer.css'

const Footer = () => {
  return (
    <footer className="app-footer mt-3 ">
      <img src={tcsLogo} alt="TCS Logo" className="tcs-logo" />
    </footer>
  )
}

export default Footer