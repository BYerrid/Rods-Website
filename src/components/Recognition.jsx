import styles from './Recognition.module.css'

const items = [
  { org: 'FBI',           detail: 'Certificate of Recognition — Gun Trace Task Force Investigation' },
  { org: 'FLETC',        detail: 'Instructor — Internal Investigations & Use-of-Force, U.S. Dept. of Homeland Security' },
  { org: 'FOX 45',       detail: 'On-Air Expert Contributor — Law Enforcement & Criminal Justice' },
  { org: 'AELE',         detail: 'Certified Litigation Specialist — Police Internal Investigations & Use of Force' },
  { org: 'Mayor\'s Citation', detail: 'City of Baltimore — Service during 2015 civil unrest' },
  { org: 'U.S. DOJ',     detail: 'Recognition — Maryland Human Trafficking Task Force' },
]

const publications = [
  'FBI Law Enforcement Bulletin (×2)',
  'AELE Public Safety Journal',
  'The Police Chief Magazine',
  'Maryland Bar Bulletin',
  'Subject to Debate',
  'Problem Solving Quarterly',
]

export default function Recognition() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label" style={{ color: 'var(--gold-light)' }}>Credentials &amp; Recognition</p>
          <h2 className="section-title section-title--light">
            A Record That Speaks for Itself
          </h2>
        </div>

        <div className={styles.body}>
          <div className={styles.awards}>
            {items.map(item => (
              <div key={item.org} className={styles.award}>
                <span className={styles.awardOrg}>{item.org}</span>
                <span className={styles.awardDetail}>{item.detail}</span>
              </div>
            ))}
          </div>

          <div className={styles.pubs}>
            <p className={styles.pubsTitle}>Published In</p>
            <ul className={styles.pubsList}>
              {publications.map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
