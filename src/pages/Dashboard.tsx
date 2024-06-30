import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

import { AppDispatch } from "../STORE/store";
import {
  getNowPlayingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getPopularMovies,
  getImageBaseUrl,
  getTrendingMovies,
} from "../STORE/Middleware/Movies";
import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from "../STORE/Selector/Movies";

import "./Dashboard.scss";

const Dashboard = () => {
  const dispatch: AppDispatch = useDispatch();

  const NOWPLAYINGMOVIES = useNowPlayingMovies();
  const POPULARMOVIES = usePopularMovies();
  const TOPRATEDMOVIES = useTopRatedMovies();
  const UPCOMINGMOVIES = useUpcomingMovies();

  useEffect(() => {
    dispatch(getImageBaseUrl());
    dispatch(getNowPlayingMovies());
    dispatch(getUpcomingMovies());
    dispatch(getTopRatedMovies());
    dispatch(getPopularMovies());
    dispatch(getTrendingMovies());
  }, [dispatch]);

  return (
    <main className="dashboard">
      <Navbar />
      <Banner />
      <div className="content">
        <div>
          <h1 className="category-title">Now Playing</h1>
          <div className="movie-wrapper">
            {NOWPLAYINGMOVIES.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="category-title">Popular</h1>
          <div className="movie-wrapper">
            {POPULARMOVIES.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="category-title">Top Rated</h1>
          <div className="movie-wrapper">
            {TOPRATEDMOVIES.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="category-title">Upcoming</h1>
          <div className="movie-wrapper">
            {UPCOMINGMOVIES.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
