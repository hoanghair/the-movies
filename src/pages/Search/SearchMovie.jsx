import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { dataSearchMenu } from "../../api/dataSearchMenu";

import SearchContent from "./SearchContent";

const API_KEY = "a44cced0c76f16a355dbd9e71afd5ed6";

const SearchMovie = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const inputRef = useRef(null);

  const { q } = useParams();

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const handleSubmit = async ({ event, searchKey }) => {
    event && event.preventDefault();
    if ((query || searchKey).trim() !== "") {
      navigate(`/search/${searchKey || query}`);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${
          searchKey || query
        }`
      );
      inputRef.current.blur();
      setMovies(response.data.results);
    }
    // setQuery("");
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
      console.log(movies);
    }
  };

  useEffect(() => {
    handleSubmit({ searchKey: q });
  }, []);

  return (
    <div className="SearchMovie">
      <div className="InputSearch inner_content" onSubmit={handleSubmit}>
        <i class="fa-solid fa-magnifying-glass InputSearch__search"></i>
        <input
          type="text"
          placeholder="Search for a movie, tv show, person......"
          className="InputSearch__input"
          value={query}
          ref={inputRef}
          onKeyPress={handleKeyPress}
          onChange={(event) => setQuery(event.target.value)}
        />
        {query && (
          <button className="InputSearch__clear" onClick={() => setQuery("")}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        )}
      </div>
      <div className="boder"></div>
      <div className="Search__content inner_content">
        <div className="Search__content-left">
          <h3>Search Results</h3>
          <ul className="Search__content-menu">
            {dataSearchMenu.map((e, index) => (
              <li
                key={index}
                className={`Search__content-left__item ${
                  index === activeIndex ? "active__search" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <a href="#">{e.name}</a>
                <span>{e.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="Search__content-right">
          <SearchContent movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
