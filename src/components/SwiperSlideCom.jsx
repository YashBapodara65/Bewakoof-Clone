import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import { Navigation, Autoplay, Pagination } from "swiper/modules"; // Import modules if needed

/* Import Swiper styles */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function SwiperSlideCom({images,view}) {
  return (
    <Swiper
    // Configure Swiper options
    modules={[Navigation, Autoplay, Pagination]}
    spaceBetween={30}
    autoplay={{ delay: 3000 }}
    slidesPerView={view}
    loop={false}
    // navigation
    pagination={{ clickable: true }}
  >
    {/* Swiper slides */}
    {
        images.map((el)=>{
            return(
                // <>                
                <SwiperSlide key={el.id}>
                <img src={el.img} alt={el.id} />
                </SwiperSlide>
                // </>
            )
        })
    }
  </Swiper>
  )
}

export default SwiperSlideCom