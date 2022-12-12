import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer id="footer">
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Adeel</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <Link to="/">Adeel</Link>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer