export default function Footer({ openModal }) {
  const year = new Date().getFullYear()

  return (
    <footer>
      <a href="#hero" className="ft-logo">
        <img src="/logo.png" className="ft-logo-svg" alt="StoneCode" />
      </a>

      <p className="ft-copy">
        © {year} <span>StoneCode</span> — Pierre Nègre. Tous droits réservés.
      </p>

      <div className="ft-links">
        <a href="#" onClick={e => { e.preventDefault(); openModal('ml') }}>Mentions légales</a>
        <a href="#" onClick={e => { e.preventDefault(); openModal('pc') }}>Politique de confidentialité</a>
      </div>
    </footer>
  )
}
