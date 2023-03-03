import React from 'react'
import "../../App.css"
import "./about.css"

function Information() {
  return (
    <div
      className='about__information grid'
    >
      <div className="about__box">
        <i className="uil uil-award about__icon"></i>
        <h3 className="about__title">
          Experiencie
        </h3>
        <span className="about__subtitle">
          1 year Studing
        </span>  
      </div>
      
      <div className="about__box">
        <i className="uil uil-bag about__icon"></i>
        <h3 className="about__title">
          Completed
        </h3>
        <span className="about__subtitle">
          4 + projects
        </span>  
      </div>

    </div>
  )
}

export { Information }
