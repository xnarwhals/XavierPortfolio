import PageLayout from '../components/PageLayout'

function Achievements() {
  return (
    <PageLayout
      kicker="Highlights"
      title="Milestones & wins"
    >
      <div className="info-grid">
        <div className="info-card">
          <p className="info-card__label">Recent win</p>
          <p className="info-card__title">Feature launch</p>
          <p className="info-card__text">
            Placeholder for a quick story—what the challenge was, how you solved it, and the
            impact it delivered.
          </p>
        </div>
        <div className="info-card">
          <p className="info-card__label">Recognition</p>
          <p className="info-card__title">Team shoutout</p>
          <p className="info-card__text">
            Swap this with accolades, press mentions, or testimonials that reinforce your
            strengths.
          </p>
        </div>
        <div className="info-card">
          <p className="info-card__label">Metric</p>
          <p className="info-card__title">Impact snapshot</p>
          <p className="info-card__text">
            Call attention to outcomes: performance boosts, adoption, or other measurable
            results.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default Achievements
