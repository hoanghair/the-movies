import React from "react";
import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Manipulation() {
  return (
    <div className={cx("manipulation")}>
      <div className={cx("manipulation__iconPlus")}>
        <i className={cx("fa-solid fa-plus ")}></i>
        {/* <ShowMenuPlus /> */}
      </div>
      <div className={cx("manipulation__languages")}>
        <span className={cx("manipulation__languagesText")}>VI</span>
      </div>

      <div className={cx("manipulation__iconSearch")}>
        <Link to={`/search/:`}>
          <i className={cx("fa-solid fa-magnifying-glass")}></i>
        </Link>
      </div>
    </div>
  );
}

export default Manipulation;
