// src/components/Hero.tsx

type HeroProps = {
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
  }
  
export default function Hero({
    title,
    subtitle,
    // ctaPrimary,
    // ctaSecondary,
    }: HeroProps) {
        
    return (
      <header
        style={{
          padding: "30px 12px",
          textAlign: "center",
          background: "#f7f7f7",
        }}
      >
        {/* 제품 로고 */}
        <img
          src="/logo1.jpg"
          alt="코니펫 풋센스"
          style={{ width: 240, marginBottom: 0}}
        />
        
        <h1 style={{ color: "#1f2d3d", fontWeight: 700, marginBottom: 16 }}>{title}</h1>
        <p style={{ color: "#555", margin: "6px 0 6px" }}>{subtitle}</p>
  
        {/* <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button>{ctaPrimary}</button>
          <button>{ctaSecondary}</button>
        </div> */}
      </header>
    )
}