'use client'

import { useEffect, useRef } from 'react'
import styles from './hero.module.scss'

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const heroEl = document.getElementById('hero')
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroHeight = heroEl?.offsetHeight ?? 0
      if (bgRef.current && scrolled < heroHeight) {
        bgRef.current.style.transform = `translateY(${scrolled * 0.4}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBg} ref={bgRef}></div>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <span className={styles.heroLabel}>PREMIUM STOLARIJA</span>
        <h1 className={styles.heroTitle}>STOLARSKY.</h1>
        <p className={styles.heroSubtitle}>
          Izrađujemo bezvremenski drveni nameštaj sa preciznošću i strašću. Gde se tradicionalno majstorstvo susreće sa modernim dizajnom.
        </p>
        <a href="#work" className={`btn btn-primary ${styles.heroCta}`}>
          Istražite Naše Radove
        </a>
      </div>
      <div className={styles.heroScroll}>
        <span>Skroluj</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  )
}

export default Hero
