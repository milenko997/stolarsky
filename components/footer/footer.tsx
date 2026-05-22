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
          <a href="#" className={styles.socialLink} aria-label="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="#" className={styles.socialLink} aria-label="Pinterest">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.67 7.87 6.42 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.2-5.08 1.2-5.08s-.3-.61-.3-1.5c0-1.41.82-2.46 1.84-2.46.86 0 1.28.65 1.28 1.43 0 .87-.55 2.17-.84 3.38-.24 1.01.51 1.83 1.51 1.83 1.81 0 3.2-1.91 3.2-4.66 0-2.44-1.75-4.14-4.26-4.14-2.9 0-4.6 2.17-4.6 4.42 0 .88.34 1.82.76 2.33.08.1.09.19.07.29-.08.31-.25 1.01-.29 1.15-.05.19-.16.23-.36.14-1.36-.63-2.21-2.62-2.21-4.22 0-3.43 2.49-6.58 7.19-6.58 3.78 0 6.71 2.69 6.71 6.29 0 3.75-2.36 6.77-5.64 6.77-1.1 0-2.14-.57-2.5-1.25l-.68 2.59c-.25.94-.91 2.12-1.36 2.84 1.02.32 2.1.49 3.22.49 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
            </svg>
          </a>
          <a href="#" className={styles.socialLink} aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
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
