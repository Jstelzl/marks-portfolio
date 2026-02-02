import PageHeader from '../components/PageHeader'
import { services } from '../data/siteData'

function Services() {
  return (
    <>
      <PageHeader
        title="Services"
        subtitle="Residential and light commercial contracting done right."
      />
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
    </>
  )
}

export default Services
