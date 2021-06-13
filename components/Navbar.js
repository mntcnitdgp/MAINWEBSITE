import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Nav.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Image from "next/image";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={styles.Nav}>
      <div className={`container ${styles.NavContainer}`}>
        <div className={styles.NavLogo}>
          <img src="/images/logo.svg" alt="logo"></img>
        </div>

        <div className={styles.menu_icon} onClick={() => setClicked(!clicked)}>
          {!clicked ? <MenuIcon /> : <CloseIcon />}
        </div>

        <nav
          className={
            clicked ? `${styles.NavMenu} ${styles.active}` : styles.NavMenu
          }
        >
          <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
            <Link href="/">
              <a className={`color-header-text ${styles.NavLinks}`}>Home</a>
            </Link>
          </li>

          <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
            <Link href="/team">
              <a className={`color-header-text ${styles.NavLinks}`}>Our Team</a>
            </Link>
          </li>

          <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
            <Link href="/events">
              <a className={`color-header-text ${styles.NavLinks}`}>Events</a>
            </Link>
          </li>
          <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
            <Link href="/about">
              <a className={`color-header-text ${styles.NavLinks}`}>About Us</a>
            </Link>
          </li>
        </nav>
        <div style={{ flex: 0.5 }}></div>
      </div>
    </div>
  );
};

export default Navbar;
