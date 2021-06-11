import React from 'react'
import styles from '../styles/Team.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function TeamCard({ name, position }) {
    return (
        <div className={styles.card}>
            <div className={styles.bg}></div>
            <p className={styles.position}>{position}</p>
            <div className={styles.avatar}></div>
            <p className={styles.name}>{name}</p>
            <div className={styles.soc}>
                <FacebookIcon style={{ fontSize: 30 }} />
                <InstagramIcon style={{ fontSize: 30 }} />
                <LinkedInIcon style={{ fontSize: 30 }} />
            </div>
        </div>
    )
}

export default TeamCard
