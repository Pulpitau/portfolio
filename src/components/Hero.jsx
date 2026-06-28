import { useEffect, useRef } from 'react'
import { proj3 } from '../utils/canvas3d'

/* ── Terrain canvas ── */
function HeroCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, animId
    let mpx = 0, mpy = 0, heroT = 0

    const COLS = 22, ROWS = 12, SZ = 900, fov = 420

    const heroPts = Array.from({ length: 45 }, () => ({
      x: (Math.random() - .5) * SZ * .7,
      y: Math.random() * -180 - 30,
      z: Math.random() * SZ * .5,
      s: Math.random() * 1.6 + .4,
      sp: Math.random() * .4 + .1,
    }))

    function resize() {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    function waveH(c, r) {
      const wx = (c / COLS - .5) * 5, wz = r / ROWS * 3.5
      return Math.sin(wx * 1.8 + heroT) * 20 + Math.sin(wz * 1.6 - heroT * .7) * 14 + Math.sin((wx + wz) * 1.1 + heroT * .5) * 9
    }

    function tPt(c, r) {
      const baseCX = W * .5, baseY = H * .72
      const x = (c / COLS - .5) * SZ + mpx * 12
      const z = r / ROWS * SZ - SZ * .15
      const y = waveH(c, r)
      const s = fov / (fov + z)
      return [baseCX + x * s, baseY + (-y - z * .48) * s * .72, z, s]
    }

    function draw() {
      if (!W) { animId = requestAnimationFrame(draw); return }
      heroT += .008
      ctx.clearRect(0, 0, W, H)

      // Grid
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c <= COLS; c++) {
          const [px, py, , s] = tPt(c, r)
          const alpha = .06 + s * .08
          ctx.beginPath()
          ctx.moveTo(px, py)
          if (c < COLS) { const [nx, ny] = tPt(c + 1, r); ctx.lineTo(nx, ny) }
          ctx.strokeStyle = `rgba(143,30,29,${alpha})`
          ctx.lineWidth   = .6
          ctx.stroke()
        }
        for (let c = 0; c <= COLS; c++) {
          const [px, py] = tPt(c, r)
          if (r < ROWS - 1) {
            const [nx, ny] = tPt(c, r + 1)
            ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(nx, ny)
            ctx.strokeStyle = `rgba(143,30,29,${.035})`
            ctx.lineWidth = .5; ctx.stroke()
          }
        }
      }

      // Particles
      heroPts.forEach(p => {
        p.y -= p.sp
        if (p.y < -220) { p.y = 60; p.x = (Math.random() - .5) * SZ * .7 }
        const [px, py] = proj3(p.x + mpx * 18, p.y - mpy * 12, p.z + 200, W * .5, H * .5, fov)
        ctx.beginPath()
        ctx.arc(px, py, p.s, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(143,30,29,${.2 + Math.sin(heroT + p.sp) * .15})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    document.addEventListener('mousemove', e => {
      mpx = (e.clientX / window.innerWidth - .5) * 2
      mpy = (e.clientY / window.innerHeight - .5) * 2
    })
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} id="hero-canvas" />
}

/* ── Particle sphere ── */
function HeroSphere() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = 420, H = 420, CX = W / 2, CY = H / 2, R = 155, fov = 500
    const N = 90
    let t = 0, animId

    const pts = Array.from({ length: N }, (_, i) => {
      const golden = Math.PI * (3 - Math.sqrt(5))
      const y = 1 - (i / (N - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = golden * i
      return { ox: r * Math.cos(theta), oy: y, oz: r * Math.sin(theta) }
    })

    function draw() {
      t += .006
      ctx.clearRect(0, 0, W, H)

      const cos = Math.cos(t), sin = Math.sin(t)
      const cosX = Math.cos(t * .4), sinX = Math.sin(t * .4)

      const sorted = pts.map(p => {
        let x = p.ox * cos + p.oz * sin
        let z = -p.ox * sin + p.oz * cos
        let y = p.oy * cosX - z * sinX
        z     = p.oy * sinX + z * cosX
        const s = fov / (fov + z * R)
        return { px: CX + x * R * s, py: CY + y * R * s, z, s }
      }).sort((a, b) => a.z - b.z)

      sorted.forEach(({ px, py, z, s }) => {
        const alpha = .15 + (z + 1) * .35
        const size  = s * 1.8
        ctx.beginPath()
        ctx.arc(px, py, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(143,30,29,${alpha})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <div className="hero-sphere-wrap">
      <canvas ref={ref} width={420} height={420} />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero">
      <HeroCanvas />

      <div className="hero-content">
        <p className="hero-eyebrow">Développeur Web Freelance</p>

        <h1 className="hero-h1">
          <span className="glitch" data-t="PIERRE">PIERRE</span><br />
          <span className="glitch" data-t="NÈGRE">NÈGRE</span>
        </h1>

        <p className="hero-sub">STONECODE</p>
        <p className="hero-tag">Création de sites web & applications sur mesure — du design à la mise en ligne.</p>

        <div className="hero-ctas">
          <a href="#projects" className="btn-p">
            <i className="fa-solid fa-eye" /> Voir mes projets
          </a>
          <a href="#contact" className="btn-s">
            <i className="fa-solid fa-paper-plane" /> Me contacter
          </a>
        </div>
      </div>

      <HeroSphere />

      <div className="hero-terminal">
        <div className="term-hdr">
          <span className="term-dot r" /><span className="term-dot y" /><span className="term-dot g" />
          <span className="term-title">pierre@stonecode ~ zsh</span>
        </div>
        <div className="term-body">
          <div className="term-line"><span className="term-p">❯</span><span className="term-o">whoami</span></div>
          <div className="term-line"><span className="term-o">Pierre Nègre — dev web freelance</span></div>
          <div className="term-line"><span className="term-p">❯</span><span className="term-o">location</span></div>
          <div className="term-line"><span className="term-o">Perpignan, Sud de France 🌞</span></div>
          <div className="term-line"><span className="term-p">❯</span><span className="term-o">stack</span></div>
          <div className="term-line"><span className="term-o">React · Node · PHP · MySQL</span></div>
          <div className="term-line"><span className="term-p">❯</span><span className="term-comment"># available for freelance</span></div>
          <div className="term-line"><span className="term-p">❯</span><span className="term-cursor" /></div>
        </div>
      </div>

      <div className="scroll-ind">
        <span className="scroll-txt">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
