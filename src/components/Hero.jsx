import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>Expert Witness Placement</p>
        <h1 className={styles.headline}>
          Connecting Trial Lawyers<br />
          with the Right Expert
        </h1>
        <p className={styles.sub}>
          When your case depends on credibility, experience, and precision,
          you need the right expert witness. We match trial attorneys with
          qualified specialists across every field of practice.
        </p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnPrimary}>Find an Expert</a>
          <a href="#services" className={styles.btnSecondary}>How It Works</a>
        </div>
      </div>
    </section>
  )
}
