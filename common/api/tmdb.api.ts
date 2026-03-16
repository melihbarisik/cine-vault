import axiosInstance from "./axiosInstance";
import type { PopularMoviesResponse, PopularTVSeriesResponse } from "../types/tmdb.types";

export const getPopularMovies = (page = 1) =>
  axiosInstance.get<PopularMoviesResponse>('/movie/popular', { params: { page } });

export const getPopularTVSeries = (page = 1) =>
  axiosInstance.get<PopularTVSeriesResponse>('/tv/popular', { params: { page } });

export const getMoviePosterImageUrl = (posterPath: string) =>
  `https://image.tmdb.org/t/p/w500${posterPath}`;