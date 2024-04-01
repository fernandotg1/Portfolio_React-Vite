import styles from './ArticleCard.module.css'
function ArticleCard({ title, date, tags, text, link }) {
    return (
        <div className={styles.articlecard}>
            <a href={link} target='_blank'><h2>{title}</h2>
            <p>{date} &nbsp; &nbsp; &nbsp; {tags}</p>
            <p>{text}</p> 
            </a>

        </div>
    )
}
export default ArticleCard