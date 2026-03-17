"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/common/hooks/useDebounce";
import type { TMDBMovie } from "@/common/types/tmdb.types";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  placeholder?: string;
  results?: TMDBMovie[];
  onSearch?: (query: string) => void;
}

export default function SearchBar({
  placeholder = "Film veya dizi ara...",
  results = [],
  onSearch,
}: SearchBarProps) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const debounced = useDebounce(value);
  const router = useRouter();

  useEffect(() => {
    if (debounced.trim().length > 2) onSearch?.(debounced);
  }, [debounced, onSearch]);

  const navigate = (query: string) => {
    if (query.trim().length > 2) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(value);
  };

  const showDropdown = focused && value.trim().length > 2 && results.length > 0;

  return (
    <form className={styles.form} onSubmit={handleSubmit} role="search">
      <div className={styles.inputWrapper}>
        <span className={styles.searchIcon} aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          className={styles.input}
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder={placeholder}
          aria-label="Arama"
          aria-autocomplete="list"
          autoComplete="off"
        />
        {showDropdown && (
          <ul className={styles.dropdown} role="listbox">
            {results.map((r) => (
              <li
                key={r.id}
                className={styles.dropdownItem}
                role="option"
                aria-selected={false}
                onClick={() => navigate(value)}
              >
                <span className={styles.itemName}>{r.title}</span>
                <span className={styles.itemYear}>{r.release_date?.slice(0, 4)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className={styles.button} type="submit">
        Ara
      </button>
    </form>
  );
}
