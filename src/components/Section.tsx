// src/components/Section.tsx

type SectionProps = {
    title?: string
    children: React.ReactNode
  }
  
  export default function Section({ title, children }: SectionProps) {
    return (
      <section style={{ padding: "60px 20px", maxWidth: 960, margin: "0 auto" }}>
        {title && <h2 style={{ marginBottom: 24 }}>{title}</h2>}
        {children}
      </section>
    )
  }