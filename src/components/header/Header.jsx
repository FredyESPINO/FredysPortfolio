import React,{useState} from 'react'
import "./Header.css"
import { useStateContext } from '../../context'
import {TbFileStar} from "react-icons/tb"
import {motion} from "framer-motion"


const Header = () => {
    const {changeLen,lenguajeAct,transition,animateCard}=useStateContext()
    const {header:{home,about,skills,services,contact,idiom}}=lenguajeAct

    const [toggle, setTogle] = useState(false)
  return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                Portfolio
                <TbFileStar className='icon__star'/>
                </a>

                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                         {/* grid? */}
                        <motion.li 
                        animate={animateCard}
                        transition={transition}
                        className="nav__item active-link">
                            <a href="#home" className="nav__link">
                            <i className="uil uil-estate nav__icon"></i>{home}
                            </a>
                        </motion.li>

                        <motion.li 
                        animate={animateCard}
                        transition={transition}
                        className="nav__item">
                            <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i>{about}
                            </a>
                        </motion.li>

                        <motion.li
                        animate={animateCard}
                        transition={transition} 
                        className="nav__item">
                            <a href="#skills" className="nav__link">
                            <i className="uil uil-file-alt nav__icon"></i>{skills}
                            </a>
                        </motion.li>

                        <motion.li 
                        animate={animateCard}
                        transition={transition}
                        className="nav__item">
                            <a href="#services" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i>{services}
                            </a>
                        </motion.li>
                        {/* <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                            <i className="uil uil-scenery nav__icon"></i>Portfolio
                            </a>
                        </li> */}

                        <motion.li 
                        animate={animateCard}
                        transition={transition}
                        className="nav__item">
                            <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i>{contact}
                            </a>
                        </motion.li>

                        <motion.li
                        animate={animateCard}
                        transition={transition}
                        className="nav__item nav__link nav__changeLen" onClick={changeLen}>
                            <i className="uil uil-message nav__icon"></i>{idiom}
                        </motion.li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={()=>setTogle(!toggle)}></i>
                </div>

            <div className="nav__toggle" onClick={()=>setTogle(!toggle)}>
                <i className="uil uil-apps"></i>
            </div>
            </nav>
        </header>
    )
}

export default Header