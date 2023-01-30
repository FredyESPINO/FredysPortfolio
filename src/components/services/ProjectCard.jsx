import React from 'react'
import {AiFillEye,AiFillGithub} from 'react-icons/ai'
import {IconContext} from 'react-icons'


const ProjectCard = ({title,img,link,githubLink}) => {
  return (
            <div className="services__content">
                <div className='services__img-cont'>
                <img src={img} className='services__img' />
                <div className="services__icon-cont">
                
                <a href={link} rel="noreferrer" target="_blank" className='icon__outline' >
                <IconContext.Provider value={{className:'icon'}}>
                    <AiFillEye/>
                </IconContext.Provider>
                </a>
                
                <a href={githubLink} rel="noreferrer" target="_blank" className='icon__outline'>
                <IconContext.Provider value={{className:'icon'}}>
                    <AiFillGithub />
                </IconContext.Provider>
                </a>
                
                </div>

                </div>

                <div className="services__title-cont">
                <h3>
                    {title}
                </h3>
                </div>

            </div>
  )
}

export default ProjectCard