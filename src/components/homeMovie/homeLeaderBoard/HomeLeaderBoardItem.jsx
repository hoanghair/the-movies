import React from "react";

const HomeLeaderBoardItem = ({ dataLeaderboard }) => {
  return (
    <>
      {dataLeaderboard.map((item) => (
        <div className="HomeLeaderBoard__content-item" key={item.id}>
          <div className="HomeLeaderBoard__content-item__avatar">
            <img
              src={`${item.avatar}`}
              alt=""
            />
          </div>
          <div className="HomeLeaderBoard__content-item__data">
            <h3>{item.name}</h3>
            <div className="meter all">
              <div
                className="gauge"
                style={{ width: `${item.all__percent}%` }}
              ></div>
              <h4>{item.all}</h4>
            </div>
            <div className="meter this_week">
              <div
                className="gauge"
                style={{ width: `${item.this_week__percent}%` }}
              ></div>
              <h4>{item.this_week}</h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeLeaderBoardItem;
