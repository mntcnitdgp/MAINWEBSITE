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
      <div className={"container" + " " + styles.NavContainer}>
        <div className={styles.NavLogo}>
          <img src="/images/logo.svg" alt="logo"></img>
        </div>

        <div className={styles.menu_icon} onClick={() => setClicked(!clicked)}>
          {!clicked ? <MenuIcon /> : <CloseIcon />}
        </div>

        <nav
          className={
            clicked
              ? `${styles.NavMenu} ${styles.active} bg-card-light`
              : styles.NavMenu
          }
        >
          <NavLinks name="Home" />
          <NavLinks name="Our Team" />
          <NavLinks name="Events" />
          <NavLinks name="Contact Us" />
        </nav>
        <div style={{ flex: 0.5 }}></div>
      </div>
    </div>
  );
};

const NavLinks = ({ name }) => {
  return (
    <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
      <Link href="/">
        <a className={`color-header-text ${styles.NavLinks}`}>{name}</a>
      </Link>
    </li>
  );
};
export default Navbar;
