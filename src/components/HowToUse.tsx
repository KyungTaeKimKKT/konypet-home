import Section from "@/components/Section"

export default function HowToUse({ steps }: { steps: string[] }) {
  return (
    <Section title="사용 방법">
      <ol style={{ paddingLeft: 0 }}>
        {steps.map((step, idx) => (
          <li
            key={idx}
            style={{
              listStyle: "none",
              maxWidth: 640,
              marginLeft: "auto", // ← 추가
              marginRight: "auto", // ← 추가
              marginBottom: 20,
              padding: 12,
              border: "1px solid #eee",
              borderRadius: 6,
              display: "flex",
              gap: 16,
              alignItems: "center",
            }}
          >
            {/* STEP 이미지 (왼쪽) */}
            <div
              style={{
                width: 96,
                height: 96,
                flexShrink: 0,
                borderRadius: 6,
                overflow: "hidden",
                background: "#f5f5f5",
              }}
            >
              <img
                src={`use_${idx + 1}.jpg`}
                alt={`STEP ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            {/* 텍스트 영역 (오른쪽) */}
            <div style={{ maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
              <strong>STEP {idx + 1}</strong>
              <div style={{ marginTop: 6 }}>{step}</div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}