"use client";
import { useMovies } from "@/common/hooks/useMovies";



export default function Home() {
  const { data, isLoading, isError } = useMovies();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading movies.</div>;


  return (
    <div>
      {data?.data?.results.map((movie: any) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
}