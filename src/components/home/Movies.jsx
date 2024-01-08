import React from "react";
import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

// Import Swiper styles

import "swiper/css/bundle";

import Moviecard from "../../components/Moviecard";

const Movies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const getTrendingMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTrendingMovies(data.results);
  };

  useEffect(() => {
    const trendingMoviesUrl = `https://api.themoviedb.org/3/trending/movie/day?${apiKey}`;
    getTrendingMovies(trendingMoviesUrl);
    // console.log(trendingMoviesUrl);
  }, []);

  // console.log(trendingMovies)

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
        {trendingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Moviecard
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
};

export default Movies;
