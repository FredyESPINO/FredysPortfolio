import React,{useState,useEffect,createContext,useContext} from 'react'
import res from "../assets/restaurante.png"
import pin from "../assets/pins.png"
import eco from "../assets/ecomerce.png"

const Context =createContext()

const StateContext = ({children}) => {
    const [activeLen, setActiveLen] = useState(0)
    const [animateCard, setAnimateCard] = useState({opacity:1})
    const [lenChangeAnim, setLenChangeAnim] = useState(false)

    const transition={duration:0.5}

    useEffect(() => {
        setAnimateCard({opacity:0})

        setTimeout(()=>{
        setAnimateCard({opacity:1})
    },500)
  }, [lenChangeAnim])
    
    const lenguaje=[{
        idiom:"ESP",
        header:{
            home:"Inicio",
            about:"Acerca",
            skills:"Habilidades",
            services:"Servicios",
            contact:"Contacto",
            idiom:"Idioma"
        },
        home:{
            title:"Desarrollador Web Junior.",
            description:"Nuevo desarrollador web frontend autodidacta con residencia en México. ",
            textLink:"Contactame"
        },
        projects:{
            title:"Proyectos",
            projectsArray:[
                {
                    title:"Clone de Pinterest",
                    img:pin,
                    link:"https://brilliant-cendol-9bf65f.netlify.app/",
                    githubLink:"https://github.com/FredyESPINO/socialapp-for-portfolio",
                },
                {
                    title:"E-comerce",
                    img:eco,
                    link:"https://ecomerce-portfolio-qdld-msy9dhpxs-fredyespino.vercel.app/",
                    githubLink:"https://github.com/FredyESPINO/ecomerce_portfolio",
                },
                {
                    title:"Frontend de Restaurante",
                    img:res,
                    link:"https://animated-jalebi-8baf30.netlify.app/",
                    githubLink:"https://github.com/FredyESPINO/restaurant_front",
                },
            ]
        },
        about:{
            title:"Acerca de mi",
            subtitle:"Mi introduccion",
            firstCard:{titleCard:"1 año",subtitleCard:"Aprendiendo desarrollo web"},
            secondCard:{titleCard:"Contaduria",subtitleCard:"Carrera completada"},
            thirdCard:{titleCard:"Ventas",subtitleCard:"Experiencia al tratar con el cliente"},
            description:"Sin experiencia en el campo empecé mi camino para poder ser un desarrollador web profesional por la búsqueda de nuevas oportunidades y crecimiento laboral. Mi meta es poder crear experiencias visuales para los usarios sin descuidar la funcionalidad de las mismas.",
            textoLink:"Descargar CV"
        },
        skills:{
            title:"Mis habiliades",
            subtitle:"Mi nivel tecnico",
            frontEnd:{
                title:"Frontend",
                level:"Basico"
            },
            other:{
                title:"Otros",
                level:"Basico"
            },
        },
        contact:{
            title:"Mantente en contacto",
            subtitle:"Contactame",
            linksTitle:"Links de contacto",
            inputTitle:"Manda un mensaje",
            placeholderName:"Escribe tu nombre",
            placeholderEmail:"Escribe tu email",
            placeholderBody:"Escribe tu mensaje",
            sendText:"Enviar mensaje",
        }
    },{
        idiom:"ENG",
        header:{
            home:"Home",
            about:"About",
            skills:"Skills",
            services:"Services",
            contact:"Contact",
            idiom:"Language"
        },
        home:{
            title:"Web developer junior",
            description:"New web developer focused in frontend living in Mexico.",
            textLink:"Contact me"
        },
        projects:{
            title:"Projects",
            projectsArray:[
                {
                    title:"Pinterest clone",
                    img:pin,
                    link:"https://brilliant-cendol-9bf65f.netlify.app/",
                    githubLink:"https://github.com/FredyESPINO/socialapp-for-portfolio",
                },
                {
                    title:"Ecomerce",
                    img:eco,
                    link:"https://ecomerce-portfolio-qdld-msy9dhpxs-fredyespino.vercel.app/",
                    githubLink:"https://github.com/FredyESPINO/ecomerce_portfolio",
                },
                {
                    title:"Restaurant",
                    img:res,
                    link:"https://animated-jalebi-8baf30.netlify.app/",
                    githubLink:"https://github.com/FredyESPINO/restaurant_front",
                },
            ]
        },
        about:{
            title:"About Me",
            subtitle:"My introduction",
            firstCard:{titleCard:"1 Year",subtitleCard:"Learning web development"},
            secondCard:{titleCard:"Accounting",subtitleCard:"Completed university career"},
            thirdCard:{titleCard:"Selling",subtitleCard:"Experience in suctomer support "},
            description:"Without experience in the field I started web development in search of new opportunities and professional grow. Mi goal is create visual experiences for the users without forgetting about functionality.",
            textoLink:"Download CV"
        },
        skills:{
            title:"My Skills",
            subtitle:"Mi technical level",
            frontEnd:{
                title:"Frontend",
                level:"Basic"
            },
            other:{
                title:"Others",
                level:"Basic"
            },
        },
        contact:{
            title:"Get in touch",
            subtitle:"Contact Me",
            linksTitle:"Talk to me",
            inputTitle:"Write me your project",
            placeholderName:"Write your name",
            placeholderEmail:"Write your email",
            placeholderBody:"Write your message",
            sendText:"Send Message",
        }
    }]


    const changeLen=()=>{
        setTimeout(()=>{
        if(activeLen===0){
            setActiveLen(1)
        }else{
            setActiveLen(0)
        }
        },500)

        setLenChangeAnim(!lenChangeAnim)

    }
    const lenguajeAct=lenguaje[activeLen]

    return (
    <Context.Provider
    value={{
        lenguajeAct,
        activeLen,
        changeLen,
        transition,
        animateCard,
        setAnimateCard
    }}
    >
        {children}
    </Context.Provider>
    )
}
const useStateContext=()=>useContext(Context)

export {useStateContext,StateContext} 

