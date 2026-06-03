import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Expert Witness', href: '#expert-witness' },
  { label: 'Investigations', href: '#investigations' },
  { label: 'Legal Services', href: '#legal-services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#home" className={styles.logo}>
          <span className={styles.logoName}>Hill Legal Consultants</span>
          <span className={styles.logoTag}>LLC</span>
        </a>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)} className={styles.link}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)} className={styles.cta}>
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
