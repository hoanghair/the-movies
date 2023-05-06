import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Home from "./Home";
import "./Home.scss";

const HomeMovie = () => {
  //   const { id } = useParams();
  //   console.log(id);
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomeMovie;
