import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/tmdb.api";

export const useMovies = (page = 1) => {
  return useQuery({
    queryKey: ['popular-movies', page],
    queryFn: () => getPopularMovies(page),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}