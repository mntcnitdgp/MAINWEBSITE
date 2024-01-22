import Head from "next/head";
import EventCard from "../../components/EventCard";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
//import { events } from "../../data/events/event";
import styles from "../../styles/events.module.css";

import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import _ from 'lodash'
export default function Events() {

  const[events,setEvents]=useState([])
  const fetchPost = async () => {
       
    await getDocs(collection(db, "events"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            
            setEvents(_.orderBy(newData, ['no', 'timeSnapshot'], ['desc', 'asc']))                
            console.log(events, newData);
        })
        
}
useEffect(()=>{
  fetchPost();
}, [])
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
        <meta name="description" content="Maths N Tech Club, NIT Durgapur. " />
      </Head>
      <div className={`container`}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${styles.EventsHeader} secondary`}
        >
          Events round the calendar
        </motion.h1>
        <div className={styles.EventList}>
          {events.map((event) => {
            return <EventCard key={event.id} details={event} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}
