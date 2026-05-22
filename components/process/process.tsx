import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './process.module.scss'

const steps = [
  {
    number: '01',
    title: 'Konsultacija',
    text: 'Počinjemo razumevanjem vaše vizije, prostora i zahteva kroz detaljnu konsultaciju i istraživanje dizajna.',
  },
  {
    number: '02',
    title: 'Dizajn i Izbor',
    text: 'Naši zanatlije izrađuju detaljan dizajn i ručno biraju najfinije materijale od drveta koji odgovaraju karakteru vašeg projekta.',
  },
  {
    number: '03',
    title: 'Izrada',
    text: 'Svaki komad se pomno izrađuje koristeći tradicionalne tehnike spajanja drveta u kombinaciji sa preciznim modernim alatima.',
  },
  {
    number: '04',
    title: 'Završna Obrada',
    text: 'Završni detalji uključuju ručno nanošene premaze, kontrolu kvaliteta i pažljivu dostavu na vašu adresu.',
  },
]

const Process = () => {
  return (
    <section className={`section ${styles.process}`} id="process">
      <div className="container">
        <ScrollReveal className="section-header section-header-center">
          <span className="section-label">KAKO RADIMO</span>
          <h2 className="section-title">Naš Proces</h2>
        </ScrollReveal>
        <div className={styles.processGrid}>
          {steps.map((step, index) => (
            <ScrollReveal
              key={step.number}
              className={styles.processStep}
              delay={index * 100}
            >
              <span className={styles.processNumber}>{step.number}</span>
              <div className={styles.processContent}>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processText}>{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
