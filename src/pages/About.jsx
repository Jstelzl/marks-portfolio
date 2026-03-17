import { NavLink } from 'react-router-dom'
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
        <div className="col-xs-12  col-lg-6">
          <h2>About Vartanian Construction</h2>
          <p>
            Vartanian Construction is the solution to your home construction projects. Located in Charlotte, NC, we specialize in most any construction or home improvement project – home additions; kitchen and bath renovations; decks and porches; and even smaller projects like replacing doors or installing a sink.
          </p>
        </div>
        <div className="col-xs-12  col-lg-6">
          <div className="card  person-profile">
            <img
              className="person-profile__image  wp-post-image"
              src={heroImage}
              alt="Profile portrait"
            />
            <div className="card-block  person-profile__container">
              <div className="person-profile__social-icons">
                <NavLink className="person-profile__social-icon" to="/contact">
                  <i className="fa  fa-phone"></i>
                </NavLink>
                <NavLink className="person-profile__social-icon" to="/contact">
                  <i className="fa  fa-envelope"></i>
                </NavLink>
                <NavLink className="person-profile__social-icon" to="/contact">
                  <i className="fa  fa-map-marker"></i>
                </NavLink>
              </div>
              <div className="person-profile__content">
                <span className="person-profile__tag">Licensed Contractor</span>
                <h4 className="card-title  person-profile__name">Mark Vartanian</h4>
                <p className="card-text  person-profile__description">
                  General contractor focused on quality craftsmanship,
                  transparency, and lasting results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
