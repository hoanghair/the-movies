import React from "react";
import Layout from "../../components/layout/Layout";
import SearchMovie from "./SearchMovie";
import "./SearchMovie.scss";

const Search = () => {
  return (
    <div className="SearchMovie">
      <Layout>
        <SearchMovie />
      </Layout>
    </div>
  );
};

export default Search;
