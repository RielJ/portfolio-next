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
      <div>
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
