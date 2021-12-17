import cn from 'classnames'

type Props = {
  className?: string
  children?: JSX.Element | string
}

function ContentCard({ className, children }: Props) {
  return (
    <div className={cn('shadow-md p-8', className)}>
      <div className="m-auto max-w-5xl">{children}</div>
    </div>
  )
}

export default ContentCard
