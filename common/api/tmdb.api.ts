import axiosInstance from "./axiosInstance";
import type { PopularMoviesResponse, PopularTVSeriesResponse, TMDBMovieDetail, SearchResponse } from "../types/tmdb.types";

export const getPopularMovies = (page = 1) =>
  axiosInstance.get<PopularMoviesResponse>('/movie/popular', { params: { page } });

export const getPopularTVSeries = (page = 1) =>
  axiosInstance.get<PopularTVSeriesResponse>('/tv/popular', { params: { page } });

export const getMovie = (movieId: number) =>
  axiosInstance.get<TMDBMovieDetail>(`/movie/${movieId}`);

export const searchMovies = (query: string) =>
  axiosInstance.get<SearchResponse>(`/search/movie`, {
    params: { query },
  });

export const getMoviePosterImageUrl = (posterPath: string) =>
  `https://image.tmdb.org/t/p/w500${posterPath}`;