import ExternalLink from '~/components/utils/externalLink'

const Projects = () => {
  const GithubIcon = () => <span className="fa fa-github" />

  return (
    <div className="m-auto max-w-5xl p-8 lg:px-0 text-lg text-gray-800">
      <section>
        <h1 className="font-bold">💻 Side Projects</h1>
        <p className="pt-4">
          I decided to remake some of current famous apps to study, learn new
          frameworks and have fun. I'll try to list them here as they are done.
        </p>
        <ul className="pt-4 space-y-4">
          <li>
            <ExternalLink to="https://github.com/marcelscr/landing-page">
              <GithubIcon /> This website
            </ExternalLink>
          </li>
          <li>
            <ExternalLink to="https://github.com/marcelscr/spotify-remix">
              <GithubIcon /> Spotify with Remix
            </ExternalLink>
          </li>
        </ul>
        <p className="pt-4">Work in progress.</p>
      </section>
    </div>
  )
}

export default Projects
