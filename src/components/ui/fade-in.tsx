"use client";

import { useRef } from "react";
import { motion, useInView, type TargetAndTransition } from "framer-motion";

type Direction = "up" | "left" | "right" | "none";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;       // milliseconds
  direction?: Direction;
  className?: string;
}

const initial: Record<Direction, TargetAndTransition> = {
  up:    { opacity: 0, y: 22 },
  left:  { opacity: 0, x: 22 },
  right: { opacity: 0, x: -22 },
  none:  { opacity: 0 },
};

const visible = { opacity: 1, x: 0, y: 0 };

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <motion.div
      ref={ref}
      initial={initial[direction]}
      animate={isInView ? visible : initial[direction]}
      transition={{
        duration: 0.55,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ willChange: "opacity, transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
