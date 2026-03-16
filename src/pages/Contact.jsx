import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { contactFaqs, counters, services } from '../data/siteData'
import { useCallConfirm } from '../context/CallConfirmContext'

const CONTACT_EMAIL = 'mark@vartanianconstruction.com'
const CONTACT_PHONE = '+1 (704) 219-1589'

function Contact() {
  const { initiateCall } = useCallConfirm() || {}
  const [openFaqId, setOpenFaqId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="contact-us-today">
        <div className="row">
          <div className="col-xs-12  col-md-6">
            <button
              type="button"
              className="contact-us-today__option"
              onClick={() => initiateCall?.()}
              aria-label="Call +1 (704) 219-1589"
            >
              <i className="fa  fa-phone  fa-3x" aria-hidden="true"></i>
              <span className="contact-us-today__label">+1 (704) 219-1589</span>
            </button>
          </div>
          <div className="col-xs-12  col-md-6">
            <NavLink to="/contact" className="contact-us-today__option">
              <i className="fa  fa-map-marker  fa-3x" aria-hidden="true"></i>
              <span className="contact-us-today__label">Location</span>
            </NavLink>
          </div>
        </div>
      </section>
      <section className="row  contact-form-row">
        <div className="col-xs-12  col-lg-7">
          <div className="number-counters  number-counters--contact" data-speed="1400">
            {counters.map((counter) => (
              <div className="number-counter" key={counter.title}>
                <i className={`number-counter__icon  fa  ${counter.icon}`} aria-hidden="true" />
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
          <h2>Request a Quote</h2>
          <p>
            Tell us about your project scope, timeline, and location. We'll
            follow up with next steps and a detailed estimate.
          </p>
          <div className="card">
            <div className="card-block">
              {submitted ? (
                <div className="contact-message contact-message--success">
                  <p>
                    <strong>Thank you!</strong> Your message has been sent. We'll
                    get back to you within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="row">
                    <div className="col-xs-12  col-sm-6">
                      <div className="form-group">
                        <label htmlFor="contact-name" className="form-control-label">
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xs-12  col-sm-6">
                      <div className="form-group">
                        <label htmlFor="contact-email" className="form-control-label">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-control-label">
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="(555) 555-0123"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-project-type" className="form-control-label">
                      Project type
                    </label>
                    <select
                      id="contact-project-type"
                      name="projectType"
                      className="form-control"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Select a project type</option>
                      {services.map((svc) => (
                        <option key={svc.title} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-control-label">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-control"
                      rows={5}
                      placeholder="Describe your project, timeline, and any questions..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="card contact-direct">
            <div className="card-block">
              <h4>Or reach out directly</h4>
              <p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="contact-direct__link">
                  <i className="fa fa-envelope" aria-hidden="true" /> {CONTACT_EMAIL}
                </a>
              </p>
              <p>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="contact-direct__link">
                  <i className="fa fa-phone" aria-hidden="true" /> {CONTACT_PHONE}
                </a>
              </p>
              <p>
                <i className="fa fa-map-marker" aria-hidden="true" /> Service Area: Greater Metro Area
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-12  col-lg-5">
          <div className="contact-faq">
            <h2 className="contact-faq__title">Frequently Asked Questions</h2>
            <div className="accordion">
              {contactFaqs.map((faq, index) => {
                const isOpen = openFaqId === index
                return (
                  <div className="accordion__panel" key={index}>
                    <h4 className="panel-title">
                      <button
                        type="button"
                        className={`contact-faq__toggle${isOpen ? '' : ' collapsed'}`}
                        onClick={() => setOpenFaqId(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-content-${index}`}
                        id={`faq-trigger-${index}`}
                      >
                        {faq.question}
                      </button>
                    </h4>
                    <div
                      id={`faq-content-${index}`}
                      className={`accordion__content  collapse${isOpen ? ' in' : ''}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${index}`}
                    >
                      <div className="panel-body">{faq.answer}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
