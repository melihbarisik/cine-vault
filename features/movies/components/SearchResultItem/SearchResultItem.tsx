import Image from "next/image";
import type { TMDBMovie } from "@/common/types/tmdb.types";
import styles from "./SearchResultItem.module.scss";

const POSTER_BASE = "https://image.tmdb.org/t/p/w185";

interface Props {
  movie: TMDBMovie;
}

export default function SearchResultItem({ movie }: Props) {
  const { title, poster_path, release_date, overview, vote_average } = movie;
  const year = release_date?.slice(0, 4) ?? "—";
  const score = vote_average.toFixed(1);

  return (
    <li className={styles.item}>
      <div className={styles.poster}>
        {poster_path ? (
          <Image
            src={`${POSTER_BASE}${poster_path}`}
            alt={title}
            fill
            sizes="80px"
            className={styles.image}
          />
        ) : (
          <div className={styles.noImage}>?</div>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.score}>⭐ {score}</span>
        </div>
        <span className={styles.year}>{year}</span>
        {overview && <p className={styles.overview}>{overview}</p>}
      </div>
    </li>
  );
}
