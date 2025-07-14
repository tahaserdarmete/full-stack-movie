import React from "react";
import {Link} from "react-router-dom";

const MovieCard = ({movie}) => {
  //
  const r = movie.rating;
  //

  const color =
    r > 9 ? "green" : r > 7.5 ? "greenyellow" : r > 5 ? "orange" : "red";

  //
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="flex flex-col max-sm:flex-row p-4 m-4 border shadow rounded-md gap-6 "
    >
      <div className="relative">
        {/* Image */}
        <img
          src={`https://picsum.photos/seed/${movie.id}/200/300`}
          className="rounded-lg border border-gray-400 w-full max-h-[250px] object-cover"
          alt="poster"
        />
        {/* Rating */}
        <span
          className={`absolute right-[-15px] top-[-15px] h-8 w-8 rounded-full flex items-center justify-center font-bold text-white`}
          style={{
            background: color,
          }}
        >
          {movie.rating}
        </span>
      </div>

      {/* Title */}
      <div className="flex flex-col justify-between">
        <h3 className="text-xl font-bold">{movie.title}</h3>

        <div className="flex flex-col gap-5">
          {/* Year */}
          <p>{movie.year}</p>

          {/* Genre */}
          <p className="flex gap-2 flex-wrap">
            {movie.genre.map((genre) => (
              <span className="bg-gray-200 py-1 px-2 rounded-md">{genre}</span>
            ))}
          </p>

          {/* Language */}
          <p>
            <span className="bg-red-500 text-white py-2 px-3 rounded-md capitalize">
              {movie.language}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
