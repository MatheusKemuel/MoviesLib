import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaTimes} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"

const Topbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }

  const content = (
    <>
      <div className="md:hidden block absolute top-16 w-full left-0 right-0 bg-black transition">
        <ul className="text-center text-xl p-20">
          <Link to="/movies">
            <li className="my-4 py-4 border-b border-slate-800">Filmes</li>
          </Link>
          <Link to="/series">
            <li className="my-4 py-4 border-b border-slate-800">Séries</li>
          </Link>
        </ul>
      </div>
    </>
  );

  return (
    <div className="topbarContainer bg-black flex justify-between items-center h-16 w-full m-auto text-white md:px-44 sm:px-10 top-0 fixed z-10 px-5">
      <div>
        <p className="text-4xl">
          <Link to="/">
            Movies<span className="text-purple-500">Lib</span>
          </Link>
        </p>
      </div>
      <nav className="hidden md:block absolute right-44">
        <ul className="flex justify-between gap-10">
          <li className="text-xl hover:text-purple-400">
            <Link to="/movies">Filmes</Link>
          </li>
          <li className="text-xl hover:text-purple-400">
            <Link to="/series">Séries</Link>
          </li>
        </ul>
      </nav>

      <div className="w-1">
        {click && content}
      </div>

      <button className="block md:hidden transition" onClick={handleClick}>
        {click ? <FaTimes /> : <CiMenuFries />}
      </button>
    </div>
  );
};

export default Topbar;
