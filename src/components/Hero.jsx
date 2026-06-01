import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>Attorney &bull; Expert Witness &bull; Investigator</p>
        <h1 className={styles.headline}>
          Four Decades of Law Enforcement<br />
          <em>in Service of Your Case</em>
        </h1>
        <p className={styles.sub}>
          Rodney E. Hill, Esquire brings a singular combination of credentials to every engagement —
          40 years in criminal justice, a law degree, 500+ trials as a prosecutor, and command-level
          experience at some of the nation's most complex police departments.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>Discuss Your Case</a>
          <a href="#expert-witness" className={styles.btnSecondary}>Explore Services</a>
        </div>
        <div className={styles.badges}>
          <span className={styles.badge}>Maryland Bar</span>
          <span className={styles.badgeDot} />
          <span className={styles.badge}>D.C. Bar</span>
          <span className={styles.badgeDot} />
          <span className={styles.badge}>U.S. District Court of Maryland</span>
          <span className={styles.badgeDot} />
          <span className={styles.badge}>FOX 45 News Contributor</span>
        </div>
      </div>
    </section>
  )
}
