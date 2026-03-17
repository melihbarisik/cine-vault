import Image from "next/image";
import type { TMDBMovie } from "@/common/types/tmdb.types";
import styles from "./MovieCard.module.scss";
import { useMoviePoster } from "@/common/hooks/useMoviePoster";


interface MovieCardProps {
  movie: TMDBMovie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const { title, poster_path, release_date, vote_average } = movie;
  const year = release_date?.split("-")[0] ?? "—";
  const score = vote_average.toFixed(1);
  const { image } = useMoviePoster(poster_path || "");

  return (
    <div className={styles.card}>
      <div className={styles.poster}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.noImage}>No Image</div>
        )}
        <span className={styles.score}>{score}</span>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <span className={styles.year}>{year}</span>
      </div>
    </div>
  );
}
