import { useEffect } from 'react'

export default function LegalModal({ id, open, onClose, children }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape' && open) onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.removeEventListener('keydown', handler); if (!open) document.body.style.overflow = '' }
  }, [open, onClose])

  return (
    <div
      id={id}
      className={`legal-overlay${open ? ' open' : ''}`}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="legal-modal">
        <button className="legal-close" onClick={onClose} aria-label="Fermer">
          <i className="fa-solid fa-xmark" />
        </button>
        {children}
      </div>
    </div>
  )
}
