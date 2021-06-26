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
            <div className={styles.TopBar}>
                <div className={`container ${styles.TopBarContainer}`}>
                    <div className={styles.TopBarLogo}>
                        <svg
                            className={styles.FooterInfoIcon}
                            width="100"
                            height="32.79"
                            viewBox="0 0 290 96"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="hsla(100,100%,100%,0.75)"
                        >
                            <path d="M210.72 26.4801H202.17V93.4801H175.08V26.4801H166.2V93.7601C157.55 93.7601 149.45 93.9501 141.37 93.5901C139.88 93.5201 138.26 91.3801 137.09 89.9001C125.65 75.4101 114.3 60.8501 102.32 45.5501V93.3701H75.2602V68.2601L74.2102 68.0001C71.1202 75.3601 67.6802 82.5901 65.0502 90.1101C63.2302 95.3201 59.3602 93.3601 56.0502 93.7901C52.9302 94.2001 51.0502 93.4101 49.7702 89.9901C44.9802 77.2901 39.7702 64.7601 33.7702 52.1201C32.8702 57.5401 31.9102 62.9501 31.1002 68.3901C29.9902 75.7801 28.29 85.14 27 92.5C26.79 93.71 25.7602 93.5801 24.6202 93.6401C16.8202 93.9101 9.0102 93.7801 0.450195 93.7801C5.6602 63.2201 10.7502 33.1701 15.8602 3.00011H41.6902C46.8202 16.4201 52.0502 30.0901 57.6902 44.7501C62.0002 33.8601 66.0602 23.9101 70.0702 14.0001C74.5902 2.74012 74.6402 3.45011 86.7202 2.53011C96.8502 1.75011 103.54 4.60011 109.42 13.2801C118.14 26.1401 128.42 37.9401 138.82 51.1501V3.07011H221V13.1401C247.52 -3.73988 274 -2.85988 289.33 14.6901L270.66 33.4401C259.54 25.0001 248 25.0001 239.6 33.6801C232.6 40.9501 232.16 54.1501 238.66 62.1301C246.1 71.2401 257.27 71.8801 269.66 64.0701L288.28 82.8801C275.28 97.1301 248.28 100.31 229.41 89.2901C208 76.8601 201.63 55.4601 210.72 26.4801ZM198 88.7901V21.5701H215.69V7.50011H143.19V63.8001C141.38 61.6701 140.3 60.5001 139.32 59.2501C128.85 45.8901 117.59 33.0601 108.2 19.0001C101.6 9.10011 93.9302 5.50012 82.6102 6.90012C78.9702 7.35012 77.1602 8.16012 75.8102 11.6501C70.0002 26.6301 63.8702 41.4901 57.5502 57.1701C52.5502 44.1701 47.9202 32.0501 43.2502 19.8901C38.2502 6.89011 38.2502 7.05011 24.3002 6.99011C20.7402 6.99011 19.4702 7.99012 18.9102 11.5901C16.2402 28.4801 13.2402 45.3301 10.3802 62.1901C8.9002 71.0001 7.4702 79.7401 6.0002 88.5701H23.6002C26.3302 70.4001 29.0002 52.6801 31.6402 35.0001C39.4802 52.0001 46.2202 68.8901 53.1802 85.7301C53.7602 87.1401 55.8502 88.9001 57.1802 88.8101C58.122 88.6776 59.0212 88.3323 59.8096 87.8004C60.598 87.2684 61.2548 86.5638 61.7302 85.7401C66.0102 76.2201 69.9302 66.5201 73.9702 56.8901C75.4502 53.2201 77.0002 49.6201 78.5502 46.0001L79.5502 46.2701V88.7301H97.3802V32.3201C99.1702 34.3801 100.19 35.4601 101.1 36.6201C113.7 52.7401 126.334 68.8668 139 85.0001C140.19 86.5101 141.75 88.6901 143.27 88.8001C149.15 89.2501 155.08 88.9901 161.49 88.9901V22.0801H179.86V88.7901H198ZM283 15.2701C270.22 2.46012 238.9 0.740114 221.79 19.2701C206.87 35.4301 206.79 61.9801 222.43 78.0501C237.93 94.0001 266.87 96.0001 281.81 82.1801L269.65 69.8701C254.81 76.6001 242.21 74.6901 234.83 64.6901C227.56 54.8601 227.89 40.1801 235.56 31.3801C244.21 21.4601 257.11 20.0201 270.65 27.3801L283 15.2701Z" />
                        </svg>
                    </div>

                    <div
                        className={styles.TopBarMenu}
                        onClick={() => setClicked(!clicked)}
                    >
                        {!clicked ? (
                            <MenuIcon style={{ fontSize: 30 }} />
                        ) : (
                            <CloseIcon style={{ fontSize: 30 }} />
                        )}
                    </div>

                    <div className={styles.TopBarLinks}>
                        <div className={styles.NavLinks}>
                            <Link href="/">Home</Link>
                        </div>

                        <div className={styles.NavLinks}>
                            <Link href="/about">About Us</Link>
                        </div>

                        <div className={styles.NavLinks}>
                            <Link href="/team">Our Team</Link>
                        </div>

                        <div className={styles.NavLinks}>
                            <Link href="/events">Events</Link>
                        </div>
                    </div>
                </div>
            </div>

            <nav
                className={
                    clicked ? `${styles.NavMenu} ${styles.NavMenuActive}` : styles.NavMenu
                }
            >
                <div className={`${styles.NavMenuContainer} container`}>
                    <Link href="/">
                        <div className={styles.NavLinks}>
                            <li
                                className={styles.NavItems}
                                onClick={() => setClicked(!clicked)}
                            >
                                Home
              </li>
                        </div>
                    </Link>

                    <Link href="/about">
                        <div className={styles.NavLinks}>
                            <li
                                className={styles.NavItems}
                                onClick={() => setClicked(!clicked)}
                            >
                                About Us
              </li>
                        </div>
                    </Link>

                    <Link href="/team">
                        <div className={styles.NavLinks}>
                            <li
                                className={styles.NavItems}
                                onClick={() => setClicked(!clicked)}
                            >
                                Our Team
              </li>
                        </div>
                    </Link>

                    <Link href="/events">
                        <div className={styles.NavLinks}>
                            <li
                                className={styles.NavItems}
                                onClick={() => setClicked(!clicked)}
                            >
                                Events
              </li>
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
