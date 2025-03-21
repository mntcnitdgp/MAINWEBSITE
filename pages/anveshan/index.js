import Head from "next/head";
import styles from "../../styles/Anveshan.module.css";
import img from "next/image";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Anveshan = () => {
  useEffect(() => {
    window.innerWidth < 900
      ? window.scrollBy({ top: 50 })
      : window.scrollBy({});
  }, []);

  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
          y: -200,
        },
        pageAnimate: {
          opacity: 1,
          y: 0,
        },
      }}
    >
      <Head>
        <title>MNTC | Anveshan 2021</title>
        <meta
          name="description"
          content="Anveshan 2021-Maths N Tech Club, NIT Durgapur. The official Tech Magazine of NIT Durgapur"
        />
      </Head>

      <div className={`container ${styles.AnveshanContainer}`}>
        <div className={styles.AnweshanMobilePoster}>
          <img src="/images/Anveshan_25.jpg" />
        </div>
        <div className={styles.AnveshanMain}>
          <div className={styles.AnveshanMainSubContainer}>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`${styles.AnveshanHeader} secondary`}
            >
              Anveshan 2025
            </motion.h1>

            <h3 className={styles.AnveshanSubHeader}>
              The Official Tech Magazine of MNTC, NIT Durgapur
            </h3>
            <div className={styles.AnveshanDetails}>
              We are stoked to present to you the newest edition of Anveshan –
              the official tech magazine of Maths N Tech Club, NIT Durgapur.
              Feeling tired of assignments and regular 9-6 classes? Replete with
              technical articles that are sure to blow up your mind, innovations
              of your contemporaries that would make you feel proud, and puzzles
              that would require your analytical skills at their peak to solve
              them, Anveshan is definitely the ideal magazine to provide a
              reprieve to you from your monotonous lifestyle.
            </div>

            <a
              className={`${styles.AnveshanDownloadBtn} solid`}
              href="./Anveshan_25.pdf"
            >
              Download it now!
            </a>
          </div>
        </div>

        <div className={styles.AnveshanSide}>
          <img src="/images/Anveshan_25.jpg" className={styles.Image} />
        </div>
      </div>
    </motion.div>
  );
};

export default Anveshan;
