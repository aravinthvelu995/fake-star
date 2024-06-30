import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { getImageBaseUrl, getMovie } from "../STORE/Middleware/Movies";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../STORE/store";
import { useImageBaseUrl, useMovie } from "../STORE/Selector/Movies";

import "../components/Banner.scss";
import "./Movie.scss";

const Movie = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  const baseUrl = useImageBaseUrl();
  const bannerSize = "original"; // w92 | w154 | w185 | w342 | w500 | w780 | original
  const postedSize = "w342"; // w92 | w154 | w185 | w342 | w500 | w780 | original

  const MOVIE = useMovie();
  const {
    backdrop_path,
    original_title,
    overview,
    poster_path,
    release_date,
    revenue,
    runtime,
    status,
    tagline,
    title,
  } = MOVIE;

  const GoToHomeHandler = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    if (!baseUrl) {
      dispatch(getImageBaseUrl());
    }
  }, [dispatch, baseUrl]);

  useEffect(() => {
    if (id) {
      dispatch(getMovie(parseInt(id)));
    }
  }, [dispatch, id]);

  return (
    <main className="movie-detail">
      <Navbar />
      <section className="banner">
        <div className="banner-wrapper">
          {backdrop_path ? (
            <img
              className="banner-image"
              src={`${baseUrl}${bannerSize}${backdrop_path}`}
              alt={title}
            />
          ) : (
            <></>
          )}
          <div className="overlay ">
            <div className="banner-content">
              <h1 className="title">{title}</h1>
              <p className="overview">{overview}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="content-wrapper">
        <div className="w-full md:w-1/3">
          <img
            className="poster"
            src={`${baseUrl}${postedSize}${poster_path}`}
            alt={original_title}
          />
        </div>
        <div className="w-full md:w-2/3">
          <div className="hidden md:block text-end">
            <button onClick={GoToHomeHandler}>Back to Home</button>
          </div>
          <div>
            <div className="flex items-center">
              <h2 className="title">Status :</h2>
              <p className="content">{status}</p>
            </div>
            <div className="flex items-center">
              <h2 className="title">Tagline :</h2>
              <p className="content">{tagline}</p>
            </div>
            <div className="flex items-center">
              <h2 className="title">Run Time :</h2>
              <p className="content">{runtime}</p>
            </div>
            <div className="flex items-center">
              <h2 className="title">Revenue :</h2>
              <p className="content">{revenue}</p>
            </div>
            <div className="flex items-center">
              <h2 className="title">Release Date :</h2>
              <p className="content">{release_date}</p>
            </div>
          </div>
          <div className="block md:hidden text-center mt-2">
            <button onClick={GoToHomeHandler}>Back to Home</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Movie;
