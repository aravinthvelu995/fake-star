import { useEffect, useState } from "react";
import { useImageBaseUrl, useTrendingMovies } from "../STORE/Selector/Movies";

import "./Banner.scss";

const Banner = () => {
  const [index, setIndex] = useState(1);
  const baseUrl = useImageBaseUrl();
  const size = "original"; // w92 | w154 | w185 | w342 | w500 | w780 | original

  const TRENDINGMOVIES = useTrendingMovies();

  useEffect(() => {
    setTimeout(() => {
      setIndex(index < 4 ? index + 1 : 0);
    }, 10000);
  }, [index]);

  return (
    <div className="banner">
      {TRENDINGMOVIES.slice(index, index + 1).map((movie) => (
        <div className="banner-wrapper" key={movie.id}>
          <img
            className="banner-image"
            src={`${baseUrl}${size}${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div className="overlay ">
            <div className="banner-content">
              <h1 className="title">{movie.title}</h1>
              <p className="overview">{movie.overview}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
