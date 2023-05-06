import React from "react";
import "./PersonMovieInfoLeft.scss";

const URL_IMG_300_450 = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2";

const PersonMovieInfoLeft = ({ dataPersonMovie }) => {
//   console.log(dataPersonMovie);

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  return (
    <div className="PersonMovieInfo__left">
      <div className="PersonMovieInfo__left-image">
        <img
          src={`${URL_IMG_300_450}${dataPersonMovie?.profile_path}`}
          alt=""
        />
      </div>
      <div className="PersonMovieInfo__left-profile">
        <div className="PersonMovieInfo__left-profile__links">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <h3 className="PersonMovieInfo__left-profile__title">Personal Info</h3>
        <div className="PersonMovieInfo__left-profile__detail">
          <p>
            <strong>
              <bdi>Known For</bdi>
            </strong>
            {dataPersonMovie?.known_for_department}
          </p>
          <p>
            <strong>
              <bdi>Known Credits</bdi>
            </strong>
            75
          </p>
          <p>
            <strong>
              <bdi>Gender</bdi>
            </strong>
            {dataPersonMovie?.gender === 2 ? "Male" : "Female"}
          </p>
          <p>
            <strong>
              <bdi>Birthday</bdi>
            </strong>
            {dataPersonMovie?.birthday} ({getAge(dataPersonMovie?.birthday)}{" "}
            years old)
          </p>
          <p>
            <strong>
              <bdi>Place of Birth</bdi>
            </strong>
            {dataPersonMovie?.place_of_birth}
          </p>
          <p>
            <strong>
              <bdi>Also Known As</bdi>
            </strong>
            {dataPersonMovie?.also_known_as.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </p>
        </div>
      </div>
      <div className="PersonMovieInfo__left-login">
        <div className="btn__login">
          <a href="/">
            <i class="fa-solid fa-lock"></i>
            Login to edit
          </a>
        </div>
        <div className="keyboard__shortcut">
          <a href="/">
            <i class="fa-solid fa-keyboard"></i>
            Keyboard Shortcuts
          </a>
        </div>
        <div className="report__issue">
          <a href="/">
            <i class="fa-solid fa-circle-exclamation"></i>
            Login to report an issue
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonMovieInfoLeft;
