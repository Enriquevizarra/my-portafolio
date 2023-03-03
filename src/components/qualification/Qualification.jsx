import React, { useState } from 'react'
import "./qualification.css"
import "../../App.css"
function Qualification() {

  const [viewEducation, setViewEducation] = useState(false)
  const [viewExperience, setViewExperience] = useState(false)

  const handleEducation = () => {
    setViewEducation(!viewEducation)
    setViewExperience(false)
  }
  const handleExperience = () => {
    setViewExperience(!viewExperience)
    setViewEducation(false)
  }


  return (
    <div className="qualification section" id='qualification'>
      <h2 className="section__title">
        Qualification
      </h2>
      <span className="section__subtitle">
        My personal journary
      </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
       
          <div 
            className ="qualification__button qualification__active button--flex"
            onClick={handleEducation}
          >  
            <i className="uil uil-graduation-cap qualification-icon"></i>
            Education
          </div>

          <div 
            className="qualification__button qualification__active button--flex"
            onClick={handleExperience}
          >
            <i className="uil uil-briefcase-alt qualification-icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">

          <div 
            className={viewEducation ? "" : "qualification__content"}
          >

            <div className="qualification__data ">
              <div className='qualification__wrapper'>
                <h3 className="qualification__title">
                  Web Developer
                </h3>
                <span className="qualification__subtitle">
                  Codeable
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022-present
                </div>

              </div>

              <div>
                <span className="qualification_rounder">
                </span>
                <span className="qualification__line">
                </span>
              </div>

            </div>

            <div className="qualification__data ">
              <div></div>
              <div>
                <span className="qualification_rounder">
                </span>
                <span className="qualification__line">
                </span>
              </div>


              <div className='qualification__wrapper'>
                <h3 className="qualification__title">
                Commercial Refrigeration Technician
                </h3>
                <span className="qualification__subtitle">
                School of Refrigeration-Peru
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019-2019
                </div>
              </div>
            </div>

            <div className="qualification__data ">
              <div className='qualification__wrapper'>
                <h3 className="qualification__title">
                Electronic Engineer
                </h3>
                <span className="qualification__subtitle">
                San luis Gonzaga University of Ica-Peru
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2011-2017
                </div>
              </div>

              <div>
                <span className="qualification_rounder">
                </span>
                <span className="qualification__line">
                </span>
              </div>

            </div>

            {/* <div className="qualification__data ">
              <div></div>
              <div>
                <span className="qualification_rounder">
                </span>
                <span className="qualification__line">
                </span>
              </div>

              <div className='qualification__wrapper'>
                <h3 className="qualification__title">
                Electronic Engineer 2
                </h3>
                <span className="qualification__subtitle">
                San luis Gonzaga University of Ica-Peru
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2011-2017
                </div>
              </div>

                

            </div> */}

          </div>
 
          <div 
            className={viewExperience ? "" : "qualification__content"}
          >
            <div className="qualification__data ">
              <div className='qualification__wrapper'>
                <h3 className="qualification__title">
                  Codeable
                </h3>
                <span className="qualification__subtitle">
                  Study Projects
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022-present
                </div>
              </div>

              <div>
                <span className="qualification_rounder">
                </span>
                <span className="qualification__line">
                </span>
              </div>

            </div>

            <div className="qualification__data ">

              <div></div>
              <div>
                <span className="qualification_rounder">
                </span>
                <span className="qualification__line">
                </span>
              </div>
              <div className='qualification__wrapper'>
                <h3 className="qualification__title">
                Electronic Engineer
                </h3>
                <span className="qualification__subtitle">
                  Updating of electrical drawings.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019-2022
                </div>
              </div>
            </div>

            {/* <div className="qualification__data ">
              <div className='qualification__wrapper'>
                <h3 className="qualification__title">
                  Web Developer
                </h3>
                <span className="qualification__subtitle">
                  Codeable
                </span>

                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022-present
                </div>
              </div>

              <div>
                <span className="qualification_rounder">
                </span>
                <span className="qualification__line">
                </span>
              </div>

            </div>

            <div className="qualification__data ">

              <div></div>
              <div>
                <span className="qualification_rounder">
                </span>
                <span className="qualification__line">
                </span>
              </div>


              <div className='qualification__wrapper'>
                <h3 className="qualification__title">
                Electronic Engineer
                </h3>
                <span className="qualification__subtitle">
                San luis Gonzaga University of Ica-Peru
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2011-2017
                </div>
              </div>

            </div> */}

          </div>


        </div>
      </div>
    </div>
  )
}

export { Qualification }
