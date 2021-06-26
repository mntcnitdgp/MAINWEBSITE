import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/events.module.css";

function EventCard(props) {
    const { name, image, desc, startDate, endDate, link } = props.details;
    const date = startDate == endDate ? startDate : `${startDate} - ${endDate}`;
    console.log();
    return (
        <div className={styles.EventCard}>
            {console.log(props)}
            <div className={styles.EventPosterContainer}>
                <Image href={image} alt={name} src={image} layout="fill"></Image>
            </div>

            <div className={styles.EventDetails}>
                <h3 className={styles.DetailsName}>{name}</h3>
                <p className={styles.DetailsDate}>{date}</p>
                <p className={styles.DetailsMore}>Know More</p>
                <Link href={`/post/${name}`}><p>Know More</p></Link>
            </div>
        </div >
    );
}

export default EventCard;
