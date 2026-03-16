import { useQuery } from "@tanstack/react-query";
import { getPopularTVSeries } from "../api/tmdb.api";
import type { PopularTVSeriesResponse } from "../types/tmdb.types";

export const useTVSeries = (page = 1) => {
  return useQuery<PopularTVSeriesResponse>({
    queryKey: ['popular-tv-series', page],
    queryFn: () => getPopularTVSeries(page).then((res) => res.data),
    staleTime: 1000 * 60 * 5,
  });
}
