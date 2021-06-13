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
            <div className={styles.NavContainer}>
                <div className={styles.NavLogo}>
                    <img src="/images/logo.svg" alt="logo"></img>
                </div>

                <div className={styles.menu_icon} onClick={() => setClicked(!clicked)}>
                    {!clicked ? <MenuIcon /> : <CloseIcon />}
                </div>

                <nav
                    className={
                        clicked
                            ? `${styles.NavMenu} ${styles.active}`
                            : styles.NavMenu
                    }
                >
                    <div className={styles.NavLinks}>
                        <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
                            <Link href="/">
                                <a className={`color-header-text ${styles.NavLinks}`}>Home</a>
                            </Link>
                        </li>
                    </div>
                    <div className={styles.NavLinks}>
                        <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
                            <Link href="/about">
                                <a className={`color-header-text ${styles.NavLinks}`}>About</a>
                            </Link>
                        </li>
                    </div>
                    <div className={styles.NavLinks}>
                        <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
                            <Link href="/team">
                                <a className={`color-header-text ${styles.NavLinks}`}>Team</a>
                            </Link>
                        </li>
                    </div>
                    <div className={styles.NavLinks}>
                        <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
                            <Link href="/events">
                                <a className={`color-header-text ${styles.NavLinks}`}>Events</a>
                            </Link>
                        </li>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
