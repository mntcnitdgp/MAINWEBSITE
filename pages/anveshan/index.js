import Head from "next/head";
import styles from "../../styles/Anveshan.module.css";
import img from "next/image";
import { useEffect } from "react";

const Anveshan = () => {
  useEffect(() => {
    window.innerWidth < 900
      ? window.scrollBy({ top: 50 })
      : window.scrollBy({});
  }, []);

  return (
    <div>
      <Head>
        <title>MNTC | Meet the team</title>
        <meta
          name="description"
          content="Maths N Tech Club, NIT Durgapur. Be it the smallest achievements or the largest accomplishments, "
        />
      </Head>

      <div className={`container ${styles.AnveshanContainer}`}>
        <div className={styles.AnweshanMobilePoster}>
          <img src="/images/Anveshan1.png" />
        </div>
        <main className={styles.AnveshanMain}>
          <div className={styles.AnveshanMainSubContainer}>
            <h1 className={`${styles.AnveshanHeader} secondary`}>
              Anveshan 2021
            </h1>

            <h3 className={styles.AnveshanSubHeader}>
              The official Tech Magazine of NIT Durgapur
            </h3>
            <p className={styles.AnveshanDetails}>
              We are super excited to present to you the newest edition of
              Anveshan – the official technical magazine of NIT Durgapur.
              Replete with technical articles that are sure to blow up your
              mind, innovations of your contemporaries that would make you feel
              proud, and puzzles that would require your analytical skills at
              their peak to solve them, Anveshan is definitely the ideal
              magazine to provide a reprieve to you from your monotonous
              lifestyle.
            </p>

            <a
              className={`${styles.AnveshanDownloadBtn} solid`}
              href="./anveshan21.pdf"
            >
              Download it now!
            </a>
          </div>
        </main>

        <side className={styles.AnveshanSide}>
          <div className>
            <div className={styles.ImagesContainer}>
              <div className={styles.Image1}>
                <img src="/images/Anveshan1.png" />
              </div>
              <div className={styles.Image2}>
                <img src="/images/Anveshan2.png" />
              </div>
              <div className={styles.Image3}>
                <img src="/images/Anveshan3.png" />
              </div>
            </div>
          </div>
        </side>
      </div>
    </div>
  );
};

export default Anveshan;
