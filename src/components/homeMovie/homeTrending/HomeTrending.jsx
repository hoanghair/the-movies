import React, { useState } from "react";
import TabUiHome from "../tabUiHome/TabUiHome";

import "./HomeTrending.scss";
import HomeItem from "./HomeItem";

const BACKGROUND__TRENDING =
  "https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg";

const HomeTrending = ({ dataMovieTrending, dataMovieTrendingWeek }) => {
  let TabsName = "Trending";
  const [currentTab, setCurrentTab] = useState("tab1");

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
  };
  const tabs = [
    {
      name: "tab1",
      title: "Today",
      content: (
        <div className="HomeTrending__wrapper">
          <HomeItem dataMovieTrending={dataMovieTrending} />
        </div>
      ),
    },
    {
      name: "tab2",
      title: "The Week",
      content: (
        <div className="HomeTrending__wrapper">
          <HomeItem dataMovieTrendingWeek={dataMovieTrendingWeek} />
        </div>
      ),
    },
  ];

  return (
    <div className="HomeTrending">
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

export default HomeTrending;
