import React,{ useEffect } from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow,Pagination,Navigation} from 'swiper/modules'

import slider_image_1 from '../assets/img_1.jpeg'
import slider_image_2 from '../assets/img_2.jpeg'
import slider_image_3 from '../assets/img_3.jpeg'
import slider_image_4 from '../assets/img_4.jpeg'
import slider_image_5 from '../assets/img_5.jpg'
import slider_image_6 from '../assets/img_6.jpeg'
import slider_image_7 from '../assets/img_7.webp'

function SwiperCards() {
    useEffect(() => {
        AOS.init({
          // Global settings:
          disable: false,
          startEvent: 'DOMContentLoaded',
          initClassName: 'aos-init',
          animatedClassName: 'aos-animate',
          useClassNames: false,
          disableMutationObserver: false,
          debounceDelay: 50,
          throttleDelay: 99,
    
          // Settings that can be overridden on a per-element basis, by `data-aos-*` attributes:
          offset: 100, // Adjust the offset (in pixels) to start the animation earlier or later.
          delay: 100, // Add delay (in milliseconds) before the animation starts.
          duration: 800, // Set the duration (in milliseconds) of the animation.
          easing: 'ease', // Specify the easing function for the animation.
          once: false,
          mirror: false,
          anchorPlacement: 'top-bottom',
        });
    
        // Clean up function
        return () => {
          AOS.refresh();
        };
      }, []);
  return (
    <div className="container">
    <h1 className="heading" data-aos="fade-down">Gallery</h1>
    <Swiper
      data-aos="fade-up"
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      <SwiperSlide>
        <img src={slider_image_1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider_image_2} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider_image_3} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider_image_4} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider_image_5} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider_image_6} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider_image_7} alt="slide_image" />
      </SwiperSlide>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  )
}

export default SwiperCards