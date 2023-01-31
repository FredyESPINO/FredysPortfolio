import "./About.css"
import React from 'react'
import AboutImg from "../../assets/about.jpg"
import Info from "./Info"
import CVES from "../../assets/CVES.pdf"
import CVEN from "../../assets/CVEN.pdf"
import File_SVG from "../../assets/File_SVG"
import { useStateContext } from "../../context"
import {motion} from "framer-motion"

const About = () => {
    const {lenguajeAct,transition,animateCard} =useStateContext()
    const {about:{title,subtitle,description,textoLink},idiom}=lenguajeAct

    return (
    <section className="about section" id="about">
        <h2 className="section__title">{title}</h2>
        <span className="section__subtitle">{subtitle}</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info />
                <motion.p 
                animate={animateCard}
                transition={transition}
                className="about__description">
                    {description}
                </motion.p>

                <motion.a
                animate={animateCard}
                transition={transition}
                download="" href={idiom==="ESP"?CVES : CVEN } className="button button--flex">
                    {textoLink}
                    <File_SVG />
                </motion.a>
            </div>
        </div>
    </section>
  )
}

export default About