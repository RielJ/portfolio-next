import { Container } from '@/components'
import {
  About,
  Contacts,
  Experience,
  Footer,
  Hero,
  Navbar,
  Portfolio,
} from './sections'

const HomePage = () => {
  return (
    <Container>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Portfolio />
      <Contacts />
      <Footer />
    </Container>
  )
}

export default HomePage
