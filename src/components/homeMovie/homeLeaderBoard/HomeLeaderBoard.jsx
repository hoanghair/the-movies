import React from "react";
import "./HomeLeaderBoard.scss";
import HomeLeaderBoardItem from "./HomeLeaderBoardItem";
import { dataLeaderboard } from "../../../api/dataLeaderboard";

const HomeLeaderBoard = () => {
  return (
    <div className="HomeLeaderBoard">
      <div className="inner_content">
        <div className="Wrapper">
          <div className="HomeLeaderBoard__header">
            <h2>Leaderboard</h2>
            <div className="HomeLeaderBoard__header-note">
              <p>
                <span className="dot all"></span>
                All Time Edits
              </p>
              <p>
                <span className="dot this_week"></span>
                Edits This Week
              </p>
            </div>
          </div>
          <div className="HomeLeaderBoard__content">
            <HomeLeaderBoardItem dataLeaderboard={dataLeaderboard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLeaderBoard;
