import { useState } from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import { StateContext } from './context'
import './App.css'

function App() {

  return (
    <StateContext>
    <div  className="App">
      <Header/>
      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Services />
        <Contact/>
      </main>

        {/* <Footer/> */}
        <ScrollUp />
    </div>
    </StateContext>
  )
}

export default App
