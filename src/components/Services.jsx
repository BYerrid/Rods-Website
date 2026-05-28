import styles from './Services.module.css'

const steps = [
  {
    number: '01',
    title: 'Tell Us About Your Case',
    description:
      'Share the details of your case, the subject matter expertise you need, and any timeline or budget considerations. A quick call is often all it takes.',
  },
  {
    number: '02',
    title: 'We Identify the Right Candidates',
    description:
      'Drawing on an extensive network built over decades, we identify qualified experts whose credentials, communication style, and availability match your needs.',
  },
  {
    number: '03',
    title: 'Review & Vet Together',
    description:
      'We provide detailed profiles on each candidate. We help you evaluate credentials, prior testimony, and potential vulnerabilities on cross-examination.',
  },
  {
    number: '04',
    title: 'Retained and Ready',
    description:
      'Once you select your expert, we handle the engagement logistics and remain available throughout the case to support the relationship.',
  },
]

const areas = [
  'Medical & Healthcare',
  'Engineering & Construction',
  'Financial & Accounting',
  'Product Liability',
  'Accident Reconstruction',
  'Environmental Science',
  'Forensic Analysis',
  'Mental Health',
  'Economics & Damages',
  'Technology & Cybersecurity',
]

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">How It Works</p>
          <h2 className="section-title">A Process Built Around Your Case</h2>
          <p className={styles.intro}>
            Every engagement is handled personally. We don't run a database — we apply
            judgment honed from years in the courtroom to find the expert who will make
            the strongest impression on a jury.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map(s => (
            <div key={s.number} className={styles.step}>
              <span className={styles.stepNumber}>{s.number}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.areasWrap}>
          <p className="section-label">Areas of Practice</p>
          <h2 className={`section-title ${styles.areasTitle}`}>Expert Witnesses Across Every Field</h2>
          <div className={styles.areas}>
            {areas.map(a => (
              <span key={a} className={styles.area}>{a}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
