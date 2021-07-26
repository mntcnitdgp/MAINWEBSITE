import { year4 } from "../../data/team/year4";
import { year3 } from "../../data/team/year3";
import { year2 } from "../../data/team/year2";

import Head from "next/head";
import TeamCard from "../../components/TeamCard";
import styles from "../../styles/Team.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Team = () => {
  const [year, setYear] = useState(4);
  const [memberList, setMemberList] = useState(year4);
  const [yearHead, setyearHead] = useState("Our Ultimate heroes");

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
    >
      <Head>
        <title>MNTC | Meet the team</title>
        <meta name="description" content="Blah Blah Blah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`container`}>
        <YearSwitch />
        <motion.h2
          className={styles.TeamHeader}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {yearHead}
        </motion.h2>

        <motion.div
          className={styles.TeamList}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {memberList.map((member) => {
            return (
              <TeamCard
                key={member.id}
                name={member.name}
                avatar={member.avatar}
                position={member.position}
                facebook={member.fb}
                instagram={member.insta}
                linkedin={member.link}
                github={member.git}
              />
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );

  function YearSwitch() {
    return (
      <motion.div
        className={styles.YearSwitch}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span
          className={
            year == 4 ? `${styles.Year} ${styles.YearActive}` : `${styles.Year}`
          }
          onClick={() => {
            setYear(4);
            setMemberList(year4);
            setyearHead("Our Fabulous Final years");
          }}
        >
          Fourth Year
        </span>
        <span
          className={
            year == 3
              ? `${styles.Year}  ${styles.YearActive}`
              : `${styles.Year}`
          }
          onClick={() => {
            setYear(3);
            setMemberList(year3);
            setyearHead("Our Terrific Third years");
          }}
        >
          Third Year
        </span>
        <span
          className={
            year == 2 ? `${styles.Year} ${styles.YearActive}` : `${styles.Year}`
          }
          onClick={() => {
            setYear(2);
            setMemberList(year2);
            setyearHead("Our Super Second Years");
          }}
        >
          Second Year
        </span>
      </motion.div>
    );
  }
};

export default Team;
