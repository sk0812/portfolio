"use client";
import { motion } from "framer-motion";

export const BottomText = () => {
  return (
    <motion.p
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.8,
        duration: 0.5,
        type: "spring",
        stiffness: 150,
      }}
      className="mt-12 text-2xl"
    >
      Exploring opportunities at the intersection of
      <span className="text-violet-400"> technology </span>
      and
      <span className="text-amber-400"> finance </span>
      <br /> to drive innovation and create
      <span className="text-teal-400"> meaningful </span>
      impact.
    </motion.p>
  );
};
