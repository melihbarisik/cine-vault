"use client";

import styles from "./SegmentedToggle.module.scss";

export interface ToggleOption<T extends string> {
  value: T;
  label: string;
  icon?: string;
}

interface SegmentedToggleProps<T extends string> {
  options: ToggleOption<T>[];
  value: T;
  onChange: (value: T) => void;
  compact?: boolean;
}

export default function SegmentedToggle<T extends string>({
  options,
  value,
  onChange,
  compact = false,
}: SegmentedToggleProps<T>) {
  const activeIndex = options.findIndex((o) => o.value === value);

  return (
    <div className={`${styles.track} ${compact ? styles.trackCompact : ""}`}>
      <div
        className={styles.thumb}
        style={{
          width: `calc(${100 / options.length}% - ${12 / options.length}px)`,
          transform: `translateX(calc(${activeIndex * 100}% + ${activeIndex * 4}px))`,
        }}
      />
      {options.map((option) => (
        <button
          key={option.value}
          className={`${styles.option} ${value === option.value ? styles.optionActive : ""}`}
          onClick={() => onChange(option.value)}
        >
          {option.icon && <span className={styles.icon}>{option.icon}</span>}
          {option.label}
        </button>
      ))}
    </div>
  );
}
