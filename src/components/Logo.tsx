"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <Image 
        src="/logo.png" 
        alt="Abhishek Gupta" 
        width={180} 
        height={60}
        priority
        style={{ 
          width: "auto",
          height: "60px",
          objectFit: "contain"
        }}
      />
    </div>
  );
};

export default Logo;
