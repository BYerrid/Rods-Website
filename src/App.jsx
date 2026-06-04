import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ExpertWitness from './components/ExpertWitness'
import LegalServices from './components/LegalServices'
import Investigations from './components/Investigations'
import About from './components/About'
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
        <LegalServices />
        <Investigations />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
