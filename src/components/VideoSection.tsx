// src/components/VideoSection.tsx

import Section from "@/components/Section"

export default function VideoSection() {
  return (
    <Section title="제품 소개 영상">
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          aspectRatio: "9 / 16",   // 쇼츠 기준
          margin: "0 auto",
          overflow: "hidden",
          borderRadius: 8,
          background: "#000",
        }}
      >
        <video
          src="/코니펫쇼츠.mp4"
          controls
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <br />

      <div
        style={{
          width: "100%",
          maxWidth: 480,
          aspectRatio: "9 / 16",   // 쇼츠 기준
          margin: "0 auto",
          overflow: "hidden",
          borderRadius: 8,
          background: "#000",
        }}
      >
        <video
          src="/바르는영상.mp4"
          controls
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <br />
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          aspectRatio: "9 / 16",   // 쇼츠 기준
          margin: "0 auto",
          overflow: "hidden",
          borderRadius: 8,
          background: "#000",
        }}
      >
        <video
          src="/흡수비교.mp4"
          controls
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </Section>
  )
}