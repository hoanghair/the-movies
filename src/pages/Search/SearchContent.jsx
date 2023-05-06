import React from "react";
import { Link } from "react-router-dom";

import { NO__IMAGE } from "../../components/detailMovie/moviecast/Recommendations";

const IMG_94_141 = "https://www.themoviedb.org/t/p/w94_and_h141_bestv2";

const SearchContent = ({ movies }) => {
  function formatDate(date) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    return formattedDate;
  }
  return (
    <div>
      {movies.map((movie) => (
        <div className="Search__content-movie" key={movie.id}>
          <div className="Search__content-image">
            {movie.backdrop_path === null ? (
              <img src={`${NO__IMAGE}`} alt="" />
            ) : (
              <Link to={`/detail/${movie?.id}`}>
                <img src={`${IMG_94_141}${movie.backdrop_path}`} alt="" />
              </Link>
            )}
          </div>
          <div className="Search__content-details">
            <div className="Search__content-details__title">
              <Link to={`/detail/${movie?.id}`}>
                <h2>{movie.title}</h2>
              </Link>
              <span>{formatDate(movie.release_date)}</span>
            </div>
            <p className="Search__content-details__content">{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchContent;
