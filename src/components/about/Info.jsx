import React from 'react'
import { useStateContext } from '../../context'
import {motion} from "framer-motion"

const Info = () => {
  const {lenguajeAct,transition,animateCard} =useStateContext()
  const {about:{firstCard,secondCard,thirdCard}}=lenguajeAct
  return (
    <div className="about__info grid">

        <motion.div 
        animate={animateCard}
        transition={transition}
        className="about__box">
          < i className='bx bx-award about__icon'></i>
          <h3 className="about__title">
            {firstCard.titleCard}
          </h3>
          <span className="about__subtitle">
            {firstCard.subtitleCard}
          </span>
        </motion.div>
        
        <motion.div 
        animate={animateCard}
        transition={transition}
        className="about__box">
          < i className='bx bx-briefcase-alt about__icon'></i>
          <h3 className="about__title">
            {secondCard.titleCard}
          </h3>
          <span className="about__subtitle">
            {secondCard.subtitleCard}
          </span>
        </motion.div>
        
        <motion.div 
        animate={animateCard}
        transition={transition}
        className="about__box">
          < i className='bx bx-support about__icon'></i>
          <h3 className="about__title">
            {thirdCard.titleCard}
          </h3>
          <span className="about__subtitle">
            {thirdCard.subtitleCard}
          </span>
        </motion.div>
        
    </div>
  )
}

export default Info