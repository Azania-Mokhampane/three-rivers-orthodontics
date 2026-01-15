import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  delay?: number;
  startOnView?: boolean;
}

export const useCountUp = ({
  end,
  duration = 2000,
  delay = 0,
  startOnView = true,
}: UseCountUpOptions) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startOnView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Easing function for smooth deceleration
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(end);
          setIsComplete(true);
        }
      };
      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeout);
  }, [hasStarted, end, duration, delay]);

  return { count, ref, isComplete };
};
