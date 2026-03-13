import axiosInstance from "./axiosInstance";

export const getPopularMovies = (page = 1) =>
  axiosInstance.get('/movie/popular', { params: { page } });