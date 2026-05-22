'use client'

import { useState, useEffect } from 'react'
import styles from './header.module.scss'

const navLinks = [
  { href: '#work', label: 'Naši Radovi' },
  { href: '#about', label: 'O Nama' },
  { href: '#process', label: 'Proces' },
  { href: '#services', label: 'Usluge' },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.pageYOffset > 100)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleNav = () => {
    const next = !isNavOpen
    setIsNavOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const closeNav = () => {
    setIsNavOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} id="header">
      <div className={`container ${styles.headerInner}`}>
        <a href="#hero" className={styles.logo}>STOLARSKY.</a>
        <nav className={styles.nav}>
          <button
            className={`${styles.navToggle} ${isNavOpen ? styles.active : ''}`}
            onClick={toggleNav}
            aria-label="Otvori meni"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`${styles.navList} ${isNavOpen ? styles.active : ''}`}>
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink} onClick={closeNav}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className={`${styles.navLink} ${styles.navLinkCta}`}
                onClick={closeNav}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
