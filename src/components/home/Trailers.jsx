import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles

import "swiper/css/bundle";
import TrailerCard from "../TrailerCard";

const Trailers = () => {
  return (
    <div>
      <h2 className="text-3xl mt-10 font-bold">Trailers</h2>
      <div className="trailers_container bg-purple-900 mt-5 h-96 p-7 rounded-2xl flex items-center">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3.5}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          pagination={true}
          navigation
        >
          <SwiperSlide>
            <TrailerCard />
          </SwiperSlide>
          <SwiperSlide>
            <TrailerCard />
          </SwiperSlide>
          <SwiperSlide>
            <TrailerCard />
          </SwiperSlide>
          <SwiperSlide>
            <TrailerCard />
          </SwiperSlide>
          <SwiperSlide>
            <TrailerCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Trailers;
