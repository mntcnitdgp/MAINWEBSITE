import React from "react";
import styles from "../styles/Team.module.css";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
function TeamCard({
  name,
  avatar,
  position,
  facebook,
  instagram,
  linkedin,
  github,
  twitter,
}) {
  return (
    <div className={styles.TeamCard}>
      {position && (
        <p className={`${styles.DetailsPosition} ${styles.PositionDesktop}`}>
          {position}
        </p>
      )}
      <div className={styles.TeamCardAvatarContainer}>
        {avatar && <Image src={avatar} width="100" height="100" />}
      </div>

      <div className={styles.TeamCardDetailsContainer}>
        <h3 className={styles.DetailsName}>{name}</h3>
        {position && <p className={styles.DetailsPosition}>{position}</p>}

        <div className={styles.TeamCardSocial}>
          {facebook && (
            <a
              className={styles.TeamCardSocialLinks}
              href={facebook}
              target="_blank"
            >
              <FeatherIcon
                icon="facebook"
                size="24"
                stroke="none"
                fill="hsla(0, 0%, 100%, 0.75)"
              />
            </a>
          )}

          {instagram && (
            <a
              className={styles.TeamCardSocialLinks}
              href={instagram}
              target="_blank"
            >
              <FeatherIcon
                icon="instagram"
                size="24"
                stroke="none"
                fill="hsla(0, 0%, 100%, 0.75)"
              />
            </a>
          )}

          {linkedin && (
            <a
              className={styles.TeamCardSocialLinks}
              href={linkedin}
              target="_blank"
            >
              <FeatherIcon
                icon="linkedin"
                size="24"
                stroke="none"
                fill="hsla(0, 0%, 100%, 0.75)"
              />
            </a>
          )}

          {github && (
            <a
              className={styles.TeamCardSocialLinks}
              href={github}
              target="_blank"
            >
              <FeatherIcon
                icon="github"
                size="24"
                stroke="none"
                fill="hsla(0, 0%, 100%, 0.75)"
              />
            </a>
          )}

          {twitter && (
            <a
              className={styles.TeamCardSocialLinks}
              href={twitter}
              target="_blank"
            >
              <FeatherIcon
                icon="twitter"
                size="24"
                stroke="none"
                fill="hsla(0, 0%, 100%, 0.75)"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
