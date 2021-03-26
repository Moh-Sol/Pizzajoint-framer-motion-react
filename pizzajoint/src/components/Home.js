import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

import { containerVariants, nextVariants, childVariants, buttonVariants } from './variants'


const Home = () => {
  return (
    <motion.div className="home container"
      // animate={{rotateZ:360, opacity:0.2, marginTop:200}} only test 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1.5 }}

    >
      <motion.h2
      // animate={{fontSize:50,color:'#ff2994',x:100,y:-100}} only test 
      >
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          // animate={{scale:1.5}} only test 
          // whileTap={{x:100}}
          variants={buttonVariants }
          whileHover= 'hover'
          animate='animate'

        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;