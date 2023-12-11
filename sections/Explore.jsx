'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreCyberKillChain,exploreCyberKillChain2 } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';


const Explore = () => {
  const [active, setActive] = useState('RECONNAISSANCE');
  const [active2, setActive2] = useState('INSTALLATION');
  return (
  <section className={`${styles.paddings}`}
  id='explore'>
    <motion.div
     variants={staggerContainer}
     initial="hidden"
     whileInView="show"
     viewport={{ once: false, amount: 0.25 }}
     className={`${styles.innerWidth} mx-auto flex flex-col`}
   >
     <TypingText title="| The CyberKill Chain" textStyles="text-center" />
     <TitleText
          title={<>Choose the Phase of the CyberKill Chain <br className="md:block hidden" /> to reveal</>}
          textStyles="text-center"
        />
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {exploreCyberKillChain.map((item, index) => (
          <ExploreCard
          key={item.id}
          {...item}
          index={index}
          active={active}
          handleClick={setActive}  
          />
          ))}
        </div>
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {exploreCyberKillChain2.map((item, index) => (
          <ExploreCard
          key={item.id}
          {...item}
          index={index}
          active={active2}
          handleClick={setActive2}  
          />
          ))}
        </div>
    </motion.div>
  </section>
)
};

export default Explore;
