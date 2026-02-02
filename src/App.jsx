import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Achievements from './pages/Achievements'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import QuickPortfolio from './pages/QuickPortfolio'
import Secret from './pages/Secret'
import Services from './pages/Services'
import './App.scss'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="quick-portfolio" element={<QuickPortfolio />} />
          <Route path="secret" element={<Secret />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </>
  )
}


export default App
