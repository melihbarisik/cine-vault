import HomeContent from "./HomeContent";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeContent />
    </main>
  );
}
