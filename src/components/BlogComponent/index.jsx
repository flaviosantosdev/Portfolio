import styles from './BlogComponent.module.css'

export const BlogComponent = () => {



    return(
        <section  className={styles.blog}>
            <div className={styles.container}>
                <div className={styles.cardBlog}>
                    Porque React.js Ficou tão famoso ao ponto de mudar a historia do Javascript ?
                </div>
                <div className={styles.cardBlog}>
                    fr
                </div>
            </div>
        </section>
    )
}