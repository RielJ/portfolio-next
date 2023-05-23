import { Container } from '@/components'
import { Contacts, Hero, Navbar, Portfolio } from '@/features'

export default function Home() {
  return (
    <Container className="relative">
      <div>
        <Navbar />
        <Hero />
      </div>
      <Portfolio />
      <Contacts />
    </Container>
  )
}
