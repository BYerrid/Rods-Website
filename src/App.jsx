import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ExpertWitness from './components/ExpertWitness'
import Investigations from './components/Investigations'
import LegalServices from './components/LegalServices'
import About from './components/About'
import Recognition from './components/Recognition'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ExpertWitness />
        <Investigations />
        <LegalServices />
        <About />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
