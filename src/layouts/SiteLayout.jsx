import { useEffect, useMemo, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const logoPath = '/assets/images/colored-logo.png'

function SiteLayout() {
  const [navOpen, setNavOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)

  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen)
    return () => document.body.classList.remove('nav-open')
  }, [navOpen])

  const navHoverStyle = useMemo(
    () => ({
      color: '#edac15',
      borderBottom: '0.25rem solid #edac15',
    }),
    [],
  )

  const handleNavPointerMove = (event) => {
    const item = event.target.closest('[data-nav-key]')
    if (item?.dataset?.navKey) {
      setHoveredItem(item.dataset.navKey)
    }
  }

  const handleNavPointerLeave = () => {
    setHoveredItem(null)
  }

  const handleMobileClick = (key) => {
    setHoveredItem(key)
    window.setTimeout(() => {
      setNavOpen(false)
      setHoveredItem(null)
    }, 150)
  }

  const makeLinkHandlers = (key) => ({
    onMouseEnter: () => setHoveredItem(key),
    onMouseLeave: () => setHoveredItem(null),
    onFocus: () => setHoveredItem(key),
    onBlur: () => setHoveredItem(null),
    onMouseOver: () => setHoveredItem(key),
    onMouseMove: () => setHoveredItem(key),
    onPointerMove: () => setHoveredItem(key),
    onClick: () => handleMobileClick(key),
  })

  return (
    <div className="boxed-container">
      <header className="site-header">
        <div className="top">
          <div className="container  top__container"></div>
        </div>

        <div className="header">
          <div className="container">
            <div className="header__inner">
              <div className="header__brand">
                <div className="header__logo">
                  <img
                    src={logoPath}
                    alt="Construction Contractor Portfolio"
                    className="img-fluid"
                  />
                </div>
              </div>

              <button
                className="btn  btn-primary  header__navbar-toggler  hidden-lg-up"
                type="button"
                onClick={() => setNavOpen((prev) => !prev)}
                aria-expanded={navOpen}
                aria-controls="structurepress-main-navigation"
                aria-label="Toggle navigation"
              >
                <i className="fa  fa-bars  hamburger"></i>
              </button>

              <nav
                className={`header__navigation  collapse  navbar-toggleable-md  js-sticky-offset${
                  navOpen ? ' in' : ''
                }`}
                aria-label="Main Menu"
                id="structurepress-main-navigation"
                onMouseMove={handleNavPointerMove}
                onMouseLeave={handleNavPointerLeave}
                onPointerMove={handleNavPointerMove}
                onPointerLeave={handleNavPointerLeave}
              >
                {navOpen ? (
                  <button
                    className="header__nav-close"
                    type="button"
                    onClick={() => setNavOpen(false)}
                    aria-label="Close navigation"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                ) : null}
                <ul
                  className="main-navigation  js-main-nav"
                  role="menubar"
                >
                  <li className="menu-item  menu-item--home">
                    <NavLink
                      className={({ isActive }) =>
                        `home-icon nav-link${
                          hoveredItem === 'home' ? ' is-hovered' : ''
                        }${isActive ? ' is-active' : ''}`
                      }
                      data-nav-key="home"
                      to="/"
                      style={hoveredItem === 'home' ? navHoverStyle : undefined}
                      {...makeLinkHandlers('home')}
                    >
                      <i className="fa  fa-home"></i>
                    </NavLink>
                  </li>
                  <li className="menu-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link${
                        hoveredItem === 'services' ? ' is-hovered' : ''
                      }${isActive ? ' is-active' : ''}`
                    }
                    data-nav-key="services"
                    to="/services"
                    style={hoveredItem === 'services' ? navHoverStyle : undefined}
                    {...makeLinkHandlers('services')}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link${
                        hoveredItem === 'portfolio' ? ' is-hovered' : ''
                      }${isActive ? ' is-active' : ''}`
                    }
                    data-nav-key="portfolio"
                    to="/portfolio"
                    style={hoveredItem === 'portfolio' ? navHoverStyle : undefined}
                    {...makeLinkHandlers('portfolio')}
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link${
                        hoveredItem === 'about' ? ' is-hovered' : ''
                      }${isActive ? ' is-active' : ''}`
                    }
                    data-nav-key="about"
                    to="/about"
                    style={hoveredItem === 'about' ? navHoverStyle : undefined}
                    {...makeLinkHandlers('about')}
                  >
                    About
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link${
                        hoveredItem === 'contact' ? ' is-hovered' : ''
                      }${isActive ? ' is-active' : ''}`
                    }
                    data-nav-key="contact"
                    to="/contact"
                    style={hoveredItem === 'contact' ? navHoverStyle : undefined}
                    {...makeLinkHandlers('contact')}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="menu-item  menu-item--quote mobile-only-quote">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link${
                        hoveredItem === 'quote' ? ' is-hovered' : ''
                      }${isActive ? ' is-active' : ''}`
                    }
                    data-nav-key="quote"
                    to="/contact"
                    style={hoveredItem === 'quote' ? navHoverStyle : undefined}
                    {...makeLinkHandlers('quote')}
                  >
                    Get a Quote
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="header__featured-link desktop-only-quote">
              <NavLink className="btn  btn-primary" to="/contact">
                Get a Quote
              </NavLink>
            </div>
            </div>

            <div
              className={`mobile-nav-overlay${navOpen ? ' is-open' : ''}`}
              onClick={() => setNavOpen(false)}
            />
          </div>
        </div>
      </header>

      <div id="primary" className="content-area  container" role="main">
        <div className="entry-content">
          <Outlet />
        </div>
      </div>

      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12  col-md-4">
                <h4>Contact</h4>
                <p>hello@contractorco.com</p>
                <p>+1 (555) 555-0123</p>
              </div>
              <div className="col-xs-12  col-md-4">
                <h4>Service Area</h4>
                <p>Greater Metro Area</p>
                <p>Residential + light commercial</p>
              </div>
              <div className="col-xs-12  col-md-4">
                <h4>Specialties</h4>
                <p>Remodels, additions, ADUs</p>
                <p>Repairs and finish carpentry</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
