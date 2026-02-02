function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="page-header__title  display-1">{title}</h1>
        {subtitle ? <p className="page-header__subtitle">{subtitle}</p> : null}
      </div>
    </div>
  )
}

export default PageHeader
