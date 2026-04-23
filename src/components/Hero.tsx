"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.statusBadge}
          >
            <span className={styles.pulseDot}></span>
            Available for Full Stack / SDE Roles
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={styles.title}
          >
            Abhishek<br />
            <span className={styles.gradientText}>Gupta.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={styles.subtitle}
          >
            Full Stack Developer crafting production-ready web & mobile apps with Next.js, TypeScript & Supabase. 420+ DSA problems solved. Oracle OCI Certified.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={styles.ctaRow}
          >
            <a href="#projects" className={styles.primaryBtn}>View Projects</a>
            <a href="#contact" className={styles.secondaryBtn}>Contact Me</a>
          </motion.div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.decorativeOrbs}>
            <div className={styles.outerOrb}>
              <div className={styles.dot1}></div>
              <div className={styles.dot2}></div>
              <div className={styles.dot3}></div>
              <div className={styles.dot4}></div>
              <div className={styles.innerOrb}>
                <div className={styles.orbText}>
                  <span className={styles.orbMono}>Full Stack</span>
                  <span className={styles.orbHeading}>Developer</span>
                  <div className={styles.orbDivider}></div>
                  <span className={styles.orbAccent}>Next.js · Supabase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
