"use client";

import Slider from "@/common/components/Slider/Slider";
import SeriesCard from "./SeriesCard";
import { useTVSeries } from "@/common/hooks/useTVSeries";

export default function SeriesSlider() {
  const { data, isLoading, isError } = useTVSeries();

  if (isLoading) return <p style={{ color: "#A8A8B8", padding: "1rem" }}>Diziler yükleniyor...</p>;
  if (isError) return <p style={{ color: "#E84545", padding: "1rem" }}>Diziler yüklenemedi.</p>;

  return (
    <Slider title="Popüler Diziler">
      {data?.results.map((series) => (
        <SeriesCard key={series.id} series={series} />
      ))}
    </Slider>
  );
}
