import styles from './ExpertPlacement.module.css'

const features = [
  {
    icon: '⚖',
    title: 'Experts Across Every Field',
    body: 'Beyond his own testimony, Mr. Hill connects trial lawyers with vetted expert witnesses across virtually any discipline — medical, financial, engineering, forensic, and more.',
  },
  {
    icon: '$',
    title: 'Pre-Negotiated Rates',
    body: 'Rates are negotiated in advance so attorneys can plan engagements with confidence. No surprises, no back-and-forth — just straightforward arrangements focused on your case.',
  },
  {
    icon: '✦',
    title: 'Testimony & Report Preparation',
    body: 'Every placed expert is prepared on report guidelines and testimony standards. Mr. Hill draws on decades of courtroom experience to ensure your expert is ready to perform under cross-examination.',
  },
]

export default function ExpertPlacement() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerText}>
            <p className="section-label">Expert Network</p>
            <h2 className="section-title">Need an Expert in Any Field?</h2>
          </div>
          <p className={styles.headerSub}>
            Hill Legal Consultants maintains a network of qualified expert witnesses
            beyond Mr. Hill's own areas of expertise — so your case is never without
            the right voice in the room.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map(f => (
            <div key={f.title} className={styles.card}>
              <span className={styles.icon}>{f.icon}</span>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardBody}>{f.body}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#contact" className={styles.ctaBtn}>Discuss Your Expert Needs</a>
        </div>
      </div>
    </section>
  )
}
