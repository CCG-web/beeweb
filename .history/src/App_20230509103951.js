
import Home from "./components/Home.jsx"
import Sobre from "./components/Sobre";
import Cards from "./components/Cards";
import './App.css'
import uso from "./assets/uso.svg"
import Equipe from "./assets/Equipe.svg"
import Team from "./components/Team";
import ContatoLogo from "./assets/contato.svg";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import { useRef } from "react";
import Headline from "./components/Headline";


import React, { useState, useEffect, } from 'react'
import logoBee from "./assets/logoBEE.svg"

import { Divide as Hamburger } from 'hamburger-react'

function App() {
  const contatoref = useRef(null)
  const homeref = useRef(null)
  const sobreref = useRef(null)
  const usoref = useRef(null)
  const teamref = useRef(null)

  const HomeFuncao = () => {

    homeref.current?.scrollIntoView({ behavior: 'smooth' });
    toggleNav()
  }

  const ContatoFuncao = () => {
    contatoref.current?.scrollIntoView({ behavior: 'smooth' });
    toggleNav()
  }

  const sobreFuncao = () => {
    sobreref.current?.scrollIntoView({ behavior: 'smooth' });
    toggleNav()
  }
  const usoFuncao = () => {
    usoref.current?.scrollIntoView({ behavior: 'smooth' });
    toggleNav()
  }
  const teamFuncao = () => {
    teamref.current?.scrollIntoView({ behavior: 'smooth' });
    toggleNav()
  }
 
  
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
 

  const toggleNav = () => {

    setToggleMenu(!toggleMenu)
  }
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (

    <div>

      <Headline ref={homeref} />

      {/* <Navbar Home="Home"
        sobre="Sobre nós"
        uso="Uso"
        Contato="Contato" 
      /> */}

<nav>
      
 
      {(toggleMenu || screenWidth > 1000) && (
        <ul className="list">

          
          <li  className="items" onClick={HomeFuncao}>Home</li>
          <li  className="items" onClick={sobreFuncao} >Sobre Nós</li>
          <li  className="items" onClick={usoFuncao} >Uso</li>
          <li  className="items" onClick={teamFuncao} >Equipe</li>
          <li  className="items" onClick={ContatoFuncao} >Contato</li>
          

        </ul>
      )

      }


       <img className="logo" src={logoBee} alt="" / >
       
      <button onClick={toggleNav} className='btn'><Hamburger/></button>
    </nav>


      <Home />
     
      <Headline ref={sobreref} />

      <Sobre />
      <Headline ref={usoref} />
      <div className="uso">

        <img className="imgUso" src={uso} alt="" />
      </div>

      <div className='cardContainer'>

        <Cards
          image="https://via.placeholder.com/385x384.png?text=Image+1"
          alt="Image 1"
          title="Internet das coisas"
          description="Internet das coisas é um conceito que se refere à interconexão digital de objetos cotidianos com a internet, conexão dos objetos mais do que das pessoas."
        />
        <Cards
          image="https://via.placeholder.com/385x384.png?text=Image+2"
          alt="Image 2"
          title="Gráficos de predição"
          description="mostra cada valor da previsão ao longo do tempo, comparando-a com a previsão e a cota do final do período."
        />
        <Cards
          image="https://via.placeholder.com/385x384.png?text=Image+3"
          alt="Image 3"
          title="Algoritmo de aprendizagem"
          description="Os algoritmos de aprendizagem supervisionada relacionam uma saída com uma entrada com base em dados rotulados. "
        />
      <Headline ref={teamref} />
      </div>
      <div className="uso">

        <img className="imgUso" src={Equipe} alt="" />
      </div>
      
      <Team />
      <div className="uso">


        <Headline ref={contatoref} />
        <img className="imgUso" src={ContatoLogo} alt="" />
      </div>
      
      <Contato />
      <Footer />

    </div>





  );
}

export default App;
