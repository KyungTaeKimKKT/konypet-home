import Section from '@/components/Section'

type Props = {
  title: string
  namePlaceholder: string
  contactPlaceholder: string
  messagePlaceholder: string
  submitText: string
}

export default function ContactForm({
  title,
  namePlaceholder,
  contactPlaceholder,
  messagePlaceholder,
  submitText,
}: Props) {
  return (
    <Section title={title}>
      <form
        style={{
          display: 'grid',
          gap: 12,
          maxWidth: 400,
          margin: '0 auto',
        }}
      >
        <input placeholder={namePlaceholder} />
        <input placeholder={contactPlaceholder} />
        <textarea placeholder={messagePlaceholder} rows={4} />
        <button type="button">{submitText}</button>
      </form>
    </Section>
  )
}
