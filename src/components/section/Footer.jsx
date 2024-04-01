import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer} id='contact'>
            <a href="https://github.com/fernandotg1"><FaGithub size='30px' /></a>
            <a href="https://www.linkedin.com/in/fernando-tabor-gon%C3%A7alves-72777466"><FaLinkedin size='30px' /></a>
            <p>Copyright ©2024 All rights reserved</p>
        </div>
    )
}
export default Footer;