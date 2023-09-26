import  linkedin from '../../assets/linkedin.svg'
import  instagram from '../../assets/instagram.svg'
import  github from '../../assets/github.svg'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

export function Footer(){

    return(
        <footer className={styles.footer}>
            
            <Link to="https://www.linkedin.com/in/flavio-santosdev/" target='_blank'>
                <img src={linkedin} alt="" />
             </Link>
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