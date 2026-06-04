import styles from './Stats.module.css'

const stats = [
  { value: '40+', label: 'Years in Criminal Justice' },
  { value: '500+', label: 'Criminal Trials' },
  { value: '700+', label: 'Internal Cases / Year' },
  { value: '2',    label: 'Bar Admissions' },
]

export default function Stats() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        {stats.map((s, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
