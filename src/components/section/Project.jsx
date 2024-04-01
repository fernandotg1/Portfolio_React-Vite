import styles from './Project.module.css'
import ProjectCard from '../elements/ProjectCard';
import Portfolio01 from '../../assets/portfolio01.png'
import Portfolio02 from '../../assets/portfolio02.png'
import Portfolio03 from '../../assets/portfolio03.png'

function Project(){
    return (
        <div className={styles.title} id='project'><h2>Projetos</h2>
            <div className={styles.project}>
                <ProjectCard
                    img={Portfolio01}
                    title='Landing Page'
                    desc='Desafio em desenvolver uma landing page com referência em Figma e uso de HTML e CSS'
                    link='https://github.com/fernandotg1/Desafio-1-Landing-Page'
                />
                <hr></hr>
                <ProjectCard
                    img={Portfolio02}
                    title='Consumo de API'
                    desc='Desafio em consumir uma API para CEP e previsão do tempo com base em latitude e longitude'
                    link='https://github.com/fernandotg1/Desafio-2-Consumo-API'
                />
                <hr></hr>
                <ProjectCard
                    img={Portfolio03}
                    title='Landing Page CCXP'
                    desc='Demo CCXP com o uso de HTML, CSS e Media Query, e Javascript para contagem'
                    link='https://github.com/fernandotg1/CCXP'
                />
                <hr></hr>
            </div>
        </div>
    )
}
export default Project;