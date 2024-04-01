import styles from './ProjectCard.module.css'

function ProjectCard({ img, title, desc, link }) {
    return (
        <div className={styles.projectcard}>
            <div>
                <a href={link}><img src={img}></img></a>
            </div>
            <div>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
        </div>
        
    )
}
export default ProjectCard