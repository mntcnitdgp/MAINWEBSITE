import Head from 'next/head'
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
                opacity: 0
            },
            pageAnimate: {
                opacity: 1,
                transition: {
                    duration: 1
                }
            },
        }} exit={{ opacity: 0 }}>
            <Head>
                <title>MNTC | About Us</title>
                <meta name="description" content="Blah Blah Blah" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>About Us</h1>
        </motion.div>
    )
}