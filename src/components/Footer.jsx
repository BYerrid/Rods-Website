import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.name}>Rod's Expert Witness Services</p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Rod [Last Name]. All rights reserved.
        </p>
        <p className={styles.disclaimer}>
          This website is for informational purposes only and does not constitute legal advice.
        </p>
      </div>
    </footer>
  )
}
