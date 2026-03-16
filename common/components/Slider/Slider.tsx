"use client";

import { useRef } from "react";
import styles from "./Slider.module.scss";

interface SliderProps {
  title?: string;
  children: React.ReactNode;
  scrollAmount?: number;
}

export default function Slider({ title, children }: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.slider}>
      {<h2 className={styles.title}>{title}</h2>}
      <div className={styles.track} ref={trackRef}>
        {children}
      </div>
    </section>
  );
}
