import React from "react";
import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import Moviecard from "../components/Moviecard";

const Series = () => {

  const [series, setSeries] = useState([]);

  const getSeries = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setSeries(data.results);
  };

  useEffect(() => {
    const seriesUrl = `https://api.themoviedb.org/3/trending/tv/day?${apiKey}&append_to_response=videos&language=pt-BR`;
    getSeries(seriesUrl);
  }, []);

  return (
    <div className="text-white max-w-7xl m-auto pt-4">
      <h1 className="text-4xl">Top Séries hoje</h1>
      <div className="grid grid-cols-4 mt-10 gap-10 text-white">
        {series.map((movie) => (
          //console.log(movie),
          <Moviecard
            key={movie.id}
            id={movie.id}
            movie={movie}
            title={movie.title}
            poster_path={movie.poster_path}
            backdrop_path={movie.backdrop_path}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Series;
