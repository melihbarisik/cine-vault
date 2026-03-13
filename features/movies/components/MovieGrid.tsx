"use client";
import { useMovies } from "@/common/hooks/useMovies";
import MovieCard from "./MovieCard";
import styles from "./MovieGrid.module.scss";

export default function MovieGrid() {
  const { data, isLoading, isError } = useMovies();

  if (isLoading) return <p className={styles.state}>Loading...</p>;
  if (isError) return <p className={styles.state}>Failed to load movies.</p>;

  return (
    <div className={styles.grid}>
      {data?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
