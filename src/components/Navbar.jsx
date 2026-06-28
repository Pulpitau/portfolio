import { useEffect, useState } from 'react'

const links = [
  { href: '#about',    label: 'À Propos' },
  { href: '#skills',   label: 'Compétences' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact',  label: 'Contact', cta: true },
]

export default function Navbar({ mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">
        <img src="/logo.png" className="nav-logo-svg" alt="StoneCode" />
      </a>

      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className={l.cta ? 'nav-cta' : ''}>{l.label}</a>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger${mobileOpen ? ' open' : ''}`}
        aria-label="Menu"
        onClick={() => setMobileOpen(v => !v)}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
