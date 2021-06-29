import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className={styles.container}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            duration: 0.6,
            when: "beforeChildren",
          },
        },
      }}
      exit={{ x: -400 }}
    >
      <Head>
        <title>MNTC | NIT Durgapur</title>
        <meta name="description" content="Blah Blah Blah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`container ${styles.Home}`}>
        <div className={styles.HomeHeroContainer}>
          <motion.h1
            className={styles.HeroHeader}
            initial={{
              y: -100,
            }}
            animate={{
              y: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "backInOut",
            }}
          >
            Maths N Tech Club
            <motion.div
              className={styles.HeroHeaderSlide}
              initial={{
                width: 0,
              }}
              animate={{
                width: "auto",
              }}
              transition={{
                delay: 0.3,
                ease: "backInOut",
              }}
            ></motion.div>
          </motion.h1>
        </div>

        <div className={styles.HomeCard}>
          <h2 className={styles.HomeCardHead}>Who Are We?</h2>
          <p className={styles.HomeCardInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            volutpat mauris id nisi, ridiculus in lacus sit. Venenatis curabitur
            massa pulvinar consequat elit. Id sit blandit nunc nullam quis.
            Nascetur mi tempor faucibus mollis dolor ipsum purus dolor.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
