import React from "react";
import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

// Import Swiper styles

import "swiper/css/bundle";

import Moviecard from "../../components/Moviecard";

function Trending() {
  const [trending, setTrending] = useState([]);

  const getTrending = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTrending(data.results);
  };

  useEffect(() => {
    const trendingUrl = `https://api.themoviedb.org/3/trending/all/week?${apiKey}&append_to_response=videos`;
    getTrending(trendingUrl);
  }, []);

   console.log(trending);

  return (
    <div className="movies_home">
      <h2 className="my-10 text-3xl font-bold">Popular</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={4.5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        pagination={true}
      >
        {trending.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Moviecard
              name={movie.name}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              first_air_date={movie.first_air_date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Trending;
