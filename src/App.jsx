import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import DelayedPageLoading from './components/DelayedPageLoading'
import ScrollToTop from './components/ScrollToTop'
import SiteLayout from './layouts/SiteLayout'

const Home = lazy(() => import('./pages/Home'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          element={
            <Suspense fallback={<DelayedPageLoading />}>
              <SiteLayout />
            </Suspense>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
