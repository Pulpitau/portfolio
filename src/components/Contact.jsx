import { useRef, useState } from 'react'

export default function Contact() {
  const formRef = useRef(null)
  const [state, setState] = useState('idle') // idle | loading | ok | err

  async function handleSubmit(e) {
    e.preventDefault()
    if (!formRef.current.checkValidity()) { formRef.current.reportValidity(); return }
    setState('loading')

    const form = formRef.current
    const data = {
      name:    form.querySelector('[name=name]').value.trim(),
      email:   form.querySelector('[name=email]').value.trim(),
      subject: form.querySelector('[name=subject]').value.trim(),
      message: form.querySelector('[name=message]').value.trim(),
    }

    try {
      const res  = await fetch('https://formsubmit.co/ajax/pierrenegre66@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      setState(res.ok && json.success === 'true' ? 'ok' : 'err')
    } catch {
      setState('err')
    }
  }

  function addRipple(e) {
    const btn  = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const rip  = document.createElement('span')
    rip.className = 'ripple'
    const size = Math.max(rect.width, rect.height)
    rip.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px`
    btn.appendChild(rip)
    setTimeout(() => rip.remove(), 620)
  }

  return (
    <section id="contact">
      <div className="sec-header rev">
        <p className="sec-eye">Contact</p>
        <h2 className="sec-ttl">TRAVAILLONS ENSEMBLE</h2>
      </div>

      <div className="contact-grid">
        {/* Left col */}
        <div className="rev d1">
          <h3 className="contact-h3">Démarrons votre projet</h3>
          <p className="contact-p">
            Une idée, un projet, une question ? Je suis disponible pour discuter de vos besoins
            et vous proposer une solution adaptée à votre budget et vos délais.
          </p>

          <div className="c-links">
            <a href="mailto:pierrenegre66@gmail.com" className="c-link">
              <span className="c-ico"><i className="fa-solid fa-envelope" /></span>
              pierrenegre66@gmail.com
            </a>
            <a href="tel:+33600000000" className="c-link">
              <span className="c-ico"><i className="fa-solid fa-phone" /></span>
              Disponible sur demande
            </a>
            <span className="c-link">
              <span className="c-ico"><i className="fa-solid fa-location-dot" /></span>
              Perpignan, Sud de France
            </span>
          </div>

          <div className="socials">
            <a href="https://github.com/" className="soc-link" aria-label="GitHub"><i className="fa-brands fa-github" /></a>
            <a href="https://linkedin.com/" className="soc-link" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
          </div>
        </div>

        {/* Right col */}
        <div className="rev d2">
          <div className="form-wrap">
            {state === 'idle' || state === 'loading' ? (
              <form className="form" ref={formRef} onSubmit={handleSubmit} noValidate>
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="form-row">
                  <div className="fg">
                    <label className="fl" htmlFor="fn">Nom</label>
                    <input type="text" id="fn" name="name" className="fi" placeholder="Jean Dupont" required />
                  </div>
                  <div className="fg">
                    <label className="fl" htmlFor="fe">Email</label>
                    <input type="email" id="fe" name="email" className="fi" placeholder="jean@exemple.fr" required />
                  </div>
                </div>

                <div className="fg">
                  <label className="fl" htmlFor="fs">Sujet</label>
                  <input type="text" id="fs" name="subject" className="fi" placeholder="Création de site vitrine" required />
                </div>

                <div className="fg">
                  <label className="fl" htmlFor="fm">Message</label>
                  <textarea id="fm" name="message" className="fta" placeholder="Décrivez votre projet..." required />
                </div>

                <button type="submit" className="btn-send" onClick={addRipple} disabled={state === 'loading'}>
                  {state === 'loading'
                    ? <><i className="fa-solid fa-spinner fa-spin" /> Envoi en cours…</>
                    : <><i className="fa-solid fa-paper-plane" /> Envoyer le message</>
                  }
                </button>
              </form>
            ) : null}

            {state === 'ok' && (
              <div className="form-feedback form-ok show">
                <div className="form-feedback-ico"><i className="fa-solid fa-check" /></div>
                <p className="form-feedback-ttl">MESSAGE ENVOYÉ !</p>
                <p className="form-feedback-txt">Merci pour votre message. Je vous répondrai dans les meilleurs délais, généralement sous 24h.</p>
                <button className="form-feedback-back" onClick={() => setState('idle')}>← Envoyer un autre message</button>
              </div>
            )}

            {state === 'err' && (
              <div className="form-feedback form-err show">
                <div className="form-feedback-ico"><i className="fa-solid fa-triangle-exclamation" /></div>
                <p className="form-feedback-ttl">UNE ERREUR EST SURVENUE</p>
                <p className="form-feedback-txt">
                  L'envoi a échoué. Vous pouvez me contacter directement à{' '}
                  <a href="mailto:pierrenegre66@gmail.com">pierrenegre66@gmail.com</a>
                </p>
                <button className="form-feedback-back" onClick={() => setState('idle')}>← Réessayer</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
