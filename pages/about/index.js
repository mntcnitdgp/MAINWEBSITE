import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../../styles/About.module.css";
import Image from "next/image";

export default function About() {
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
        <title>MNTC | About Us</title>
        <meta
          name="description"
          content="Maths N Tech Club, NIT Durgapur. We are the official knowledge club of National Institute of Technology, Durgapur."
        />
        <meta http-equiv="content-language" content="en" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className={`container ${styles.About}`}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${styles.AboutHeader} secondary`}
        >
          About Us
        </motion.h1>

        <div className={styles.AboutInfo}>
          <div className={styles.AboutInfoPara}>
            <p className={styles.AboutInfoPara1}>
              We, Maths N Tech Club are the official knowledge club of National
              Institute of Technology, Durgapur. Back in 2004, when the Regional
              Engineering College Durgapur got the status of an Institute of
              National Importance and was renamed as the National Institute of
              Technology Durgapur, Maths N Tech Club was formed.
            </p>
            <p>
              Our club was set up with the aim of creating a platform that helps
              in stimulating passion for mathematics and interest in the
              technology of today’s world. At Maths N Tech Club, we understand
              the importance of analytical reasoning and rational thinking.
              Hence, we organise a plethora of events throughout the year that
              aims at reinvigorating the seemingly dormant passion for
              mathematics and the thirst for knowledge about today’s technology.
            </p>
            <p>
              It is our continuous goal to try our best to deliver knowledge
              about recent technical enhancements through the various workshops
              that we conduct around the year. Our attempts also aim to kindle
              analytical reasoning and logical aptitude in the brain though
              various fun events and experiences.
            </p>
          </div>

          <div className={styles.AboutInfoSide}>
            <img
              src="/images/about.jpg"
              className={styles.AboutInfoImage}
              alt="About Us Illustration"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
