import { useEffect, useRef, useState } from 'react'
import { contactFaqs } from '../data/siteData'

const CONTACT_EMAIL = 'josiahstelzl@gmail.com'
const CONTACT_PHONE = '+1 (704) 219-1589'
const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^[\d\s\-\.\(\)]+$/  // digits, spaces, dashes, dots, parens - at least 10 digits

function Contact() {
  const [openFaqId, setOpenFaqId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formHighlighted, setFormHighlighted] = useState(false)
  const formCardRef = useRef(null)

  useEffect(() => {
    const handler = () => {
      setFormHighlighted(true)
      formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setTimeout(() => {
        const input = document.getElementById('contact-name')
        const sendNewBtn = document.querySelector('.contact-message__send-new')
        if (input) input.focus()
        else if (sendNewBtn) sendNewBtn.focus()
      }, 100)
      setTimeout(() => setFormHighlighted(false), 3000)
    }
    window.addEventListener('focusContactForm', handler)
    return () => window.removeEventListener('focusContactForm', handler)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!formData.name.trim()) next.name = 'field is required'
    if (!formData.email.trim()) next.email = 'field is required'
    else if (!EMAIL_REGEX.test(formData.email)) next.email = 'invalid email address'
    if (!formData.phone.trim()) next.phone = 'field is required'
    else if (!PHONE_REGEX.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) next.phone = 'invalid phone number'
    if (!formData.message.trim()) next.message = 'field is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    if (FORM_ENDPOINT.includes('YOUR_FORM_ID')) {
      setErrors((prev) => ({ ...prev, submit: 'Form is not configured. Add VITE_FORMSPREE_ENDPOINT to your .env file with your Formspree form ID from formspree.io' }))
      return
    }

    setSubmitting(true)
    setErrors((prev) => ({ ...prev, submit: '' }))
    try {
      const formBody = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        _replyto: formData.email,
      })
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
        redirect: 'manual', // Don't follow redirect - Formspree redirects to thanks page which has CORS issues
      })
      if (res.ok || res.type === 'opaqueredirect' || res.status === 302) {
        setSubmitted(true)
      } else {
        const data = await res.json().catch(() => ({}))
        const msg = data?.error || 'Something went wrong. Please try again or email us directly.'
        setErrors((prev) => ({ ...prev, submit: msg }))
      }
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        submit: 'Unable to send. Check your connection or email us directly at ' + CONTACT_EMAIL,
      }))
    } finally {
      setSubmitting(false)
    }
  }

  const handleSendNew = () => {
    setSubmitted(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setErrors({})
  }

  const handleClearForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' })
    setErrors({})
  }

  return (
    <>
      <section className="row  contact-form-row">
        <div className="col-xs-12">
          <div ref={formCardRef} className={`card${formHighlighted ? ' contact-form-card--highlighted' : ''}`}>
            <div className="card-block">
              {submitted ? (
                <div className="contact-message contact-message--success">
                  <p>
                    <strong>Thank you!</strong> Your message has been sent. We'll
                    get back to you within 1–2 business days.
                  </p>
                  <button
                    type="button"
                    className="contact-message__send-new"
                    onClick={handleSendNew}
                  >
                    <i className="fa fa-paper-plane contact-message__send-new-icon" aria-hidden="true" />
                    Send New Message
                  </button>
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
                          maxLength={30}
                          className={`form-control${errors.name ? ' is-invalid' : ''}`}
                          placeholder={errors.name || 'Your name'}
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        {errors.name && <span className="contact-form__error">{errors.name}</span>}
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
                          maxLength={80}
                          className={`form-control${errors.email ? ' is-invalid' : ''}`}
                          placeholder={errors.email || 'you@example.com'}
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {errors.email && <span className="contact-form__error">{errors.email}</span>}
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
                      className={`form-control${errors.phone ? ' is-invalid' : ''}`}
                      placeholder={errors.phone || '(555) 555-0123'}
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    {errors.phone && <span className="contact-form__error">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-control-label">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      maxLength={2000}
                      className={`form-control${errors.message ? ' is-invalid' : ''}`}
                      rows={5}
                      placeholder={errors.message || 'Describe your project, timeline, and any questions...'}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    {errors.message && <span className="contact-form__error">{errors.message}</span>}
                  </div>
                  {errors.submit && <p className="contact-form__error" style={{ marginTop: '0.5rem' }}>{errors.submit}</p>}
                  <div className="contact-form__actions">
                    <button type="submit" className="btn btn-primary" disabled={submitting}>
                      {submitting ? 'Sending...' : 'Send message'}
                    </button>
                    <button
                      type="button"
                      className="contact-form__clear"
                      onClick={handleClearForm}
                    >
                      <i className="fa fa-eraser contact-form__clear-icon" aria-hidden="true" />
                      Clear form
                    </button>
                  </div>
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
                <i className="fa fa-map-marker" aria-hidden="true" /> Service Area: Greater Charlotte, NC Metro Area
              </p>
            </div>
          </div>
          <section className="contact-faq-section" aria-labelledby="contact-faq-heading">
            <div className="contact-faq">
              <h2 id="contact-faq-heading" className="contact-faq__title">
                Frequently Asked Questions
              </h2>
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
          </section>
        </div>
      </section>
    </>
  )
}

export default Contact
