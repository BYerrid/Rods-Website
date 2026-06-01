import styles from './ServiceSection.module.css'

const points = [
  {
    title: 'Police Misconduct & Use of Force',
    body: 'Former Chief of Internal Affairs for the Baltimore City Police Department — the 8th largest municipal police force in the United States. Supervised hundreds of misconduct and use-of-force investigations annually.',
  },
  {
    title: 'In-Custody Deaths',
    body: 'Oversaw high-profile in-custody death investigations including the Freddie Gray case. Established Independent Review Committees and 24-hour Critical Force Review Boards in Baltimore City and County.',
  },
  {
    title: 'Constitutional Policing & Reform',
    body: 'Testified before the Maryland General Assembly on police reform legislation. Involved in the Baltimore City Police Consent Decree. Published in the FBI Law Enforcement Bulletin and other peer-reviewed journals.',
  },
  {
    title: 'Certified Litigation Specialist',
    body: 'Conferred by Americans for Effective Law Enforcement (AELE) as a Subject Matter Expert for Police Internal Investigations and Use of Force. Regularly trains attorneys and law enforcement agencies nationwide.',
  },
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
              When a case turns on what a reasonable officer would do — or what proper
              police procedure requires — you need an expert with real command authority,
              not just academic credentials. Rodney Hill has led major investigations,
              trained federal law enforcement, and testified before state legislatures.
              He knows the courtroom from the prosecutor's table, and he knows policing
              from the command floor.
            </p>
            <a href="#contact" className={styles.btn}>Retain Mr. Hill</a>
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
                "Recognized by the Director of the Federal Bureau of Investigation for
                investigative work on the Baltimore Police Gun Trace Task Force corruption
                investigation — one of the largest police corruption scandals in Baltimore history."
              </p>
              <p className={styles.calloutSource}>FBI Certificate of Recognition, 2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
