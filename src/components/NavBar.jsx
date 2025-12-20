import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faEnvelope,
  faGamepad,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faItchIo,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import './NavBar.scss'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/xaviergonzalez32/' },
  { label: 'Instagram', href: 'https://www.instagram.com/xavier_xgi/' },
  { label: 'GitHub', href: 'https://github.com/xnarwhals' },
  { label: 'YouTube', href: 'https://www.youtube.com/@XGFilm' },
  { label: 'itch.io', href: 'https://xnarwhals.itch.io' },
]

const iconMap = {
  LinkedIn: faLinkedin,
  Instagram: faInstagram,
  GitHub: faGithub,
  YouTube: faYoutube,
  'itch.io': faItchIo,
}

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [opacity, setOpacity] = useState(0.2)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(max-width: 900px)')
    const handleChange = () => setIsMobile(mediaQuery.matches)

    handleChange()
    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const max = 300
      const value = Math.min(window.scrollY / max, 1)
      setOpacity(0.2 + value * 0.6)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)
  const portfolioPath = isMobile ? '/quick-portfolio' : '/portfolio'

  return (
    <header
      className={`nav-bar ${isOpen ? 'nav-bar--open' : ''}`}
      style={{ backgroundColor: `rgba(6, 6, 6, ${opacity})` }}
    >
      <Link className="nav-bar__brand" to="/" onClick={closeMenu}>
        <span className="nav-bar__brand-mark">XG</span>
        <span className="nav-bar__brand-text">Xavier Gonzalez</span>
      </Link>
      <button
        type="button"
        className="nav-bar__toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <nav className="nav-bar__links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-bar__link ${isActive ? 'is-active' : ''}`
          }
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-bar__link ${isActive ? 'is-active' : ''}`
          }
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={faUser} />
          <span>About</span>
        </NavLink>
        <NavLink
          to={portfolioPath}
          className={({ isActive }) =>
            `nav-bar__link ${isActive ? 'is-active' : ''}`
          }
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={faSuitcase} />
          <span>Portfolio</span>
        </NavLink>
        <NavLink
          to="/achievements"
          className={({ isActive }) =>
            `nav-bar__link ${isActive ? 'is-active' : ''}`
          }
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={faGamepad} />
          <span>Achievements</span>
        </NavLink>
        <NavLink
          to="/secret"
          className={({ isActive }) =>
            `nav-bar__link ${isActive ? 'is-active' : ''}`
          }
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <span>Secret</span>
        </NavLink>
      </nav>

      <div className="nav-bar__social">
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.href}
            className="nav-bar__social-link"
            href={item.href}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={iconMap[item.label]} />

          </a>
        ))}
      </div>
    </header>
  )
}

export default NavBar
