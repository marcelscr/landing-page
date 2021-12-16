type Props = {
  children?: JSX.Element | string
}

function ContentCard({ children }: Props) {
  return (
    <div className="shadow-md p-8 pb-16">
      <div className="m-auto max-w-5xl">{children}</div>
    </div>
  )
}

export default ContentCard
