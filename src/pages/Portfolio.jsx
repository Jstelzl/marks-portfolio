import PageHeader from '../components/PageHeader'
import { portfolioItems } from '../data/siteData'

function Portfolio() {
  return (
    <>
      <PageHeader
        title="Portfolio"
        subtitle="A selection of recent builds and renovation highlights."
      />
      <section className="portfolio-grid">
        <div className="portfolio-grid__header">
          <h2>Recent Projects</h2>
          <ul className="portfolio-grid__nav">
            <li className="portfolio-grid__nav-item is-active">
              <span className="portfolio-grid__nav-link">All</span>
            </li>
            <li className="portfolio-grid__nav-item">
              <span className="portfolio-grid__nav-link">Residential</span>
            </li>
            <li className="portfolio-grid__nav-item">
              <span className="portfolio-grid__nav-link">Commercial</span>
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Portfolio
