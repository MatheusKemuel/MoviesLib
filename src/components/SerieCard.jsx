import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../helpers/utils";

const imageUrl = import.meta.env.VITE_IMG;

const SerieCard = ({
  id,
  title,
  poster_path,
  vote_average,
  first_air_date,
  name,
}) => {
  // console.log(movie);

  const date = formatDate(first_air_date);

  return (
    <div className="hover:scale-95 relative">
      <Link to={`/serie/${id}`}>
        {
          <img
            className="rounded-xl img-card-movies "
            src={imageUrl + poster_path}
            alt={title}
          />
        }
        <div className="absolute bg-purple-800 rounded-b-xl w-12 h-10 flex items-center justify-center right-3 top-0">
          {vote_average}
        </div>
        <h2 className="text-bold text-xl mt-3">{title}</h2>
        <h2 className="text-bold text-xl mt-3">{name}</h2>
        <p className="text-gray-400 text-sm mt-3">{date}</p>
      </Link>
    </div>
  );
};

export default SerieCard;
