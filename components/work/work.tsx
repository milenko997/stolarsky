import ScrollReveal from '@/components/ui/ScrollReveal'
import styles from './work.module.scss'

const workItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1758448511320-05d7d28f4298?w=800&q=80',
    alt: 'Nameštaj po meri',
    category: 'Nameštaj po Meri',
    title: 'Moderna Kolekcija za Dom',
    variant: 'large' as const,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1722411927318-ba7be472dd50?w=600&q=80',
    alt: 'Zanatlija na radu',
    category: 'Dizajn po Narudžbini',
    title: 'Zanatsko Majstorstvo',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?w=600&q=80',
    alt: 'Tekstura drveta',
    category: 'Materijali',
    title: 'Premium Selekcija Hrasta',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    alt: 'Moderna sofa',
    category: 'Enterijer',
    title: 'Minimalistički Salon',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80',
    alt: 'Trpezarijski set',
    category: 'Trpezarija',
    title: 'Ručno Izrađena Kolekcija za Trpezariju',
    variant: 'wide' as const,
  },
]

const Work = () => {
  return (
    <section className={`section ${styles.work}`} id="work">
      <div className="container">
        <ScrollReveal className="section-header">
          <span className="section-label">PORTFOLIO</span>
          <h2 className="section-title">Naši Radovi</h2>
        </ScrollReveal>
        <div className={styles.workGrid}>
          {workItems.map((item, index) => (
            <ScrollReveal
              key={item.id}
              className={[
                styles.workItem,
                item.variant === 'large' ? styles.workItemLarge : '',
                item.variant === 'wide' ? styles.workItemWide : '',
              ].filter(Boolean).join(' ')}
              delay={Math.min(index * 100, 400)}
            >
              <div className={styles.workImage}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
              <div className={styles.workOverlay}>
                <span className={styles.workCategory}>{item.category}</span>
                <h3 className={styles.workTitle}>{item.title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
