import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>MNTC | NIT Durgapur</title>
                <meta name="description" content="Blah Blah Blah" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Welcome</h1>
        </div>
    )
}
