import styles from "../styles/Team.module.css";
import Image from "next/image";
import FacebookLogo from "./Logos/FacebookLogo";
import InstagramLogo from "./Logos/InstagramLogo";
import LinkedinLogo from "./Logos/LinkedinLogo";
import GithubLogo from "./Logos/GithubLogo";

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
      <div className={styles.TeamCardAvatarContainer}>
        {avatar && <Image src={avatar} layout="fill" alt={name} quality="10" />}
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
              <FacebookLogo color="hsla(0, 0%, 100%, 0.7)" />
            </a>
          )}

          {instagram && (
            <a
              className={styles.TeamCardSocialLinks}
              href={instagram}
              target="_blank"
            >
              <InstagramLogo color="hsla(0, 0%, 100%, 0.7)" />
            </a>
          )}

          {linkedin && (
            <a
              className={styles.TeamCardSocialLinks}
              href={linkedin}
              target="_blank"
            >
              <LinkedinLogo color="hsla(0, 0%, 100%, 0.7)" />
            </a>
          )}

          {github && (
            <a
              className={styles.TeamCardSocialLinks}
              href={github}
              target="_blank"
            >
              <GithubLogo color="hsla(0, 0%, 100%, 0.7)" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
