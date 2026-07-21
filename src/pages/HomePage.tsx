import { Helmet } from 'react-helmet-async'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import GitHubActivity from '@/components/GitHubActivity'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Yummyfiles — Github developer</title>
      </Helmet>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <GitHubActivity />
    </>
  )
}
