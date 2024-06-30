export interface Movie {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  top_rated: Movie[];
  upcoming: Movie[];
  trending: Movie[];
  movie: MovieDetail;
  imageBaseUrl: string;
  loading: boolean;
  error: string | null;
}

export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: unknown;
  budget: number;
  genres: unknown;
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: unknown;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: unknown;
  production_countries: unknown;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: unknown;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
