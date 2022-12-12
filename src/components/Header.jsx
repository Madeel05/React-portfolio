import React from 'react';
import {NavLink , Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header id="header" className="fixed-top">
    <div className="container-fluid d-flex justify-content-between align-items-center">

      <h1 className="logo me-auto me-lg-0"><Link to="/">Adeel</Link></h1>
    
     <a href="index.html" className="logo">
      <img src="assets/img/logo.png" alt="" className="img-fluid"/></a>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="about">About</NavLink></li>
          <li><NavLink to="resume">Resume</NavLink></li>
          <li><NavLink to="services">Services</NavLink></li>
          <li><NavLink to="portfolio">Portfolio</NavLink></li>
          <li><NavLink to="contact">Contact</NavLink></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <div className="header-social-links">
        <Link to="/" className="twitter"><i className="bi bi-twitter"></i></Link>
        <Link to="/" className="facebook"><i className="bi bi-facebook"></i></Link>
        <Link to="/" className="instagram"><i className="bi bi-instagram"></i></Link>
        <Link to="/" className="linkedin"><i className="bi bi-linkedin"></i></Link>
      </div>

    </div>

  </header>
    </>
  )
}

export default Header