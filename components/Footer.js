import FeatherIcon from "feather-icons-react";
import styles from "../styles/footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={`${styles.FooterContainer} container`}>
        <div className={styles.FooterSocial}>
          <h4 className={styles.FooterHeader}>Our Social Links</h4>
          <div className={styles.FooterSocialItems}>
            <a
              className={styles.FooterFilledLinks}
              href="https://www.facebook.com/mathsntechclub/"
              target="_blank"
            >
              <FeatherIcon
                icon="facebook"
                size="24"
                stroke="none"
                fill="hsla(0, 0%, 100%, 0.75)"
              />
              @mathsntechclub
            </a>

            <a
              className={styles.FooterFilledLinks}
              href="https://www.instagram.com/mntc.nitd/"
              target="_blank"
            >
              <FeatherIcon
                icon="instagram"
                size="24"
                stroke="none"
                fill="hsla(0, 0%, 100%, 0.75)"
              />
              @mathsntechclub
            </a>

            <a
              className={styles.FooterFilledLinks}
              href="https://www.linkedin.com/company/maths-n-tech-club-nit-durgapur/"
              target="_blank"
            >
              <FeatherIcon
                icon="linkedin"
                size="24"
                stroke="none"
                fill="hsla(0, 0%, 100%, 0.75)"
              />
              @mathsntechclub
            </a>
          </div>
        </div>

        <div className={styles.FooterContact}>
          <h4 className={styles.FooterHeader}>Contact Us On</h4>
          <div className={styles.FooterContactItems}>
            <a
              className={styles.FooterFilledLinks}
              href="tel:+918906051932"
              target="_blank"
            >
              <FeatherIcon
                icon="phone"
                size="24"
                stroke="none"
                fill="hsla(0, 0%, 100%, 0.75)"
              />
              +91 89060-51932
            </a>

            <a
              className={styles.FooterFilledLinks}
              href="mailto:anurag2sarkar@gmail.com"
              target="_blank"
            >
              <FeatherIcon
                icon="mail"
                size="24"
                stroke="none"
                fill="hsla(0, 0%, 100%, 0.75)"
              />
              mathsntechclub.nitd@gmail.com
            </a>
          </div>
        </div>

        <div className={styles.FooterNav}>
          <h4 className={styles.FooterHeader}>Visit Our Other Pages</h4>
          <div className={styles.FooterLinksItems}>
            <Link href="/events" className={styles.FooterLinks}>
              <a href="" className={styles.FooterLinks}>
                Events
              </a>
            </Link>
            <Link href="/team">
              <a href="" className={styles.FooterLinks}>
                Our Team
              </a>
            </Link>
            <Link href="/about" className={styles.FooterLinks}>
              <a href="" className={styles.FooterLinks}>
                About Us
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.FooterCopyright}>
        © All rights reserved by MNTC
      </div>
    </footer>
  );
};

export default Footer;
