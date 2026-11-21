import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/profile'

const MAX_ANGLE = (55 * Math.PI) / 180
const CARD_LENGTH = 290
const IDLE_SWAY = 0.085

const clamp = (value: number, minimum: number, maximum: number) => Math.min(Math.max(value, minimum), maximum)

const barcodePattern = [3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 2, 1, 3, 1, 2, 1, 1, 3]

export const DeveloperIdCard = () => {
  const [isTilted, setIsTilted] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const anchorRef = useRef<HTMLDivElement>(null)
  const rigRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLElement>(null)
  const angleRef = useRef(-32 * Math.PI / 180)
  const velocityRef = useRef(0)
  const idleTimeRef = useRef(0)
  const idleModeRef = useRef(false)
  const scrollKickRef = useRef(0)
  const draggingRef = useRef(false)
  const pointerRef = useRef({ id: -1, angle: angleRef.current, time: 0 })

  useEffect(() => {
    const rig = rigRef.current
    const card = cardRef.current
    if (!rig || !card) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    let previousTime = performance.now()
    let previousScrollY = window.scrollY

    const render = () => {
      rig.style.transform = `rotate(${angleRef.current}rad)`
    }

    const tick = (time: number) => {
      const delta = Math.min((time - previousTime) / 1000, 0.033)
      previousTime = time

      if (!draggingRef.current && !reducedMotion) {
        if (Math.abs(scrollKickRef.current) > 0.0001) {
          idleModeRef.current = false
          idleTimeRef.current = 0
          velocityRef.current = clamp(velocityRef.current + scrollKickRef.current, -8, 8)
          scrollKickRef.current *= 0.88
        }

        if (!idleModeRef.current && Math.abs(angleRef.current) < 0.012 && Math.abs(velocityRef.current) < 0.025) {
          idleModeRef.current = true
        }

        if (idleModeRef.current) {
          idleTimeRef.current += delta
          velocityRef.current = 0
          angleRef.current = Math.sin(idleTimeRef.current * 1.05) * IDLE_SWAY
        } else {
          const restoringForce = -15 * angleRef.current
          const damping = -3.5 * velocityRef.current
          velocityRef.current += (restoringForce + damping) * delta
          angleRef.current = clamp(angleRef.current + velocityRef.current * delta, -MAX_ANGLE, MAX_ANGLE)
        }
      }

      render()
      frame = window.requestAnimationFrame(tick)
    }

    render()
    if (reducedMotion) {
      angleRef.current = 0
      render()
    } else {
      frame = window.requestAnimationFrame(tick)
    }

    const handleScroll = () => {
      const scrollDelta = window.scrollY - previousScrollY
      previousScrollY = window.scrollY
      if (!draggingRef.current && Math.abs(scrollDelta) > 0) {
        scrollKickRef.current = clamp(scrollKickRef.current + scrollDelta * 0.0009, -0.08, 0.08)
      }
    }

    const resetClock = () => {
      previousTime = performance.now()
      previousScrollY = window.scrollY
    }
    document.addEventListener('visibilitychange', resetClock)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.cancelAnimationFrame(frame)
      document.removeEventListener('visibilitychange', resetClock)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getPointerAngle = (clientX: number) => {
    const anchor = anchorRef.current
    if (!anchor) return angleRef.current
    const bounds = anchor.getBoundingClientRect()
    const pivotX = bounds.left + bounds.width / 2
    return clamp(-Math.atan2(clientX - pivotX, CARD_LENGTH), -MAX_ANGLE, MAX_ANGLE)
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    event.preventDefault()
    const angle = getPointerAngle(event.clientX)
    draggingRef.current = true
    idleModeRef.current = false
    angleRef.current = angle
    velocityRef.current = 0
    idleTimeRef.current = 0
    scrollKickRef.current = 0
    pointerRef.current = { id: event.pointerId, angle, time: performance.now() }
    cardRef.current?.classList.add('is-dragging')
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (!draggingRef.current) {
      const card = cardRef.current
      if (card) {
        const bounds = card.getBoundingClientRect()
        const x = ((event.clientX - bounds.left) / bounds.width - .5) * 10
        const y = ((event.clientY - bounds.top) / bounds.height - .5) * -8
        card.style.setProperty('--id-tilt-x', `${x}deg`)
        card.style.setProperty('--id-tilt-y', `${y}deg`)
        setIsTilted(true)
      }
      return
    }
    if (event.pointerId !== pointerRef.current.id) return
    const now = performance.now()
    const angle = getPointerAngle(event.clientX)
    const delta = Math.max((now - pointerRef.current.time) / 1000, 0.008)
    velocityRef.current = clamp((angle - pointerRef.current.angle) / delta, -8, 8)
    angleRef.current = angle
    pointerRef.current = { id: event.pointerId, angle, time: now }
  }

  const resetTilt = () => {
    cardRef.current?.style.removeProperty('--id-tilt-x')
    cardRef.current?.style.removeProperty('--id-tilt-y')
    setIsTilted(false)
  }

  const handleCardClick = () => {
    if (!draggingRef.current && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) setIsFlipped((flipped) => !flipped)
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerId !== pointerRef.current.id) return
    draggingRef.current = false
    cardRef.current?.classList.remove('is-dragging')
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }

  return (
    <div ref={anchorRef} className="developer-id-anchor">
      <div ref={rigRef} className="developer-id-rig">
        <div className="developer-id-lanyard" aria-hidden="true"><span className="lanyard-strap" /><span className="lanyard-clip" /></div>
        <article
          ref={cardRef}
          className={`developer-id-card ${isTilted ? 'is-tilted' : ''} ${isFlipped ? 'is-flipped' : ''}`}
          aria-label="IT and cybersecurity identity card for Sammy Moseti Gesabo"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={resetTilt}
          onClick={handleCardClick}
          onLostPointerCapture={() => { draggingRef.current = false; cardRef.current?.classList.remove('is-dragging') }}
        >
          <div className="developer-id-header"><span className="developer-id-initials">SG</span><span><b>CYBERSECURITY ID</b><small>IT &amp; Security · 2026</small></span></div>
          <img className="developer-id-photo" src={profile.photoUrl || 'images/sammy-moseti-gesabo.jpg'} alt="Portrait of Sammy Moseti Gesabo" draggable="false" />
          <h2>{profile.name.toUpperCase()}</h2>
          <p className="developer-id-role">IT &amp; Cybersecurity · Digital Forensics</p>
          <div className="developer-id-meta"><span>SG-0001</span><span>IT / SECURITY</span><span>2026</span></div>
          <div className="developer-id-barcode" aria-hidden="true">{barcodePattern.map((width, index) => <i key={index} style={{ width: `${width}px` }} />)}</div>
          <div className="developer-id-back" aria-hidden={!isFlipped}>
            <div className="developer-id-back-top"><span>SECURITY PROFILE</span><b>SG / 2026</b></div>
            <h2>WHAT I AM</h2>
            <div className="developer-id-checklist"><span><i>✓</i> Computer Security &amp; Forensics</span><span><i>✓</i> IT Networking &amp; Infrastructure</span><span><i>✓</i> Cybersecurity &amp; Security Analysis</span><span><i>✓</i> Digital Forensics</span><span><i>✓</i> Linux &amp; Windows Administration</span></div>
            <p className="developer-id-back-label">TECH STACK</p>
            <div className="developer-id-stack">{['Python', 'Linux', 'Kali Linux', 'Wireshark', 'Nmap', 'OpenSSH', 'Git / GitHub'].map((technology) => <span key={technology}>{technology}</span>)}</div>
            <strong className="developer-id-back-name">{profile.name.toUpperCase()}</strong>
          </div>
        </article>
      </div>
    </div>
  )
}
