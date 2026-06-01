import styles from './About.module.css'

const credentials = [
  'Juris Doctor — University of Baltimore School of Law, 1996',
  'B.A. Law Enforcement — University of Maryland, College Park, 1984',
  'Certified Litigation Specialist — Americans for Effective Law Enforcement',
  'Certified Excited Delirium & Agitated Chaotic Events Instructor',
  'FBI Certificate of Recognition — Gun Trace Task Force Investigation, 2018',
  'Assistant Professor of Law — Stevenson University (current)',
  'News Contributor — WBFF-FOX 45 Baltimore (current)',
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.photoCol}>
            <div className={styles.photoWrap}>
              <img
                src={`${import.meta.env.BASE_URL}rod-headshot.png`}
                alt="Rodney E. Hill, Esquire"
                className={styles.photo}
              />
            </div>
            <div className={styles.nameCard}>
              <p className={styles.nameCardName}>Rodney E. Hill</p>
              <p className={styles.nameCardTitle}>Esquire</p>
            </div>
          </div>

          <div className={styles.bio}>
            <p className="section-label">About</p>
            <h2 className="section-title">
              A Career Built at the Intersection of Law and Law Enforcement
            </h2>
            <div className="divider" />

            <p className={styles.body}>
              Rodney E. Hill, Esquire is an attorney, policing expert, and former senior
              law enforcement commander with over 40 years of experience in the criminal
              justice field. His career is defined by a rare combination: he has served
              as both a prosecutor and a police command officer, giving him an
              authoritative perspective few practitioners can offer.
            </p>
            <p className={styles.body}>
              Mr. Hill served as Chief of the Office of Professional Responsibility for
              the Baltimore City Police Department — one of the nation's largest and most
              scrutinized police forces — where he commanded 90 personnel and oversaw
              hundreds of internal investigations annually, including the Freddie Gray
              in-custody death investigation and the FBI Gun Trace Task Force corruption
              probe. He later served as Chief Legal Advisor to the Chief of Police for
              the Baltimore County Police Department.
            </p>
            <p className={styles.body}>
              As a prosecutor, Mr. Hill litigated over 500 criminal trials in Baltimore
              County Circuit Court. He has taught at the Federal Law Enforcement Training
              Centers (FLETC), multiple universities, and continues to serve as an
              Adjunct Professor at Stevenson University and a news contributor for
              WBFF-FOX 45 in Baltimore.
            </p>

            <ul className={styles.credList}>
              {credentials.map(c => (
                <li key={c} className={styles.credItem}>
                  <span className={styles.credDot} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
