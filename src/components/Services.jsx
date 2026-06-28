import { useEffect, useRef } from 'react'
import { rotY, rotX, proj3 } from '../utils/canvas3d'

const SHAPES = ['cube', 'octahedron', 'ring']

function Shape3D({ type, id }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const W = 54, H = 54, CX = W / 2, CY = H / 2, fov = 120
    let t = 0, animId

    function drawCube() {
      const s = 14
      const verts = [
        [-s,-s,-s],[s,-s,-s],[s,s,-s],[-s,s,-s],
        [-s,-s, s],[s,-s, s],[s,s, s],[-s,s, s],
      ].map(([x,y,z]) => {
        let p = rotY(x,y,z,t)
        p = rotX(...p, t*.7)
        return proj3(...p, CX, CY, fov)
      })
      const edges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]]
      edges.forEach(([a,b]) => {
        ctx.beginPath()
        ctx.moveTo(verts[a][0], verts[a][1])
        ctx.lineTo(verts[b][0], verts[b][1])
        const alpha = .25 + (verts[a][2] + verts[b][2]) * .2
        ctx.strokeStyle = `rgba(143,30,29,${Math.max(.15, Math.min(.9, alpha))})`
        ctx.lineWidth = 1; ctx.stroke()
      })
    }

    function drawOctahedron() {
      const s = 16
      const verts = [[0,-s,0],[s,0,0],[0,0,s],[-s,0,0],[0,0,-s],[0,s,0]]
        .map(([x,y,z]) => {
          let p = rotY(x,y,z,t)
          p = rotX(...p, t*.6)
          return proj3(...p, CX, CY, fov)
        })
      const edges = [[0,1],[0,2],[0,3],[0,4],[5,1],[5,2],[5,3],[5,4],[1,2],[2,3],[3,4],[4,1]]
      edges.forEach(([a,b]) => {
        ctx.beginPath()
        ctx.moveTo(verts[a][0], verts[a][1])
        ctx.lineTo(verts[b][0], verts[b][1])
        ctx.strokeStyle = 'rgba(143,30,29,.5)'
        ctx.lineWidth = 1; ctx.stroke()
      })
    }

    function drawRing() {
      const N = 16, R = 16, r2 = 6
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2
        const x = Math.cos(a) * R, z = Math.sin(a) * R
        let p = rotY(x, 0, z, t)
        p = rotX(...p, t * .5)
        const [px, py, s] = proj3(...p, CX, CY, fov)
        ctx.beginPath()
        ctx.arc(px, py, r2 * s, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(143,30,29,${.2 + s * .4})`
        ctx.lineWidth = .8; ctx.stroke()
      }
    }

    function draw() {
      t += .018
      ctx.clearRect(0, 0, W, H)
      if (type === 'cube')        drawCube()
      else if (type === 'octahedron') drawOctahedron()
      else                        drawRing()
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [type])

  return <canvas ref={ref} width={54} height={54} />
}

const services = [
  {
    shape: 'cube',
    title: 'DÉVELOPPEMENT WEB',
    desc: 'Sites vitrines, e-commerce, applications web — développés avec les technologies modernes pour des performances optimales.',
    tags: ['React', 'Node.js', 'PHP', 'MySQL'],
  },
  {
    shape: 'octahedron',
    title: 'RESPONSIVE DESIGN',
    desc: 'Interfaces parfaitement adaptées à tous les écrans, du mobile au desktop, avec une attention particulière aux transitions et animations.',
    tags: ['Mobile First', 'CSS Grid', 'Tailwind', 'Figma'],
  },
  {
    shape: 'ring',
    title: 'UI/UX DESIGN',
    desc: 'Expériences utilisateur pensées pour convertir — ergonomie soignée, identité visuelle cohérente, parcours intuitifs.',
    tags: ['Figma', 'Prototypage', 'Design System', 'A/B Test'],
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="sec-header rev">
        <p className="sec-eye">Services</p>
        <h2 className="sec-ttl">CE QUE JE FAIS</h2>
      </div>

      <div className="svc-grid">
        {services.map((svc, i) => (
          <div className={`svc-card rev d${i + 1}`} key={i}>
            <div className="svc-ico-3d">
              <Shape3D type={svc.shape} id={i} />
            </div>
            <h3 className="svc-ttl">{svc.title}</h3>
            <p className="svc-desc">{svc.desc}</p>
            <div className="svc-tags">
              {svc.tags.map(t => <span className="svc-tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
