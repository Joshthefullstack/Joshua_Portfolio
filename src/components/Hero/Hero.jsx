import React from 'react';
import "./hero.scss";
import { motion } from "framer-motion"


const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const sliderVariants = {
  initial: {
    x: 0
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20
    }
  }
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div className='textContainer' variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>ADELEYE DAVID</motion.h2>
          <motion.h1 variants={textVariants}>Fullstack Developer, Wordpress Developer and Graphics Designer</motion.h1>
          {/* <motion.div className='buttons' variants={textVariants}>
            <motion.button variants={textVariants} className='button'><a href='https://drive.google.com/file/d/1WFjUub_LqOLLY7LsoS6K9JUKV6oQLtwe/view?usp=sharing' >Go To Resume</a></motion.button> */}
            {/* <motion.button variants={textVariants} href='#Contacts'>Contact Me</motion.button> */}
          {/* </motion.div> */}
          <motion.img src="./assets/scroll.png" animate='scrollButton' alt='' variants={textVariants}/>
        </motion.div>
      </div>
      <motion.div className='slidingTextContainer' variants={sliderVariants} initial="initial" animate="animate">
        Developer Designer Accountant
      </motion.div>
      <div className='imageContainer'>
        {/* <img src='./assets/hero3.png' alt=''/> */}
      </div>
    </div>  
  )
}

export default Hero