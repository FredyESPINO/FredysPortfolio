import React from 'react'
import { useStateContext } from '../../context'
import {motion} from "framer-motion"

const Backend = () => {
    const {lenguajeAct,transition,animateCard}=useStateContext()
    const {skills:{frontEnd:{level}}}=lenguajeAct
  return (
        <motion.div 
        animate={animateCard}
        transition={transition}
        className="skills__content">
        <h3 className="skills__title">
          Backend
        </h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">
                          Sanity CMS
                        </h3>
                        <span className="skills__level">
                          {level}(like 1 week basic)
                        </span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div>
                        <h3 className="skills__name">
                          Git

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

export default Backend