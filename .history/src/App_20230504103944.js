import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx"
import Sobre from "./components/Sobre";
import Cards from "./components/Cards";
import App from "./App.css"
function App() {
  return (
    <div>
      <Navbar/>
    <Home/>
    <Sobre/>




<section>



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
  </section>
   
       
    
      
    </div>
      

  );
}

export default App;
