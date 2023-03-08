import React from 'react'
import { projects } from "./Data"
import { Swiper, SwiperSlide } from "swiper/react";
// *import required modules
import {  Navigation} from "swiper";
// *Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./projects.css"
import "../../App.css"



function Projects() {

  // const [primero, setPrimero] = useState()

  const handleClick = (e) => {
    console.log(e.target)
  }

  return (
    <section 
    className="project container section"
    id='projects'
    >
      <h2 className="section__title">
        My Projects
      </h2>
      <span className="section__subtitle">
        Personal and team projects
      </span>
      <span className="section__subtitle">
        Projects that helped me in my professional growth.
      </span>


      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {projects.map(({id, name, description, image, link}) => {
          return (
          <SwiperSlide
            key={id}
          >
            <div
              className='project__container'
              onClick={handleClick}  
            >
              <img 
                src={image}
                alt={name}
                className="project__img"/>
              <h3
                className='project__name'
              >{name}</h3>
              <p
                className='project__description'
              >{description}</p>
              <a
                href={link}
                className="project__link"
              > Click me!</a>
            </div>
          </SwiperSlide>
          )
        })}
       
      </Swiper>




    </section>
  )
}

export { Projects }
