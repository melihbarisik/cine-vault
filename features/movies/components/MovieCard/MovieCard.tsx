"use client";

import Image from "next/image";
import type { TMDBMovie } from "@/common/types/tmdb.types";
import styles from "./MovieCard.module.scss";
import { useMoviePoster } from "@/common/hooks/useMoviePoster";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFavorite, removeFavorite } from "@/store/favoritesSlice";

interface MovieCardProps {
  movie: TMDBMovie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const { title, poster_path, release_date, vote_average } = movie;
  const year = release_date?.split("-")[0] ?? "—";
  const score = vote_average.toFixed(1);
  const { image } = useMoviePoster(poster_path || "");

  const dispatch = useAppDispatch();
  const isFav = useAppSelector((s) => s.favorites.items.some((m) => m.id === movie.id));

  const toggleFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFav) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

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
        <p className={styles.title}>{title}</p>
        <span className={styles.year}>{year}</span>
      </div>
    </div>
  );
}
