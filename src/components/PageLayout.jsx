import './PageLayout.scss'

function PageLayout({
  kicker,
  title,
  titleClassName = '',
  description,
  actions,
  children,
}) {
  return (
    <section className="page">
      <div className="page__grid">
        <div className="page__intro">
          {kicker && <p className="page__kicker">{kicker}</p>}
          {title && <h1 className={`page__title ${titleClassName}`.trim()}>{title}</h1>}
          {description && <p className="page__description">{description}</p>}
          {actions && <div className="page__actions">{actions}</div>}
        </div>
        <div className="page__content">{children}</div>
      </div>
    </section>
  )
}

export default PageLayout
