'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules'; // Wichtig: Module separat importieren
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Slider.css';


export default function Slider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[EffectFade, Navigation, Pagination]}
        effect="fade" // Spezieller Effekt
        navigation
        pagination={{ clickable: true }}
        loop
        className="mySwiper"
      >
       <SwiperSlide>
       <div className="slide3"  >
    
   <a href="#contact" className="scroll-link">Contact</a>
 
 </div>
 
</SwiperSlide>

<SwiperSlide>
  <div className="slide2"  >

    <a href="#technologies" className="scroll-link">Technologies</a>
   
  </div>
</SwiperSlide>

<SwiperSlide>
<div className="slide1"  >

   <a href="#services" className="scroll-link">Services</a>
   
 </div>
</SwiperSlide>

      </Swiper>
    </div>
  );
}
