import styles from './ServiceSection.module.css'

const points = [
  {
    title: 'Internal Affairs & Police Misconduct',
    body: 'Commanded a 90-person Office of Professional Responsibility overseeing ~700 administrative and criminal cases per year. Wrote the Baltimore Police Department\'s Internal Investigations Manual — still in use today.',
  },
  {
    title: 'Independent & Third-Party Reviews',
    body: 'Established Independent Review Committees for in-custody death investigations. Experienced in conducting neutral, defensible investigations where the institution itself is under scrutiny.',
  },
  {
    title: 'HR & Workplace Investigations',
    body: 'Former Associate General Counsel at Morgan State University handling Title IX, ADA, EEO, and labor & employment matters. Experienced in sensitive workplace investigations requiring discretion and legal rigor.',
  },
  {
    title: 'Policy Development & Compliance',
    body: 'Drafted Use-of-Force, Disciplinary, and Internal Investigation policies for multiple agencies. Familiar with consent decree compliance, DOJ requirements, and accreditation standards.',
  },
]

export default function Investigations() {
  return (
    <section id="investigations" className={`${styles.section} ${styles.dark}`}>
      <div className="container">
        <div className={`${styles.grid} ${styles.gridReverse}`}>
          <div className={styles.sidebar}>
            <p className="section-label" style={{ color: 'var(--gold-light)' }}>Service Area</p>
            <h2 className={`section-title section-title--light`}>
              Administrative &amp; Internal Investigations
            </h2>
            <div className="divider" />
            <p className={`${styles.intro} ${styles.introLight}`}>
              Police departments, universities, corporations, and government agencies
              turn to Mr. Hill when they need an independent investigator with unimpeachable
              credibility. His career spans every side of the internal investigation process —
              as an investigator, a legal advisor, a policy author, and a trainer for federal
              law enforcement agencies.
            </p>
            <a href="#contact" className={`${styles.btn} ${styles.btnLight}`}>
              Request an Investigation
            </a>
          </div>

          <div className={styles.points}>
            {points.map(p => (
              <div key={p.title} className={`${styles.point} ${styles.pointDark}`}>
                <div className={`${styles.pointAccent} ${styles.pointAccentGold}`} />
                <h3 className={`${styles.pointTitle} ${styles.pointTitleLight}`}>{p.title}</h3>
                <p className={`${styles.pointBody} ${styles.pointBodyLight}`}>{p.body}</p>
              </div>
            ))}

            <div className={`${styles.callout} ${styles.calloutDark}`}>
              <p className={styles.calloutQuote}>
                "Teaches Fundamentals for Internal Investigations and Use-of-Force
                Investigations for the Federal Law Enforcement Training Centers (FLETC),
                U.S. Department of Homeland Security."
              </p>
              <p className={`${styles.calloutSource} ${styles.calloutSourceLight}`}>
                FLETC Instructor, 2022–2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
