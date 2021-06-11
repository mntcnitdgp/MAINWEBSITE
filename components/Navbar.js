import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Nav.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <div className={styles.Nav}>
            <div className={styles.NavContainer}>

                <div className={styles.NavLogo}>
                    <h2>MNTC</h2>
                </div>

                <div className={styles.menu_icon} onClick={() => setClicked(!clicked)} >
                    {
                        !clicked ?
                            <MenuIcon /> : <CloseIcon style={{ color: "black" }} />

                    }

                </div>

                <ul className={clicked ? styles.NavMenu + " " + styles.active : styles.NavMenu}>
                    <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
                        <Link className={styles.NavLinks} href='/'>
                            <a>Home</a>
                        </Link>
                    </li>

                    <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
                        <Link className={styles.NavLinks} href='/about'>
                            <a>About</a>
                        </Link>
                    </li>

                    <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
                        <Link className={styles.NavLinks} href='/events'>
                            <a>Events</a>
                        </Link>
                    </li>

                    <li className={styles.NavItems} onClick={() => setClicked(!clicked)}>
                        <Link className={styles.NavLinks} href='/team'>
                            <a>Team</a>
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
