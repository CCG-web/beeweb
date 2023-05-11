import React from 'react'
import './Sobre.css'

const Sobre = () => {
    return (
        <section className='ContainerSobre'>
            <div className='itens'>
                
                <div className='texto'>

                <h1>Sobre nós</h1>

                    <p>BEEWeb é um projeto inovador que tem como objetivo ajudar os apicultores a monitorar suas colmeias de abelhas de forma mais eficiente. Desenvolvido por Bolsistas/alunos com auxílio de professores do IFCE, em uma parceria com o Centro de Inovação e Difusão de Tecnologias para o Semiárido (CIDTS). O projeto BEEWeb utiliza uma combinação de dispositivos eletrônicos e tecnologia web para fornecer informações valiosas sobre as colmeias. <br />

                        O sistema BEEWeb é composto por dois principais componentes: sensores e um sistema web. Os sensores são instalados dentro e fora das colmeias para capturar dados em tempo real, como temperatura, umidade e peso das colmeias. Esses dados são então transmitidos para o sistema web, que permite que os apicultores monitorem e analisem as informações em tempo real.
                    </p>
                </div>

            </div>
            <div className='itens'>
                <div className='texto'>
                <h1>Ainda</h1>

                    <p>Com o sistema BEEWeb, os apicultores podem detectar rapidamente quaisquer problemas em suas colmeias e tomar medidas corretivas para evitá-los. Por exemplo, se a temperatura dentro da colmeia estiver muito alta, o sistema enviará um alerta para o apicultor para que ele possa tomar medidas imediatas para resfriar a colmeia. <br />

                        Além disso, o aplicativo web do BEEWeb também permite que os apicultores analisem os dados coletados ao longo do tempo. Eles podem visualizar gráficos e relatórios que mostram as tendências de temperatura, umidade e peso da colmeia ao longo do tempo, o que pode ser usado para otimizar a produção de mel e melhorar a saúde das abelhas.

                        Em resumo, o projeto BEEWeb é uma solução inovadora e prática que irá revolucionar a forma como os apicultores gerenciam suas colmeias. Com o sistema BEEWeb, é possível monitorar as colmeias em tempo real, detectar problemas rapidamente e otimizar a produção de mel de forma mais eficiente."
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Sobre