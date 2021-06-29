import Head from "next/head";
// import EventCard from "../../components/EventCard";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { events } from "../../data/events/event";
import styles from "../../styles/events.module.css";

export default function Events() {
  const router = useRouter();
  const { id, index } = router.query;
  //use the index keyword to index data from events.js json file
  //   let event = events[0];
  const event = events[index - 1];
  return (
    <motion.div
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
        <title>MNTC | Events</title>
        <meta name="description" content="Blah Blah Blah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {event && (
        <div className={`container ${styles.eventContainer}`}>
          <Image src={event.image} width="200" height="200"></Image>
          <h2 className={styles.header}>{event.name}</h2>
          <p>{event.desc}</p>
          {event.startDate == event.endDate ? (
            <p>{event.startDate}</p>
          ) : (
            <p>{`${event.startDate} - ${event.endDate}`}</p>
          )}

          {event.link && <a href={event.link}>Go to event</a>}
        </div>
      )}
    </motion.div>
  );
}
