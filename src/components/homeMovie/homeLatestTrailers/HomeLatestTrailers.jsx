import React, { useState } from "react";


import TabUiHome from "../tabUiHome/TabUiHome";
import "./HomeLatestTrailers.scss";
import HomeLatestTrailersItem from "./HomeLatestTrailersItem";

const BACKGROUND__LATEST__TRAILERS =
  "https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/ymkFaEO0UdYXKIgcWZ23TlYIRD9.jpg";

const HomeLatestTrailers = ({ dataTrailersTV, dataTrailersTheaters }) => {
  let TabsName = "Latest Trailers";
  const [currentTab, setCurrentTab] = useState("tab1");
  console.log(dataTrailersTV);

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
  };
  const tabs = [
    {
      name: "tab1",
      title: "On TV",
      content: (
        <div className="HomeLatestTrailers__wrapper">
          <HomeLatestTrailersItem dataTrailersTV={dataTrailersTV} />
        </div>
      ),
    },
    {
      name: "tab2",
      title: "In Theaters",
      content: (
        <div className="HomeLatestTrailers__wrapper">
          <HomeLatestTrailersItem dataTrailersTheaters={dataTrailersTheaters}  />
        </div>
      ),
    },
  ];

  return (
    <div className="HomeLatestTrailers">
      <div
        className="inner_content"
        style={{
          backgroundImage: `url("${BACKGROUND__LATEST__TRAILERS}")`,
        }}
      >
        <div className="Wrapper">
          <TabUiHome
            TabsName={TabsName}
            tabs={tabs}
            currentTab={currentTab}
            handleTabChange={handleTabChange}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLatestTrailers;
