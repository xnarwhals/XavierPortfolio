import './Home.scss'
import { Parallax } from 'react-parallax'
import { useIsMobile } from '../hooks/useIsMobile'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import GlitchText from '../components/ReactBits/GlitchText'
import TextType from '../components/ReactBits/TextType'
import LightRays from '../components/ReactBits/LightRays';

import HomeGameBoy from '@/components/HomeGameBoy'

function Home() {
  const isMobile = useIsMobile()

  return (
    <div className="home">
      <Parallax
        className="home__hero"
        bgImage={isMobile ? "/Imgs/Misc/MobileBG.png": "/Imgs/Misc/BG.png"}
      >
        <div className="home-hero-content">
          <div className="home-text-container">
            <GlitchText 
              speed={1}
              enableShadows={true}
              enableOnHover={false}
              className='custom-class'
            >
              XG
            </GlitchText>
          </div>
          <div className='subtitle'>
            <TextType
              text={['Game', 'iOS', 'Frontend', 'Build']}
              textColors={['gold']}
              typingSpeed={100}
              deletingSpeed={100}
              />
              <p>Developer</p>
          </div>
          <FontAwesomeIcon className='arrow-down' icon={faArrowDown}/>
        </div> 
      </Parallax>

      <section id="Gameboy" className="home__section">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        <div className="home__section-inner">
          <HomeGameBoy />
        </div>
      </section>

      {/* <section id="contact" className="home__section">
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
      </section> */}
    </div>
  )
}

export default Home
