import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  portfolioCategories,
  portfolioItems,
} from '../data/siteData'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <>
      <section className="portfolio-grid">
        <div className="portfolio-grid__header">
          <h2>Projects</h2>
          <ul className="portfolio-grid__nav" role="tablist">
            {portfolioCategories.map((cat) => (
              <li
                key={cat.slug}
                className={`portfolio-grid__nav-item${
                  activeFilter === cat.slug ? ' is-active' : ''
                }`}
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
      </section>
    </>
  )
}

export default Portfolio
