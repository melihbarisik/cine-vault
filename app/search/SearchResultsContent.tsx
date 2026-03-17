"use client";

import { useSearchMovies } from "@/common/hooks/useSearchMovies";
import SearchResultItem from "@/features/movies/components/SearchResultItem";
import styles from "./SearchResultsContent.module.scss";

interface Props {
  query: string;
}

export default function SearchResultsContent({ query }: Props) {
  const { data, isLoading } = useSearchMovies(query);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {query ? (
            <>
              <span className={styles.label}>Arama sonuçları:</span>{" "}
              <span className={styles.query}>&ldquo;{query}&rdquo;</span>
            </>
          ) : (
            "Arama"
          )}
        </h1>
        {data && (
          <span className={styles.count}>{data.total_results} sonuç</span>
        )}
      </div>

      {isLoading && (
        <ul className={styles.list}>
          {Array.from({ length: 6 }).map((_, i) => (
            <li key={i} className={styles.skeleton} />
          ))}
        </ul>
      )}

      {!isLoading && data?.results.length === 0 && (
        <p className={styles.empty}>Sonuç bulunamadı.</p>
      )}

      {!isLoading && data && data.results.length > 0 && (
        <ul className={styles.list}>
          {data.results.map((movie) => (
            <SearchResultItem key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
}
