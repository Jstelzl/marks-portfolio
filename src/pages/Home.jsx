import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {
  counters,
  portfolioItems,
  services,
} from '../data/siteData'
import { useCallConfirm } from '../context/CallConfirmContext'

const MOBILE_BREAKPOINT = 768

function Home() {
  const [expandedCard, setExpandedCard] = useState(null)
  const [contactExpanded, setContactExpanded] = useState(false)
  const { initiateCall } = useCallConfirm() || {}
  const navigate = useNavigate()

  const handleCardClick = (e, slug) => {
    if (e.target.closest('.portfolio-grid__card-link')) return
    if (window.innerWidth < MOBILE_BREAKPOINT) {
      navigate(`/projects/${slug}`)
    } else {
      setExpandedCard((prev) => (prev === slug ? null : slug))
    }
  }

  return (
    <>
      <section className="contact-us-today">
        <div className="row">
          <div className="col-xs-12  col-md-4">
            <button
              type="button"
              className="contact-us-today__option"
              onClick={() => initiateCall?.()}
              aria-label="Call +1 (704) 219-1589"
            >
              <i className="fa  fa-phone  fa-3x" aria-hidden="true"></i>
              <span className="contact-us-today__label">+1 (704) 219-1589</span>
            </button>
          </div>
          <div
            id="contact-us-today__more"
            className={`contact-us-today__more${contactExpanded ? ' is-expanded' : ''}`}
          >
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
          <button
            type="button"
            className="contact-us-today__expand-toggle"
            onClick={() => setContactExpanded((prev) => !prev)}
            aria-expanded={contactExpanded}
            aria-controls="contact-us-today__more"
          >
            <span className="contact-us-today__expand-label">
              {contactExpanded ? 'Show less' : 'Show more'}
            </span>
            <i className={`fa fa-chevron-${contactExpanded ? 'up' : 'down'}`} aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="bio-section">
        <h2 className="bio-section__title">Built Right. Built On Time. Built to Last.</h2>
        <p className="bio-section__subtitle">Your vision. Our expertise. Real results.</p>
        <p className="bio-section__text">
          For over 15 years, Vartanian Construction has delivered high-quality
          remodels, additions, ADUs, and light commercial projects across
          Charlotte and the surrounding area. Precision craftsmanship, clear
          timelines, and results you can trust.
        </p>
        <div className="bio-section__cta">
          <NavLink className="hero-cta  hero-cta--primary" to="/contact">
            Request a Consultation
          </NavLink>
          <NavLink className="hero-cta  hero-cta--secondary" to="/projects">
            <span className="hero-cta__icon" aria-hidden="true">
              <i className="fa fa-wrench"></i>
              <i className="fa fa-hammer"></i>
            </span>
            View Our Work
          </NavLink>
        </div>
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

      <section className="row contracting-services">
        <div className="col-xs-12 contracting-services__header">
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
              <span className="quote-cta-boxes__button-text  quote-cta-boxes__button-text--full">
                Get a Free Estimate
              </span>
              <span className="quote-cta-boxes__button-text  quote-cta-boxes__button-text--short">
                Free Estimate
              </span>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
