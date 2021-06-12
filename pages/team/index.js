import { team } from '../../data/team/finalYear';
import Head from 'next/head'
import TeamCard from '../../components/TeamCard';
import styles from '../../styles/Team.module.css'
import { motion } from 'framer-motion';

const Team = ({ teamList }) => {
    return (
        <motion.div className={styles.teamPage} initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
                opacity: 0
            },
            pageAnimate: {
                opacity: 1,
                transition: {
                    duration: 1
                }
            },
        }}
            exit={{ opacity: 0 }}>
            <Head>
                <title>MNTC | Our Team</title>
                <meta name="description" content="Blah Blah Blah" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className={styles.subheader}>The Valence Electrons</h1>

            <div className={styles.team_cards_container}>
                {teamList.map((member) => (
                    <TeamCard key={member.id} name={member.name} position={member.position} />
                ))}
            </div>
        </motion.div>
    )
}

export const getStaticProps = async () => {
    return {

        props: {
            teamList: team
        }
    }
}

export default Team;