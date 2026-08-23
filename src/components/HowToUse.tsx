import Section from '@/components/Section'

type Props = {
  title: string
  steps: string[]
}

export default function HowToUse({ title, steps }: Props) {
  return (
    <Section title={title}>
      <ol style={{ paddingLeft: 0 }}>
        {steps.map((step, idx) => (
          <li
            key={idx}
            style={{
              listStyle: 'none',
              maxWidth: 640,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: 20,
              padding: 12,
              border: '1px solid #eee',
              borderRadius: 6,
              display: 'flex',
              gap: 16,
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 96,
                height: 96,
                flexShrink: 0,
                borderRadius: 6,
                overflow: 'hidden',
                background: '#f5f5f5',
              }}
            >
              <img
                src={`use_${idx + 1}.jpg`}
                alt={`STEP ${idx + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>

            <div
              style={{ maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}
            >
              <strong>STEP {idx + 1}</strong>
              <div style={{ marginTop: 6 }}>{step}</div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
