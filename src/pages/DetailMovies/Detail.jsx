import React, { useEffect, useState } from "react";
import DetailMovieActions from "../../components/detailMovie/detail/DetailMovieActions";
import DetailMovieInfo from "../../components/detailMovie/detail/DetailMovieInfo";
import DetailMoviePoster from "../../components/detailMovie/detail/DetailMoviePoster";
import LeftColumn from "../../components/detailMovie/moviecast/LeftColumn";
import RightColumn from "../../components/detailMovie/moviecast/RightColumn";
import {
  getMovie,
  getMovieCast,
  getSimilarMovies,
  getMovieKeywords,
  getMovieTrailer,
  getMovieTrendingDay,
} from "../../api/callApi";

import "./DetailMovie.scss";

const URL_ORIGINAL = "https://image.tmdb.org/t/p/original/";
const URL_IMG_300_450 = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";

const infoPeople = [
  {
    id: 1,
    name: "Joel Crawford",
    character: "Director",
  },
  {
    id: 2,
    name: "Paul Fisher",
    character: "Screenplay",
  },
  {
    id: 3,
    name: "Tom Wheeler",
    character: "Story",
  },
  {
    id: 4,
    name: "Tommy Swerdlow",
    character: "Screenplay, Story",
  },
];

const Detail = ({ id }) => {
  const [data, setData] = useState(null);
  const [dataCast, setDataCast] = useState(null);
  const [dataSimilar, setDataSimilar] = useState(null);
  const [dataKeywords, setDataKeywords] = useState(null);
  const [dataTrailer, setDataTrailer] = useState(null);

  const fetchData = async () => {
    const [movieData, castData, similarData, keywordsData, trailerData] =
      await Promise.all([
        getMovie(id),
        getMovieCast(id),
        getSimilarMovies(id),
        getMovieKeywords(id),
        getMovieTrailer(id),
        getMovieTrendingDay(),
      ]);
    setData(movieData);
    setDataCast(castData);
    setDataSimilar(similarData);
    setDataKeywords(keywordsData);
    setDataTrailer(trailerData);
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [id]);

  console.log(dataTrailer);

  return (
    <div className="Detail">
      <div
        className="DetailMovie"
        style={{
          backgroundImage: `url(${URL_ORIGINAL}${data?.backdrop_path})`,
        }}
      >
        <div className="DetailMovie__page">
          <div className="DetailMovie__page-container">
            <div className="DetailMovie__page-container__image">
              <img src={`${URL_IMG_300_450}${data?.poster_path}`} alt="" />
            </div>
            <div className="Center__row">
              <DetailMoviePoster poster={data} />

              <DetailMovieActions data={data} dataTrailer={dataTrailer} />

              <DetailMovieInfo
                tagline={data?.tagline}
                overview={data?.overview}
                infoPeople={infoPeople}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="MovieCast">
        <div className="MovieCast__wrapper">
          <LeftColumn
            moviecast={dataCast}
            movieSimilar={dataSimilar}
            nameMovie={data?.title}
          />
          <RightColumn data={data} dataKeywords={dataKeywords} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
