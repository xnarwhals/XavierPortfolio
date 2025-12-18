import PageLayout from '../components/PageLayout'

function About() {
  return (
    <PageLayout
      kicker="About"
      title="A quick snapshot"
      description="Keep this space for your story, your values, or a short bio that frames the work on the right."
      actions={<span className="pill">Open to collaborations</span>}
    >
      <div className="info-grid">
        <div className="info-card">
          <p className="info-card__label">Strengths</p>
          <p className="info-card__title">Product-minded builder</p>
          <p className="info-card__text">
            Blend design sense with hands-on development to move ideas from sketches to
            shipped features.
          </p>
        </div>
        <div className="info-card">
          <p className="info-card__label">Toolkit</p>
          <p className="info-card__title">Frontend-first</p>
          <p className="info-card__text">
            React, thoughtful styling, and rapid iteration. Swap in your stack, highlights,
            or certifications here.
          </p>
        </div>
        <div className="info-card">
          <p className="info-card__label">Working style</p>
          <p className="info-card__title">Curious & practical</p>
          <p className="info-card__text">
            Lead with clarity, iterate quickly, and keep the experience polished without
            sacrificing speed.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default About
