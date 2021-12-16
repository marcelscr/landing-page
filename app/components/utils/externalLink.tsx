type Props = {
  to: string
  className?: string
  children?: JSX.Element | string
}

function ExternalLink({ to, className, children }: Props) {
  return (
    <a href={to} target="_blank" className={className}>
      {children}
    </a>
  )
}

export default ExternalLink
