import { Container } from '@/components'
import { Navbar, Hero, Portfolio, Contacts } from './sections'

const HomePage = () => {
  return (
    <Container>
      <div>
        <Navbar />
        <Hero />
      </div>
      <Portfolio />
      <Contacts />
    </Container>
  )
}

export default HomePage
