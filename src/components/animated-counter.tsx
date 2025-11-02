"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
}

export const AnimatedCounter = ({ end, suffix }: AnimatedCounterProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1,
  });

  return (
    <p ref={ref} className="text-5xl font-extrabold text-primary mb-2">
      {inView ? <CountUp end={end} duration={2.5} /> : "0"}
      {suffix}
    </p>
  );
};