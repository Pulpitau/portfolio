import { useEffect, useRef } from 'react'
import { proj3 } from '../utils/canvas3d'

function Globe() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = 210, H = 210, CX = W / 2, CY = H / 2, R = 80, fov = 340
    const LAT = 9, LON = 12
    let ry = 0, animId

    function sphPt(lat, lon, r) {
      const phi   = (lat / LAT) * Math.PI
      const theta = (lon / LON) * Math.PI * 2
      const x = Math.sin(phi) * Math.cos(theta)
      const y = Math.cos(phi)
      const z = Math.sin(phi) * Math.sin(theta)
      const cos = Math.cos(r), sin = Math.sin(r)
      return [x * cos + z * sin, y, -x * sin + z * cos]
    }

    function draw() {
      ry += .005
      ctx.clearRect(0, 0, W, H)

      // Latitude rings
      for (let i = 1; i < LAT; i++) {
        let started = false
        ctx.beginPath()
        for (let j = 0; j <= LON; j++) {
          const [x, y, z] = sphPt(i, j % LON, ry)
          const [px, py]  = proj3(x * R, y * R, z * R, CX, CY, fov)
          if (z >= -.05) {
            started ? ctx.lineTo(px, py) : ctx.moveTo(px, py)
            started = true
          } else {
            started = false
          }
        }
        ctx.strokeStyle = 'rgba(143,30,29,.45)'
        ctx.lineWidth   = .9
        ctx.stroke()
      }

      // Longitude lines
      for (let j = 0; j < LON; j++) {
        let started = false
        ctx.beginPath()
        for (let i = 0; i <= LAT; i++) {
          const [x, y, z] = sphPt(i, j, ry)
          const [px, py]  = proj3(x * R, y * R, z * R, CX, CY, fov)
          if (z >= -.05) {
            started ? ctx.lineTo(px, py) : ctx.moveTo(px, py)
            started = true
          } else {
            started = false
          }
        }
        ctx.strokeStyle = 'rgba(143,30,29,.28)'
        ctx.lineWidth   = .7
        ctx.stroke()
      }

      // Dots on visible vertices
      for (let i = 1; i < LAT; i++) {
        for (let j = 0; j < LON; j++) {
          const [x, y, z] = sphPt(i, j, ry)
          if (z >= 0) {
            const [px, py] = proj3(x * R, y * R, z * R, CX, CY, fov)
            ctx.beginPath()
            ctx.arc(px, py, 1.5, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(143,30,29,${.5 + z * .45})`
            ctx.fill()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <div className="globe-wrap">
      <canvas ref={ref} width={210} height={210} />
      <span className="globe-label">Perpignan · Sud de France</span>
    </div>
  )
}

const timeline = [
  { date: '2022 — Présent', role: 'Développeur Web Freelance', desc: 'Projets web sur mesure — sites vitrines, e-commerce, applications React.' },
  { date: '2021 — 2022',    role: 'Formation Développeur Web',  desc: 'Maîtrise du stack HTML/CSS/JS, PHP, MySQL et premiers projets clients.' },
  { date: '2020',           role: 'Découverte du développement', desc: 'Premiers pas avec HTML/CSS, coup de foudre pour le web.' },
]

export default function About() {
  const tlRef  = useRef(null)
  const progRef = useRef(null)

  useEffect(() => {
    const items = document.querySelectorAll('.tl-item')
    const prog  = progRef.current

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in') }
      })
    }, { threshold: .2 })

    items.forEach(el => obs.observe(el))

    const tlObs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && prog) prog.style.height = '100%'
    }, { threshold: .1 })

    if (tlRef.current) tlObs.observe(tlRef.current)

    // Reveal
    const revObs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: .15 })
    document.querySelectorAll('.rev').forEach(el => revObs.observe(el))

    return () => { obs.disconnect(); tlObs.disconnect(); revObs.disconnect() }
  }, [])

  return (
    <section id="about">
      <div className="sec-header rev">
        <p className="sec-eye">À Propos</p>
        <h2 className="sec-ttl">QUI SUIS-JE ?</h2>
      </div>

      <div className="about-grid">
        <div className="about-left rev d1">
          <Globe />

          <div className="about-badges">
            <div className="badge"><span className="badge-num">3+</span><span className="badge-lbl">Ans d'expérience</span></div>
            <div className="badge"><span className="badge-num">20+</span><span className="badge-lbl">Projets livrés</span></div>
            <div className="avail"><span className="avail-dot" /><span className="avail-txt">Disponible pour mission</span></div>
          </div>
        </div>

        <div className="about-right">
          <p className="bio rev d2">
            Je suis <strong>Pierre Nègre</strong>, développeur web freelance basé à <strong>Perpignan, dans le Sud de France</strong>.
            Sous la marque <strong>StoneCode</strong>, je conçois des solutions digitales sur mesure — des sites vitrines aux applications web complexes.
          </p>
          <p className="bio rev d3">
            Passionné par le code propre et les interfaces qui <strong>donnent envie d'interagir</strong>, j'accompagne mes clients
            de la conception au déploiement, avec un regard toujours tourné vers la <strong>performance et l'expérience utilisateur</strong>.
          </p>

          <div className="timeline rev d4" ref={tlRef}>
            <div className="tl-prog" ref={progRef} />
            {timeline.map((item, i) => (
              <div className="tl-item" key={i} style={{ transitionDelay: `${i * .15}s` }}>
                <p className="tl-date">{item.date}</p>
                <p className="tl-role">{item.role}</p>
                <p className="tl-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
