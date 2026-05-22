import styles from './footer.module.scss'

const footerLinks = [
  { href: '#work', label: 'Naši Radovi' },
  { href: '#about', label: 'O Nama' },
  { href: '#services', label: 'Usluge' },
  { href: '#contact', label: 'Kontakt' },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerBrand}>
          <span className={styles.logo}>STOLARSKY.</span>
          <p className={styles.footerTagline}>Izrađujemo izvrsnost od 2004. godine</p>
        </div>

        <div className={styles.footerLinks}>
          {footerLinks.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className={styles.footerSocial}>
          <a href="https://www.instagram.com/stolarsky.art" className={styles.socialLink} aria-label="Instagram" target='_blank'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Stolarsky. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
