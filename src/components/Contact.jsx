import { useState } from 'react'
import styles from './Contact.module.css'

// After signing up at formspree.io, replace this with your form ID
const FORMSPREE_ID = 'YOUR_FORM_ID'

const INITIAL = { name: '', firm: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <p className="section-label" style={{ color: 'var(--gold-light)' }}>Contact</p>
            <h2 className="section-title section-title--light">
              Let's Discuss Your Matter
            </h2>
            <div className="divider" />
            <p className={styles.body}>
              Whether you need an expert witness, an independent investigator, or legal
              counsel, Mr. Hill responds personally to every inquiry. All communications
              are confidential.
            </p>
            <dl className={styles.details}>
              <div className={styles.detail}>
                <dt>Email</dt>
                <dd><a href="mailto:Rhill.legal@gmail.com">Rhill.legal@gmail.com</a></dd>
              </div>
              <div className={styles.detail}>
                <dt>Phone</dt>
                <dd><a href="tel:4438001250">443-800-1250</a></dd>
              </div>
              <div className={styles.detail}>
                <dt>Licensed In</dt>
                <dd>Maryland &bull; D.C. &bull; U.S. District Court of Maryland</dd>
              </div>
            </dl>
          </div>

          <div className={styles.formWrap}>
            {status === 'success' ? (
              <div className={styles.thanks}>
                <div className={styles.thanksIcon}>✓</div>
                <h3>Message Received</h3>
                <p>Thank you for reaching out. Mr. Hill will be in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Send a Message</h3>

                <div className={styles.row}>
                  <label className={styles.field}>
                    <span>Full Name *</span>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" />
                  </label>
                  <label className={styles.field}>
                    <span>Organization / Firm</span>
                    <input type="text" name="firm" value={form.firm} onChange={handleChange} placeholder="Smith & Associates" />
                  </label>
                </div>

                <div className={styles.row}>
                  <label className={styles.field}>
                    <span>Email Address *</span>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@smithlaw.com" />
                  </label>
                  <label className={styles.field}>
                    <span>Phone</span>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(443) 000-0000" />
                  </label>
                </div>

                <label className={styles.field}>
                  <span>Service Needed</span>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option>Expert Witness</option>
                    <option>Administrative / Internal Investigation</option>
                    <option>Legal Services — Administrative Law</option>
                    <option>Legal Services — Personal Injury</option>
                    <option>Policy Development / Review</option>
                    <option>Training / Speaking Engagement</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className={styles.field}>
                  <span>Details *</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Briefly describe your matter, jurisdiction, and any relevant timeline..."
                  />
                </label>

                {status === 'error' && (
                  <p className={styles.errorMsg}>
                    Something went wrong. Please try again or email directly at{' '}
                    <a href="mailto:Rhill.legal@gmail.com">Rhill.legal@gmail.com</a>.
                  </p>
                )}
                <button type="submit" className={styles.submit} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>

                <p className={styles.disclaimer}>
                  This form does not create an attorney-client relationship. All inquiries are confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
