import { NavLink } from 'react-router-dom'
import {
  counters,
  portfolioItems,
  services,
  testimonials,
} from '../data/siteData'

function Home() {
  return (
    <>
      <section className="contact-us-today">
        <h2 className="contact-us-today__title">Contact Us Today</h2>
        <div className="row">
          <div className="col-xs-12  col-md-4">
            <NavLink to="/contact" className="contact-us-today__option">
              <i className="fa  fa-phone  fa-3x" aria-hidden="true"></i>
              <span className="contact-us-today__label">Call</span>
            </NavLink>
          </div>
          <div className="col-xs-12  col-md-4">
            <NavLink to="/contact" className="contact-us-today__option">
              <i className="fa  fa-map-marker  fa-3x" aria-hidden="true"></i>
              <span className="contact-us-today__label">Location</span>
            </NavLink>
          </div>
          <div className="col-xs-12  col-md-4">
            <NavLink to="/contact" className="contact-us-today__option">
              <i className="fa  fa-desktop  fa-3x" aria-hidden="true"></i>
              <span className="contact-us-today__label">Email</span>
            </NavLink>
          </div>
        </div>
      </section>
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

      <section className="portfolio-grid  portfolio-grid--recent">
        <h2>Recent Projects</h2>
        <div className="portfolio-grid__cards">
          {portfolioItems.slice(0, 3).map((item) => (
            <div className="portfolio-grid__card" key={item.slug}>
              <NavLink to={`/portfolio/${item.slug}`}>
                <img
                  className="portfolio-grid__card-img"
                  src={item.image}
                  alt={item.title}
                />
              </NavLink>
              <div className="portfolio-grid__card-block">
                <h5 className="portfolio-grid__card-title">{item.title}</h5>
                <p className="portfolio-grid__card-text">{item.subtitle}</p>
                <NavLink
                  className="portfolio-grid__card-link btn"
                  to={`/portfolio/${item.slug}`}
                >
                  View
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <div className="portfolio-grid__view-all">
          <NavLink className="btn  btn-secondary" to="/portfolio">
            View All Projects
          </NavLink>
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
