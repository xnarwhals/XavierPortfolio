import './Home.scss'
import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HomeSplit from '@/components/HomeSplit'
import QuestMenu from '@/components/QuestMenu'
import HomeGameBoy from '@/components/HomeGameBoy'

import Balatro from '@/components/ReactBits/Balatro'
import TextType from '@/components/ReactBits/TextType'
import AnimatedContent from '@/components/ReactBits/AnimatedContent'

// 3 menu items currently
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
  const [toggleQuestMenu, setToggleQuestMenu] = useState(false) // quests start hidden 
  const [isQuestClosing, setIsQuestClosing] = useState(false)
  const [questAnimKey, setQuestAnimKey] = useState(0)

  // smart memo
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

  const openQuestMenu = () => {
    setIsQuestClosing(false)
    setToggleQuestMenu(true)
    setQuestAnimKey((prev) => prev + 1)
  }

  const closeQuestMenu = () => {
    setIsQuestClosing(true)
    setQuestAnimKey((prev) => prev + 1)
  }

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
          } else if (target.label === "QUESTS") {
            openQuestMenu()
            setHasPressedEnter(false)
          } else {
            setHasPressedEnter(false)
            const isMobile = window.matchMedia('(max-width: 768px)').matches
            const destination = isMobile ? '/quick-portfolio' : target.to
            navigate(destination)
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
    <>
      {/* Quest Menu  */}
      {toggleQuestMenu && (
        <AnimatedContent
          key={`quest-${questAnimKey}-${isQuestClosing ? 'out' : 'in'}`}
          className="quest-container"
          distance={50}
          duration={isQuestClosing ? 0 : 0.25}
          animateOpacity={!isQuestClosing}
          initialOpacity={isQuestClosing ? 1 : 0}
          disappearAfter={isQuestClosing ? 0.01 : 0}
          disappearDuration={0.2}
          disappearEase="power2.in"
          onDisappearanceComplete={() => {
            if (isQuestClosing) {
              setToggleQuestMenu(false)
              setIsQuestClosing(false)
            }
          }}
        >
          <QuestMenu onClose={closeQuestMenu} />
        </AnimatedContent>
      )}
      
      {/* Dual split view  */}
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
                  if (item.label === "QUESTS") {
                    openQuestMenu()
                    return
                  }
                  const isMobile = window.matchMedia('(max-width: 768px)').matches
                  const destination = isMobile ? '/quick-portfolio' : item.to
                  navigate(destination)
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

      {/* Home GameBoy edit style */}
      <div className="home-gameboy-container">
        <h1 className='home-gameboy-text'>Props to you for scrolling down</h1>
        <div className="home-gameboy-wrapper">
          <HomeGameBoy />
        </div>
      </div>
    </>
  )
}

export default Home
