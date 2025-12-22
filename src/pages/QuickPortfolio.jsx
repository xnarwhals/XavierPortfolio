import PageLayout from '../components/PageLayout'

function QuickPortfolio() {
  return (
    <PageLayout
      kicker="Mobile cut"
      title="Quick portfolio"
    >
      <div className="info-grid">
        <div className="info-card">
          <p className="info-card__label">Snapshot</p>
          <p className="info-card__title">Top projects</p>
          <p className="info-card__text">
            Drop in a concise list of your strongest work with one-liners and links.
          </p>
        </div>
        <div className="info-card">
          <p className="info-card__label">CTA</p>
          <p className="info-card__title">View the full version</p>
          <p className="info-card__text">
            Point to the detailed portfolio when readers want the deep dive experience.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default QuickPortfolio
