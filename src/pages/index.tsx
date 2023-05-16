import { Container } from '@/components'
import { About, Contacts, Hero, Navbar, Portfolio } from '@/features'

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contacts />
    </Container>
  )
}
