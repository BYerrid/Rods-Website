import styles from './ServiceSection.module.css'

const points = [
  {
    title: 'Administrative Law',
    body: 'Extensive experience prosecuting and defending administrative hearings, drafting administrative policy, and navigating the intersection of government agency procedure and civil rights. Former Chief Legal Advisor to a major metropolitan police department.',
  },
  {
    title: 'Personal Injury',
    body: 'Deep knowledge of use-of-force standards, police liability, and governmental immunity provides a unique perspective for personal injury matters involving law enforcement conduct, civil rights violations, and institutional negligence.',
  },
  {
    title: 'Criminal Defense & Prosecution',
    body: 'Over 500 bench and jury trials as a prosecutor in Baltimore County. Handled felony domestic violence, homicide, and human trafficking cases. That trial experience directly informs effective defense strategy.',
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
              Mr. Hill is a licensed attorney admitted to the Maryland Bar, the District
              of Columbia Bar, and the United States District Court of Maryland. His legal
              practice is grounded in 40 years of hands-on experience — not just legal
              theory. Whether you need representation, counsel, or a second opinion from
              someone who has been in the room when decisions were made, Mr. Hill brings
              a depth few attorneys can match.
            </p>
            <div className={styles.admissions}>
              <p className={styles.admissionsLabel}>Bar Admissions</p>
              <ul className={styles.admissionsList}>
                <li>Maryland State Bar</li>
                <li>District of Columbia Bar</li>
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

            <div className={styles.callout}>
              <p className={styles.calloutQuote}>
                "Prosecuted felony domestic violence and homicides; litigated over 500
                criminal trials; served as Assistant State's Attorney for Baltimore County
                and Chief Solicitor for the Baltimore City Law Department."
              </p>
              <p className={styles.calloutSource}>Professional Experience Summary</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
