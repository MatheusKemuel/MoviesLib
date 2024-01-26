import React from "react";
import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

import SerieCard from "../components/SerieCard";

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
    <div className="text-white max-w-7xl m-auto pt-4 mt-20">
      <h1 className="text-4xl">Top Séries hoje</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10 gap-10 text-white p-5">
        {series.map((serie) => (
          <SerieCard
            key={serie.id}
            id={serie.id}
            movie={serie}
            title={serie.title}
            poster_path={serie.poster_path}
            backdrop_path={serie.backdrop_path}
            first_air_date={serie.first_air_date}
            vote_average={serie.vote_average}
          />
        ))}
      </div>
    </div>
  );
};

export default Series;
