import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './contact.module.scss'

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <ScrollReveal className={styles.contactInner}>
          <span className="section-label">KONTAKTIRAJTE NAS</span>
          <h2 className={styles.contactTitle}>
            Hajde da Stvorimo<br />Nešto Lepo
          </h2>
          <div className={styles.contactInfo}>
            <a href="mailto:hello@stolarsky.com" className={styles.contactLink}>
              hello@stolarsky.com
            </a>
            <a href="tel:+15551234567" className={styles.contactLink}>
              +1 (555) 123-4567
            </a>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.contactAddress}>
              <span className={styles.contactLabel}>RADIONICA</span>
              <p>123 Craftsman Avenue<br />Brooklyn, NY 11201</p>
            </div>
            <div className={styles.contactHours}>
              <span className={styles.contactLabel}>RADNO VREME</span>
              <p>Pon — Pet: 9h — 18h<br />Sub: Po Dogovoru</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Contact
