"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">HDFC Bank</Link>
      </div>
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <ul className={isOpen ? styles.navMenuOpen : styles.navMenu}>
        <li className={styles.mobileOnly}>
          <Link href="/accounts">Accounts</Link>
        </li>
        <li className={styles.mobileOnly}>
          <Link href="/creditcards">Credit Cards</Link>
        </li>
        <li className={styles.mobileOnly}>
          <Link href="/investments">Investments</Link>
        </li>
        <li className={styles.mobileOnly}>
          <Link href="/loans">Loans</Link>
        </li>
        <li>
          <Link href="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
