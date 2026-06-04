import styles from './ServiceSection.module.css'

const points = [
  {
    title: 'Personal Injury',
    body: 'Deep knowledge of use-of-force standards, police liability, and governmental immunity provides a unique perspective for personal injury matters involving law enforcement conduct, civil rights violations, and institutional negligence.',
  },
  {
    title: 'Criminal Defense',
    body: 'Over 500 bench and jury trials in Baltimore County Circuit Court. Handled felony domestic violence, homicide, and human trafficking cases. That trial experience directly informs effective defense strategy.',
  },
  {
    title: 'Administrative Law',
    body: 'Extensive experience prosecuting and defending administrative hearings, drafting administrative policy, and navigating the intersection of government agency procedure and civil rights. Former Chief Legal Advisor to a major metropolitan police department.',
  },
  {
    title: 'Labor & Employment',
    body: 'Represented police departments in union negotiations and labor hearings. Handled EEO, Title IX, ADA, and employment matters at the university level. Trained law enforcement supervisors on supervisory liability.',
  },
]

export default function LegalServices() {
  return (
    <section id="legal-services" className={`${styles.section} ${styles.light}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.sidebar}>
            <p className="section-label">Service Area</p>
            <h2 className="section-title">Legal Services</h2>
            <div className="divider" />
            <p className={styles.intro}>
              Mr. Hill is a seasoned litigator and licensed attorney admitted to the
              Maryland Bar and the United States District Court of Maryland. His practice
              is built on 40 years of hands-on experience navigating the criminal justice
              system — not just legal theory.
            </p>
            <div className={styles.admissions}>
              <p className={styles.admissionsLabel}>Bar Admissions</p>
              <ul className={styles.admissionsList}>
                <li>Maryland State Bar</li>
                <li>U.S. District Court of Maryland</li>
              </ul>
            </div>
            <a href="#contact" className={styles.btn}>Schedule a Consultation</a>
          </div>

          <div className={styles.points}>
            {points.map(p => (
              <div key={p.title} className={styles.point}>
                <div className={styles.pointAccent} />
                <h3 className={styles.pointTitle}>{p.title}</h3>
                <p className={styles.pointBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
