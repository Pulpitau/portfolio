import { useEffect } from 'react'

const categories = [
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML / CSS',   pct: 95, stars: '★★★★★', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'JavaScript',   pct: 90, stars: '★★★★★', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React',        pct: 85, stars: '★★★★☆', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Tailwind CSS', pct: 80, stars: '★★★★☆', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'PHP',     pct: 82, stars: '★★★★☆', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Node.js', pct: 78, stars: '★★★★☆', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'MySQL',   pct: 80, stars: '★★★★☆', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', pct: 65, stars: '★★★☆☆', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    label: 'Outils & Design',
    skills: [
      { name: 'Git / GitHub', pct: 88, stars: '★★★★★', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Figma',        pct: 75, stars: '★★★★☆', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'VS Code',      pct: 92, stars: '★★★★★', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Vite',         pct: 80, stars: '★★★★☆', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    ],
  },
]

export default function Skills() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          const bar = e.target.querySelector('.s-bar')
          if (bar) bar.style.width = bar.dataset.pct + '%'
        }
      })
    }, { threshold: .2 })

    document.querySelectorAll('.s-card').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills">
      <div className="sec-header rev">
        <p className="sec-eye">Compétences</p>
        <h2 className="sec-ttl">MON ARSENAL</h2>
      </div>

      <div className="skills-cats">
        {categories.map((cat, ci) => (
          <div key={ci}>
            <p className="skills-cat-lbl">{cat.label}</p>
            <div className="skills-grid">
              {cat.skills.map((sk, si) => (
                <div className="s-card rev" key={si} style={{ transitionDelay: `${si * .08}s` }}>
                  <div className="s-icon">
                    <img src={sk.icon} alt={sk.name} loading="lazy" />
                  </div>
                  <p className="s-name">{sk.name}</p>
                  <div className="s-bar-wrap">
                    <div className="s-bar" data-pct={sk.pct} />
                  </div>
                  <p className="s-stars">{sk.stars}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
