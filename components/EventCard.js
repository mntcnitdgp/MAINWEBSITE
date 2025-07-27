import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/events.module.css";

function EventCard(props) {
  const { id, name, image, smallDesc, startDate, endDate,no, link, openlink } =
    props.details;
  const date = startDate == endDate ? startDate : `${startDate} - ${endDate}`;
  return (
    <>
    <Link legacyBehavior href={`/events/${name}?` + `index=${id}`}>
      <div className={styles.EventCardMobile}>
        <div className={styles.EventPosterContainer}>
          <Image src={image} alt={name}  layout="fill"></Image>
        </div>

        <div className={styles.EventDetails}>
          <h3 className={styles.DetailsName}>{name}</h3>
          <p className={styles.DetailsDate}>{date}</p>
        </div>
      </div>
    </Link>

    <div className={styles.EventCardPC}>
      <div className={styles.EventPosterContainer}>
        <Image
          src={image}
          alt={name}
          
          layout="fill"
          
          priority={true}
        />
      </div>

      <div className={styles.EventDetails}>
        <h3 className={styles.DetailsName}>{name}</h3>
        <p className={styles.DetailsDate}>{date}</p>
        <p className={styles.DetailsDesc}>
          {smallDesc}
          {openlink ? (
            <Link legacyBehavior href={openlink}>
              <a className={`text ${styles.DetailsMore}`}>Learn More {">"}</a>
            </Link>
          ) : (
            <Link legacyBehavior href={`/events/${name}?` + `index=${id}`}>
              <a className={`text ${styles.DetailsMore}`}>Learn More {">"}</a>
            </Link>
          )}
        </p>
      </div>
    </div>
  </>
  );
}

export default EventCard;