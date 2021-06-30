import Link from "next/link";
import styles from "../styles/Home.module.css";

const notFound = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Not Found</h1>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Home Page</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default notFound;
