
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Notification from './Notification'
import { QuestProgressProvider } from '@/context/QuestProgressContext'
import LoaderOverlay from './LoaderOverlay'
import { useEffect, useState } from 'react'

function Layout() {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(false)

  // loader
  useEffect(() => {
    setIsLoading(true)
    const timeoutId = window.setTimeout(() => {
      setIsLoading(false)
    }, 600)

    return () => window.clearTimeout(timeoutId)
  }, [location.pathname])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <QuestProgressProvider>
      <div className="app-shell">
        <NavBar />
        <Notification />
        <main className="app-shell__content">
          <Outlet />
        </main>
        <Footer />
        <LoaderOverlay isActive={isLoading} />
      </div>
    </QuestProgressProvider>
  )
}

export default Layout
