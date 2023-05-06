import React, { useState } from "react";


import HomeItem from "../homeTrending/HomeItem";
import TabUiHome from "../tabUiHome/TabUiHome";

const BACKGROUND__TRENDING =
  "https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg";

const HomePopular = ({ dataMoviePopularTV, dataMoviePopularTheater }) => {
  let TabsName = "What's Popular";
  const [currentTab, setCurrentTab] = useState("tab1");

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
  };
  const tabs = [
    {
      name: "tab1",
      title: "On TV",
      content: (
        <div className="HomeTrending__wrapper">
          <HomeItem dataMoviePopularTV={dataMoviePopularTV} />
        </div>
      ),
    },
    {
      name: "tab2",
      title: "In Theaters",
      content: (
        <div className="HomeTrending__wrapper">
          <HomeItem dataMoviePopularTheater={dataMoviePopularTheater} />
        </div>
      ),
    },
  ];

  return (
    <div className="HomePopular">
      <div
        className="inner_content "
        style={{
          backgroundImage: `url("${BACKGROUND__TRENDING}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: " 50% 200px",
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

export default HomePopular;
