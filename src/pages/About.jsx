import { useState } from 'react'
import PageLayout from '../components/PageLayout'
import TIMELINE from '../data/Timeline'
import Stack from '@/components/ReactBits/Stack'
import AboutDialouge from '../components/AboutDialouge'
import Header from '../components/Header'
import './About.scss'

function About() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = TIMELINE[activeIndex] ?? TIMELINE[0]
  const totalItems = TIMELINE.length
  const images = activeItem?.images ?? []

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems)
  }

  return (
    <PageLayout
      kicker="About Me"
      title="Who is Xavier Gonzalez?"
      className="page--about"
      feature={(
        <div className='about-feature'>
          <Header title="Timeline"/>
          <ul className="timeline timeline--scrollable">
            {TIMELINE.map((item, index) => (
              <li key={item.title} className="timeline__item">
                <button
                  type="button"
                  className={`timeline__item-button ${index === activeIndex ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={index === activeIndex}
                >
                  <span className="timeline__dot" />
                  <p className="timeline__period">{item.period}</p>
                  <p className="timeline__title">{item.title}</p>
                  <p className="timeline__subtitle">{item.subtitle}</p>
                </button>
              </li>
            ))}
          </ul>      
        </div>
      )}
      children={(<AboutDialouge />)}
      footer={(
        activeItem && (
          <article className="about-timeline-details">
            <div className="about-timeline-details__frame">
              <p className="about-timeline-details__period">
                {activeItem.period} - {activeItem.endDate}
              </p>
              <h3 className="about-timeline-details__title">{activeItem.detailTitle}</h3>
              <div className='about-timeline-split'>
                <div className="about-timeline-details__text">
                  {(activeItem.details ?? []).map((paragraph, index) => (
                    <p key={`${activeItem.title}-detail-${index}`}>{paragraph}</p>
                  ))}
                </div>
                {images.length > 0 && (
                  <div className='stack-conatiner'>
                    <Stack
                      randomRotation={false}
                      pauseOnHover={true}
                      autoplay={true}
                      autoplayDelay={3000}
                      shouldDisableDrag={false}
                      sensitivity={180}
                      sendToBackOnClick={true}
                      cards={images.map((image, index) => (
                        <img
                          key={image.src ?? index}
                          src={image.src}
                          alt={image.alt ?? `timeline-${activeItem.title}-${index + 1}`}
                        />
                      ))}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="about-timeline-details__actions">
              <span className="about-timeline-details__count">
                {String(activeIndex + 1).padStart(2, '0')} / {String(totalItems).padStart(2, '0')}
              </span>
              <button type="button" className="about-timeline-details__next" onClick={handleNext}>
                Next
              </button>
            </div>
          </article>
        )
      )}
    />
  )
}

export default About
