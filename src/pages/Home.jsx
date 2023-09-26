import { BlogComponent } from '../components/BlogComponent'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HeroHome } from '../components/HeroHome'
import { Works } from '../components/Works'


export  const Home = () => {

    return(
       <>
         <Header />
          <HeroHome />
          <BlogComponent />
          <Works />
          <Footer />
       </>
       
    )
}
