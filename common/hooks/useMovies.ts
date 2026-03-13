import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/tmdb.api";
import type { PopularMoviesResponse } from "../types/tmdb.types";

export const useMovies = (page = 1) => {
  return useQuery<PopularMoviesResponse>({
    queryKey: ['popular-movies', page],
    queryFn: () => getPopularMovies(page).then((res) => res.data),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}