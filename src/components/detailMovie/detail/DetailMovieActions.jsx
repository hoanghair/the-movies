import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faHeart,
  faBookmark,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "./videoModal";
import PieChart from "../../Chart/PieChart/PieChart";

const ChartText = () => (
  <div className="Actions__chart-text">
    User
    <br />
    Score
  </div>
);

const Icon = ({ icon }) => (
  <li className="Actions__chart icon">
    <FontAwesomeIcon icon={icon} />
  </li>
);

const DetailMovieActions = ({ data, dataTrailer }) => (
  <ul className="DetailMovie__page-container__actions">
    <li className="Actions__chart">
      <PieChart
        vote_average={data?.vote_average}
        big
        className="Actions__chart-details"
      />
      <ChartText />
    </li>
    <Icon icon={faListUl} />
    <Icon icon={faHeart} />
    <Icon icon={faBookmark} />
    <Icon icon={faStar} />

    <Modal dataTrailer={dataTrailer} />
  </ul>
);

export default DetailMovieActions;
