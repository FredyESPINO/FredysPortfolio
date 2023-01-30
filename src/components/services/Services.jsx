import React,{useState} from 'react'
import "./Services.css"
import { useStateContext } from '../../context'
import ProjectCard from './ProjectCard'
import {motion} from "framer-motion"

const Services = () => {


    const {lenguajeAct,transition,animateCard}=useStateContext()
    const {projects:{title,projectsArray}}=lenguajeAct

  return (
    <motion.section 
    animate={animateCard}
    transition={transition}
    className="services section" id="services">
        <h2 className="section__title">
            {title}
        </h2>
        <span className="section__subtitle">
            
        </span>

        <div className="services__container container grid">
            {
                projectsArray.map((item,index)=>{
                    return(
                        <ProjectCard key={index} {...item}/>
                    )
                })
            }
        </div>
    </motion.section>
  )
}

export default Services