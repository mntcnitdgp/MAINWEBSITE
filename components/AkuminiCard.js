import styles from "../styles/Team.module.css";

function AluminiCard({
    batch
}) {
  return (
    <div className={styles.TeamCard}>
     
      <div className={styles.TeamCardDetailsContainer}>
        <h3 className={styles.DetailsName}>{batch}</h3>
       

      
      </div>
    </div>
  );
}

export default AluminiCard;
