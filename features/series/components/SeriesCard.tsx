"use client";

import Image from "next/image";
import type { TMDBTVSeries } from "@/common/types/tmdb.types";
import styles from "@/features/movies/components/MovieCard/MovieCard.module.scss";
import { useMoviePoster } from "@/common/hooks/useMoviePoster";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFavorite, removeFavorite } from "@/store/favoritesSlice";

interface SeriesCardProps {
  series: TMDBTVSeries;
}

export default function SeriesCard({ series }: SeriesCardProps) {
  const { name, poster_path, first_air_date, vote_average } = series;
  const year = first_air_date?.split("-")[0] ?? "—";
  const score = vote_average.toFixed(1);
  const { image } = useMoviePoster(poster_path || "");

  const dispatch = useAppDispatch();
  const isFav = useAppSelector((s) => s.favorites.items.some((m) => m.id === series.id));

  const toggleFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFav) {
      dispatch(removeFavorite(series.id));
    } else {
      dispatch(addFavorite({
        id: series.id,
        title: series.name,
        original_title: series.original_name,
        overview: series.overview,
        poster_path: series.poster_path,
        backdrop_path: series.backdrop_path,
        release_date: series.first_air_date,
        original_language: series.original_language,
        genre_ids: series.genre_ids,
        popularity: series.popularity,
        vote_average: series.vote_average,
        vote_count: series.vote_count,
        adult: series.adult,
        video: false,
      }));
    }
  };

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
        <button
          className={`${styles.favBtn} ${isFav ? styles.favActive : ""}`}
          onClick={toggleFav}
          aria-label={isFav ? "Favorilerden çıkar" : "Favorilere ekle"}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill={isFav ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{name}</p>
        <span className={styles.year}>{year}</span>
      </div>
    </div>
  );
}
