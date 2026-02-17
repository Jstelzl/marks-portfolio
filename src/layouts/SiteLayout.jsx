import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink, Outlet } from 'react-router-dom'
import { CallConfirmContext } from '../context/CallConfirmContext'
import { shouldSkipCallConfirmation } from '../utils/callConfirm'

const logoPath = '/assets/images/colored-logo.png'
const PHONE_NUMBER = '+17042191589'

function SiteLayout() {
  const [navOpen, setNavOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [showCallConfirm, setShowCallConfirm] = useState(false)
  const footerRef = useRef(null)

  const initiateCall = useCallback(() => {
    if (shouldSkipCallConfirmation()) {
      window.location.href = `tel:${PHONE_NUMBER}`
    } else {
      setShowCallConfirm(true)
    }
  }, [])

  const confirmAndCall = useCallback(() => {
    setShowCallConfirm(false)
    window.location.href = `tel:${PHONE_NUMBER}`
  }, [])

  const callConfirmValue = useMemo(
    () => ({ showCallConfirm, setShowCallConfirm, initiateCall, confirmAndCall }),
    [showCallConfirm, initiateCall, confirmAndCall],
  )

  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen)
    return () => document.body.classList.remove('nav-open')
  }, [navOpen])

  useLayoutEffect(() => {
    if (!showCallConfirm || !footerRef.current) return
    const el = footerRef.current
    const updateHeight = () => {
      const h = el.offsetHeight
      document.documentElement.style.setProperty('--call-confirm-footer-height', `${h}px`)
    }
    updateHeight()
    const ro = new ResizeObserver(updateHeight)
    ro.observe(el)
    window.addEventListener('resize', updateHeight)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', updateHeight)
      document.documentElement.style.removeProperty('--call-confirm-footer-height')
    }
  }, [showCallConfirm])

  const navHoverStyle = useMemo(
    () => ({
      color: '#edac15',
      borderBottom: '0.25rem solid #edac15',
    }),
    [],
  )

  const handleNavLeave = useCallback(() => setHoveredItem(null), [])

  const handleMobileClick = useCallback((key) => {
    setHoveredItem(key)
    window.setTimeout(() => {
      setNavOpen(false)
      setHoveredItem(null)
    }, 150)
  }, [])

  const handleMouseEnter = useCallback((e) => {
    const key = e.currentTarget?.dataset?.navKey
    if (key) setHoveredItem(key)
  }, [])

  const makeLinkHandlers = useCallback((key) => ({
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleNavLeave,
    onFocus: handleMouseEnter,
    onBlur: handleNavLeave,
    onClick: () => handleMobileClick(key),
  }), [handleMouseEnter, handleNavLeave, handleMobileClick])

  return (
    <CallConfirmContext.Provider value={callConfirmValue}>
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
                className={`btn  header__navbar-toggler  hidden-lg-up${navOpen ? ' is-open' : ''}`}
                type="button"
                onClick={() => setNavOpen((prev) => !prev)}
                aria-expanded={navOpen}
                aria-controls="structurepress-main-navigation"
                aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
              >
                <i className={`fa  hamburger  ${navOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>

              <nav
                className={`header__navigation  collapse  navbar-toggleable-md  js-sticky-offset${
                  navOpen ? ' in' : ''
                }${hoveredItem ? ' nav-has-hover' : ''}`}
                aria-label="Main Menu"
                id="structurepress-main-navigation"
                onMouseLeave={handleNavLeave}
              >
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
                        hoveredItem === 'projects' ? ' is-hovered' : ''
                      }${isActive ? ' is-active' : ''}`
                    }
                    data-nav-key="projects"
                    to="/projects"
                    style={hoveredItem === 'projects' ? navHoverStyle : undefined}
                    {...makeLinkHandlers('projects')}
                    end={false}
                  >
                    Projects
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
                    Free Estimate
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="header__featured-link desktop-only-quote">
              <NavLink className="btn  btn-primary" to="/contact">
                Free Estimate
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

      <footer className="footer" ref={footerRef}>
        <div className="footer-top">
          <div className="container">
            <div className="row  footer-top__row">
              <div className="col-xs-12  col-md-3  footer-top__logo  footer-top__cell--logo">
                <img
                  src="/assets/images/transparent-logo.png"
                  alt="Construction Contractor Portfolio"
                  className="footer__logo-img  img-fluid"
                />
              </div>
              <div className="col-xs-12  col-md-3  footer-top__cell--contact">
                <h4>Contact</h4>
                <p>
                  <button
                    type="button"
                    className="footer__phone-link"
                    onClick={initiateCall}
                  >
                    <i className="fa  fa-phone  fa-lg" aria-hidden="true"></i>
                    {' '}+1 (704) 219-1589
                  </button>
                </p>
                <p>
                  <a href="mailto:mark@vartanianconstruction.com" className="footer__email-link" aria-label="Email mark@vartanianconstruction.com">
                    <i className="fa  fa-envelope  fa-lg" aria-hidden="true"></i>
                    {' '}Email
                  </a>
                </p>
              </div>
              <div className="col-xs-12  col-md-3  footer-top__cell--service-area">
                <h4>Service Area</h4>
                <p><a href="#">Greater Metro Area</a></p>
                <p><a href="#">Residential + light commercial</a></p>
              </div>
              <div className="col-xs-12  col-md-3  footer-top__cell--specialties">
                <h4>Specialties</h4>
                <p><a href="#">Remodels, additions, ADUs</a></p>
                <p><a href="#">Repairs and finish carpentry</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Call confirmation - rendered via portal to body, bar at top on desktop, bottom on mobile */}
      {showCallConfirm &&
        createPortal(
          <div
            className="call-confirm-overlay"
            onClick={() => setShowCallConfirm(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="call-confirm-title"
          >
            <div
              className="call-confirm-dialog"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="call-confirm-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={confirmAndCall}
                  id="call-confirm-title"
                >
                  +1 (704) 219-1589
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowCallConfirm(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
    </CallConfirmContext.Provider>
  )
}

export default SiteLayout
