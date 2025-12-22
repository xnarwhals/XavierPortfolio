import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'

function Layout() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="app-shell__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
