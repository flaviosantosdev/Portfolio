import cv from '../../assets/Flavio-Santos-.pdf'
import styles from './HeroHome.module.css'

export const HeroHome = () => {


    return (
        <>
         <div className={`${styles.heroContainer} container`}>
         <div className={styles.titleContainer}>
            <h2 className={styles.title}>Ola, Eu sou o Flávio,<br />
             Desenvolvedor Fullstack
            </h2>    
            <p>
                Desenvolvedor Fullstack há 4 anos, com conhecimentos <br />
                solidos, em Typescript,Node, Javascript
            </p>

            <a className='button'
              download="Flavio-Santos-.pdf" 
              href={cv} 
              title="Donwload CV"
              >
                Donwload CV
                </a>
          </div>

            <div>
              <img className={styles.profile} src="https://avatars.githubusercontent.com/u/76409563?v=4" alt="" />  
            </div>  
         </div>
        </>
    )
}