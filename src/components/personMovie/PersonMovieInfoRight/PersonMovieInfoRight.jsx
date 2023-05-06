import React from "react";
import { Link } from "react-router-dom";
import { NO__IMAGE } from "../../detailMovie/moviecast/Recommendations";
import "./PersonMovieInfoRight.scss";

const URL_IMG_150_225 = "https://www.themoviedb.org/t/p/w150_and_h225_bestv2";

const PersonMovieInfoRight = ({ dataPersonMovie, dataKnownFor }) => {
  const Paragraphs = dataPersonMovie?.biography.split("\n\n");


  return (
    <div className="PersonMovieInfo__right">
      <div className="PersonMovieInfo__right-title">
        <h2>{dataPersonMovie?.name}</h2>
      </div>

      <div className="PersonMovieInfo__right-biography">
        <h3>Biography</h3>
        {Paragraphs?.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div className="PersonMovieInfo__right-knownFor">
        <h3>Known For</h3>
        <div className="known__for">
          {dataKnownFor?.map((item) => (
            <Link
              to={`/detail/${item?.id}`}
              className="known__for-item"
              key={item.id}
            >
              <div className="known__for-item__image">
                {item?.poster_path === null ? (
                  <img src={`${NO__IMAGE}`} alt="" />
                ) : (
                  <img src={`${URL_IMG_150_225}${item?.poster_path}`} alt="" />
                )}
              </div>
              <div className="known__for-item__title">
                <a href="/">{item?.title}</a>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="PersonMovieInfo__right-acting">
        <div className="Acting__list">
          <h3>Acting</h3>
          <div className="Acting__list-filters">
            <div className="Acting__list-filters__all">
              <p>ALL</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>
            <div className="Acting__list-filters__department">
              <p>Department</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>
          </div>
        </div>
        <div className="Acting__table">
          <div className="Acting__table-item">
            <div className="Acting__table-item__row">
              <div className="year">2023</div>
              <i class="fa-regular fa-circle"></i>
              <div className="name">
                <a href="/">Sergeant X</a>
              </div>
            </div>
            <div className="Acting__table-item__row">
              <div className="year">2023</div>
              <i class="fa-regular fa-circle"></i>
              <div className="name">
                <a href="/">Sergeant X</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonMovieInfoRight;
