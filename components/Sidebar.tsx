"use client";
import { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.hamburger1} onClick={toggleSidebar}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <Link href="#">Accounts</Link>
          </li>
          <li>
            <Link href="#">Credit Cards</Link>
          </li>
          <li>
            <Link href="#">Investments</Link>
          </li>
          <li>
            <Link href="#">Loans</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
