import "./Skills.css"
import React from 'react'
import Frontend from "./Frontend"
import Backeend from "./Backend"
import {motion} from "framer-motion"
import { useStateContext } from "../../context"

const Skills = () => {
  const {lenguajeAct,animateCard,transition}=useStateContext()
  const {skills:{title,subtitle}}=lenguajeAct
  return (
    <section className="skills section" id="skills">
        <motion.h2
        animate={animateCard}
        transition={transition} 
        className="section__title"
        >
          {title}
        </motion.h2>
        
        <motion.span
        animate={animateCard}
        transition={transition} 
        className="section__subtitle">
          {subtitle}
        </motion.span>

        <div className="skills__container container grid">
            <Frontend/>
            <Backeend />
        </div>
    </section>
  )
}

export default Skills