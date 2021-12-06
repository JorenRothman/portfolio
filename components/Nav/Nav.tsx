import styles from "./nav.module.css";
import { useState } from "react";

function Nav() {
  return (
    <nav className={styles.nav}>
      <a className={styles.navLink} href="#">
        Top
      </a>
      <a className={styles.navLink} href="#">
        Work
      </a>
      <a className={styles.navLink} href="#">
        Contact
      </a>
    </nav>
  );
}

export default Nav;
