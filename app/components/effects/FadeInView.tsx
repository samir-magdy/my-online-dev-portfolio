"use client";

import { motion, useReducedMotion } from "motion/react";

interface FadeInViewProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeInView({
  children,
  delay = 0,
  className = "",
}: FadeInViewProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
