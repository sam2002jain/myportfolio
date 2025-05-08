"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <h1 className={styles.navLogo}>Sanyam Jain</h1>

        <div
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          {["Home", "About", "Projects", "Contact Me"].map((item) => (
            <li key={item} onClick={closeMenu}>
              <Link href={item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "")}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
