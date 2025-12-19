import { Parallax } from 'react-parallax'
import { useIsMobile } from '../hooks/useIsMobile'
import './Home.scss'

function Home() {
  const isMobile = useIsMobile()

  return (
    <div className="home">
      <Parallax
        className="home__hero"
        bgImage={isMobile ? "/Imgs/Misc/MobileBG.png": "/Imgs/Misc/BG.png"}
      >
        <div className="home-text-container">
          <p className="name-text">XG</p>
          {/* Animated type writter subtitle (ios, game dev, fullstack) */}
        </div>
        {/* <div className="home__scroll-cue" aria-hidden="true">
          <span />
        </div> */}
      </Parallax>

      <section id="work" className="home__section">
        <div className="home__section-inner">
          <div>
            <p className="home__section-kicker">Spotlight</p>
            <h2 className="home__section-title">Recent builds</h2>
            <p className="home__section-copy">
              Swap this area for project cards, demo reels, or in-engine captures. The page keeps
              scrolling so you can stack as much visual content as you want under the parallax hero.
            </p>
          </div>
          <div className="home__placeholder-grid">
            <div className="home__placeholder-card">Hero clip or reel</div>
            <div className="home__placeholder-card">Feature highlight</div>
            <div className="home__placeholder-card">Prototype / experiment</div>
          </div>
        </div>
      </section>

      <section id="contact" className="home__section">
        <div className="home__section-inner">
          <div>
            <p className="home__section-kicker">Stay in touch</p>
            <h2 className="home__section-title">Bio & contact</h2>
            <p className="home__section-copy">
              Drop your bio, links, and contact details here. Mirror the screenshot flow with a
              clean scroll path beneath the hero.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
