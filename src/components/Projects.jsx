const projects = [
  {
    title: 'Projet en cours',
    status: 'EN DÉVELOPPEMENT',
    stack: ['React', 'Node.js'],
    desc: 'Nouvelle réalisation en cours de développement. Revenez bientôt pour découvrir ce projet.',
    icon: 'fa-solid fa-code',
  },
  {
    title: 'Site Vitrine',
    status: 'À VENIR',
    stack: ['HTML', 'CSS', 'JS'],
    desc: 'Projet de site vitrine en cours de conception. Les détails seront disponibles prochainement.',
    icon: 'fa-solid fa-globe',
  },
  {
    title: 'Application Web',
    status: 'À VENIR',
    stack: ['React', 'MySQL'],
    desc: 'Application web sur mesure. Ce projet sera bientôt présenté avec captures et démonstration.',
    icon: 'fa-solid fa-layer-group',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="sec-header rev">
        <p className="sec-eye">Projets</p>
        <h2 className="sec-ttl">MES RÉALISATIONS</h2>
      </div>

      <div className="proj-grid">
        {projects.map((p, i) => (
          <div className={`proj-wrap rev d${i + 1}`} key={i}>
            <div className="proj-card">
              {/* Front */}
              <div className="proj-face proj-front">
                <div className="proj-visual">
                  <div className="proj-ph">
                    <i className={`proj-ph-ico ${p.icon}`} />
                  </div>
                </div>
                <div className="proj-info">
                  <p className="proj-status"><span className="proj-dot" />{p.status}</p>
                  <p className="proj-ttl-f">{p.title}</p>
                  <div className="proj-stack-f">
                    {p.stack.map(s => <span className="pill" key={s}>{s}</span>)}
                  </div>
                </div>
              </div>

              {/* Back */}
              <div className="proj-face proj-back">
                <div>
                  <p className="proj-badge"><i className="fa-solid fa-circle-dot" />{p.status}</p>
                  <p className="proj-ttl-b">{p.title}</p>
                  <p className="proj-desc-b">{p.desc}</p>
                  <div className="proj-stack-b">
                    {p.stack.map(s => <span className="pill" key={s}>{s}</span>)}
                  </div>
                </div>
                <div className="proj-actions">
                  <a href="#contact" className="btn-proj btn-proj-main">
                    <i className="fa-solid fa-envelope" /> Me contacter
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
