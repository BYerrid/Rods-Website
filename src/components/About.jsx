import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.portrait}>
            <div className={styles.photoPlaceholder}>
              <span>Photo</span>
            </div>
            <div className={styles.card}>
              <p className={styles.cardStat}>25+</p>
              <p className={styles.cardLabel}>Years of Experience</p>
            </div>
          </div>

          <div className={styles.bio}>
            <p className="section-label">About</p>
            <h2 className="section-title">Rod [Last Name]<br />Attorney & Expert Witness Consultant</h2>
            <p className={styles.body}>
              With over two decades of legal practice and expert witness consultation,
              Rod brings unmatched depth to the expert placement process. He understands
              what trial lawyers need because he has been in the courtroom himself —
              evaluating testimony, challenging credentials, and understanding the
              difference between an expert who knows the subject and one who can
              communicate it persuasively to a jury.
            </p>
            <p className={styles.body}>
              Rod has placed expert witnesses in cases spanning medical malpractice,
              product liability, financial disputes, and engineering failures. Every
              placement is handled personally — no junior associates, no database matching.
            </p>
            <ul className={styles.credentials}>
              <li>Licensed attorney — [State] Bar</li>
              <li>Former trial attorney, [X] years in litigation</li>
              <li>Expert witness consultation since [Year]</li>
              <li>Placements in federal and state courts nationwide</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
