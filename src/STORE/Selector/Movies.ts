import { useAppSelector } from "../store";

export const useImageBaseUrl = () =>
  useAppSelector((state) => state.movies.imageBaseUrl);

export const useNowPlayingMovies = () =>
  useAppSelector((state) => state.movies.nowPlaying);
export const usePopularMovies = () =>
  useAppSelector((state) => state.movies.popular);
export const useTopRatedMovies = () =>
  useAppSelector((state) => state.movies.top_rated);
export const useUpcomingMovies = () =>
  useAppSelector((state) => state.movies.upcoming);
export const useTrendingMovies = () =>
  useAppSelector((state) => state.movies.trending);

export const useMovie = () => useAppSelector((state) => state.movies.movie);
