import Image from "next/image";
import type { TMDBTVSeries } from "@/common/types/tmdb.types";
import styles from "@/features/movies/components/MovieCard/MovieCard.module.scss";
import { useMoviePoster } from "@/common/hooks/useMoviePoster";

interface SeriesCardProps {
  series: TMDBTVSeries;
}

export default function SeriesCard({ series }: SeriesCardProps) {
  const { name, poster_path, first_air_date, vote_average } = series;
  const year = first_air_date?.split("-")[0] ?? "—";
  const score = vote_average.toFixed(1);
  const { image } = useMoviePoster(poster_path || "");

  return (
    <div className={styles.card}>
      <div className={styles.poster}>
        {image ? (
          <Image
            src={image}
            alt={name}
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
        <p className={styles.title}>{name}</p>
        <span className={styles.year}>{year}</span>
      </div>
    </div>
  );
}
