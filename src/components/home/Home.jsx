import "./Home.css"
import React from 'react'
import Social from "../social/Social"
import Data from "../data/Data"
import ScrollDown from "../scrolldown/ScrollDown"
import { useStateContext } from "../../context"



const Home = () => {


  
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />
                <div className="home__img"/>
                <Data />
            </div>
            {/* <ScrollDown /> */}
        </div>
    </section>
  )
}

export default Home