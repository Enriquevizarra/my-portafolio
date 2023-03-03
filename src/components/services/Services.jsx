import React, { useState } from 'react'

import "./services.css"


function Services() {

  const [modal, setModal] = useState(0)
  const handleModal = (index) => {
    setModal(index)
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">
        Services
      </h2>
      <span className="section__subtitle">
        What i Offer
      </span>

      <div className="services__container container grid">
        <div className="services__content">
          <i className="uil uil-web-grid services__icon"></i>
          <h3 className="services__title">
            Product Designer
          </h3>

          <span 
            className="services__button"
            onClick={() => handleModal(1)}
          >
            View More 
            <i 
              className="uil uil-arrow-right services__button-icon">
            </i>
          </span>

          <div className = { 
              modal === 1 ?
              "services__modal active-modal" :
              "services__modal "}
          >
            <div
              className="services__modal-content"
            >
              <i 
                className="uil uil-times services__modal-close"
                onClick={ () => handleModal(0)}
              ></i>
              <h3 className="services__modal-title">
              Product Designer
              </h3>
              <p className="services__modal-description">
              Service with 1 year of experience performing quality work.
              </p>

              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web page develoment.
                  </p>
                </li>
              
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>
               
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>

              </ul>

            </div>
          </div>

        </div>

        <div className="services__content">
          <i className="uil uil-arrow services__icon"></i>
          <h3 className="services__title">
            Ui/Ux Designer
          </h3>

          <span 
            className="services__button"
            onClick={() => handleModal(2)}
          >
            View More 
            <i 
              className="uil uil-arrow-right services__button-icon">
            </i>
          </span>

          <div className = { 
              modal === 2 ?
              "services__modal active-modal" :
              "services__modal "}
          >
            <div
              className="services__modal-content"
            >
              <i 
                className="uil uil-times services__modal-close"
                onClick={() => handleModal(0)}
                ></i>
              <h3 className="services__modal-title">
              Ui/Ux Designer
              </h3>
              <p className="services__modal-description">
              Service with 1 year of experience performing quality work.
              </p>

              <ul className="services__modal-services grid">

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>
                
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Web page develoment.
                  </p>
                </li>
              
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I create ux element interactions.
                  </p>
                </li>
               
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    I position your company brand.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
 
        <div className="services__content">
          <i className="uil uil-arrow services__icon"></i>
          <h3 className="services__title">
           Visual Designer
          </h3>

          <span 
            className="services__button" 
            onClick={() => handleModal(3)} 
          >
            View More 
            <i
              className="uil uil-arrow-right services__button-icon">
            </i>
          </span>

          
            <div className = { 
              modal === 3 ?
              "services__modal active-modal" :
              "services__modal "}
            >
              <div
                className="services__modal-content"
              >
                <i 
                  className="uil uil-times services__modal-close"
                  onClick={ () => handleModal(0)}
                  ></i>
                <h3 className="services__modal-title">
                  Visual Designer
                </h3>
                <p className="services__modal-description">
                Service with 1 year of experience performing quality work.
                </p>

                <ul className="services__modal-services grid">

                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I develop the user interface.
                    </p>
                  </li>
                  
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      Web page develoment.
                    </p>
                  </li>
                
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I create ux element interactions.
                    </p>
                  </li>
                
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">
                      I position your company brand.
                    </p>
                  </li>

                </ul>

              </div>
            </div>
          

        </div>
 
      </div>
    </section>
  )
}

export { Services }
