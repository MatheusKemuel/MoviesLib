import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";
const imageUrl = import.meta.env.VITE_IMG;



function Movie({}) {
  const { movie, setMovie } = useContext(AppContext);

  const { id } = useParams();

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
  
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=8c5fcfb844a7f73dc6d0708ff9f9ac24&append_to_response=videos&language=pt-BR`;
    getMovie(movieUrl);
  }, []);

 

  return (
    <div className=" bg-gray-100 h-full w-4/5 m-auto mt-32 movie-page-shadow flex flex-col mdlg:flex-row rounded-2xl ">
      <div className="h-[300px] md:h-[700px] w-full object-fill rounded-l-2xl flex items-center justify-center">
        <img
          src={imageUrl + movie.backdrop_path}
          alt=""
          className="h-[300px] md:h-[700px] w-full rounded-l-2xl object-cover"
        />
      </div>
      <div className=" w-full p-6 max-[1143px]:border-t-4 mdlg:border-l-4 border-purple-700">
        <h1 className="mb-2 text-4xl sm:text-5xl font-bold text-purple-700">
          {movie.title}
        </h1>
        <div className="mb-4 text-gray-600 flex flex-col gap-10">
          <p className="text-purple-700">{movie.tagline}</p>
          <p>Data de lançamento: {movie.release_date}</p>
          <p className="text-sm"></p>
        </div>

        <span className="text-2xl font-bold text-purple-700">Sinopse:</span>
        <h3> {movie.overview}</h3>

        <div className="flex mt-4 gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            fill="rgb(255, 224, 89)"
            viewBox="0 0 576 512"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          <h6 className=" text-gray-600">{movie.vote_average}</h6>
        </div>
      </div>
    </div>
  );
}

export default Movie;
