type Props = {
  to: string
  className?: string
  children?: JSX.Element
}

function ExternalLink({ to, className, children }: Props) {
  return (
    <a href={to} target="_blank" className={className}>
      {children}
    </a>
  )
}

export default ExternalLink
