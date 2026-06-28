import { useState } from 'react'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LegalModal from './components/LegalModal'
import MentionsLegales from './components/MentionsLegales'
import PolitiqueConfidentialite from './components/PolitiqueConfidentialite'

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [legalModal, setLegalModal] = useState(null)

  return (
    <>
      <Loader onDone={() => setLoaderDone(true)} />
      <Cursor />

      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <div id="mob-menu" className={mobileOpen ? 'open' : ''}>
        {['#hero','#about','#skills','#services','#projects','#contact'].map((href, i) => (
          <a key={i} href={href} onClick={() => setMobileOpen(false)}>
            {href.slice(1).toUpperCase()}
          </a>
        ))}
      </div>

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer openModal={setLegalModal} />

      <LegalModal id="modal-ml" open={legalModal === 'ml'} onClose={() => setLegalModal(null)}>
        <MentionsLegales />
      </LegalModal>
      <LegalModal id="modal-pc" open={legalModal === 'pc'} onClose={() => setLegalModal(null)}>
        <PolitiqueConfidentialite />
      </LegalModal>
    </>
  )
}
