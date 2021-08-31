import Link from "next/link";
import styles from "../styles/Notfound.module.css";

const notFound = () => {
  return (
    <div className={styles.NotFound}>
      <div className={`${styles.ErrorContainer} container`}>
        <div className={styles.ErrorCode}>
          <img src="/images/svg/404.svg" />
        </div>
        <h1 class={styles.ErrorText}>
          The page you requested is not available
        </h1>

        <Link href="/">
          <a className={`${styles.ErrorButton} solid`}>
            Get back to the Home Page
          </a>
        </Link>
      </div>
    </div>
  );
};

export default notFound;
