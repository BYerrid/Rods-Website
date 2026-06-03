import styles from './ServiceSection.module.css'

const areas = [
  'Internal Affairs & Police Misconduct',
  'Independent & Third-Party Reviews',
  'HR & Workplace Investigations',
  'Policy Development & Compliance',
]

export default function Investigations() {
  return (
    <section id="investigations" className={`${styles.section} ${styles.dark}`}>
      <div className="container">
        <div className={`${styles.grid} ${styles.gridReverse}`}>
          <div className={styles.sidebar}>
            <p className="section-label" style={{ color: 'var(--gold-light)' }}>Service Area</p>
            <h2 className="section-title section-title--light">
              Administrative &amp; Internal Investigations and Consulting
            </h2>
            <div className="divider" />
            <p className={`${styles.intro} ${styles.introLight}`}>
              Hill Legal Consultants provides independent investigation and consulting
              services in the following areas:
            </p>
            <a href="#contact" className={`${styles.btn} ${styles.btnLight}`}>
              Request an Investigation
            </a>
          </div>

          <div className={styles.areaList}>
            {areas.map(area => (
              <div key={area} className={`${styles.areaItem} ${styles.areaItemDark}`}>
                <span className={`${styles.areaAccent} ${styles.areaAccentGold}`} />
                <p className={`${styles.areaText} ${styles.areaTextLight}`}>{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
