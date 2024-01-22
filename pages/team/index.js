//import { year4 } from "../../data/team/year4";
//import { year3 } from "../../data/team/year3";
//import { year2 } from "../../data/members/year2";
//import { year0 } from "../../data/team/year0";
import { year5 } from "../../data/team/year5";
import { year6 } from "../../data/team/year6";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase';

import Head from "next/head";
import TeamCard from "../../components/TeamCard";
import styles from "../../styles/Team.module.css";
import { AnimatePresence, motion } from "framer-motion";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormHelperText, InputLabel } from "@mui/material";
import AluminiCard from "../../components/AkuminiCard";
import _ from "lodash";

const Team = () => {
  const [year, setYear] = useState(0);
  const [year0, setYear0] = useState(0);
  const[year4,setYear4]=useState([])
  const [memberList, setMemberList] = useState(year4);
  const[year2,setYear2]=useState([])
  const[year3,setYear3]=useState([])
  
  const fetchPost = async () => {
       
    await getDocs(collection(db, "mntc/members/year2"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                setYear2(_.orderBy(newData, ['timeSnapshot'], ['asc']))                 
            
        })
        await getDocs(collection(db, "mntc/members/year3"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
                setYear3(_.orderBy(newData, ['timestamp'], ['desc']))
        })               
        await getDocs(collection(db, "mntc/members/year4"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
          
            setYear4(_.orderBy(newData, ['timestamp'], ['desc']))
        })         
        await getDocs(collection(db, "mntc/members/yearfacad"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
          
            setYear0(_.orderBy(newData, ['timestamp'], ['desc']))
        })              
       
   
}
useEffect(()=>{
  fetchPost();
}, [])
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
        <meta
          name="description"
          content="Maths N Tech Club, NIT Durgapur. Be it the smallest achievements or the largest accomplishments, "
        />
      </Head>

      <div className={`container`}>
        <YearSwitch />
        {year==7?<motion.div
          className={styles.TeamList}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          
          <span
          className={
            year == 5 ? `${styles.Year} ${styles.YearActive}` : `${styles.Year}`
          }
          onClick={() => {
            setYear(5);
            setMemberList(year5);
          }}
        >
          <AluminiCard
               
               batch="Batch Of 2019-23"
              
             />
        </span>
        <span
          className={
            year == 5 ? `${styles.Year} ${styles.YearActive}` : `${styles.Year}`
          }
          onClick={() => {
            setYear(6);
            setMemberList(year6);
          }}
        >
              
                <AluminiCard
               
               batch="Batch Of 2018-22"
              
             />
             </span>
            
            
        
        </motion.div>:
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
              
              />
            );
          })}
        </motion.div>
        }
      
      </div>
    </motion.div>
    
  );

  function YearSwitch() {
    const handleSelect = async (e) => {
      e.preventDefault()
     
      if(e.target.value=="5")
      {
        setYear(5)
        setMemberList(year5);
      }
      else if(e.target.value=="6"){
        setYear(6)
        setMemberList(year6);
      }
    }
   
    return (
      <motion.div
        className={styles.YearSwitch}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span
          className={
            year == 0 ? `${styles.Year} ${styles.YearActive}` : `${styles.Year}`
          }
          onClick={() => {
            setYear(0);
            setMemberList(year0);
          }}
        >
          Faculty Advisors
        </span>

        <span
          className={
            year == 4 ? `${styles.Year} ${styles.YearActive}` : `${styles.Year}`
          }
          onClick={() => {
            setYear(4);
            setMemberList(year4);
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
          }}
        >
          First Year
        </span>
        <span
          className={
            year >4  ? `${styles.Year} ${styles.YearActive}` : `${styles.Year}`
          }
          onClick={() => {
            setYear(7);
          
          }}
        >
           ALUMNI
        </span>
        
       
          {/*<span>
        
        {year>4?year>5?"Batch of 2018-22":"Batch of 2019-23":"ALUMINI"}
        <span >
     
      <Select sx={{ border: 0 }} value=""
         
        onChange={handleSelect}   >
        <MenuItem  className={`${styles.options}`} value="5"  >Batch Of 2019-23</MenuItem>
        <MenuItem className={`${styles.options}`} value="6">Batch Of 2018-22</MenuItem>
        
      </Select>
     
    </span>
        </span >
      </span>*/}
        
      </motion.div>
    );
   
    
  }
 


};

export default Team;
