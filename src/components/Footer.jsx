import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.name}>Hill Legal Consultants, LLC</p>
          <p className={styles.tagline}>A Lifetime of Criminal Justice Excellence Working for You</p>
        </div>
        <div className={styles.links}>
          <a href="#expert-witness">Expert Witness</a>
          <a href="#investigations">Investigations</a>
          <a href="#legal-services">Legal Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.legal}>
          <p>© {new Date().getFullYear()} Hill Legal Consultants, LLC. All rights reserved.</p>
          <p className={styles.disclaimer}>
            This website is for informational purposes only and does not constitute legal advice
            or create an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  )
}
