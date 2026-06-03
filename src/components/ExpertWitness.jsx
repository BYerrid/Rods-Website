import styles from './ServiceSection.module.css'

const areas = [
  'Police & Corrections Misconduct & Use-of-Force Investigations',
  'Constitutional Policing',
  'Investigations, Discipline & Use-of-Force Policy Development and Review',
  'Police Operational Practices and Procedures',
  'Police Supervisory & Management Practices and Procedures',
]

export default function ExpertWitness() {
  return (
    <section id="expert-witness" className={`${styles.section} ${styles.light}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.sidebar}>
            <p className="section-label">Service Area</p>
            <h2 className="section-title">Expert Witness</h2>
            <div className="divider" />
            <p className={styles.intro}>
              Rodney E. Hill, Esquire will provide expert witness testimony and consulting
              in the following areas:
            </p>
            <a href="#contact" className={styles.btn}>Retain Mr. Hill</a>
          </div>

          <div className={styles.areaList}>
            {areas.map(area => (
              <div key={area} className={styles.areaItem}>
                <span className={styles.areaAccent} />
                <p className={styles.areaText}>{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
