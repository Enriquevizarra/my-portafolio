import React from 'react'

import "./skills.css"
import "../../App.css"

function Frontend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">
        Frontend Developer
      </h3>
      <div className="skills__box">
        <div className="skills__group">

          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">
                Html
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
                Css
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
                JavaScript
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
                BootStrap
              </h3>
              <span className="skills__level">
                Basic
              </span>
            </div>
          </div>
       
          <div className="skills__data">
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className="skills__name">
                Git
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
                React
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

export { Frontend }
