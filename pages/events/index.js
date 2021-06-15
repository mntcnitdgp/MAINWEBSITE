import Head from 'next/head'
import { motion } from 'framer-motion';

export default function Events() {
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
                <title>MNTC | Events</title>
                <meta name="description" content="Blah Blah Blah" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Our events</h1>
        </motion.div>
    )
}