/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  getMovieTrendingDay,
  getMovieTrendingWeek,
  getMoviePopularTV,
  getMoviePopularTheater,
} from "../../api/callApi";
import ContentWrapper from "../../components/homeMovie/headContent/ContentWrapper";
import HomeLatestTrailers from "../../components/homeMovie/homeLatestTrailers/HomeLatestTrailers";
import HomePopular from "../../components/homeMovie/homePopular/HomePopular";
import HomeTrending from "../../components/homeMovie/homeTrending/HomeTrending";
import { dataTrailersTV } from "../../api/dataTrailersTV";
import { dataTrailersTheaters } from "../../api/dataTrailersTheaters";
import HomeJoinToday from "../../components/homeMovie/homeJoinToday/HomeJoinToday";
import HomeLeaderBoard from "../../components/homeMovie/homeLeaderBoard/HomeLeaderBoard";

const Home = ({ id }) => {
  const [dataMovieTrending, setMovieTrending] = useState(null);
  const [dataMovieTrendingWeek, setMovieTrendingWeek] = useState(null);
  const [dataMoviePopularTV, setMoviePopularTV] = useState(null);
  const [dataMoviePopularTheater, setMoviePopularTheater] = useState(null);

  const fetchData = async () => {
    const [
      movieTrending,
      movieTrendingWeek,
      moviePopularTV,
      moviePopularTheater,
    ] = await Promise.all([
      getMovieTrendingDay(),
      getMovieTrendingWeek(),
      getMoviePopularTV(),
      getMoviePopularTheater(),
    ]);

    setMovieTrending(movieTrending);
    setMovieTrendingWeek(movieTrendingWeek);
    setMoviePopularTV(moviePopularTV);
    setMoviePopularTheater(moviePopularTheater);
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [id]);
  // console.log(dataMovieTrending?.results);
  // console.log(dataMovieTrendingWeek?.results);
  // console.log(dataMoviePopularTV);
  console.log(dataMovieTrending);

  return (
    <div className="HomeMovie">
      <ContentWrapper />
      <HomeTrending
        dataMovieTrending={dataMovieTrending}
        dataMovieTrendingWeek={dataMovieTrendingWeek}
      />
      <HomeLatestTrailers
        dataTrailersTV={dataTrailersTV}
        dataTrailersTheaters={dataTrailersTheaters}
      />
      <HomePopular
        dataMoviePopularTV={dataMoviePopularTV}
        dataMoviePopularTheater={dataMoviePopularTheater}
      />
      <HomeJoinToday />
      <HomeLeaderBoard />
    </div>
  );
};

export default Home;
