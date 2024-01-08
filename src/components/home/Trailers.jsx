import React from "react";
import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

// Import Swiper styles

import "swiper/css/bundle";

import TrailerCard from "../TrailerCard";
import Trending from "./Trending";

const Trailers = () => {
  const [trailers, setTrailers] = useState([]);

  const getTrailers = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTrailers(data.results);
  };

  useEffect(() => {
    const trailersUrl = `https://api.themoviedb.org/3/movie/157336/videos?${apiKey}`;
    getTrailers(trailersUrl);
  }, []);

  console.log(trailers);

  return (
    <div className="movies_home">
      <h2 className="text-3xl mt-10 font-bold">Trailers</h2>
      <div className="trailers_container bg-purple-900 mt-5 h-96 p-7 rounded-2xl flex items-center">
        <Swiper
          modules={Navigation}
          spaceBetween={50}
          slidesPerView={3.5}
          pagination={true}
          navigation
        >
          {trailers.map((trailer) => (
            <SwiperSlide key={trailer.id}>
              <TrailerCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Trailers;
