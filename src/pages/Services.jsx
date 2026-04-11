import { services } from '../data/siteData'

function Services() {
  return (
    <>
      <div className="services-hero">
        <div className="services-hero__overlay">
          <div className="container">
            <h1 className="services-hero__title  display-1">Services</h1>
            <p className="services-hero__subtitle">
              Built right, Built to last.
            </p>
          </div>
        </div>
      </div>
      <section className="row">
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
    </>
  )
}

export default Services
