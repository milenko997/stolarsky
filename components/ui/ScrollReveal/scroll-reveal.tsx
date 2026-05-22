'use client'

import { useEffect, useRef } from 'react'

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
}

const ScrollReveal = ({ children, className = '', delay = 0, ...rest }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`fade-in${className ? ` ${className}` : ''}`} {...rest}>
      {children}
    </div>
  )
}

export default ScrollReveal
