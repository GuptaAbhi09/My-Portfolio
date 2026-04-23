"use client";

import { motion } from "framer-motion";
import styles from "./Section.module.css";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  eyebrow?: string;
}

const Section = ({ children, id, className, title, eyebrow }: SectionProps) => {
  const hasHeader = title || eyebrow;

  return (
    <section id={id} className={`${styles.section} ${className || ""}`}>
      <div className={styles.container}>
        {/* Conditional Header Rendering */}
        {hasHeader && (
          <div className="section-header" style={{ marginBottom: "48px" }}>
            {eyebrow && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#38bdf8",
                  background: "rgba(56,189,248,0.08)",
                  border: "1px solid rgba(56,189,248,0.18)",
                  borderRadius: "6px",
                  padding: "5px 12px",
                  marginBottom: "16px",
                }}
              >
                {eyebrow}
              </div>
            )}

            {title && (
              <h2
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: "700",
                  color: "#ffffff",
                  letterSpacing: "-0.03em",
                  lineHeight: "1.1",
                  margin: "0",
                }}
              >
                {title}
              </h2>
            )}
          </div>
        )}

        {/* Content with standardized animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
