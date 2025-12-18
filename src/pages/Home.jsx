import './Home.scss'
import HomeGameBoy from '../components/HomeGameBoy'

// add parralax using https://www.npmjs.com/package/react-parallax 
// Add video game personality to the home page via the parallax

function Home() {
  return (
    <section className="home-page">
      <div className="home-hero">
        <h1 className="home-title">
          <span>Hello,</span>
          <span>I&apos;m Xavier!</span>
          <span>Game Developer</span>
        </h1>
        <p className="home-subtitle">Fullstack / iOS / Build engineer / Game Dev</p>      
      </div>
      <div className="home-section-block">
        <HomeGameBoy />
      </div>
      <div className="home-section-block">
        {/* Xavier Core principles or valuse in nice cards with icons 1. servent leadership 2. Innovation  3. Community    */}
      </div>
    </section>
  )
}

export default Home
