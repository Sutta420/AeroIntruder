'use client';
import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About AeroIntruder" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">AeroIntruder</span><div></div> In the ever-expanding digital landscape, the AeroIntruder project pioneers a transformative approach to cybersecurity. 
        Harnessing the power of {' '}
        <span className="font-extrabold text-white">
         autonomous drones, advanced sensors, and artificial intelligence, AeroIntruder 
        </span>{' '}
        introduces a comprehensive cybersecurity assessment system. Focused on wireless networks and connected devices, the system navigates the intricate stages of cyber-attacks, proactively identifying vulnerabilities and fortifying digital environments.Through {' '}
        <span className="font-extrabold text-white">meticulous network scanning, vulnerability assessment, attack simulation, and intuitive user interface</span> devices you can
        {' '}
        <span className="font-extrabold text-white">AeroIntruder ensures real-time threat detection and response.Lets Disrupt and Explore</span> 

      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
