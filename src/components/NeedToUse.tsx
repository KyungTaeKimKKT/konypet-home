import Section from "@/components/Section"

export default function NeedToUse({ items }: { items: string[] }) {
  return (
    <Section title="이럴 때 필요해요">
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((text, idx) => (
          <li key={idx} style={{ marginBottom: 36 }}>
            {/* 문구 */}
            <strong>✔ {text}</strong>

            {/* 이미지 */}
            <div
              style={{
                marginTop: 12,
                width: "100%",
                maxWidth: 640,
                marginLeft: "auto", // ← 추가
                marginRight: "auto", // ← 추가
                borderRadius: 8,
                overflow: "hidden",
                background: "#f5f5f5",
              }}
            >
              <img
                src={`/need_${idx + 1}.jpg`}
                alt={text}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}