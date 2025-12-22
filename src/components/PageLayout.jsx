import './PageLayout.scss'

function PageLayout({
  kicker,
  title,
  children,
  feature,
  className,
  footer,
}) {
  const hasFeature = Boolean(feature)
  const pageClassName = ['page', className].filter(Boolean).join(' ')

  return (
    <section className={pageClassName}>
      <div className={`page__grid ${hasFeature ? 'page__grid--feature' : ''}`}>
        {hasFeature && <div className="page__feature">{feature}</div>}
        <div className="page__intro">
          {kicker && <p className="page__kicker">{kicker}</p>}
          {title && <h1 className="page__title">{title}</h1>} 
          <div className="page__content">{children}</div>
        </div>
      </div>
      {footer && <div className="page__footer">{footer}</div>}
    </section>
  )
}

export default PageLayout
