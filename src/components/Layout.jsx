import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import Notification from './Notification'
import { QuestProgressProvider } from '@/context/QuestProgressContext'

function Layout() {
  return (
    <QuestProgressProvider>
      <div className="app-shell">
        <NavBar />
        <Notification />
        <main className="app-shell__content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QuestProgressProvider>
  )
}

export default Layout
