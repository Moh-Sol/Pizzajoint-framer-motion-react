import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import {containerVariants,nextVariants,buttonVariants} from './variants'


/* moved to another file */
// const containerVariants = {
//   initial: {
//     x: '100vw',
//     opacity: 0,
//   },
//   animate: {
//     x: '0',
//     opacity: 1,
//     transition: {
//       type: 'spring', 
//       stiffness: 120,
//        delay: 0.5
//     }
//   }
// }

// const nextVariants = {
//   initial: {
//     x: '-100vw',
//   },
//   animate: {
//     x: '0',
//     transition: {
//       type: 'spring', 
//       stiffness: 120,
//     }
//   }

// }

const Base = ({ addBase, pizza }) => {

  console.log(addBase)


  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial='initial'
      animate='animate'
    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{
                scale: 1.1,
                originX: 0/* لكي لا يكون التكبير للخلف ولكن يبدأ من نقطة البداية*/
                , color: 'orange'
              }}
              transition={{ type: 'spring', stiffness: 300/* الارتجاج */ }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        variants ={nextVariants}
        // initial='initial'   /* لسنا بحاجة لتعريفهم هنا لأن الأيلمينت الأب لديه تعريف مشابه لهم */
        // animate='animate'/*  ولكن رغم ذلك سيأخذوا القيم الخاصة بهم من الفارينت الخاص بهم */
        >
          <Link to="/toppings">
            <motion.button
               variants={buttonVariants }
               whileHover= 'hover'
               animate='animate'

            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;