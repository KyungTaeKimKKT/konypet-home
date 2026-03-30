// src/components/FeatureList.tsx

import Section from "@/components/Section"

type Feature = {
  title: string
  desc: string
}

export default function FeatureList({ items }: { items: Feature[] }) {
  return (
    <Section title="제품 특징">
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, idx) => (
          <li key={idx} style={{ marginBottom: 32 }}>
            {/* 제목 */}
            <strong>✔ {item.title}</strong>

            {/* 기능 이미지 */}
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
                src={`/feature_${idx + 1}.jpg`}
                alt={`제품 특징 ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>

            {/* 설명 */}
            <div style={{ color: "#555", marginTop: 8 }}>
              {item.desc}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}