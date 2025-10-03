import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { Books } from "../components/books"
import { About } from "../components/about"
import { Reviews } from "../components/reviews"
import { Newsletter } from "../components/newsletter"
import { Contact } from "../components/contact"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Books />
        <About />
        <Reviews />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
