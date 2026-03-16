"use client";

import { useState } from "react";
import MoviesSlider from "@/features/movies/components/MoviesSlider";
import SeriesSlider from "@/features/series/components/SeriesSlider";
import SegmentedToggle from "@/common/components/SegmentedToggle/SegmentedToggle";
import type { ToggleOption } from "@/common/components/SegmentedToggle/SegmentedToggle";
import styles from "./HomeContent.module.scss";

type Tab = "movies" | "series";

const TABS: ToggleOption<Tab>[] = [
  { value: "movies", label: "Filmler", icon: "🎬" },
  { value: "series", label: "Diziler", icon: "📺" },
];

export default function HomeContent() {
  const [active, setActive] = useState<Tab>("movies");

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Popüler</h2>
        <SegmentedToggle options={TABS} value={active} onChange={setActive} compact />
      </div>
      <div key={active} className={styles.content}>
        {active === "movies" ? <MoviesSlider /> : <SeriesSlider />}
      </div>
    </div>
  );
}
