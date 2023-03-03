import React from 'react'

import "./skills.css"
import "../../App.css"

function Backend() {
  return (
    <div className="skills__content">
    <h3 className="skills__title">
      Backend Developer
    </h3>
    <div className="skills__box">
      <div className="skills__group">

        <div className="skills__data">
          <i className='bx bx-badge-check'></i>
          <div>
            <h3 className="skills__name">
              Ruby
            </h3>
            <span className="skills__level">
              intermediate
            </span>
          </div>

        </div>

        <div className="skills__data">
          <i className='bx bx-badge-check'></i>
          <div>
            <h3 className="skills__name">
              Ruby on rails
            </h3>
            <span className="skills__level">
              intermediate
            </span>
          </div>
        </div>
      
        <div className="skills__data">
          <i className='bx bx-badge-check'></i>
          <div>
            <h3 className="skills__name">
              Postgresql
            </h3>
            <span className="skills__level">
              intermediate
            </span>
          </div>

        </div>

      </div>

    </div>
  </div>
  )
}

export { Backend }
