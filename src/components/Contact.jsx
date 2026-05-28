import { useState } from 'react'
import styles from './Contact.module.css'

const INITIAL = { name: '', firm: '', email: '', phone: '', caseType: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire up to email service (EmailJS, Formspree, etc.)
    setSubmitted(true)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <p className="section-label">Contact</p>
            <h2 className="section-title" style={{ color: 'var(--white)' }}>
              Let's Find Your Expert
            </h2>
            <p className={styles.body}>
              Reach out with the details of your case and we'll respond within one business day.
              All inquiries are confidential.
            </p>
            <dl className={styles.details}>
              <div className={styles.detail}>
                <dt>Email</dt>
                <dd>rod@[yourdomain].com</dd>
              </div>
              <div className={styles.detail}>
                <dt>Phone</dt>
                <dd>(555) 000-0000</dd>
              </div>
              <div className={styles.detail}>
                <dt>Hours</dt>
                <dd>Mon – Fri, 9 am – 6 pm</dd>
              </div>
            </dl>
          </div>

          <div className={styles.formWrap}>
            {submitted ? (
              <div className={styles.thanks}>
                <p className={styles.thanksIcon}>✓</p>
                <h3>Message Received</h3>
                <p>Thank you for reaching out. Rod will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <label className={styles.field}>
                    <span>Full Name *</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                    />
                  </label>
                  <label className={styles.field}>
                    <span>Law Firm</span>
                    <input
                      type="text"
                      name="firm"
                      value={form.firm}
                      onChange={handleChange}
                      placeholder="Smith & Associates"
                    />
                  </label>
                </div>

                <div className={styles.row}>
                  <label className={styles.field}>
                    <span>Email Address *</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@smithlaw.com"
                    />
                  </label>
                  <label className={styles.field}>
                    <span>Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                    />
                  </label>
                </div>

                <label className={styles.field}>
                  <span>Area of Expertise Needed</span>
                  <select name="caseType" value={form.caseType} onChange={handleChange}>
                    <option value="">Select a category...</option>
                    <option>Medical &amp; Healthcare</option>
                    <option>Engineering &amp; Construction</option>
                    <option>Financial &amp; Accounting</option>
                    <option>Product Liability</option>
                    <option>Accident Reconstruction</option>
                    <option>Environmental Science</option>
                    <option>Forensic Analysis</option>
                    <option>Mental Health</option>
                    <option>Economics &amp; Damages</option>
                    <option>Technology &amp; Cybersecurity</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className={styles.field}>
                  <span>Brief Case Description *</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe the case, the type of expert you need, and any relevant timeline or jurisdiction details..."
                  />
                </label>

                <button type="submit" className={styles.submit}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
