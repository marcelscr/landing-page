import ExternalLink from '~/components/utils/externalLink'

const Projects = () => {
  return (
    <div className="m-auto max-w-5xl p-8 lg:px-0">
      <section>
        <h1 className="text-lg font-bold">💻 Side Projects</h1>
        <p className="pt-4">
          I decided to remake some of current famous apps to study, learn new
          frameworks and have fun. I'll try to list them here as they are done.
        </p>
        <ul className="pt-4 space-y-4">
          <li>
            1. This website{' '}
            <ExternalLink
              to="https://github.com/marcelscr/landing-page"
              className="fa fa-github"
            />
          </li>
          <li>
            2. Spotify with Remix{' '}
            <ExternalLink
              to="https://github.com/marcelscr/spotify-remix"
              className="fa fa-github"
            />
          </li>
        </ul>
        <p className="pt-4">Work in progress.</p>
      </section>
    </div>
  )
}

export default Projects
