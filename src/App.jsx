import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import SiteLayout from './layouts/SiteLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio'
import ProjectDetail from './pages/ProjectDetail'
import Services from './pages/Services'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
