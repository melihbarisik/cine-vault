"use client";

import Slider from "@/common/components/Slider/Slider"
import MovieCard from "./MovieCard"
import { useMovies } from "@/common/hooks/useMovies";



export default function MoviesSlider() {
  const { data, isLoading, isError } = useMovies();

  if (isLoading) return <p style={{ color: "#A8A8B8", padding: "1rem" }}>Filmler yükleniyor...</p>;
  if (isError) return <p style={{ color: "#E84545", padding: "1rem" }}>Filmler yüklenemedi.</p>;

  return (
    <Slider title="Popüler Filmler">
      {data?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Slider>
  )
}