"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useMovies } from "@/common/hooks/useMovies";
import SearchBar from "@/common/components/SearchBar/SearchBar";
import styles from "./HeroBanner.module.scss";
import { useSearchMovies } from "@/common/hooks/useSearchMovies";

const BACKDROP_BASE = "https://image.tmdb.org/t/p/w1280";
const POSTER_BASE   = "https://image.tmdb.org/t/p/w500";

// Modül yüklenince bir kez çalışır → her sayfa refresh'inde yeni değer
const RAND = Math.random();

export default function HeroBanner() {
  const { data, isLoading } = useMovies();
  const [searchQuery, setSearchQuery] = useState("");
  const { data: searchData } = useSearchMovies(searchQuery);

  const movie = useMemo(() => {
    if (!data?.results.length) return null;
    const pool = data.results.filter((m) => m.backdrop_path);
    return pool[Math.floor(RAND * pool.length)] ?? null;
  }, [data]);

  if (isLoading) {
    return <div className={`${styles.banner} ${styles.skeleton}`} />;
  }

  if (!movie) return null;

  const imageSrc = movie.backdrop_path
    ? `${BACKDROP_BASE}${movie.backdrop_path}`
    : `${POSTER_BASE}${movie.poster_path}`;


    const handleSearch = (query: string) => {
      setSearchQuery(query);
    }

  return (
    <div className={styles.banner}>
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Hoş Geldiniz</p>
        <h1 className={styles.title}>Cine Vault</h1>
        <p className={styles.subtitle}>
          Popüler filmleri ve dizileri keşfedin.
        </p>
        <SearchBar onSearch={handleSearch} results={searchData?.results} />
      </div>
    </div>
  );
}
