import React from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbarContainer bg-black flex justify-between items-center h-16 m-auto text-white px-44">
      <div>
        <p className="text-4xl">
          <Link to="/">
            Movies<span className="text-purple-500">Lib</span>
          </Link>
        </p>
      </div>
      <nav>
        <ul className="flex justify-between gap-10">
          <li className="text-xl hover:text-purple-400">
            <Link to="/movies">Filmes</Link>
          </li>
          <li className="text-xl hover:text-purple-400">
            <Link to="/series">Séries</Link>
          </li>
          <li className="text-xl hover:text-purple-400">
            <Link to="/favorites">Favoritos</Link>
          </li>
          <li className="text-xl hover:text-purple-400">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;
