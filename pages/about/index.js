import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../../styles/About.module.css";
export default function About() {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
          y: -200,
        },
        pageAnimate: {
          opacity: 1,
          y: 0,
        },
      }}
      exit={{ opacity: 0, y: 200 }}
    >
      <Head>
        <title>MNTC | About Us</title>
        <meta name="description" content="Blah Blah Blah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`container ${styles.About}`}>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          About Us
        </motion.h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          vulputate bibendum nisi vel hendrerit. Nam vel dictum enim. Aliquam et
          ante sagittis, pharetra lacus vel, aliquet metus. Vivamus felis massa,
          blandit a dolor eget, porta aliquet orci. Quisque ac maximus orci.
          Integer eu bibendum dui. Nam varius scelerisque dolor id imperdiet.
          Cras augue neque, euismod a purus sit amet, hendrerit venenatis augue.
          Nullam ut velit placerat, pellentesque diam ut, consequat erat. Duis
          consequat odio at molestie consectetur. Vivamus accumsan nunc non
          augue imperdiet suscipit. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae;
        </p>
        <p>
          Nullam eu semper mauris. Sed vel interdum lacus. Sed euismod euismod
          purus lacinia egestas. Phasellus vehicula in erat et ultrices. Vivamus
          ultricies, augue vel posuere volutpat, erat ligula sagittis elit, id
          aliquam ligula purus cursus odio. Vivamus in tortor eu dolor tempor
          sodales sed eu odio. Maecenas aliquet magna sed vehicula molestie.
          Vestibulum pharetra ex sed fermentum iaculis. Duis id ante nec tortor
          semper pellentesque. Vivamus eleifend sapien ut suscipit finibus.
          Donec a neque non felis consectetur posuere. Suspendisse congue
          maximus tellus at tempus. Curabitur sed urna iaculis, sollicitudin
          nisi non, mattis nunc. Ut venenatis dapibus mi eget consectetur. Cras
          id ipsum dapibus, luctus lacus sed, varius augue. Duis eget leo
          scelerisque tortor volutpat lacinia sed at ipsum.
        </p>
        <p>
          Ut blandit est non risus laoreet elementum. Suspendisse potenti.
          Nullam consectetur, libero et pretium maximus, ligula massa ornare
          turpis, interdum iaculis tellus ipsum in lacus. Maecenas dignissim
          felis quis euismod mattis. Maecenas feugiat mauris non pulvinar
          congue. Etiam ut quam eget dui sollicitudin porttitor. Quisque at ante
          sodales odio euismod placerat ornare pellentesque felis.
        </p>
      </div>
    </motion.div>
  );
}
