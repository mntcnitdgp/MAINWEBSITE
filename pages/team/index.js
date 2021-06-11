import { team } from '../../data/team/finalYear';
import Head from 'next/head'
import TeamCard from '../../components/TeamCard';
import styles from '../../styles/Team.module.css'

const Team = ({ teamList }) => {
    return (
        <div className={styles.teamPage}>
            <Head>
                <title>MNTC | NIT Durgapur</title>
                <meta name="description" content="Blah Blah Blah" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className={styles.subheader}>The Valence Electrons</h1>

            <div className={styles.team_cards_container}>
                {teamList.map((member) => (
                    <TeamCard key={member.id} name={member.name} position={member.position} />
                ))}
            </div>
        </div>
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