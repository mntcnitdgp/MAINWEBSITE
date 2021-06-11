import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Nav.module.css'

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className={styles.Nav}>
            <div className={styles.NavContainer}>

                <div className={styles.menu_icon} onClick={() => setClicked(!clicked)} >
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    <p>MENU</p>
                </div>

                <ul className={clicked ? styles.NavMenu + " " + styles.active : styles.NavMenu}>
                    <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
                        <Link className={styles.NavLinks} href='/'>
                            Home
                        </Link>
                    </li>

                    <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
                        <Link className={styles.NavLinks} href='/about'>
                            About
                        </Link>
                    </li>

                    <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
                        <Link className={styles.NavLinks} href='/events'>
                            Events
                        </Link>
                    </li>

                    <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
                        <Link className={styles.NavLinks} href='/team'>
                            Team
                        </Link>
                    </li>

                    <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
                        <Link className={styles.NavLinks} href='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Navbar;
