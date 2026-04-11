import { heroImage } from '../data/siteData'

function About() {
  return (
    <>
      <div
        className="about-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="about-hero__overlay">
          <div className="container">
            <h1 className="about-hero__title  display-1">About</h1>
            <p className="about-hero__subtitle">
              Licensed contractor focused on safety and craftsmanship.
            </p>
          </div>
        </div>
      </div>
      <section className="row">
        <div className="col-xs-12">
          <h2>About Vartanian Construction</h2>
          <p>
            Vartanian Construction is the solution to your home construction projects. Located in Charlotte, NC, we specialize in most any construction or home improvement project – home additions; kitchen and bath renovations; decks and porches; and even smaller projects like replacing doors or installing a sink.
          </p>
        </div>
      </section>
    </>
  )
}

export default About
