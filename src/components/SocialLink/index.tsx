import type { ReactNode } from 'react'
import './styles.scss'

type Props = {
  readonly children: ReactNode
  readonly href: string
}

export default function SocialLink({ children, href }: Props) {
  return (
    <a
      className="social-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
