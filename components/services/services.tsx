import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './services.module.scss'

const services = [
  {
    id: 1,
    title: 'Nameštaj po Meri',
    description: 'Komadi po meri dizajnirani i izrađeni prema vašim tačnim specifikacijama — stolovi, stolice, ormari i još mnogo toga.',
  },
  {
    id: 2,
    title: 'Restauracija',
    description: 'Udahnjujemo novi život antikvitetnom i vintage nameštaju čuvajući njegov originalni karakter.',
  },
  {
    id: 3,
    title: 'Arhitektonska Stolarija',
    description: 'Ugradni elementi po meri, obloge zidova, stepenice i arhitektonski detalji koji transformišu prostor.',
  },
  {
    id: 4,
    title: 'Kuhinjski Nameštaj',
    description: 'Ručno izrađeni kuhinjski elementi koji kombinuju funkcionalnost sa zadivljujućom estetikom.',
  },
  {
    id: 5,
    title: 'Komercijalni Projekti',
    description: 'Stolarija velikih razmera za restorane, kancelarije, hotele i maloprodajne prostore.',
  },
]

const Services = () => {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-label">ŠTA RADIMO</span>
          <h2 className="section-title">Naše Usluge</h2>
        </ScrollReveal>
        <div className={styles.servicesList}>
          {services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              className={styles.serviceItem}
              delay={index * 80}
            >
              <div className={styles.serviceHeader}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <span className={styles.serviceArrow}>→</span>
              </div>
              <p className={styles.serviceDescription}>{service.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
