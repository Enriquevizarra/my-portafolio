import React from 'react'
import { Data } from './Data'
// *import swiper reac components
import { Swiper, SwiperSlide } from "swiper/react";
// *import required modules
import { Pagination } from "swiper";
// *Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// *Import styles
import "./testimonials.css"
import "../../App.css"

function Testimonials() {
  return (
    <section 
    className="testimonial container section"
    id='testimonials'
    >
      <h2 className="section__title">
        My clients say
      </h2>
      <span className="section__subtitle">
        Testimonial
      </span>
      <span className="section__subtitle">
      I don't have clients yet, but it will be seen when I have them.
      </span>


      <Swiper 
        className="testimonial__container mySwiper"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
        }}
        modules={[Pagination]}
      >
      {
        Data.map(({id, image, title, description}) => {
          return (
            <SwiperSlide 
              className="testimonial__card"
              key={id}
            >
              <img
                src={image}
                alt={title}
                className="testimonial__img"
              />

              <h3 className="testimonial__name">
                {title}
              </h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export { Testimonials }
