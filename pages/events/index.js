import Head from "next/head";
import EventCard from "../../components/EventCard";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { events } from "../../data/events/event";
import styles from "../../styles/events.module.css";
import { useState } from "react";

export default function Events() {
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
        <title>MNTC | Events</title>
        <meta
          name="description"
          content="Events, Maths N Tech Club (MNTC), NIT Durgapur"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={`container`}>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.EventsHeader}
        >
          Events round the calendar
        </motion.h2>
        <div className={styles.EventList}>
          {events.map((event) => {
            return <EventCard key={event.id} details={event} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}
