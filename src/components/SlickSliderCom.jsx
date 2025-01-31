import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';
import HeartIcon from "../../public/heart.svg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SlickSliderCom({images,dotsVal}) {

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="custom-arrow absolute top-[50%] start-[2%] z-10 cursor-pointer p-2 bg-white shadow-lg rounded-full custom-prev"
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );
  
  const CustomNextArrow = ({ onClick }) => (
    <button
      className="custom-arrow absolute top-[50%] end-[2%] p-2 rounded-full cursor-pointer shadow-lg bg-white custom-next"
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );
  

  var settings = {
    dots: {dotsVal},
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    // arrows: false,
    slidesToScroll: 4,
    initialSlide: 0,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="py-5">
        {images.map((el) => {
          return (
            // <>
              <div key={el.id} className="border scale-[90%] border-gray-400">
                <div className="relative">
                  <img
                    src={el.img}
                    className="w-full"
                    alt=""
                  />
                  <p className="w-fit text-white text-sm px-4 font-serif py-2 top-0 start-0 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] absolute">
                    OVERSIZED FIT
                  </p>
                  <div className="absolute start-[5%] bottom-[5%] flex gap-1 bg-white rounded-full px-3 py-1 w-fit items-center">
                    <StarIcon fontSize="small" className="text-yellow-400" />
                    <p className="font-bold">4.5</p>
                  </div>
                </div>
                <div className="px-3 py-2 relative">
                  <h1 className="font-bold">{el.brand}</h1>
                  <h1>Men's Beige Oversized Parachute Pants</h1>
                  <div className="flex gap-3 items-center">
                    <h1 className="font-bold text-lg">&#8377;1299</h1>
                    <p className="line-through">&#8377;2999</p>
                    <p className="text-green-500">55% OFF</p>
                    <img
                      src={HeartIcon}
                      className="absolute w-6 top-[20%] end-[5%]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            // </>
          );
        })}
      </Slider>
    </div>
  );
}

export default SlickSliderCom;