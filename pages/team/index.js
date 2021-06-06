import { team } from '../../teamData';
import Head from 'next/head'

const Team = ({ teamList }) => {
    return (
        <div>
            <Head>
                <title>MNTC | NIT Durgapur</title>
                <meta name="description" content="Blah Blah Blah" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Meet the Team</h1>

            <ul className="jobs">
                {teamList.map((member) => (
                    <li key={member.id}>
                        <p>{member.name}<span>____</span>{member.position}</p>
                    </li>
                ))}
            </ul>
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
