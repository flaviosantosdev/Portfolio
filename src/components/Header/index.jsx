import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { MdHome,MdBackupTable,MdContactPage } from 'react-icons/md'

export const Header = () => {


    return(
        <header className={`${styles.navContainer} container`}>
            <nav className={styles.navigation}>
                <div>
                </div>
                <ul>
                    <li><Link to="/"><MdHome/>Home</Link></li>|
                    <li><Link to="/blog"><MdBackupTable/>Blog</Link></li>|
                    <li><Link to="/contato"><MdContactPage />Contato</Link></li>
                </ul>
            </nav>
       </header>
    )
}