import me from './images/me-pixels.jpg'

const About = () => {
  return (
    <div className="shadow-md p-8 pb-16">
      <div className="m-auto max-w-5xl">
        <section>
          <div className="grid md:space-x-4 md:grid-cols-2 border-b-[1px]">
            {/* Content */}
            <div className="mx-4 flex flex-col justify-center md:mx-0">
              <h1 className="text-6xl font-bold text-gray-800 mt-10 md:text-8xl">
                marcel.
              </h1>
              <h2 className="text-3xl font-bold text-gray-700 md:text-4xl">
                without an o.
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
              <img
                src={me}
                alt="marcel photo"
                className="rounded object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
