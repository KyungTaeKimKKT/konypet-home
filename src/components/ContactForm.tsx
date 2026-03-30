// src/components/ContactForm.tsx

import Section from "@/components/Section"

export default function ContactForm() {
  return (
    <Section title="문의하기">
      <form
        style={{
          display: "grid",
          gap: 12,
          maxWidth: 400,
          margin: "0 auto",      // ★ 핵심
        }}
      >
        <input placeholder="이름" />
        <input placeholder="연락처" />
        <textarea placeholder="문의 내용" rows={4} />
        <button type="button">보내기</button>
      </form>
    </Section>
  )
}