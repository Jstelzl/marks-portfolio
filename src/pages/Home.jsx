import { NavLink } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import {
  counters,
  heroImage,
  portfolioItems,
  services,
  testimonials,
} from '../data/siteData'

function Home() {
  return (
    <>
      <PageHeader
        title="Construction Contractor Portfolio"
        subtitle="Quality builds, clear timelines, and craftsmanship you can trust."
      />
      <section className="row">
        <div className="col-xs-12 text-xs-center">
          <h2>Contracting Services</h2>
          <p>
            Reliable construction services built around clear scope, pricing,
            and timelines.
          </p>
        </div>
        {services.map((service) => (
          <div className="col-xs-12  col-md-4" key={service.title}>
            <div className="icon-box">
              <i className={`fa  ${service.icon}  fa-3x`}></i>
              <div className="icon-box__text">
                <h4 className="icon-box__title">{service.title}</h4>
                <span className="icon-box__subtitle">{service.text}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="portfolio-grid">
        <div className="portfolio-grid__header">
          <h2>Recent Projects</h2>
          <ul className="portfolio-grid__nav">
            <li className="portfolio-grid__nav-item is-active">
              <span className="portfolio-grid__nav-link">All</span>
            </li>
            <li className="portfolio-grid__nav-item">
              <span className="portfolio-grid__nav-link">Exterier</span>
            </li>
            <li className="portfolio-grid__nav-item">
              <span className="portfolio-grid__nav-link">Interier</span>
            </li>
            <li className="portfolio-grid__nav-item">
              <span className="portfolio-grid__nav-link">Remodels</span>
            </li>
          </ul>
        </div>
        <div className="row">
          {portfolioItems.map((item) => (
            <div className="col-xs-12  col-sm-6  col-lg-3" key={item.title}>
              <div className="portfolio-grid__card">
                <img
                  className="portfolio-grid__card-img"
                  src={item.image}
                  alt={item.title}
                />
                <div className="portfolio-grid__card-block">
                  <h5 className="portfolio-grid__card-title">{item.title}</h5>
                  <p className="portfolio-grid__card-text">{item.subtitle}</p>
                  <a className="portfolio-grid__card-link btn" href="#">
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="row">
        <div className="col-xs-12  col-lg-6">
          <h2>Project Walkthroughs</h2>
          <p>
            Share walkthroughs of finished jobs, before-and-after clips, or
            client case studies.
          </p>
          <div className="card">
            <video
              className="img-fluid"
              controls
              poster={heroImage}
              aria-label="Portfolio reel placeholder"
            >
              <p>Add video files under /public/assets to enable playback.</p>
            </video>
          </div>
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

      <section className="row">
        <div className="col-xs-12  col-lg-7">
          <div className="testimonial">
            <h3 className="widget-title">Client Feedback</h3>
            <div className="carousel slide">
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <div className="row">
                    {testimonials.map((testimonial) => (
                      <div
                        className="col-xs-12  col-sm-6"
                        key={testimonial.author}
                      >
                        <blockquote>
                          <p className="testimonial__quote">
                            {testimonial.quote}
                          </p>
                          <cite className="testimonial__author">
                            {testimonial.author}
                          </cite>
                          <div className="testimonial__author-description">
                            {testimonial.role}
                          </div>
                          <div className="testimonial__rating">
                            {Array.from({
                              length: testimonial.rating,
                            }).map((_, index) => (
                              <i className="fa  fa-star" key={index}></i>
                            ))}
                          </div>
                        </blockquote>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12  col-lg-5">
          <div className="number-counters" data-speed="1400">
            {counters.map((counter) => (
              <div className="number-counter" key={counter.title}>
                <i className={`number-counter__icon  fa  ${counter.icon}`}></i>
                <div
                  className="number-counter__number  js-number"
                  data-to={counter.number}
                >
                  {counter.number}
                </div>
                <div className="number-counter__title">{counter.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="call-to-action  clearfix">
        <div className="call-to-action__text">
        </div>
        <div className="call-to-action__button">
          <NavLink className="btn  btn-primary" to="/contact">
            Get a Quote
          </NavLink>
          <NavLink className="btn  btn-secondary" to="/portfolio">
            View Projects
          </NavLink>
        </div>
      </section>
    </>
  )
}

export default Home
