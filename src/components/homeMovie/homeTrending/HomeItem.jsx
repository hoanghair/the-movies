import React from "react";
import { Link } from "react-router-dom";
import PieChart from "../../Chart/PieChart/PieChart";

const URL_IMG_220_330 = "https://www.themoviedb.org/t/p/w220_and_h330_face/";

const HomeItem = ({
  dataMovieTrending,
  dataMovieTrendingWeek,
  dataMoviePopularTV,
  dataMoviePopularTheater,
}) => {
  // console.log((dataMovieTrending || dataMovieTrendingWeek)?.results);
  // console.log(dataMovieTrending?.results);
  // console.log(dataMovieTrendingWeek?.results);

  return (
    <>
      {(
        dataMovieTrending ||
        dataMovieTrendingWeek ||
        dataMoviePopularTV ||
        dataMoviePopularTheater
      )?.map((movie) => (
        <div className="HomeItem" key={movie.id}>
          <Link to={`/detail/${movie?.id}`} className="HomeItem__image">
            <img src={`${URL_IMG_220_330}${movie?.poster_path}`} alt="" />
          </Link>
          <div className="HomeItem__content">
            <PieChart
              vote_average={movie?.vote_average}
              small
              className="HomeItem__content-piechart"
            />
            <div className="HomeItem__content-name">
              <Link to={`/detail/${movie?.id}`}>
                <h2>{movie?.title || movie?.name}</h2>
              </Link>
              <p>{movie?.release_date || movie?.first_air_date}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeItem;
