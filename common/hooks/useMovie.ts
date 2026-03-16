import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb.api";
import type { TMDBMovieDetail } from "../types/tmdb.types";

const useMovie = (movieId: number) => {
  return useQuery<TMDBMovieDetail>({
    queryKey: ["movie", movieId],
    queryFn: () => getMovie(movieId).then((res) => res.data),
    enabled: !!movieId,
    retry: 1,
  });
};

export default useMovie;
