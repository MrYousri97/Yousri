import React from 'react'
import './certificates.css'
import data from './data'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Pagination]);
const Certificates = () => {
  return (
    <section id='certificate'>
      <h2>Certificates</h2>
      <Swiper className="container certificates__container" 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
>
        {
          data.map(({id,image,title,Link})=>{
            return(
              <SwiperSlide key={id} className='certificate__item'>
                  <div className="certificate__item-img">
                  <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="certificate__item-cta">
                  <a href={Link} className='btn' target='_blank'>Link</a>
                  </div>
              </SwiperSlide>
            )   
          })
        }     
      </Swiper>
    </section>
  )
}

export default Certificates