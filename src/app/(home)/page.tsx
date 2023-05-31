import { Container } from '@/components'
import { Navbar, Hero, Portfolio, Contacts, About } from './sections'

const HomePage = () => {
  return (
    <Container>
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Portfolio />
      <Contacts />
    </Container>
  )
}

export default HomePage
