import { NavLink } from 'react-router-dom'

const errorImage = '/assets/images/404.png'

function NotFound() {
  return (
    <section className="error-404">
      <div className="row">
        <div className="col-xs-12  col-lg-6">
          <div className="error-404__content">
            <h2 className="error-404__title">Page Not Found</h2>
            <p className="error-404__text">
              The page you’re looking for doesn’t exist or has moved. Use the
              button below to return home.
            </p>
            <NavLink className="btn  btn-primary" to="/">
              Back to Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-12  col-lg-6">
          <img src={errorImage} alt="404 illustration" />
        </div>
      </div>
    </section>
  )
}

export default NotFound
