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

  let team =
    year == 1 ? (
      <Year1 />
    ) : year == 2 ? (
      <Year2 />
    ) : year == 3 ? (
      <Year3 />
    ) : (
      <Year4 />
    );

  return (
    <div className={styles.Team}>
      <div className={`container ${styles.TeamContainer}`}>
        <div className={styles.YearSwitch}>
          <span
            className={
              year == 4
                ? `${styles.Year} ${styles.Year4} ${styles.YearActive}`
                : `${styles.Year} ${styles.Year4}`
            }
            onClick={() => setYear(4)}
          >
            Fourth Year
          </span>
          <span
            className={
              year == 3
                ? `${styles.Year} ${styles.Year3} ${styles.YearActive}`
                : `${styles.Year} ${styles.Year3}`
            }
            onClick={() => setYear(3)}
          >
            Third Year
          </span>
          <span
            className={
              year == 2
                ? `${styles.Year} ${styles.Year2} ${styles.YearActive}`
                : `${styles.Year} ${styles.Year2}`
            }
            onClick={() => setYear(2)}
          >
            Second Year
          </span>
          <span
            className={
              year == 1
                ? `${styles.Year} ${styles.Year1} ${styles.YearActive}`
                : `${styles.Year} ${styles.Year1}`
            }
            onClick={() => setYear(1)}
          >
            First Year
          </span>
        </div>
        {team}
      </div>
    </div>
  );
};

function Year1() {
  return (
    <>
      <h1 className={`${styles.TeamHeader} font-header color-header-text`}>
        Juniors Who Havent Been to College
      </h1>
      <div className={styles.TeamList}>
        {year1.map((member) => {
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
    </>
  );
}

function Year2() {
  return (
    <>
      <h1 className={`${styles.TeamHeader} font-header color-header-text`}>
        Give a Better Name for Second Years
      </h1>
      <div className={styles.TeamList}>
        {year2.map((member) => {
          return (
            <TeamCard
              key={member.id}
              name={member.name}
              avatar={member.avatar}
              position={member.position}
              facebook={member.facebook}
              instagram={member.instagram}
              linkedin={member.linkedin}
              github={member.github}
              twitter={member.twitter}
            />
          );
        })}
      </div>
    </>
  );
}

function Year3() {
  return (
    <>
      <h1 className={`${styles.TeamHeader} font-header color-header-text`}>
        Give a Better Name for Third Years
      </h1>
      <div className={styles.TeamList}>
        {console.log("year3")}
        {year3.map((member) => {
          return (
            <TeamCard
              key={member.id}
              name={member.name}
              avatar={member.avatar}
              position={member.position}
              facebook={member.facebook}
              instagram={member.instagram}
              linkedin={member.linkedin}
              github={member.github}
              twitter={member.twitter}
            />
          );
        })}
      </div>
    </>
  );
}

function Year4() {
  return (
    <>
      <h1 className={`${styles.TeamHeader} font-header color-header-text`}>
        Our Ultimate heroes
      </h1>
      <div className={styles.TeamList}>
        {console.log("year4")}
        {year4.map((member) => {
          return (
            <TeamCard
              key={member.id}
              name={member.name}
              avatar={member.avatar}
              position={member.position}
              facebook={member.facebook}
              instagram={member.instagram}
              linkedin={member.linkedin}
              github={member.github}
              twitter={member.twitter}
            />
          );
        })}
      </div>
    </>
  );
}

export default Team;
