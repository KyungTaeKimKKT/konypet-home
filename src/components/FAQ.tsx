// src/components/FAQ.tsx

import Section from "@/components/Section"

type FAQItem = {
  q: string
  a: string
}

export default function FAQSection({ items }: { items: FAQItem[] }) {
  return (
    <Section title="자주 묻는 질문">
      {items.map((item, idx) => (
        <details
          key={idx}
          style={{
            marginBottom: 16,
            padding: "12px 16px",
            border: "1px solid #eee",
            borderRadius: 6,
          }}
        >
          <summary
            style={{
              cursor: "pointer",
              fontWeight: 600,
              listStyle: "none",
            }}
          >
            Q. {item.q}
          </summary>

          <div
            style={{
              marginTop: 10,
              paddingLeft: 12,
              color: "#555",
              whiteSpace: "pre-line",
            }}
          >
            <strong>A.</strong> {item.a}
          </div>
        </details>
      ))}
    </Section>
  )
}