import './styles.scss'

type Props = {
  readonly src: string
  readonly alt: string
}

export default function Avatar({ src, alt }: Props) {
  return (
    <img
      className="avatar"
      src={src}
      alt={alt}
      loading="eager"
      fetchPriority="high"
      width="100"
      height="100"
    />
  )
}
