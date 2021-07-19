import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function SideBar({ clicked, setClicked, page, setPage }) {
  const router = useRouter();
  page = router.pathname;

  const variantSideBar = {
    initial: { x: 2000 },
    final: { x: 0 },
  };
  const variantLinks = {
    initial: { opacity: 0 },
    final: { opacity: 1, transition: { delay: 0.4, when: "beforeChildren" } },
  };
  return (
    <AnimatePresence>
      {clicked && (
        <motion.nav
          className={styles.NavMenu}
          variants={variantSideBar}
          initial="initial"
          animate="final"
          exit="initial"
          transition={{ duration: 0.4 }}
        >
          <div className={`${styles.NavMenuContainer} container`}>
            <motion.li
              variants={variantLinks}
              initial="initial"
              animate={clicked ? "final" : "initial"}
              className={styles.NavItems}
            >
              <Link href="/">
                <h2 className={styles.NavLinks}>Home</h2>
              </Link>
            </motion.li>

            <motion.li
              variants={variantLinks}
              initial="initial"
              animate={clicked ? "final" : "initial"}
              className={styles.NavItems}
              onClick={() => {
                setClicked(!clicked);
              }}
            >
              <Link href="/team">
                <h2 className={styles.NavLinks}>Our Team</h2>
              </Link>
            </motion.li>

            <motion.li
              variants={variantLinks}
              initial="initial"
              animate={clicked ? "final" : "initial"}
              className={styles.NavItems}
              onClick={() => {
                setClicked(!clicked);
              }}
            >
              <Link href="/events">
                <h2 className={styles.NavLinks}>Events</h2>
              </Link>
            </motion.li>

            <motion.li
              variants={variantLinks}
              initial="initial"
              animate={clicked ? "final" : "initial"}
              className={styles.NavItems}
              onClick={() => {
                setClicked(!clicked);
              }}
            >
              <Link href="/about">
                <h2 className={styles.NavLinks}>About Us</h2>
              </Link>
            </motion.li>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default SideBar;
