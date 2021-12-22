import ExternalLink from './utils/externalLink'

// Images
import nokia from './images/nokia.png'

const Contact = () => {
  return (
    <div className="m-auto max-w-5xl p-8 lg:px-0 text-lg text-gray-800 md:pt-16">
      <section>
        <h1 className="text-6xl font-bold text-gray-800 md:text-8xl">
          contact.
        </h1>
        <h2 className="text-3xl font-bold text-gray-700 md:text-4xl">
          <span className="line-through">don't</span> call me maybe.
        </h2>

        <div>
          <p className="pt-8 text-gray-800 text-2xl">
            You can contact me through{' '}
            <ExternalLink
              className="font-bold hover:underline"
              to="https://www.linkedin.com/in/marcel-rebou%C3%A7as-14291883/">
              LinkedIn.
            </ExternalLink>{' '}
            That's it.
          </p>
          <div className="flex justify-center my-8">
            <img src={nokia} alt="nokia" className="object-cover max-h-80" />
          </div>
          <p className="pt-6 text-gray-700 text-2xl text-right">
            <span className="italic">“I promise I'll answer your email”</span>
            <br />
            <span className="text-lg">Albert Einstein</span>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Contact
