import { About, Contacts, Container, Navbar, Portfolio } from '@/components'

export default function Home() {
  return (
    <Container>
      <Navbar />
      <About />
      <div id="portfolio"></div>
      <Portfolio />
      <Contacts />
    </Container>
  )
}
