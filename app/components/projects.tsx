import { Link } from 'remix'
import ExternalLink from '~/components/utils/externalLink'

// Images
import stoneWheel from './images/stone-wheel.png'

const Projects = () => {
  const GithubIcon = () => <span className="fa fa-github" />

  return (
    <div className="m-auto max-w-5xl p-8 lg:px-0 text-lg text-gray-800 md:pt-16">
      <section>
        <h1 className="text-6xl font-bold text-gray-800 md:text-8xl">
          projects.
        </h1>
        <h2 className="text-3xl font-bold text-gray-700 md:text-4xl">
          re-inventing the wheel.
        </h2>
        <h3 className="pt-6 text-gray-600 text-2xl">
          I decided to remake the UI of well-known apps to study, learn new
          frameworks and have fun. I'll list them here as they are done!
        </h3>

        <div className="grid md:space-x-4 md:grid-cols-2">
          <div>
            <h4 className="pt-8 text-gray-800 text-2xl">Current projects:</h4>
            <ul className="pt-4 space-y-4 text-xl">
              <li>
                <Link to="/" className="hover:underline">
                  1. This website
                </Link>
                <ExternalLink
                  to="https://github.com/marcelscr/landing-page"
                  className="ml-1">
                  (<span className="hover:underline">Github</span>{' '}
                  <GithubIcon />)
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  to="https://spotify.marcelreboucas.com"
                  className="hover:underline">
                  2. Spotify with Remix
                </ExternalLink>
                <ExternalLink
                  to="https://github.com/marcelscr/landing-page"
                  className="ml-1">
                  (<span className="hover:underline">Github</span>{' '}
                  <GithubIcon />)
                </ExternalLink>
              </li>
              <li className="text-gray-400">
                3. Google with Remix (<span>Soon...</span>)
              </li>
              <li className="text-gray-400">
                4. Slack with Remix (<span>Soon...</span>)
              </li>
              <li className="text-gray-400">
                5. Netflix with Remix (<span>Soon...</span>)
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="flex justify-center mt-16 md:mt-0">
            <img
              src={stoneWheel}
              alt="stone wheel"
              className="object-cover max-h-80 animate-fade-in"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
