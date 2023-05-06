import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ContentWrapper.scss";

const BACKGROUND =
  "https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/VlHt27nCqOuTnuX6bku8QZapzO.jpg";

const ContentWrapper = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
    }
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="ContentWrapper">
      <div className="inner_content">
        <div
          className="Wrapper"
          style={{
            backgroundImage: `url("${BACKGROUND}")`,
          }}
        >
          <div className="ContentWrapper__title">
            <h2>Welcome.</h2>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          <form className="ContentWrapper__search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for a movie, tv show, person......"
              className="ContentWrapper__search-input"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
