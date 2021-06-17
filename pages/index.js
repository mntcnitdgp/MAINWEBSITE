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
            duration: 1,
          },
        },
      }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>MNTC | NIT Durgapur</title>
        <meta name="description" content="Blah Blah Blah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome</h1>
    </motion.div>
  );
}
