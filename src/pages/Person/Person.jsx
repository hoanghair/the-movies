import React from "react";
import Layout from "../../components/layout/Layout";
import { useParams } from "react-router-dom";
import PersonMovie from "./PersonMovie";
import "./PersonMovie.scss";

const Person = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Layout>{id && <PersonMovie id={id} />}</Layout>
    </>
  );
};

export default Person;
