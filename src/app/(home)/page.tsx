import { Container } from '@/components'
import {
  About,
  Contacts,
  Experience,
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
    </Container>
  )
}

export default HomePage
