import { NavLink } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import { counters } from '../data/siteData'

function Contact() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="Tell us about your project and we’ll follow up quickly."
      />
      <section className="row">
        <div className="col-xs-12  col-lg-7">
          <h2>Request a Quote</h2>
          <p>
            Tell us about your project scope, timeline, and location. We’ll
            follow up with next steps and a detailed estimate.
          </p>
          <div className="card">
            <div className="card-block">
              <p>
                Email: hello@contractorco.com
                <br />
                Phone: +1 (555) 555-0123
                <br />
                Service Area: Greater Metro Area
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12  col-lg-5">
          <div className="number-counters" data-speed="1400">
            {counters.map((counter) => (
              <div className="number-counter" key={counter.title}>
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
      </section>

      <section className="call-to-action  clearfix">
        <div className="call-to-action__text">
          <h3 className="call-to-action__title">
            Ready to plan your next project?
          </h3>
          <p className="call-to-action__subtitle">
            Request a walkthrough and a detailed estimate.
          </p>
        </div>
        <div className="call-to-action__button">
          <NavLink className="btn  btn-primary" to="/contact">
            Get a Quote
          </NavLink>
          <NavLink className="btn  btn-secondary" to="/portfolio">
            View Projects
          </NavLink>
        </div>
      </section>
    </>
  )
}

export default Contact
