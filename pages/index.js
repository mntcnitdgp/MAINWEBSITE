import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { events } from "../data/events/event";
import EventCard from "../components/EventCard";
import { reviews } from "../data/reviews";

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
        <Hero />
        <About />
        <Team />
        <Events />
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
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
  );
}

function About() {
  return (
    <div className={styles.HomeAbout}>
      <h2 className={styles.HomeAboutHead}>Get to Know Us</h2>
      <p className={styles.HomeAboutInfo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
        volutpat mauris id nisi, ridiculus in lacus sit. Venenatis curabitur
        massa pulvinar consequat elit. Id sit blandit nunc nullam quis. Nascetur
        mi tempor faucibus mollis dolor ipsum purus dolor. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Porttitor volutpat mauris id nisi,
        ridiculus in lacus sit. Venenatis curabitur massa pulvinar consequat
        elit. Id sit blandit nunc nullam quis. Nascetur mi tempor faucibus
        mollis dolor ipsum purus dolor.
      </p>
      <Link href="/about">
        <a className={`solid ${styles.HomeTeamLink}`}>Get to Know More {">"}</a>
      </Link>
    </div>
  );
}

function Team() {
  return (
    <div className={styles.HomeTeam}>
      <h2 className={styles.HomeTeamHead}>Meet Our Team</h2>
      <p className={styles.HomeTeamInfo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
        volutpat mauris id nisi, ridiculus in lacus sit. Venenatis curabitur
        massa pulvinar consequat elit. Id sit blandit nunc nullam quis. Nascetur
        mi tempor faucibus mollis dolor ipsum purus dolor. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Porttitor volutpat mauris id nisi,
        ridiculus in lacus sit. Venenatis curabitur massa pulvinar consequat
        elit. Id sit blandit nunc nullam quis. Nascetur mi tempor faucibus
        mollis dolor ipsum purus dolor.
      </p>
      <Link href="/team">
        <a className={`solid ${styles.HomeAboutLink}`}>Meet Our Team {">"}</a>
      </Link>
    </div>
  );
}

function Events() {
  return (
    <div className={styles.HomeAbout}>
      <h2 className={styles.HomeAboutHead}>Upcoming Event</h2>
      <EventCard details={events[0]} />
    </div>
  );
}

function Reviews() {
  return (
    <div className={styles.HomeReviews}>
      <h2 className={styles.HomeReviewsHead}>What Others Have to Say</h2>
      <div className={styles.ReviewsContainer}>
        <div className={styles.Reviews}></div>
      </div>
    </div>
  );
}
