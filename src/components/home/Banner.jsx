import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Banner = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <div className="banner">
      <div>
        <h1 className="text-7xl mt-24 font-bold">Bem Vindo</h1>
        <p className="text-4xl mt-3 font-thin">
          Explore nossa galeria de filmes e séries
        </p>
      </div>
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
            <button className="bg-purple-500 h-14 w-14 flex justify-center items-center rounded-e-3xl text-3xl">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Banner;
