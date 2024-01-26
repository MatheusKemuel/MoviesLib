import React from "react";
import { useState, useEffect } from "react";

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
    const trendingUrl = `https://api.themoviedb.org/3/trending/movie/day?${apiKey}&append_to_response=videos&language=pt-BR`;
    getTrending(trendingUrl);
  }, []);

  return (
    <div className="text-white max-w-7xl m-auto pt-4 mt-20 ">
      <h1 className="text-4xl text-center md:text-left ml-3">Top filmes hoje</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10 gap-10 text-white p-5">
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
