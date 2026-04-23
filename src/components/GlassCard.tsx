"use client";

import { motion, Variants } from "framer-motion";
import styles from "./GlassCard.module.css";
import { CSSProperties } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const GlassCard = ({ children, className, style }: GlassCardProps) => {
  return (
    <motion.div 
      className={`${styles.card} ${className || ""}`}
      variants={itemVariants}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
