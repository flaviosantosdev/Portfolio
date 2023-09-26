import  linkedin from '../../assets/linkedin.svg'
import  instagram from '../../assets/instagram.svg'
import  github from '../../assets/github.svg'
import styles from './styles.module.css'

export function Footer(){

    return(
        <footer className={styles.footer}>
            
            <a href="">
                <img src={linkedin} alt="" />
            </a>
            <a href="">
                <img src={instagram} alt="" />
            </a>
            <a href="">
                <img src={github} alt="" />
            </a>

            <p>Alguns direitos reservados - 2023</p>
        </footer>
    )
}