// src/pages/HomeEn.tsx

import {
  HERO,
  APPEAL_ITEMS,
  FEATURES,
  NEED_TO_USE,
  HOW_TO_USE,
  FAQ,
  CONTACT,
} from '@/constants/contents.en'

import Hero from '@/components/Hero'
import NeedToUseSection from '@/components/NeedToUse'
import AppealAnimation from '@/components/AppealAnimation'
import FeatureList from '@/components/FeatureList'
import HowToUse from '@/components/HowToUse'
import FAQSection from '@/components/FAQ'
import VideoSection from '@/components/VideoSection'
import ContactForm from '@/components/ContactForm'

export default function HomeEn() {
  return (
    <>
      <Hero {...HERO} />

      <a
        href="/footsense_catalog.pdf"
        download
        style={{
          display: 'inline-block',
          marginTop: 16,
          padding: '10px 16px',
          border: '1px solid #ccc',
          borderRadius: 6,
          textDecoration: 'none',
        }}
      >
        Download Product Catalog
      </a>

      <button
        onClick={() =>
          document
            .getElementById('contact')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        Contact Us
      </button>

      <button
        onClick={() =>
          document
            .getElementById('video')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        Watch Product Video
      </button>

      <NeedToUseSection {...NEED_TO_USE} />
      <AppealAnimation {...APPEAL_ITEMS} />
      <FeatureList {...FEATURES} />
      <HowToUse {...HOW_TO_USE} />

      <section id="video">
        <VideoSection title="Product Video" />
      </section>

      <FAQSection {...FAQ} />

      <section id="contact">
        <ContactForm {...CONTACT} />
      </section>

      <footer style={{ padding: 24, fontSize: 13, color: '#666' }}>
        <div>Sunbu Co., Ltd.</div>
        <div>
          4, Jeomchon-ro 24beon-gil, Pyeongtaek-si, Gyeonggi-do, Republic of
          Korea
        </div>
        <div>CEO: Shin Yoon-sook</div>
        <div>Business Registration No.: 113-86-53980</div>
        <div>E-Commerce Registration No.: 2016-Suwon Gwonseon-0364</div>
        <div>Tel: 1599-3046 / Fax: 1599-3046</div>
      </footer>
    </>
  )
}
