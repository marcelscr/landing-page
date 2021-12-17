import ExternalLink from '~/components/utils/externalLink'
import ContentCard from '~/components/utils/contentCard'

import meImage from './images/me-pixels.jpg'
import nerdyImage from './images/talk-nerdy.jpg'

const About = () => {
  return (
    <>
      {/* Presentation */}
      <ContentCard className="pb-16">
        <section>
          <div className="grid md:space-x-4 md:grid-cols-2 border-b-[1px]">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-6xl font-bold text-gray-800 md:text-8xl">
                marcel.
              </h1>
              <h2 className="text-3xl font-bold text-gray-700 md:text-4xl">
                marcelo without an o.
              </h2>
              <h3 className="pt-6 text-gray-600 text-2xl">
                I'm a front end developer living in Recife, Brazil ☀️
              </h3>
              <p className="pt-6 text-gray-700 text-lg">
                I like to solve problems, bring beautiful designs to life and
                drink iced tea. When I'm not fighting pixels, I also enjoy going
                on hikes, doing crossfit and pampering my cats.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center mt-10 md:mt-0">
              <img src={meImage} alt="marcel photo" className="object-cover" />
            </div>
          </div>
        </section>
      </ContentCard>

      {/* Nerdy interests */}
      <ContentCard className="md:py-20">
        <section>
          <div className="flex flex-col-reverse md:grid md:space-x-4 md:grid-cols-2 md:py-8">
            {/* Image */}
            <div className="flex justify-center items-center">
              <img
                src={nerdyImage}
                alt="photo of marcel trying to hack something"
                className="object-cover max-h-60"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center items-center mt-20 md:mt-0">
              <h1 className="text-3xl text-gray-700 md:text-4xl">
                Nerdy interests 💻
              </h1>

              <ul className="text-lg text-gray-500 text-center pt-8 space-y-3">
                <li>Front-end development</li>
                <li>UX/UI design</li>
                <li>
                  <ExternalLink to="https://remix.run/">Remix</ExternalLink> and{' '}
                  <ExternalLink to="https://tailwindcss.com/">
                    Tailwind CSS
                  </ExternalLink>
                </li>
                <li>Recreating well-known UIs</li>
                <li>"Pretty stuff"</li>
              </ul>
            </div>
          </div>
        </section>
      </ContentCard>
    </>
  )
}

export default About
