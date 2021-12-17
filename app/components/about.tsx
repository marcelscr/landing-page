import ExternalLink from '~/components/utils/externalLink'
import ContentCard from '~/components/utils/contentCard'

import meImage from './images/me-pixels.jpg'
import nerdyImage from './images/talk-nerdy.jpg'
import dwightImage from './images/dwight.png'

const About = () => {
  return (
    <>
      {/* Presentation */}
      <ContentCard className="pb-16">
        <section>
          <div className="grid md:space-x-4 md:grid-cols-2 ">
            {/* Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-6xl font-bold text-gray-800 md:text-8xl">
                marcel.
              </h1>
              <h2 className="text-3xl font-bold text-gray-700 md:text-4xl">
                marcelo without an o.
              </h2>
              <h3 className="pt-6 text-gray-600 text-2xl">
                I'm a front end developer from Recife, Brazil ☀️
              </h3>
              <p className="pt-6 text-gray-700 text-lg">
                I like to solve problems, bring beautiful designs to life and
                drink iced tea. When I'm not fighting pixels, I also enjoy going
                on hikes, doing crossfit and pampering my cats.
              </p>
              <p className="pt-6 text-gray-700 text-lg">
                The hardest part about working with me is actually calling my
                name correctly.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center mt-10 md:mt-0">
              <img
                src={meImage}
                alt="marcel photo"
                className="object-cover max-h-screen"
              />
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
                alt="talk nerdy to me"
                className="object-cover max-h-60"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center items-center mt-20 md:mt-0">
              <h1 className="text-3xl text-gray-700 md:text-4xl">
                💻 Talking nerdy
              </h1>
              <p className="text-md text-gray-400 pt-8">I'm into:</p>
              <ul className="text-lg text-gray-500 text-center pt-2 space-y-3">
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

      {/* Useless information */}
      <ContentCard className="pb-0">
        <section>
          <div className="md:grid md:space-x-4 md:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col justify-center items-center mt-20 md:mt-0">
              <h1 className="text-3xl text-gray-700 md:text-4xl">
                💪🏼 Random facts
              </h1>

              <ul className="text-lg text-gray-500 text-center pt-8 space-y-3">
                <li>I've actually won a local crossfit competition</li>
                <li>I've been to 21 countries and collect shot glasses</li>
                <li>I'm addicted to the Hamilton musical</li>
                <li>Part-time cat daddy, part-time plant daddy</li>
                <li>I could probably eat grilled chicken in every meal</li>
              </ul>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center mt-16">
              <img
                src={dwightImage}
                alt="dwight from the office"
                className="object-cover max-h-[500px]"
              />
            </div>
          </div>
        </section>
      </ContentCard>
    </>
  )
}

export default About
