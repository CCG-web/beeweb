import {Link} from "react-router-dom"

import './Home.css'
const Home = () => {
    return (
        <section className='containerHome'>
            <div >

                <h1 className='homeH1'>BeeWeb</h1>

                <p>BEEWeb é um projeto inovador que tem como objetivo ajudar os apicultores <br/> a monitorar
                    suas colmeias de abelhas de forma mais eficiente.  </p>

                <Link className='btnProjeto' to="/login">Projeto</Link>
            </div>
        </section>
    )
}

export default Home