import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx"
import Sobre from "./components/Sobre";
import Cards from "./components/Cards";
import './App.css'
import uso from "./assets/uso.svg"
import Equipe from "./assets/Equipe.svg"
function App() {
  return (
    <div>
      <Navbar/>
    <Home/>
    <Sobre/>
    <div className="uso">
                
       <img  className="imgUso" src={uso} alt="" />
                </div>



    <div className='cardContainer'>
      




    <Cards
        image="https://via.placeholder.com/385x384.png?text=Image+1"
        alt="Image 1"
        title="Card 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit vehicula orci, ut imperdiet urna cursus non."
        />
      <Cards
        image="https://via.placeholder.com/385x384.png?text=Image+2"
        alt="Image 2"
        title="Card 2"
        description="Pellentesque suscipit ante nec enim pulvinar ultrices. Sed tristique dui in lectus cursus laoreet. "
        />
      <Cards
        image="https://via.placeholder.com/385x384.png?text=Image+3"
        alt="Image 3"
        title="Card 3"
        description="Fusce malesuada commodo vestibulum. Donec bibendum lobortis nunc, eu commodo libero rutrum a. Praesent sed malesuada sapien."
        />
  </div>
  <div className="uso">
  <button className='btnProjeto'>Projeto</button>
  <br/>
                
                <img  className="imgUso" src={Equipe} alt="" />
                         </div>
                        

       </div>
    
      
 
      

  );
}

export default App;
