import styles from './Presentation.module.css'
import foto from '../../assets/foto.png'

function Presentation() {
    return (
        <div className={styles.presentation}>
            <div>
            <h1>
                Olá, eu sou o Fernando, <br/>
                Desenvolvedor Front-End
            </h1>
            <p> 
                Sou formado em Sistemas de Informação e venho acompanhando a tecnologia
                ao longo dos anos com dedicação em áreas de suporte e infraestrutura. Atualmente
                me dedico aos estudos para a migração de área com o objetivo de adentrar nesse
                universo fascinante do desenvolvimento, e assim colocar em prática o aprendizado.
            </p>
            <br/>
            <a href='https://github.com/fernandotg1'><button>Acessar Portfólio</button></a>
            </div>
        </div>
    )
}
export default Presentation;