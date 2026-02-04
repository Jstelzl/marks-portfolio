import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const logoPath = '/assets/images/logo.png'

function SiteLayout() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="boxed-container">
      <header className="site-header">
        <div className="top">
          <div className="container  top__container"></div>
        </div>

        <div className="header">
          <div className="container">
            <div className="header__logo">
              <NavLink to="/">
                <img
                  src={logoPath}
                  alt="Construction Contractor Portfolio"
                  className="img-fluid"
                />
              </NavLink>
            </div>

            <button
              className="btn  btn-primary  header__navbar-toggler  hidden-lg-up"
              type="button"
              onClick={() => setNavOpen((prev) => !prev)}
              aria-expanded={navOpen}
              aria-controls="structurepress-main-navigation"
            >
              <i className="fa  fa-bars  hamburger"></i> <span>MENU</span>
            </button>

            <nav
              className={`header__navigation  collapse  navbar-toggleable-md  js-sticky-offset${
                navOpen ? ' show' : ''
              }`}
              aria-label="Main Menu"
              id="structurepress-main-navigation"
            >
              <NavLink className="home-icon" to="/">
                <i className="fa  fa-home"></i>
              </NavLink>
              <ul
                className="main-navigation  js-main-nav"
                role="menubar"
                onClick={() => setNavOpen(false)}
              >
                <li className="menu-item">
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>

            <div className="header__featured-link">
              <NavLink className="btn  btn-primary" to="/contact">
                Get a Quote
              </NavLink>
            </div>
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
