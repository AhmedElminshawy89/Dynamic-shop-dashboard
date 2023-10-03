import React, { useState } from 'react';
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../GameSwipper/GameSwipper.css'

import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AiFillPauseCircle, AiFillPlayCircle, AiOutlinePause, AiOutlinePauseCircle, AiOutlinePlayCircle } from 'react-icons/ai';

export default function GameSwipper({games}) {

    const [active , setActive] = useState(false)
    const handleToggleActive = () => {
        setActive(!active)
    }
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow,Navigation]}
    className="mySwiper"
  >
    {games.map(game=>(
    <SwiperSlide key={game.id}>
        <div className="gameSlider">
         <img src={game.background_image}/>
         <div className={`video ${active?"active":""}`}>
            <iframe
            width={1280}
            height={720}
            src={game.background_image}
            title={game.name}
            allow='accelerometer;clipboard-write;encrypted-media;picture-in-picture'
            allowFullScreen></iframe>
         </div>
         <div className="content">
            <h2>{game.name}</h2>
            <p>{game.slug}</p>
            <div className="buttons">
                <a href="" className="orderBtn">
                    Order Now
                </a>
                <span  className={`playBtn ${active?'active':''}`} onClick={handleToggleActive}>
                    <span className='play'><i><AiFillPlayCircle/></i></span>
                    <span className='pause'><i><AiFillPauseCircle/></i></span>
                </span>
            </div>
         </div>

        </div>
    </SwiperSlide>
    ))}
   
  </Swiper>
  )
}
