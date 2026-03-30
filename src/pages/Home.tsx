// src/pages/Home.tsx

import {
    HERO,
    // PROBLEMS,
    FEATURES,
    // INGREDIENTS,
    NEED_TO_USE,
    HOW_TO_USE,
    FAQ,
    // COMPANY,
} from "@/constants/contents"
  
import Hero from "@/components/Hero"
import NeedToUseSection from "@/components/NeedToUse"
import AppealAnimation from "@/components/AppealAnimation"
import FeatureList from "@/components/FeatureList"
import HowToUse from "@/components/HowToUse"
import FAQSection from "@/components/FAQ"
import VideoSection from "@/components/VideoSection"
import ContactForm from "@/components/ContactForm"


export default function Home() {
  return (
    <>
      <Hero {...HERO} />
      <a
          href="/풋센스_제품소개서.pdf"
          download
          style={{
          display: "inline-block",
          marginTop: 16,
          padding: "10px 16px",
          border: "1px solid #ccc",
          borderRadius: 6,
          textDecoration: "none",
      }}
      >
      📄 제품 카탈로그 다운로드
      </a>
      <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
      문의하기
      </button>

      <button onClick={() => document.getElementById("video")?.scrollIntoView({ behavior: "smooth" })}>
      제품 영상 보기
      </button>
      <NeedToUseSection items={NEED_TO_USE} />
      <AppealAnimation />
      <FeatureList items={FEATURES} />
      <HowToUse steps={HOW_TO_USE} />
      <section id="video">
          <VideoSection />
      </section>
      <FAQSection items={FAQ} />
      <section id="contact">
          <ContactForm />
      </section>
      <footer style={{ padding: 24, fontSize: 13, color: "#666" }}>
          <div>선부 주식회사</div>
          <div>경기도 평택시 점촌로24번길4</div>
          <div>대표이사 : 신윤숙</div>
          <div>사업자등록번호 : 113-86-53980</div>
          <div>통신판매업 신고번호 : 제2016-수원권선-0364호</div>
          <div>대표전화 : 1599-3046 / 팩스 : 1599-3046</div>
      </footer>
    </>
  )
}