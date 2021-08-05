import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/events.module.css";

function EventCard(props) {
  const { id, name, image, smallDesc, startDate, endDate, link } =
    props.details;
  const date = startDate == endDate ? startDate : `${startDate} - ${endDate}`;
  return (
    <>
      <Link href={`/events/${name}?` + `index=${id}`}>
        <div className={styles.EventCardMobile}>
          <div className={styles.EventPosterContainer}>
            <Image src={image} alt={name} src={image} layout="fill"></Image>
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
            src={image}
            layout="fill"
            placeholder="blur"
            priority={true}
          ></Image>
        </div>

        <div className={styles.EventDetails}>
          <h3 className={styles.DetailsName}>{name}</h3>
          <p className={styles.DetailsDate}>{date}</p>
          <p className={styles.DetailsDesc}>
            {smallDesc}
            {console.log(name + " " + smallDesc.length)}
            <Link href={`/events/${name}?` + `index=${id}`}>
              <a className={`text ${styles.DetailsMore}`}>Learn More {">"}</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default EventCard;
