import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/events.module.css";

function EventCard(props) {
  const { id, name, image, desc, startDate, endDate, link } = props.details;
  const date = startDate == endDate ? startDate : `${startDate} - ${endDate}`;
  console.log();
  return (
    <Link href={`/events/${name}?` + `index=${id}`}>
      <div className={styles.EventCard}>
        <div className={styles.EventPosterContainer}>
          <Image src={image} alt={name} src={image} layout="fill"></Image>
        </div>

        <div className={styles.EventDetails}>
          <h3 className={styles.DetailsName}>
            {name} <ArrowRight />
          </h3>
          <p className={styles.DetailsDate}>{date}</p>
        </div>
      </div>
    </Link>
  );
}
function ArrowRight() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12H19"
        stroke="#FBF5F4"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        stroke="#FBF5F4"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default EventCard;
