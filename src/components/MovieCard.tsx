import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useImageBaseUrl } from "../STORE/Selector/Movies";
import { Movie } from "../types/movie";

import "./MovieCard.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import useFavourite from "../hooks/useFavourite";
import React from "react";
import { useNavigate } from "react-router-dom";

interface MovieListProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieListProps> = ({ movie }) => {
  const navigate = useNavigate();
  const { addFavourite, removeFavourite, isFavourite } = useFavourite();

  const baseUrl = useImageBaseUrl();

  const size = "w185"; // w92 | w154 | w185 | w342 | w500 | w780 | original
  const { release_date, vote_average, original_title, poster_path } = movie;

  const GoToDetailHandler = () => {
    navigate(`/movie/${movie.id}`);
  };

  const SetFavouriteHandler = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    if (isFavourite(movie.id)) {
      removeFavourite(movie.id);
    } else {
      addFavourite(movie.id);
    }
  };

  return (
    <button className="movie-card p-0" onClick={GoToDetailHandler}>
      <p className="rating shadow-2xl">{Math.round(vote_average)}</p>
      <FontAwesomeIcon
        icon={faHeart}
        className={`favourite ${isFavourite(movie.id) ? "active" : ""}`}
        onClick={SetFavouriteHandler}
      />
      <img
        className="poster"
        src={`${baseUrl}${size}${poster_path}`}
        alt={original_title}
      />
      <div className="movie-content">
        <p className="title">{original_title}</p>
        <p className="relase-date">{release_date}</p>
      </div>
    </button>
  );
};

export default MovieCard;
