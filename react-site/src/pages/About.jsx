import { NavLink } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { heroImage } from '../data/siteData'

function About() {
  return (
    <>
      <PageHeader
        title="About"
        subtitle="Licensed contractor focused on safety and craftsmanship."
      />
      <section className="row">
        <div className="col-xs-12  col-lg-6">
          <h2>About the Contractor</h2>
          <p>
            We handle residential and light commercial construction with a
            focus on quality craftsmanship, safety, and clear communication.
          </p>
          <p>
            Our team provides detailed estimates, transparent timelines, and
            on-site supervision to keep projects on track.
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
                <h4 className="card-title  person-profile__name">Mark Stelzl</h4>
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
