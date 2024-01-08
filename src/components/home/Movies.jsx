import React from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/bundle";

import Moviecard from "../../components/Moviecard";

const Movies = () => {
  return (
    <div className="movies_home">
      <h2 className="my-10 text-3xl font-bold">Filmes</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={4.5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        pagination={true}
      >
        <SwiperSlide><Moviecard /></SwiperSlide>
        <SwiperSlide><Moviecard /></SwiperSlide>
        <SwiperSlide><Moviecard /></SwiperSlide>
        <SwiperSlide><Moviecard /></SwiperSlide>
        <SwiperSlide><Moviecard /></SwiperSlide>
        <SwiperSlide><Moviecard /></SwiperSlide>
        <SwiperSlide><Moviecard /></SwiperSlide>
        <SwiperSlide><Moviecard /></SwiperSlide>
        <SwiperSlide><Moviecard /></SwiperSlide>
        <SwiperSlide><Moviecard /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Movies;
