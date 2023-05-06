import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Link } from "react-router-dom";

const HomeLatestTrailersItem = ({ dataTrailersTV, dataTrailersTheaters }) => {
  const [isOpen, setIsOpen] = useState({});
  const openModal = (id) => {
    setIsOpen({ ...isOpen, [id]: true });
  };
  const closeModal = (id) => {
    setIsOpen({ ...isOpen, [id]: false });
  };
  return (
    <>
      {(dataTrailersTV || dataTrailersTheaters)?.map((movie) => (
        <div className="HomeLatestTrailersItem" key={movie.id}>
          <div className="HomeLatestTrailersItem__image">
            <ModalVideo
              channel="youtube"
              isOpen={isOpen[movie.id]}
              videoId={movie?.key}
              onClose={() => closeModal(movie.id)}
            />
            <img src={`${movie.BACKGROUND__IMAGE}`} alt="" />
            <button onClick={() => openModal(movie.id)}>
              <i class="fa-solid fa-play HomeLatestTrailersItem__image-play"></i>
            </button>
          </div>
          <div className="HomeLatestTrailersItem__content">
            <div className="HomeLatestTrailersItem__content-name">
              <Link to={`/detail/${movie?.id}`}>
                <h2>{movie?.title || movie?.name}</h2>
              </Link>
            </div>
            <p>{movie?.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeLatestTrailersItem;
