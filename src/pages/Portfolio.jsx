import { useState, useEffect, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import {
  portfolioCategories,
  portfolioItems,
} from '../data/siteData'

const ITEMS_PER_PAGE = 12

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredFilter, setHoveredFilter] = useState(null)
  const [expandedCard, setExpandedCard] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  const handleCardClick = (e, slug) => {
    if (e.target.closest('.portfolio-grid__card-link')) return
    setExpandedCard((prev) => (prev === slug ? null : slug))
  }

  const filteredProjects =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE))
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE
  const visibleProjects = filteredProjects.slice(startIdx, startIdx + ITEMS_PER_PAGE)
  const totalCount = filteredProjects.length

  useEffect(() => {
    setCurrentPage(1)
  }, [activeFilter])

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages)
  }, [currentPage, totalPages])

  const paginationItems = useMemo(() => {
    const items = []
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) items.push(i)
    } else {
      for (let i = 1; i <= 4; i++) items.push(i)
      items.push('...')
      items.push(totalPages)
    }
    return items
  }, [totalPages])

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
          {visibleProjects.map((item) => (
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
        <nav
          className="portfolio-grid__pagination"
          aria-label="Project pagination"
        >
          <div className="portfolio-grid__pagination-inner">
            <button
              type="button"
              className="portfolio-grid__pagination-nav"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              aria-label="Previous page"
            >
              <i className="fa fa-chevron-left" aria-hidden="true" />
              Previous
            </button>
            <div className="portfolio-grid__pagination-numbers">
              {totalPages > 1 ? (
                paginationItems.map((item, i) =>
                  item === '...' ? (
                    <span key={`ellipsis-${i}`} className="portfolio-grid__pagination-ellipsis">
                      …
                    </span>
                  ) : (
                    <button
                      key={item}
                      type="button"
                      className={`portfolio-grid__pagination-btn${item === currentPage ? ' is-current' : ''}`}
                      onClick={() => setCurrentPage(item)}
                      aria-label={`Page ${item}`}
                      aria-current={item === currentPage ? 'page' : undefined}
                    >
                      {item}
                    </button>
                  ),
                )
              ) : (
                <span className="portfolio-grid__pagination-btn is-current" aria-current="page">
                  {currentPage}
                </span>
              )}
            </div>
            <button
              type="button"
              className="portfolio-grid__pagination-nav"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              aria-label="Next page"
            >
              Next
              <i className="fa fa-chevron-right" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Portfolio
