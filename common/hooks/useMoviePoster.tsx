import { getMoviePosterImageUrl } from "../api/tmdb.api";

export const useMoviePoster = (path: string) => {
  const image = path ? getMoviePosterImageUrl(path) : null;
  return { image };
};
