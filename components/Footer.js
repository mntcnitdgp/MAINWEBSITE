import styles from "../styles/footer.module.css";
import Link from "next/link";

import FacebookLogo from "./Logos/FacebookLogo";
import InstagramLogo from "./Logos/InstagramLogo";
import LinkedinLogo from "./Logos/LinkedinLogo";
import PhoneLogo from "./Logos/PhoneLogo";
import MailLogo from "./Logos/MailLogo";
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={`${styles.FooterContainer} container`}>
        <div className={styles.FooterSocial}>
          <h3 className={styles.FooterHeader}>Our Social Links</h3>
          <div className={styles.FooterSocialItems}>
            <a
              className={styles.FooterFilledLinks}
              href="https://www.facebook.com/mathsntechclub/"
              target="_blank"
            >
              <FacebookLogo color="hsla(0, 0%, 100%, 0.7)" />
              <span className={`text ${styles.FooterFilledLink}`}>
                mathsntechclub
              </span>
            </a>

            <a
              className={styles.FooterFilledLinks}
              href="https://www.instagram.com/mntc.nitd/"
              target="_blank"
            >
              <InstagramLogo color="hsla(0, 0%, 100%, 0.7)" />
              <span className={styles.FooterFilledLink}>mntc.nitd</span>
            </a>

            <a
              className={styles.FooterFilledLinks}
              href="https://www.linkedin.com/company/maths-n-tech-club-nit-durgapur/"
              target="_blank"
            >
              <LinkedinLogo color="hsla(0, 0%, 100%, 0.7)" />
              <span className={styles.FooterFilledLink}>mathsntechclub</span>
            </a>
          </div>
        </div>

        <div className={styles.FooterContact}>
          <h3 className={styles.FooterHeader}>Contact Us On</h3>
          <div className={styles.FooterContactItems}>
            <a
              className={styles.FooterFilledLinks}
              href="tel:+918906051932"
              target="_blank"
            >
              <PhoneLogo color="hsla(0, 0%, 100%, 0.7)" />
              <span className={styles.FooterFilledLink}>+91 89060-51932</span>
            </a>

            <a
              className={styles.FooterFilledLinks}
              href="mailto:anurag2sarkar@gmail.com"
              target="_blank"
            >
              <MailLogo color="hsla(0, 0%, 100%, 0.7)" />
              <span className={styles.FooterFilledLink}>
                mathsntechclub.nitd@gmail.com
              </span>
            </a>
          </div>
        </div>

        <div className={styles.FooterNav}>
          <h3 className={styles.FooterHeader}>Visit Our Other Pages</h3>
          <div className={styles.FooterLinksItems}>
            <Link href="/events" className={styles.FooterFilledLinks}>
              <a className={styles.FooterFilledLink}>Events</a>
            </Link>
            <Link href="/team" className={styles.FooterFilledLinks}>
              <a className={styles.FooterFilledLink}>Our Team</a>
            </Link>
            <Link href="/about" className={styles.FooterFilledLinks}>
              <a className={styles.FooterFilledLink}>About Us</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.FooterCopyright}>
          © All rights reserved by MNTC
        </div>
      </div>
    </footer>
  );
};

export default Footer;
