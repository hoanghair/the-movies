import React from "react";
import "./HomeJoinToday.scss";

const BACKGROUND__HOMEJOIN =
  " https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,190235,ad47dd)/lMnoYqPIAVL0YaLP5YjRy7iwaYv.jpg";

const DATA__LIST__TODAY = [
  "Enjoy TMDB ad free",
  "Maintain a personal watchlist",
  "Filter by your subscribed streaming services and find something to watch",
  "Log the movies and TV shows you've seen",
  "Build custom lists",
  "Contribute to and improve our database",
];

const HomeJoinToday = () => {
  return (
    <div className="HomeJoinToday">
      <div
        className="inner_content"
        style={{
          backgroundImage: `url("${BACKGROUND__HOMEJOIN}")`,
        }}
      >
        <div className="Wrapper">
          <div className="HomeJoinToday__header">
            <h2>Join Today</h2>
          </div>
          <div className="HomeJoinToday__content">
            <div className="HomeJoinToday__content-left">
              <p>
                Get access to maintain your own <em>custom personal lists</em>,{" "}
                <em>track what you've seen</em> and search and filter for{" "}
                <em>what to watch next</em>—regardless if it's in theatres, on
                TV or available on popular streaming services like .
              </p>
              <button>Sign Up</button>
            </div>
            <ul className="HomeJoinToday__content-right">
              {DATA__LIST__TODAY.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeJoinToday;
