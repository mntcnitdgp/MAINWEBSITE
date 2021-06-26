import Head from "next/head";
// import EventCard from "../../components/EventCard";
import { motion } from "framer-motion";
import { useRouter } from 'next/router'
import Image from "next/image";
import { events } from "../../data/events/event";
import styles from "../../styles/events.module.css";
import { useState } from "react";
import FeatherIcon from "feather-icons-react";

export default function Events() {
    const router = useRouter()
    const { id, index } = router.query
    //use the index keyword to index data from events.js json file
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
            <div className={`container ${styles.eventContainer}`}>
                <h1 className={styles.header}>{id}</h1>
            </div>
        </motion.div>
    );
}
