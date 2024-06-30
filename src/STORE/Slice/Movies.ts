import { createSlice } from "@reduxjs/toolkit";
import {
  getImageBaseUrl,
  getMovie,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "../Middleware/Movies";
import { MoviesState } from "../../types/movie";

const initialState: MoviesState = {
  nowPlaying: [],
  popular: [],
  top_rated: [],
  upcoming: [],
  trending: [],
  movie: {
    id: 0,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    backdrop_path: "",
    release_date: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
    adult: false,
    belongs_to_collection: undefined,
    budget: 0,
    genres: undefined,
    homepage: "",
    imdb_id: "",
    origin_country: undefined,
    production_companies: undefined,
    production_countries: undefined,
    revenue: 0,
    runtime: 0,
    spoken_languages: undefined,
    status: "",
    tagline: "",
  },
  imageBaseUrl: "",
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImageBaseUrl.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getImageBaseUrl.fulfilled, (state, action) => {
        state.loading = false;
        state.imageBaseUrl = action.payload;
      })
      .addCase(getImageBaseUrl.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to fetch movies";
      });

    builder
      .addCase(getNowPlayingMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.nowPlaying = action.payload;
      })
      .addCase(getNowPlayingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to fetch movies";
      });

    builder
      .addCase(getUpcomingMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.upcoming = action.payload;
      })
      .addCase(getUpcomingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to fetch movies";
      });

    builder
      .addCase(getTopRatedMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.top_rated = action.payload;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to fetch movies";
      });

    builder
      .addCase(getPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.popular = action.payload;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to fetch movies";
      });

    builder
      .addCase(getTrendingMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTrendingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.trending = action.payload;
      })
      .addCase(getTrendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to fetch movies";
      });

    builder
      .addCase(getMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(getMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.message
          : "Failed to fetch movies";
      });
  },
});

export default moviesSlice.reducer;
