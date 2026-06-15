import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import GitHubActivity from './components/GitHubActivity'
import Footer from './components/Footer'

export default function App() {
  return (
    <HelmetProvider>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <GitHubActivity />
      </main>
      <Footer />
    </HelmetProvider>
  )
}
