import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  counters,
  portfolioItems,
  services,
} from '../data/siteData'
import { useCallConfirm } from '../context/CallConfirmContext'

function Home() {
  const [expandedCard, setExpandedCard] = useState(null)
  const { initiateCall } = useCallConfirm() || {}

  const handleCardClick = (e, slug) => {
    if (e.target.closest('.portfolio-grid__card-link')) return
    setExpandedCard((prev) => (prev === slug ? null : slug))
  }

  return (
    <>
      <section className="contact-us-today">
        <h2 className="contact-us-today__title">Contact Us Today</h2>
        <div className="row">
          <div className="col-xs-12  col-md-4">
            <button
              type="button"
              className="contact-us-today__option"
              onClick={() => initiateCall?.()}
              aria-label="Call +1 (704) 219-1589"
            >
              <i className="fa  fa-phone  fa-3x" aria-hidden="true"></i>
              <span className="contact-us-today__label">Call</span>
            </button>
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

      <section className="bio-section">
        <h2 className="bio-section__title">About Our Team</h2>
        <p className="bio-section__text">
          We are a team of licensed contractors dedicated to quality craftsmanship,
          clear communication, and lasting results. With years of experience in
          residential and light commercial construction, we bring expertise and
          reliability to every project.
        </p>
        <NavLink className="btn  btn-primary  bio-section__button" to="/contact">
          Get a free estimate today
        </NavLink>
      </section>

      <section className="portfolio-grid  portfolio-grid--recent">
        <h2>Recent Projects</h2>
        <div className="portfolio-grid__cards">
          {portfolioItems.slice(0, 3).map((item) => (
            <div
              className={`portfolio-grid__card${expandedCard === item.slug ? ' is-expanded' : ''}`}
              key={item.slug}
              onClick={(e) => handleCardClick(e, item.slug)}
            >
              <div className="portfolio-grid__card-image">
                <img
                  className="portfolio-grid__card-img"
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                />
              </div>
              <div className="portfolio-grid__card-block" tabIndex={0}>
                <h5 className="portfolio-grid__card-title">{item.title}</h5>
                <p className="portfolio-grid__card-text">{item.subtitle}</p>
                <NavLink
                  className="portfolio-grid__card-link btn"
                  to={`/projects/${item.slug}`}
                >
                  View
                </NavLink>
              </div>
            </div>
          ))}
        </div>
        <div className="portfolio-grid__view-all">
          <NavLink className="btn  btn-secondary" to="/projects">
            View All Projects
          </NavLink>
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

      <section className="quote-cta-boxes">
        <div className="quote-cta-boxes__inner">
          <div className="quote-cta-boxes__stats-box">
            <div className="number-counters" data-speed="1400">
              {counters.map((counter) => (
                <div
                  className={`number-counter number-counter--${counter.title.toLowerCase().replace(/\s+/g, '-')}`}
                  key={counter.title}
                >
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
          <div className="quote-cta-boxes__button-box">
            <NavLink className="btn  quote-cta-boxes__button" to="/contact">
              Get a Free Estimate
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
