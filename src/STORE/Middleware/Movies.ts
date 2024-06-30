import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { Movie, MovieDetail } from "../../types/movie";

interface FetchMoviesError {
  message: string;
}

// Get All Now Playing Movies
export const getImageBaseUrl: AsyncThunk<
  string,
  void,
  { rejectValue: FetchMoviesError }
> = createAsyncThunk<string, void, { rejectValue: FetchMoviesError }>(
  "movies/getImageBaseUrl",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `https://api.themoviedb.org/3/configuration`
      );
      return response.data.images.secure_base_url;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue({ message: err.message });
      } else {
        return rejectWithValue({ message: "An unknown error occurred" });
      }
    }
  }
);

// Get All Trending Movies
export const getTrendingMovies: AsyncThunk<
  Movie[],
  void,
  { rejectValue: FetchMoviesError }
> = createAsyncThunk<Movie[], void, { rejectValue: FetchMoviesError }>(
  "movies/getTrendingMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/3/trending/all/day?language=en-US`);
      return response.data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue({ message: err.message });
      } else {
        return rejectWithValue({ message: "An unknown error occurred" });
      }
    }
  }
);

// Get All Now Playing Movies
export const getNowPlayingMovies: AsyncThunk<
  Movie[],
  void,
  { rejectValue: FetchMoviesError }
> = createAsyncThunk<Movie[], void, { rejectValue: FetchMoviesError }>(
  "movies/getNowPlayingMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `/3/movie/now_playing?language=en-US&page=1`
      );
      return response.data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue({ message: err.message });
      } else {
        return rejectWithValue({ message: "An unknown error occurred" });
      }
    }
  }
);

// Get All Upcoming Movies
export const getUpcomingMovies: AsyncThunk<
  Movie[],
  void,
  { rejectValue: FetchMoviesError }
> = createAsyncThunk<Movie[], void, { rejectValue: FetchMoviesError }>(
  "movies/getUpcomingMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/3/movie/upcoming?language=en-US&page=1`);
      return response.data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue({ message: err.message });
      } else {
        return rejectWithValue({ message: "An unknown error occurred" });
      }
    }
  }
);

// Get All TopRated Movies
export const getTopRatedMovies: AsyncThunk<
  Movie[],
  void,
  { rejectValue: FetchMoviesError }
> = createAsyncThunk<Movie[], void, { rejectValue: FetchMoviesError }>(
  "movies/getTopRatedMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `/3/movie/top_rated?language=en-US&page=1`
      );
      return response.data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue({ message: err.message });
      } else {
        return rejectWithValue({ message: "An unknown error occurred" });
      }
    }
  }
);

// Get All Popular Movies
export const getPopularMovies: AsyncThunk<
  Movie[],
  void,
  { rejectValue: FetchMoviesError }
> = createAsyncThunk<Movie[], void, { rejectValue: FetchMoviesError }>(
  "movies/getPopularMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/3/movie/popular?language=en-US&page=1`);
      return response.data.results;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue({ message: err.message });
      } else {
        return rejectWithValue({ message: "An unknown error occurred" });
      }
    }
  }
);

// Get A Movies
export const getMovie: AsyncThunk<
  MovieDetail,
  number,
  { rejectValue: FetchMoviesError }
> = createAsyncThunk<MovieDetail, number, { rejectValue: FetchMoviesError }>(
  "movies/getMovie",
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/3/movie/${movieId}?language=en-US`);
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue({ message: err.message });
      } else {
        return rejectWithValue({ message: "An unknown error occurred" });
      }
    }
  }
);
