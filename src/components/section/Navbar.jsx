import styles from './Navbar.module.css'

function Navbar(){
    return (
        <div className={styles.navbar}>
            <a href='#project'><h1>Projetos</h1></a>
            <a href='#article'><h1>Artigos</h1></a>
            <a href='#contact'><h1>Contato</h1></a>
        </div>
    )
}
export default Navbar;