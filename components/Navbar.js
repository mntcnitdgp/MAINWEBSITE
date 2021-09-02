import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Nav.module.css";
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
  useAnimation,
} from "framer-motion";
import SideBar from "./SideBar";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const animation = useAnimation();
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const [clicked, setClicked] = useState(false);
  const page = router.pathname;
  useEffect(() => {
    yRange.onChange((v) => {
      clicked
        ? animation.start({ backgroundColor: "hsla(270, 6%, 7%, 0)" })
        : v
        ? animation.start({ backgroundColor: "hsla(270, 6%, 7%, 1)" })
        : animation.start({ backgroundColor: "hsla(270, 6%, 7%, 0)" });
    });
  }, [yRange, clicked]);

  return (
    <>
      <motion.div
        className={styles.TopBar}
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <motion.div
          className={`container ${styles.TopBarContainer}`}
          initial={{ backgroundColor: "hsla(270, 6%, 7%, 0)" }}
          animate={animation}
        >
          <div className={styles.TopBarLogo}>
            <Link href="/">
              <motion.svg
                width="100"
                height="33"
                viewBox="0 0 413 136"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{
                  fill: !clicked
                    ? "var(--text-lighter-color)"
                    : "var(--text-light-color)",
                }}
                transition={{ delay: 0.2 }}
              >
                <path d="M365.86 0C367.33 0.15 368.79 0.31 370.26 0.45C382.515 1.44208 394.248 5.84486 404.13 13.16C407 15.3 409.67 17.72 412.68 20.21L385.23 47.56C384.42 46.8 383.74 46.19 383.09 45.56C378.918 41.4004 373.484 38.7416 367.64 38C356.42 36.49 346.76 39.61 339.26 48.37C335.572 52.6994 333.396 58.1127 333.06 63.79C332.62 69.54 333.06 75.23 335.26 80.63C339.08 89.88 346.03 95.52 355.78 97.39C360.49 98.4194 365.379 98.3057 370.036 97.0582C374.694 95.8108 378.985 93.466 382.55 90.22L383.47 89.45C383.47 89.4 383.61 89.38 383.59 89.38L410.88 116.61C406.668 120.55 402.002 123.974 396.98 126.81C389.538 130.906 381.4 133.585 372.98 134.71C360.563 136.633 347.861 135.349 336.08 130.98C324.348 126.518 314.093 118.872 306.47 108.9C298.849 99.2289 294.265 87.5153 293.3 75.24C292.3 63.24 293.62 51.64 298.43 40.53C299.03 39.15 299.7 37.81 300.38 36.33H287.53V132.33H248.91V37.83C248.91 36.26 248.91 36.26 247.38 36.26H235.84V132.26C235.489 132.312 235.135 132.346 234.78 132.36C223.38 132.36 211.98 132.36 200.58 132.36C200.094 132.387 199.609 132.288 199.173 132.073C198.737 131.857 198.364 131.532 198.09 131.13C184.803 114.07 171.497 97.0267 158.17 80C154.01 74.6667 149.847 69.3333 145.68 64L145 63.19V132.19H106.58V94.1L106.27 94C106.08 94.39 105.87 94.77 105.7 95.17C100.66 107.17 95.6366 119.17 90.6299 131.17C90.5169 131.583 90.2551 131.939 89.895 132.169C89.5349 132.4 89.102 132.49 88.6799 132.42C83.8799 132.36 79.0799 132.36 74.2799 132.42C73.8952 132.473 73.5047 132.38 73.1848 132.16C72.8648 131.94 72.6385 131.608 72.5499 131.23C66.1833 115.23 59.7899 99.2567 53.3699 83.31L49.1099 72.64C48.8999 72.14 48.6799 71.64 48.4599 71.15H48.1499C47.8299 73.24 47.4799 75.33 47.1499 77.43C45.9699 85.43 44.7966 93.4067 43.6299 101.36C42.5633 108.62 41.4866 115.883 40.3999 123.15C39.9899 125.95 39.5499 128.75 39.1799 131.56C39.0799 132.27 38.7299 132.38 38.1299 132.38C35.5299 132.38 32.9299 132.38 30.3299 132.38H0.689941C8.02327 89.0467 15.3566 45.7933 22.6899 2.62H23.9999C35.3199 2.62 46.6399 2.62 57.9999 2.62C58.3684 2.58636 58.7365 2.68738 59.0362 2.90433C59.3359 3.12128 59.5468 3.43948 59.6299 3.8C66.0233 20.76 72.4333 37.71 78.8599 54.65C79.8599 57.22 80.8599 59.78 81.9299 62.65C82.1899 62.08 82.3599 61.76 82.4899 61.43L103.73 8.53C104.42 6.82 105.11 5.12 105.73 3.41C105.781 3.15847 105.927 2.93618 106.137 2.78912C106.347 2.64207 106.606 2.58152 106.86 2.62C118.73 2.62 130.61 2.62 142.49 2.62C142.751 2.65307 143.002 2.73721 143.231 2.86762C143.459 2.99803 143.659 3.17214 143.82 3.38C150.727 12.18 157.623 20.9933 164.51 29.82L196.34 70.54C196.586 70.8867 196.936 71.1459 197.34 71.28V2.71H313.87V18.71C315.77 17.13 317.45 15.66 319.21 14.3C328.533 7.06702 339.618 2.45481 351.32 0.94C353.77 0.61 356.24 0.45 358.7 0.2C359.011 0.153533 359.318 0.0867226 359.62 0L365.86 0ZM281 125.88V29.75H307.36V9.2H203.83V90.56C203.41 90.04 203.15 89.75 202.91 89.45C197.45 82.45 191.987 75.45 186.52 68.45L161.63 36.63C154.717 27.7767 147.81 18.92 140.91 10.06C140.696 9.72978 140.398 9.46283 140.046 9.28696C139.695 9.11108 139.302 9.03271 138.91 9.06C129.79 9.06 120.67 9.06 111.55 9.06C111.201 9.00698 110.845 9.09074 110.556 9.29381C110.267 9.49689 110.068 9.8036 110 10.15C108.91 13.06 107.71 15.94 106.56 18.83L84.9999 72.62L81.8299 80.47C81.6199 79.98 81.4899 79.7 81.3799 79.4C72.6199 56.34 63.8733 33.2733 55.1399 10.2C55.0764 9.8597 54.8864 9.55606 54.6081 9.35014C54.3299 9.14421 53.984 9.05127 53.6399 9.09C45.4799 9.14 37.3199 9.09 29.1599 9.09C28.8099 9.09 28.4599 9.14 28.0799 9.17C21.4933 48.1033 14.9099 87.0067 8.32994 125.88H33.4899C37.4299 99.32 41.3499 72.88 45.3299 45.99C45.6399 46.69 45.7999 46.99 45.9399 47.4C51.6199 61.5533 57.2866 75.7067 62.9399 89.86C67.6066 101.5 72.2733 113.14 76.9399 124.78C77.0176 125.161 77.2381 125.497 77.5561 125.72C77.8741 125.943 78.2655 126.036 78.6499 125.98C80.7299 125.88 82.8099 125.92 84.8899 125.98C85.1831 126.016 85.4791 125.943 85.7223 125.775C85.9654 125.607 86.1389 125.357 86.2099 125.07C93.7299 107.07 101.267 89.07 108.82 71.07L112.73 61.74H112.96V63C112.96 83.52 112.96 104.04 112.96 124.56C112.96 125.67 113.27 125.96 114.37 125.96C121.93 125.96 129.49 125.9 137.05 125.96C138.31 125.96 138.56 125.6 138.56 124.41C138.52 98.25 138.52 72.09 138.56 45.93V44.43C138.88 44.81 139.01 44.95 139.12 45.1C142.173 49.0067 145.22 52.9167 148.26 56.83C166 79.61 183.75 102.36 201.51 125.08C201.704 125.372 201.972 125.608 202.286 125.765C202.6 125.921 202.95 125.992 203.3 125.97C211.54 125.97 219.78 125.97 228.02 125.97C228.41 125.97 228.8 125.97 229.32 125.91V29.83H255.32V125.88H281ZM383.08 98L382.68 98.26C375.051 103.394 365.77 105.471 356.68 104.08C344.68 102.39 335.68 96.18 330.21 85.22C326.69 78.12 325.92 70.49 326.66 62.67C327.408 53.9578 331.549 45.8882 338.19 40.2C343.657 35.5043 350.361 32.4813 357.5 31.4919C364.639 30.5025 371.911 31.5884 378.45 34.62C380.7 35.7 382.81 37.08 384.88 38.26L402.82 20.35C402.601 20.1176 402.364 19.9035 402.11 19.71C399.04 17.71 396.11 15.44 392.87 13.71C380.54 7.15 367.35 5.44 353.59 7.13C344.949 8.11744 336.614 10.9185 329.13 15.35C321.922 19.64 315.651 25.3364 310.69 32.1C304.477 40.5498 300.715 50.5501 299.82 61C298.96 70.05 299.41 79 302.43 87.64C309.13 106.74 322.36 119.41 341.43 125.92C350.271 128.824 359.639 129.763 368.88 128.67C376.977 127.996 384.865 125.747 392.1 122.05C395.33 120.35 398.38 118.29 401.55 116.36L383.08 98Z" />
              </motion.svg>
            </Link>
          </div>

          <div
            className={styles.TopBarMenu}
            onClick={() => {
              setClicked((clicked) => !clicked);
              if (!clicked) {
                animation.start({ backgroundColor: "hsla(0, 0%, 5%, 0)" });
              }
            }}
          >
            <HamBurger clicked={clicked} />
          </div>

          <div className={styles.TopBarLinks}>
            <Link href="/">
              <a
                className={
                  page === "/"
                    ? `${styles.NavLinks} ${styles.NavLinksActive}`
                    : `${styles.NavLinks}`
                }
              >
                Home
              </a>
            </Link>

            <Link href="/about">
              <a
                className={
                  page === "/about"
                    ? `${styles.NavLinks} ${styles.NavLinksActive}`
                    : `${styles.NavLinks}`
                }
              >
                About Us
              </a>
            </Link>

            <Link href="/anveshan">
              <a
                className={
                  page === "/anveshan"
                    ? `${styles.NavLinks} ${styles.NavLinksActive}`
                    : `${styles.NavLinks}`
                }
              >
                Anveshan
              </a>
            </Link>

            <Link href="/events">
              <a
                className={
                  page === "/events"
                    ? `${styles.NavLinks} ${styles.NavLinksActive}`
                    : `${styles.NavLinks}`
                }
              >
                Events
              </a>
            </Link>

            <Link href="/team">
              <a
                className={
                  page === "/team"
                    ? `${styles.NavLinks} ${styles.NavLinksActive}`
                    : `${styles.NavLinks}`
                }
              >
                Our Team
              </a>
            </Link>
          </div>

          <div className={styles.TopBarSpacer}></div>
        </motion.div>
      </motion.div>
      <SideBar clicked={clicked} setClicked={setClicked} />
    </>
  );

  function HamBurger({ clicked }) {
    const variantBurger1 = {
      no: { y: 0, rotate: 0, background: "var(--text-lighter-color)" },
      yes: { y: 9, rotate: 45, background: "var(--text-light-color)" },
    };

    const variantBurger2 = {
      no: { y: 7, x: 0, scale: 1, background: "var(--text-lighter-color)" },
      yes: { y: 7, x: -10, scale: 0, background: "var(--text-light-color)" },
    };

    const variantBurger3 = {
      no: { y: 14, rotate: 0, background: "var(--text-lighter-color)" },
      yes: { y: 5, rotate: -45, background: "var(--text-light-color)" },
    };
    return (
      <motion.div className={styles.HamBurgerIcon}>
        <motion.div
          className={`${styles.HamBurger} ${styles.HamBurger1}`}
          animate={clicked ? "yes" : "no"}
          initial="no"
          variants={variantBurger1}
        />
        <motion.div
          className={`${styles.HamBurger} ${styles.HamBurger2}`}
          animate={clicked ? "yes" : "no"}
          initial="no"
          variants={variantBurger2}
        />
        <motion.div
          className={`${styles.HamBurger} ${styles.HamBurger3}`}
          variants={variantBurger3}
          initial="no"
          animate={clicked ? "yes" : "no"}
        />
      </motion.div>
    );
  }
};

export default Navbar;
