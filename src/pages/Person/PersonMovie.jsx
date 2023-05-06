import React, { useEffect, useState } from "react";
import PersonMovieInfoLeft from "../../components/personMovie/PersonMovieInfoLeft/PersonMovieInfoLeft";
import PersonMovieInfoRight from "../../components/personMovie/PersonMovieInfoRight/PersonMovieInfoRight";

import { getPersonMovie } from "../../api/callApi";

const PersonMovie = ({ id }) => {
  const [dataPersonMovie, setPersonMovie] = useState(null);

  const fetchData = async () => {
    const [personMovie] = await Promise.all([getPersonMovie(id)]);

    setPersonMovie(personMovie);
  };

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, [id]);

  console.log(dataPersonMovie);
  console.log(dataPersonMovie?.movie_credits?.cast.slice(0, 10));

  const dataKnownFor = dataPersonMovie?.movie_credits?.cast.slice(0, 10);

  return (
    <div className="PersonMovie PersonMovieInfo inner_content">
      <PersonMovieInfoLeft dataPersonMovie={dataPersonMovie} />
      <PersonMovieInfoRight
        dataPersonMovie={dataPersonMovie}
        dataKnownFor={dataKnownFor}
      />
    </div>
  );
};

export default PersonMovie;
