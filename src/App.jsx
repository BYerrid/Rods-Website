import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import ExpertWitness from './components/ExpertWitness'
import ExpertPlacement from './components/ExpertPlacement'
import Investigations from './components/Investigations'
import LegalServices from './components/LegalServices'
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
        <ExpertPlacement />
        <Investigations />
        <LegalServices />
        <About />
<Contact />
      </main>
      <Footer />
    </>
  )
}
