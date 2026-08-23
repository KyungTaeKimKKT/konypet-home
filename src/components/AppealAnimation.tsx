import { useEffect, useState } from 'react'

type Props = {
  line1: string
  line2: string
}

export default function AppealAnimation({ line1, line2 }: Props) {
  const [phase, setPhase] = useState<0 | 1 | 2>(0)

  useEffect(() => {
    const timers: number[] = []

    const play = () => {
      setPhase(0)
      timers.push(
        window.setTimeout(() => setPhase(1), 300),
        window.setTimeout(() => setPhase(2), 1300)
      )
    }

    play()
    const interval = window.setInterval(play, 10000)

    return () => {
      timers.forEach(clearTimeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <section
      id="appealAnimation"
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 640,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 360,
        backgroundImage: 'url(/animation_배경.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0.5)',
          padding: '20px 32px',
          borderRadius: 10,
          color: '#fff',
          textAlign: 'center',
          minWidth: 260,
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? 'translateY(0)' : 'translateY(-200px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          {line1}
        </div>

        <div
          style={{
            marginTop: 8,
            fontSize: 28,
            fontWeight: 800,
            color: '#ffcc00',
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(200px)',
            transition: 'all 0.8s ease-out',
          }}
        >
          {line2}
        </div>
      </div>
    </section>
  )
}
