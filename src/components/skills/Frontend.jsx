import React from 'react'
import { useStateContext } from '../../context'
import {motion} from "framer-motion"

const Frontend = () => {
    const {lenguajeAct,transition,animateCard}=useStateContext()
    const {skills:{frontEnd:{title,level}}}=lenguajeAct
  return (
    <motion.div 
    animate={animateCard}
    transition={transition}
    className="skills__content">
        <h3 className="skills__title">
            {title}
        </h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">
                            HTML
                        </h3>
                        <span className="skills__level">
                            {level}
                        </span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">
                            CSS
                        </h3>
                        <span className="skills__level">
                            {level}
                        </span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">
                            Javascript
                        </h3>
                        <span className="skills__level">
                            {level}
                        </span>
                    </div>
                </div>

            </div>
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">
                            React js
                        </h3>
                        <span className="skills__level">
                            {level}
                        </span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">
                            Tailwind
                        </h3>
                        <span className="skills__level">
                            {level}
                        </span>
                    </div>
                </div>


            </div>
        </div>
    </motion.div>
  )
}

export default Frontend