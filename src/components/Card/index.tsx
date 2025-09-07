import type { ReactNode } from 'react'
import './styles.scss'

type Props = {
  readonly children: ReactNode
  readonly className?: string
}

export default function Card({ children, className }: Props) {
  const cardClassName = ['card', className].filter(Boolean).join(' ')

  return <section className={cardClassName}>{children}</section>
}
