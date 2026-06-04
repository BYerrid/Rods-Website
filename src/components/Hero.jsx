import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={`container ${styles.content}`}>

        <div className={styles.text}>
          <p className={styles.eyebrow}>Attorney &bull; Expert Witness &bull; Investigations</p>
          <h1 className={styles.headline}>
            A Lifetime of Criminal Justice Excellence<br />
            <em>Working for You</em>
          </h1>
          <p className={styles.sub}>
            Rodney E. Hill, Esquire brings a unique and distinguished blend of expertise to every
            client he represents and every matter entrusted to his care. His experience spans the
            full spectrum of criminal justice — from prosecution and internal affairs to senior
            command-level police leadership, professional education &amp; training, and legal consulting.
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

        <div className={styles.photoCol}>
          <div className={styles.photoWrap}>
            <img
              src={`${import.meta.env.BASE_URL}rod-headshot.png`}
              alt="Rodney E. Hill, Esquire"
              className={styles.photo}
            />
          </div>
          <div className={styles.photoLabel}>
            <p className={styles.photoName}>Rodney E. Hill</p>
            <p className={styles.photoTitle}>Esquire</p>
          </div>
        </div>

      </div>
    </section>
  )
}
