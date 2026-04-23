"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Wait, I should use lucide-react as per earlier
import styles from "./Navbar.module.css";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoWrapper}>
          <Logo />
        </Link>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className={activeSection === link.href.slice(1) ? styles.active : ""}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Trigger */}
        <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className={styles.mobileNav}>
          <ul className={styles.mobileList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={activeSection === link.href.slice(1) ? styles.active : ""}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
