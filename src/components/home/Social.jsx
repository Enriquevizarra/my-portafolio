import React from 'react'
import "./home.css"


function Social() {
  return (
    <div className="home__social">
      <a 
        href="https://www.instagram.com/enriquev.50/" 
        className="home__social-icon"
        // target="_blank"
      >
        <i className="uil uil-instagram-alt"></i>
      </a>

      <a 
        href="https://github.com/Enriquevizarra" 
        className="home__social-icon"
        // target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>

      <a 
        href="https://www.linkedin.com/in/vizarra-matta-enrique/" 
        className="home__social-icon"
        // target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
    </div>
  )
}

export { Social }
