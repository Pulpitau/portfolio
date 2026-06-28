import { useEffect, useRef } from 'react'

export default function Loader({ onDone }) {
  const ref = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.classList.add('out')
      setTimeout(onDone, 900)
    }, 2300)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <div id="loader" ref={ref}>
      <img src="/logo.png" className="ldr-logo" alt="StoneCode" />
      <div className="ldr-bar">
        <div className="ldr-bar-fill" />
      </div>
    </div>
  )
}
