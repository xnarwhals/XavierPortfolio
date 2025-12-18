import PageLayout from '../components/PageLayout'

function Portfolio() {
  return (
    <PageLayout
      kicker="Portfolio"
      title="Projects at a glance"
      description="Showcase full case studies here—problem, approach, outcome. Swap in cards, galleries, or embeds on the right."
    >
      <div className="info-grid">
        <div className="info-card">
          <p className="info-card__label">Project slot</p>
          <p className="info-card__title">Flagship build</p>
          <p className="info-card__text">
            Add a short blurb for your lead project with links, media, or a deeper write-up.
          </p>
        </div>
        <div className="info-card">
          <p className="info-card__label">Project slot</p>
          <p className="info-card__title">Prototype or experiment</p>
          <p className="info-card__text">
            Capture quick wins, prototypes, or explorations that show range and speed.
          </p>
        </div>
        <div className="info-card">
          <p className="info-card__label">Project slot</p>
          <p className="info-card__title">Collaboration</p>
          <p className="info-card__text">
            Highlight team work—what you owned, how you partnered, and what shipped.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default Portfolio
