import { year4 } from "../../data/team/year4";
import { year3 } from "../../data/team/year3";
import { year2 } from "../../data/team/year2";
import { year1 } from "../../data/team/year1";

import Head from "next/head";
import TeamCard from "../../components/TeamCard";
import styles from "../../styles/Team.module.css";
import { motion } from "framer-motion";
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
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      }}
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>MNTC | Meet the team</title>
        <meta name="description" content="Blah Blah Blah" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Team}>
        <div className={`container ${styles.TeamContainer}`}>
          <div className={styles.YearSwitch}>
            <span
              className={
                year == 4
                  ? `${styles.Year} ${styles.YearActive}`
                  : `${styles.Year}`
              }
              onClick={() => {
                setYear(4);
                setMemberList(year4);
                setyearHead("Our Ultimate Heroes");
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
                setyearHead("Year3");
              }}
            >
              Third Year
            </span>
            <span
              className={
                year == 2
                  ? `${styles.Year} ${styles.YearActive}`
                  : `${styles.Year}`
              }
              onClick={() => {
                setYear(2);
                setMemberList(year2);
                setyearHead("Year2");
              }}
            >
              Second Year
            </span>
            <span
              className={
                year == 1
                  ? `${styles.Year}  ${styles.YearActive}`
                  : `${styles.Year}`
              }
              onClick={() => {
                setYear(1);
                setMemberList(year1);
                setyearHead("Year1");
              }}
            >
              First Year
            </span>
          </div>
          <h1 className={`${styles.TeamHeader} font-header color-header-text`}>
            {yearHead}
          </h1>
          {console.log(memberList)}
          <div className={styles.TeamList}>
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
                  twitter={member.twit}
                />
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function TeamList() {
  return (
    <>
      <h1 className={`${styles.TeamHeader} font-header color-header-text`}>
        {yearHead}
      </h1>
    </>
  );
}

export default Team;
