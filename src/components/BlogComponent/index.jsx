import styles from './BlogComponent.module.css'
import cashQ from '../../assets/cashq.png'
import semar from '../../assets/semar.png'
import { Link } from 'react-router-dom'

export const BlogComponent = () => {



    return(
        <section  className={styles.blog}>
            <div className={styles.container}>
                <div className={styles.cardBlog}>
                    <span>CashQ - plataforma de finanças, está em desenvolvimento por mim(nao possui versao mobile ainda)</span>
                   <Link to="https://cash-q-project.vercel.app/" target='_blank'>
                    <img src={cashQ} alt="" />
                   </Link>
                </div>
                <div className={styles.cardBlog}>
                <span>Semar - e-commerce de vendas e entregas, desenvolvi o checkout da aplicação</span>
                <Link to="https://www.semarentrega.com.br/" target='_blank'>
                    <img src={semar} alt="" />
                </Link>
                </div>
            </div>
        </section>
    )
}