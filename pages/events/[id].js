import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { events } from "../../data/events/event";
import styles from "../../styles/events.module.css";

export default function Events() {
  const router = useRouter();
  const { id, index } = router.query;

  const event = events[index - 1];

  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
          y: 300,
        },
        pageAnimate: {
          opacity: 1,
          y: 0,
        },
      }}
    >
      {event && (
        <AnimatePresence>
          <Head>
            <title>MNTC | {event.name}</title>
            <meta name="description" content="Blah Blah Blah" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div className={`container ${styles.EventFullContainer}`}>
            <Link href="/events">
              <h2 className={styles.EventFullHeader}>
                <ArrowLeft />
                {event.name}
              </h2>
            </Link>

            <div className={styles.EventContainer}>
              <div className={styles.EventFullPosterContainer}>
                <Image src={event.image} layout="fill" />
              </div>

              <div className={styles.EventDetails}>
                {event.startDate == event.endDate ? (
                  <p className={styles.EventFullDate}>{event.startDate}</p>
                ) : (
                  <p
                    className={styles.EventFullDate}
                  >{`${event.startDate} - ${event.endDate}`}</p>
                )}
                <p className={styles.EventFullDesc}>{event.desc}</p>

                {event.link && (
                  <a
                    href={event.link}
                    className={`solid ${styles.EventFullLink}`}
                  >
                    Go to event
                  </a>
                )}
              </div>
            </div>
          </div>
        </AnimatePresence>
      )}
    </motion.div>
  );
}

function ArrowLeft() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.ArrowLeft}
    >
      <path
        d="M12 19L5 12L12 5"
        stroke="#FBF5F4"
        stroke-width="3"
        stroke-linecap="square"
        stroke-linejoin="square"
      />
    </svg>
  );
}
