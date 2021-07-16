import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { events } from "../data/events/event";
import EventCard from "../components/EventCard";
import HomeSVG from "../components/HomeSVG";
import { reviews } from "../data/reviews";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const relativePath = "/images/svg/"; //Change this on deploy

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
          },
        },
      }}
      // exit={{ opacity: 0 }}
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
        <Reviews />
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <div className={styles.HomeHeroContainer}>
      <div className={styles.HeroHeaderContainer}>
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
          <span className="colored">Maths</span> N Tech Club
        </motion.h1>
      </div>

      <motion.div className={styles.HeroSide}>
        <Image
          src={`${relativePath}/maths.svg`}
          layout="fill"
          className={styles.HeroSideImage}
        />
      </motion.div>
    </div>
  );
}

function About() {
  return (
    <div className={styles.HomeAbout}>
      <div className={styles.HomeAboutContainer}>
        <h2 className={styles.HomeAboutHead}>Get to Know Us</h2>
        <p className={styles.HomeAboutInfo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
          volutpat mauris id nisi, ridiculus in lacus sit. Venenatis curabitur
          massa pulvinar consequat elit. Id sit blandit nunc nullam quis.
          Nascetur mi tempor faucibus mollis dolor ipsum purus dolor. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Porttitor volutpat
          mauris id nisi, ridiculus in lacus sit. Venenatis curabitur massa
          pulvinar consequat elit. Id sit blandit nunc nullam quis. Nascetur mi
          tempor faucibus mollis dolor ipsum purus dolor.
        </p>
        <Link href="/about">
          <a className={`text ${styles.HomeAboutLink}`}>
            Get to Know More {">"}
          </a>
        </Link>
      </div>

      <div className={styles.HomeAboutImage}>
        <Image src={`${relativePath}/about.svg`} layout="fill" />
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className={styles.HomeTeam}>
      <div className={styles.HomeAboutImage}>
        <Image src={`${relativePath}/team.svg`} layout="fill" />
      </div>

      <div className={styles.HomeTeamContainer}>
        <h2 className={styles.HomeTeamHead}>Meet Our Team</h2>
        <p className={styles.HomeTeamInfo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
          volutpat mauris id nisi, ridiculus in lacus sit. Venenatis curabitur
          massa pulvinar consequat elit. Id sit blandit nunc nullam quis.
          Nascetur mi tempor faucibus mollis dolor ipsum purus dolor. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Porttitor volutpat
          mauris id nisi, ridiculus in lacus sit. Venenatis curabitur massa
          pulvinar consequat elit. Id sit blandit nunc nullam quis. Nascetur mi
          tempor faucibus mollis dolor ipsum purus dolor.
        </p>
        <Link href="/team">
          <a className={`text ${styles.HomeAboutLink}`}>Meet Our Team {">"}</a>
        </Link>
      </div>
    </div>
  );
}

function Events() {
  return (
    <div className={styles.HomeEvents}>
      <div className={styles.HomeEventsContainer}>
        <h2 className={styles.HomeEventsHead}>Upcoming Event</h2>
        <EventCard details={events[0]} />
        <Link href="/events">
          <a className={`text ${styles.HomeAboutLink}`}>
            Check Out All Events {">"}
          </a>
        </Link>
      </div>

      <div className={styles.HomeAboutImage}>
        <Image src={`${relativePath}/about.svg`} layout="fill" />
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div className={styles.HomeReviews}>
      <h2 className={styles.HomeReviewsHead}>What Others Have to Say...</h2>
      <Carousel
        className={styles.ReviewsContainer}
        autoPlay={true}
        interval={8000}
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
      >
        {reviews.map((review) => {
          return (
            <div className={styles.Reviews}>
              <h3 className={styles.ReviewsContent}>{review.content}</h3>
              <p className={styles.ReviewsWriter}> - {review.writer}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
