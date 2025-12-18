import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

function Layout() {
  return (
    <div className="app-shell">
      <NavBar />
      <main className="app-shell__content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
