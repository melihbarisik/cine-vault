import HeroBanner from "@/features/movies/components/HeroBanner";
import HomeContent from "./HomeContent";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <main className={styles.main}>
        <HomeContent />
      </main>
    </>
  );
}
