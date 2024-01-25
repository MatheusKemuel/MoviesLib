import { React, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Moviecard from "../components/Moviecard";

import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

function Search() {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}&language=pt-BR`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <div className="max-w-7xl m-auto mt-24">
        <form className="mt-5" onSubmit={handleSubmit}>
        <div className="flex">
          <input
            type="text"
            className="w-full h-14 rounded-s-3xl outline-none text-gray-600 p-5"
            placeholder="Pesquisar..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <div className="">
            <button className="bg-purple-500 h-14 w-14 flex justify-center items-center rounded-e-3xl text-3xl text-white">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      </form>
      <div>
        <h2 className="text-3xl p-5 text-white">Resultados para: {query}</h2>
      </div>
      <div className="grid grid-cols-4 mt-10 gap-10 text-white">
        {movies.map((movie) => (
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
}

export default Search;
