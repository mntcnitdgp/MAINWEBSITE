import Head from "next/head";
import styles from "../../styles/Anveshan.module.css";
import img from "next/image";

const Anveshan = () => {
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
              Some Catchy Title!!!
            </h1>

            <h3 className={styles.AnveshanSubHeader}>
              Some Catchy Sub Headline
            </h3>
            <p className={styles.AnveshanDetails}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
              et cras vulputate quis elementum malesuada sit quisque laoreet.
              Sed nulla nisl ut eget viverra egestas vitae at. Mi nam aliquam,
              vel ac. Amet quisque sed morbi quis senectus. A dignissim vivamus
              vitae interdum consectetur nunc laoreet. Facilisis est velit
              tempus nunc non turpis. Vivamus sit at eget netus maecenas
              volutpat lacinia. Integer sit neque a, neque, diam turpis blandit
              tempor, lacus. Volutpat ac bibendum odio nibh tincidunt egestas
              risus, nunc eros. In eget integer risus integer. Adipiscing
              rhoncus, in netus mi.
            </p>

            <a className={`${styles.AnveshanDownloadBtn} solid`}>
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
