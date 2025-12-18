import PageLayout from '../components/PageLayout'

function Secret() {
  return (
    <PageLayout
      kicker="Easter egg"
      title="Secret corner"
      description="Tuck away experiments, in-progress ideas, or a playful experience here."
    >
      <div className="info-grid">
        <div className="info-card">
          <p className="info-card__label">Idea</p>
          <p className="info-card__title">Hidden lab</p>
          <p className="info-card__text">
            Use this space for prototypes, mini-games, or interactive snippets you want to
            share selectively.
          </p>
        </div>
        <div className="info-card">
          <p className="info-card__label">Note</p>
          <p className="info-card__title">Private link</p>
          <p className="info-card__text">
            Keep the path in the nav for quick access, or gate the content with a simple
            password flow later.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default Secret
