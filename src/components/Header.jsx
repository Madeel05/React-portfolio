import React from 'react';
import {NavLink, Link} from 'react-router-dom';

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
        <a href="https://twitter.com/adeel_empire" target='blank' className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="https://web.facebook.com/profile.php?id=100092126255106" target='blank' className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/adeel_empire85/" target='blank' className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="/" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

    </div>

  </header>
    </>
  )
}

export default Header