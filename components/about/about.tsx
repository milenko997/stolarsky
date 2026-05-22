import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './about.module.scss'

const stats = [
  { number: '20+', label: 'Godina Iskustva' },
  { number: '500+', label: 'Završenih Projekata' },
  { number: '150+', label: 'Zadovoljnih Klijenata' },
]

const About = () => {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.aboutGrid}>
          <ScrollReveal className={styles.aboutImage}>
            <img
              src="https://images.unsplash.com/photo-1631396328075-9c65a7406f09?w=700&q=80"
              alt="Radionica Stolarsky"
              loading="lazy"
            />
            <div className={styles.aboutImageAccent}></div>
          </ScrollReveal>
          <ScrollReveal className={styles.aboutContent} delay={150}>
            <span className="section-label">O NAMA</span>
            <h2 className="section-title">
              Izrađeno sa<br />Svrhom
            </h2>
            <div className={styles.aboutText}>
              <p>
                U Stolarskom, verujemo da svaki komad nameštaja priča priču. Osnovan na principima
                poštenog majstorstva i održivih praksi, naša radionica pretvara sirovo drvo u
                funkcionalni objekat umetnosti.
              </p>
              <p>
                Sa više od dve decenije iskustva, naši majstori zanatlije kombinuju vremenski
                proverene tehnike sa savremenim dizajnom. Svako delo svedoči o našoj posvećenosti —
                od prve skice do finalnog završetka.
              </p>
            </div>
            <div className={styles.aboutStats}>
              {stats.map((stat, index) => (
                <ScrollReveal
                  key={stat.label}
                  className={styles.stat}
                  delay={300 + index * 100}
                >
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default About
