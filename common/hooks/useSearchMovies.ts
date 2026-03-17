import { useQuery } from "@tanstack/react-query"
import { searchMovies } from "../api/tmdb.api"

export const useSearchMovies = (query: string) => {
    return useQuery({
        queryKey: ['search-movies', query],
        queryFn: () => searchMovies(query).then((res) => res.data),
        enabled: query.trim().length > 2,
    })
}