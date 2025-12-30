import './Home.scss'
import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HomeSplit from '@/components/HomeSplit'
import Balatro from '@/components/ReactBits/Balatro'
import TextType from '@/components/ReactBits/TextType'

function MenuItem({ children, active, onClick, onHover, showConfirmation }) {
  return (
    <button
      className={`menu-item ${active ? "menu-item--active" : ""}`}
      onClick={onClick}
      onMouseEnter={onHover}
      type="button"
    >
      <span className="menu-item__arrow" />
      <span className="menu-item__label">{children}</span>
      {showConfirmation ? <span className="menu-item__confirm">ENTER TO CONFIRM</span> : null}
    </button>
  );
}

function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  const menuItems = useMemo(() => ([
    { label: "PLAY", to: "/portfolio" },
    { label: "QUESTS", to: null },
    { label: 'QUIT', to: null },
  ]), [])
  
  const [activeIndex, setActiveIndex] = useState(0)
  const [hasPressedEnter, setHasPressedEnter] = useState(false)

  const balatroView = useMemo(() => (
    <Balatro
      isRotate={false}
      mouseInteraction={true}
      pixelFilter={680}
      color1="#000000ff"
      color2="#FFD700"
      color3="#FFD700"
    />
  ), [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault()
        if (!hasPressedEnter) {
          setActiveIndex((prev) => (prev + 1) % menuItems.length)
        }
      }
      if (event.key === "ArrowUp") {
        event.preventDefault()
        if (!hasPressedEnter) {
          setActiveIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length)
        }
      }
      if (event.key === "Enter") {
        event.preventDefault()
        if (event.repeat) {
          return
        }
        if (!hasPressedEnter) {
          setHasPressedEnter(true)
          return
        }
        const target = menuItems[activeIndex]
        if (target) {
          if (target.label === "QUIT") {
            window.close()
          } else {
            setHasPressedEnter(false)
            navigate(target.to)
          }
        }
      }
      if (event.key === "Backspace") {
        setHasPressedEnter(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeIndex, hasPressedEnter, menuItems, navigate])

  useEffect(() => {
    setHasPressedEnter(false)
    setActiveIndex(0)
  }, [location.key])

  useEffect(() => {
    const handleReset = () => {
      setHasPressedEnter(false)
      setActiveIndex(0)
    }
    window.addEventListener('home:reset', handleReset)
    return () => window.removeEventListener('home:reset', handleReset)
  }, [])

  return (
    <HomeSplit
      left={
        <div className="home-menu">
          <div className="home-initials">XG</div>
          <div className="home-subtext">
            <span>
              <TextType
                text={['Game', 'iOS', 'Frontend', 'Build']}
                textColors={['gold']}
                typingSpeed={100}
                deletingSpeed={100}
              />
            </span>
            <span>Developer</span>
          </div>
          <nav className="home-menu__nav">
            {menuItems.map((item, index) => (
              <MenuItem
                key={item.label}
                active={index === activeIndex}
                onHover={() => setActiveIndex(index)}
                onClick={() => {
                  if (item.label === "QUIT") {
                    window.close()
                    return
                  }
                  navigate(item.to)
                }}
                showConfirmation={hasPressedEnter && index === activeIndex}
              >
                {item.label}
              </MenuItem>
            ))}
          </nav>
          {!hasPressedEnter && <div className="home-menu__confirm">Press Enter or Click</div>}
        </div>
      }
      right={
        balatroView
      }
    />
  )
}

export default Home
