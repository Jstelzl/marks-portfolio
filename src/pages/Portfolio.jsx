import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  portfolioCategories,
  portfolioItems,
} from '../data/siteData'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredFilter, setHoveredFilter] = useState(null)
  const [expandedCard, setExpandedCard] = useState(null)

  const handleCardClick = (e, slug) => {
    if (e.target.closest('.portfolio-grid__card-link')) return
    setExpandedCard((prev) => (prev === slug ? null : slug))
  }

  const filteredProjects =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <>
      <section className="portfolio-grid">
        <div className="portfolio-grid__header">
          <h2>Projects</h2>
          <ul
            className={`portfolio-grid__nav${hoveredFilter ? ' portfolio-grid__nav-has-hover' : ''}`}
            role="tablist"
            onMouseLeave={() => setHoveredFilter(null)}
          >
            {portfolioCategories.map((cat) => (
              <li
                key={cat.slug}
                className={`portfolio-grid__nav-item${
                  activeFilter === cat.slug ? ' is-active' : ''
                }${hoveredFilter === cat.slug ? ' is-hovered' : ''}`}
                onMouseEnter={() => setHoveredFilter(cat.slug)}
                onMouseLeave={() => setHoveredFilter(null)}
              >
                <button
                  type="button"
                  className="portfolio-grid__nav-link"
                  onClick={() => setActiveFilter(cat.slug)}
                  role="tab"
                  aria-selected={activeFilter === cat.slug}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="portfolio-grid__cards">
          {filteredProjects.map((item) => (
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
      </section>
    </>
  )
}

export default Portfolio
