import React from "react";
import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import Moviecard from "../components/Moviecard";

const Filmes = () => {

  const [trending, setTrending] = useState([]);

  const getTrending = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTrending(data.results);
  };

  useEffect(() => {
    const trendingUrl = `https://api.themoviedb.org/3/movie/now_playing?${apiKey}&append_to_response=videos&language=pt-BR`;
    getTrending(trendingUrl);
  }, []);

  return (
    <div className="text-white max-w-7xl m-auto pt-4">
      <h1 className="text-4xl">Top filmes hoje</h1>
      <div className="grid grid-cols-4 mt-10 gap-10 text-white">
        {trending.map((movie) => (
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

export default Filmes;
