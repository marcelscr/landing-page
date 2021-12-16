import { Link, useLocation } from 'remix'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import { MenuIcon } from '@heroicons/react/solid'

import logoMe from './images/logo-me.png'

const Links = {
  INDEX: '/',
  PROJECTS: '/projects',
  CONTACT: '/contact'
}

const linkClassname = (path: string) => {
  const location = useLocation()

  return cn('hover:opacity-75', {
    'font-semibold': location.pathname.endsWith(path)
  })
}

type Props = {
  className?: string
}

const Header = ({ className }: Props) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <>
      <header className={cn('bg-black text-white p-8', className)}>
        <div className="m-auto max-w-5xl">
          <div className="flex-auto grid grid-cols-2 md:grid-cols-3">
            {/* Logo */}
            <Link to={Links.INDEX} className="w-[106px] hover:opacity-75">
              <img src={logoMe} alt="pixelated logo" className="w-8 h-8" />
            </Link>

            {/* Navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden md:flex items-center justify-end lg:text-lg">
              <ul className="flex space-x-8">
                <li>
                  <Link to={Links.INDEX} className={linkClassname(Links.INDEX)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={Links.PROJECTS}
                    className={linkClassname(Links.PROJECTS)}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to={Links.CONTACT}
                    className={linkClassname(Links.CONTACT)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Social Media */}
            <div className="hidden md:inline">
              <ul className="flex space-x-8 text-2xl justify-end">
                <li>
                  <Link
                    to={Links.INDEX}
                    className="fa fa-linkedin hover:opacity-75"
                  />
                </li>
                <li>
                  <Link
                    to={Links.INDEX}
                    className="fa fa-github transition hover:opacity-75"
                  />
                </li>
                <li>
                  <Link
                    to={Links.INDEX}
                    className="fa fa-instagram transition hover:opacity-75"
                  />
                </li>
              </ul>
            </div>

            {/* Empty hidden middle grid cell */}
            <div className="flex items-center justify-end md:hidden">
              <MenuIcon
                className="w-8 h-8 hover:opacity-75 cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
        </div>
      </header>
      {open && <SmallScreenMenu />}
    </>
  )
}

const SmallScreenMenu = () => {
  const Divider = () => <div className="bg-gray-700 h-[0.1px] w-full" />

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white text-lg md:hidden">
      <nav aria-label="Main navigation">
        <ul className="flex flex-col items-center p-8 space-y-6 ">
          <li>
            <Link to={Links.INDEX} className={linkClassname(Links.INDEX)}>
              About
            </Link>
          </li>
          <Divider />
          <li>
            <Link to={Links.PROJECTS} className={linkClassname(Links.PROJECTS)}>
              Projects
            </Link>
          </li>
          <Divider />
          <li>
            <Link to={Links.CONTACT} className={linkClassname(Links.CONTACT)}>
              Contact
            </Link>
          </li>
          <Divider />
          <li>
            <ul className="flex space-x-8 text-2xl justify-center">
              <li>
                <Link
                  to={Links.INDEX}
                  className="fa fa-linkedin hover:opacity-75"
                />
              </li>
              <li>
                <Link
                  to={Links.INDEX}
                  className="fa fa-github transition hover:opacity-75"
                />
              </li>
              <li>
                <Link
                  to={Links.INDEX}
                  className="fa fa-instagram transition hover:opacity-75"
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
