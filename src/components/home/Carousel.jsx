import React from "react";
import Moviecard from "../Moviecard";

import { useEffect, useState } from "react";

  const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import { Autoplay } from "swiper/modules";

const Carousel = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;
    getTopRatedMovies(topRatedUrl);

  }, []);
  
  return (
    <div className="mt-10">
      <h2 className="my-6 text-3xl font-bold">Melhores Avaliados</h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={4.5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        pagination={true}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        >
        {topMovies.map((movie) => (
          //console.log(movie),
          <SwiperSlide key={movie.id}>
            <Moviecard
              id={movie.id}
              movie={movie}
              title={movie.title}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
