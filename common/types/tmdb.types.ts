export interface TMDBMovie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  video: boolean;
}

export interface TMDBPaginatedResponse<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
}

export type PopularMoviesResponse = TMDBPaginatedResponse<TMDBMovie>;

export interface TMDBTVSeries {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
  adult: boolean;
}

export type PopularTVSeriesResponse = TMDBPaginatedResponse<TMDBTVSeries>;

export interface TMDBGenre {
  id: number;
  name: string;
}

export interface TMDBMovieDetail {
  id: number;
  title: string;
  original_title: string;
  tagline: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  runtime: number;
  genres: TMDBGenre[];
  vote_average: number;
  vote_count: number;
  popularity: number;
  status: string;
  adult: boolean;
}
