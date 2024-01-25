import React from "react";
import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

// Import Swiper styles

import "swiper/css/bundle";

import SerieCard from "../SerieCard";

const Series = () => {
  const [trendingSeries, setTrendingSeries] = useState([]);

  const getTrendingSeries = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    setTrendingSeries(data.results);
  };

  useEffect(() => {
    const trendingSeriesUrl = `https://api.themoviedb.org/3/trending/tv/day?${apiKey}&language=pt-BR`;
    getTrendingSeries(trendingSeriesUrl);
    // console.log(trendingMoviesUrl);
  }, []);

  // console.log(trendingMovies)

  return (
    <div className="movies_home">
      <h2 className="my-10 text-3xl font-bold">Séries</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={4.5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        pagination={true}
      >
        {trendingSeries.map((serie) => (
          <SwiperSlide key={serie.id}>
            <SerieCard
              id={serie.id}
              name={serie.name}
              title={serie.title}
              poster_path={serie.poster_path}
              release_date={serie.release_date}
              vote_average={serie.vote_average}
              first_air_date={serie.first_air_date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Series;
