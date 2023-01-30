import "./Contact.css"
import React from 'react'
import Send_SVG from "../../assets/Send_SVG"
import {AiFillLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
import { useStateContext } from "../../context"
import {motion} from "framer-motion"

const Contact = () => {
    const {lenguajeAct,transition,animateCard}=useStateContext()
    const {idiom,contact:{title,subtitle,linksTitle,inputTitle,placeholderName,
            placeholderEmail,placeholderBody,sendText
    }}=lenguajeAct

    console.log(idiom)

  return (
    <motion.section 
    animate={animateCard}
    transition={transition}
    className="conatct section" id="contact" >
        <h2 className="section__title">{title}</h2>
        <span className="section__subtitle">{subtitle}</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">
                    {linksTitle}
                </h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <BsGithub className="contact__card-icon github__icon"/>
                        
                        {/* <i className="bx bx-mail-send contact__card-icon"></i> */}

                        <h3 className="contact__card-title github__icon">Github</h3>
                        {/* <span className="contact__card-data">user@gmail.com</span> */}
                        <a href="https://github.com/FredyESPINO"  target="_blank" className="contact__button github__icon">{idiom==="ESP"? "Escribeme" : "Write me"} 
                        <i className="bx bx-right-arrow-alt contact__button-icon "></i>
                        </a>
                    </div>

                    <div className="contact__card ">
                        <AiFillLinkedin className="contact__card-icon linkedin__icon"/>

                        {/* <i className="bx bxl-whatsapp contact__card-icon"></i> */}

                        <h3 className="contact__card-title linkedin__icon">LinkedIn</h3>
                        {/* <span className="contact__card-data">123-123-4567</span> */}
                        <a href="https://www.linkedin.com/in/juan-espino-845a41233/" target="_blank" className="contact__button linkedin__icon">
                            {idiom==="ESP"? "Escribeme" : "Write me"}  
                        <i className="bx bx-right-arrow-alt contact__button-icon "></i>
                        </a>
                    </div>

                </div>
            </div>
            
            <div className="contact__content">
                <h3 className="contact__title">
                    {inputTitle}
                </h3>

                <form  className="contact__form">
                    <div className="contact__form-div">
                        <label  className="contact__form-ta">Name</label>
                        <input type="text" name="name" className="contact__form-input" placeholder={placeholderName} />
                    </div>
                    
                    <div className="contact__form-div">
                        <label  className="contact__form-ta">Email</label>
                        <input type="email" name="email" className="contact__form-input" placeholder={placeholderEmail} />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label  className="contact__form-ta">Project</label>
                        <textarea name="project"  cols="30" rows="10"
                        className="contact__form-input"
                        placeholder={placeholderBody}
                        ></textarea>

                    </div>

                    <button  className="button button--flex">
                        {sendText}
                        {/* <Send_SVG /> */}
                    </button> 

                </form>
            </div>

        </div>
    </motion.section>
  )
}

export default Contact