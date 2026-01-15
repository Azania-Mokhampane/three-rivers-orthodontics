"use client";
import { useCountUp } from "@/hooks/useCountUp";

interface ICountUpStatProps {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const CountUpStat = ({
  end,
  suffix = "",
  label,
  delay = 0,
}: ICountUpStatProps) => {
  const { count, ref, isComplete } = useCountUp({ end, duration: 2000, delay });

  return (
    <div ref={ref} className="relative">
      <p
        className={`text-3xl font-display font-bold text-foreground transition-all duration-500 ${
          isComplete ? "animate-stat-glow" : ""
        }`}
      >
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export default CountUpStat;
