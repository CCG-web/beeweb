import Navbar from "./components/Navbar";
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

function App() {
  const contatoref = useRef(null)
  const homeref = useRef(null)
  
  const HomeFuncao = () => {
    
    homeref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  // const ContatoFuncao = () => {
  //   contatoref.current?.scrollIntoView({ behavior: 'smooth' });
  // }


  return (

    <div>

      
      <Navbar Home="Home" event={HomeFuncao} 
      sobre="Sobre nós"
      uso="Uso"
      Contato="Contato"
      />
      

      <Headline ref={homeref}/>


      <Home />

      <Sobre />
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
      </div>
      <div className="uso">


        <img className="imgUso" src={Equipe} alt="" />
      </div>
      <Team />
      <div className="uso">


        <img className="imgUso" src={ContatoLogo} alt="" />
        <Headline ref={contatoref} />
      </div>

      <Contato />
      <Footer />

    </div>





  );
}

export default App;