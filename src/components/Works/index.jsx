import olivas from '../../assets/olivas-digital.png'
import styles from './styles.module.css'

export function Works(){

    return(
        <section className={styles.works}>
            <h1>Projetos Concluídos</h1>
            <div className={styles.cardwork}>
                <img src={olivas} alt="" />
                <div>
                <h3>Projeto 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit assumenda natus, nemo nam voluptatem in distinctio qui amet? Mollitia pariatur, doloribus  Molestiae, tempora modi?</p>
                </div>
            </div>
            <div className={styles.cardwork}>
                <img src={olivas} alt="" />
                <div>
                <h3>Projeto 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit assumenda natus, nemo nam voluptatem in distinctio qui amet? Mollitia pariatur, doloribus  Molestiae, tempora modi?</p>
                </div>
            </div>
        </section>
    )
}