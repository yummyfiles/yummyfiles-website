import { HelmetProvider } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import ProjectDocsPage from './pages/ProjectDocsPage'
import ProjectWikiPage from './pages/ProjectWikiPage'
import ProjectScreenshotsPage from './pages/ProjectScreenshotsPage'
import ProjectReleasesPage from './pages/ProjectReleasesPage'
import ProjectChangelogPage from './pages/ProjectChangelogPage'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/projects/:slug/docs" element={<ProjectDocsPage />} />
          <Route path="/projects/:slug/wiki" element={<ProjectWikiPage />} />
          <Route path="/projects/:slug/screenshots" element={<ProjectScreenshotsPage />} />
          <Route path="/projects/:slug/releases" element={<ProjectReleasesPage />} />
          <Route path="/projects/:slug/changelog" element={<ProjectChangelogPage />} />
        </Routes>
      </main>
      <Footer />
    </HelmetProvider>
  )
}
