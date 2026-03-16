import MoviesSlider from "@/features/movies/components/MoviesSlider";
import SeriesSlider from "@/features/series/components/SeriesSlider";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <MoviesSlider />
      <SeriesSlider />
    </main>
  );
}
