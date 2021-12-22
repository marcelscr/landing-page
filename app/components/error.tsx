import cn from 'classnames'

import logoMe from './images/logo-me.png'

type Props = {
  children: React.ReactNode
}

const ErrorWrapper = ({ children }: Props) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center h-full'
      )}>
      <img src={logoMe} alt="pixelated logo" className="w-28 h-28 mb-8" />
      {children}
    </div>
  )
}

export default ErrorWrapper
