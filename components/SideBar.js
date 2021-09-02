import Link from "next/link";
import Image from "next/image";
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
              onClick={() => {
                setClicked(!clicked);
              }}
            >
              <Link href="/">
                <h2 className={`${styles.NavLinks} secondary`}>Home</h2>
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
                <h2 className={`${styles.NavLinks} secondary`}>About Us</h2>
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
              <Link href="/anveshan">
                <h2 className={`${styles.NavLinks} secondary`}>Anveshan</h2>
              </Link>
            </motion.li>
          </div>

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
              <h2 className={`${styles.NavLinks} secondary`}>Events</h2>
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
              <h2 className={`${styles.NavLinks} secondary`}>Our Team</h2>
            </Link>
          </motion.li>

          <div className={styles.NitdgpLogo}>
            <Image
              src="/images/nitdgp.png"
              width="70"
              height="70"
              quality="15"
              alt="NIT Durgapur Logo"
            />
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

export default SideBar;
