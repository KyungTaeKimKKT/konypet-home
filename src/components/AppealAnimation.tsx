// src/components/AppealAnimation.tsx

// src/components/AppealAnimation.tsx
import { useEffect, useState } from "react"

export default function AppealAnimation() {
  const [phase, setPhase] = useState<0 | 1 | 2>(0)

  useEffect(() => {
    let timers: number[] = []

    const play = () => {
      setPhase(0)
      timers.push(
        window.setTimeout(() => setPhase(1), 300),
        window.setTimeout(() => setPhase(2), 1300),
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
        position: "relative",
        width: "100%",
        maxWidth: 640,
        marginLeft: "auto", // ← 추가
        marginRight: "auto", // ← 추가
        height: 360,
        backgroundImage: "url(/animation_배경.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      {/* 중앙 박스 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "rgba(0,0,0,0.5)",
          padding: "20px 32px",
          borderRadius: 10,
          color: "#fff",
          textAlign: "center",
          minWidth: 260,
        }}
      >
        {/* 첫 줄: 그림 상단 → 중앙 */}
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            opacity: phase >= 1 ? 1 : 0,
            transform:
              phase >= 1
                ? "translateY(0)"
                : "translateY(-200px)", // ★ 핵심
            transition: "all 0.8s ease-out",
          }}
        >
          우리 아이 발 관리,
        </div>

        {/* 둘째 줄: 그림 하단 → 중앙 */}
        <div
          style={{
            marginTop: 8,
            fontSize: 28,
            fontWeight: 800,
            color: "#ffcc00",
            opacity: phase >= 2 ? 1 : 0,
            transform:
              phase >= 2
                ? "translateY(0)"
                : "translateY(200px)", // ★ 핵심
            transition: "all 0.8s ease-out",
          }}
        >
          센스 있게 풋센스로
        </div>
      </div>
    </section>
  )
}