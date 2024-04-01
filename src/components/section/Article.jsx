import { useState, useEffect } from 'react';
import styles from './Article.module.css'
import ArticleCard from '../elements/ArticleCard';

function Article() {

    /* useState para Abrir e fechar a aba de artigos */
    const [open, setOpen] = useState(false);

    /* useEffect para alterar o texto do botão */
    useEffect(() => {

        { open ? (document.getElementById("btnabrir").innerText = "Fechar...") : (document.getElementById("btnabrir").innerText = "↓ Artigos ↓") }

    }, [open])

    return (

        <div className={styles.title} id='article'>
            <button id='btnabrir' onClick={() => setOpen(!open)}>↓ Artigos ↓</button>


            {open ? (
                <div className={styles.article}>

                    <ArticleCard
                        title='Criando paletas de cores com o CSS color-mix() por Michelle Barker'
                        date='7 de março de 2024'
                        tags='CSS'
                        text='Descubra dicas e truques essenciais no uso do Visual Studio Code (VS Code), um dos mais poderosos IDEs do mercado.'
                        link='https://developer.mozilla.org/en-US/blog/color-palettes-css-color-mix/'
                    />

                    <ArticleCard
                        title='Criando documentações técnicas efetivas por Michelle Barker'
                        date='12 de fevereiro de 2024'
                        tags='Documentações'
                        text='Os principais componentes na criação de documentações técnicas criativas.'
                        link='https://developer.mozilla.org/en-US/blog/technical-writing/'
                    />

                    <ArticleCard
                        title='Iniciando com CSS container queries por Michelle Barker'
                        date='15 de novembro de 2023'
                        tags='CSS, HTMl'
                        text='CSS container queries são ferramentas poderosas de layouts CSS.'
                        link='https://developer.mozilla.org/en-US/blog/getting-started-with-css-container-queries/'
                    />

                    <ArticleCard
                        title='VS Code: Dicas e truques para iniciantes por Dipika Bhattacharya'
                        date='6 de novembro de 2023'
                        tags='VS Code, IDEs'
                        text='Descubra dicas e truques essenciais no uso do Visual Studio Code (VS Code), um dos mais poderosos IDEs do mercado.'
                        link='https://developer.mozilla.org/en-US/blog/vs-code-tips-tricks/'
                    />

                </div>
            ) : (
                ''
            )}


        </div>
    )
}
export default Article;