import React from 'react'
// import Hand_SVG from "../../assets/Hand_SVG"
// import Send_SVG from "../../assets/Send_SVG"
import { useStateContext } from '../../context'
import {motion} from "framer-motion"

const Data = () => {
    const{lenguajeAct,transition,animateCard}=useStateContext()
    const {home:{title,description,textLink}}=lenguajeAct
  return (
    <div className="home__data"
    // style={{color:"black"}}
    >
        <h1 className="home__title">
            Fredy Espino
            {/* <Hand_SVG/> */}
        </h1>

        <motion.h3 
        animate={animateCard}
        transition={transition}
        className="home__subtitle">
            {title}
        </motion.h3>

        <motion.p 
        animate={animateCard}
        transition={transition}
        className="home__description">
            {description}
        </motion.p>

        <motion.a 
        animate={animateCard}
        transition={transition}
        href="#contact" className="button button--flex">
        {textLink}
            {/* <Send_SVG /> */}
        </motion.a> 

        
    </div>
  )
}

export default Data