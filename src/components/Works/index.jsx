import { Link } from 'react-router-dom'
import olivas from '../../assets/olivas-digital.png'
import stwins from '../../assets/stw-institucional.png'
import blog from '../../assets/blog.png'
import barber from '../../assets/barber.png'
import styles from './styles.module.css'
import { useState } from 'react'




export function Works(){
    const [works] = useState(
        [
            {
                img:olivas,
                title:'Site institucional para Olivas digital',
                description:'Um site projeto para prover informações sobre a empresa Olivas',
                link:'https://olivas-digital.vercel.app/'
            },
            {
                img:barber,
                title:'Qcuertes',
                description:'Uma site para anunciar um serviço de barbearia',
                link:'https://barber-cyan-one.vercel.app/'
            },
            {
                img:stwins,
                title:'Stud Travel Work',
                description:'Site desenvolvido para empresa de intercâmbio',
                link:'https://www.stwipis.com/'
            },
            {
                img:blog,
                title:'Stud Travel Work (em desenvolvimento)',
                description:'Blog desenvolvido para empresa de intercâmbio',
                link:'https://blog.stwipis.com/'
            },
            
        ]
    )
    return(
        <section className={styles.works}>
            <h1>Projetos Concluídos</h1>
            {works.map((work) => (
                <Link key={work.link} to={work.link} className={styles.link} target='_blank'>
                    <div  className={styles.cardwork}>
                    <img src={work.img} alt={work.title} />
                        <div>
                        <h3>{work.title}</h3>
                        <p>{work.description}</p>
                        </div>
                    </div>
                </Link>
            ))}
           
        </section>
    )
}