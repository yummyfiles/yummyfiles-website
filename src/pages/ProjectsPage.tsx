import { useState, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { projects, getAllCategories, getAllPlatforms, getAllTechStack } from '@/data/projects'
import { searchProjects, sortProjects, filterProjects } from '@/lib/search'
import ScrollReveal from '@/components/ScrollReveal'
import SearchBar from '@/components/projects/SearchBar'
import FilterBar from '@/components/projects/FilterBar'
import SortDropdown from '@/components/projects/SortDropdown'
import ProjectGrid from '@/components/projects/ProjectGrid'

export default function ProjectsPage() {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('updated')
  const [category, setCategory] = useState('')
  const [platform, setPlatform] = useState('')
  const [status, setStatus] = useState('')
  const [tech, setTech] = useState('')

  const categories = useMemo(() => getAllCategories(), [])
  const platforms = useMemo(() => getAllPlatforms(), [])
  const techStack = useMemo(() => getAllTechStack(), [])

  const filtered = useMemo(() => {
    let result = projects
    result = searchProjects(result, query)
    result = filterProjects(result, { category, platform, status, tech })
    result = sortProjects(result, sortBy as 'newest' | 'updated' | 'alphabetical')
    return result
  }, [query, sortBy, category, platform, status, tech])

  const hasActiveFilters = category || platform || status || tech

  return (
    <>
      <Helmet>
        <title>Projects — Yummyfiles</title>
        <meta name="description" content="Browse all projects by Yummyfiles — apps, tools, experiments, and more." />
      </Helmet>

      <section className="pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-white/20" />
              <h2 className="text-sm text-white/40 uppercase tracking-[0.2em]">Projects</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-8 mb-3">
              All Projects
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-base text-white/50 mb-10 max-w-xl">
              Apps, tools, experiments, and everything I've built.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mb-8">
              <SearchBar value={query} onChange={setQuery} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="flex flex-col gap-3 mb-8">
              <FilterBar label="Category" options={categories} selected={category} onSelect={setCategory} />
              <FilterBar label="Tech" options={techStack} selected={tech} onSelect={setTech} />
              <FilterBar label="Platform" options={platforms} selected={platform} onSelect={setPlatform} />
              <FilterBar
                label="Status"
                options={['completed', 'in-progress', 'planned', 'archived']}
                selected={status}
                onSelect={setStatus}
              />
            </div>
          </ScrollReveal>

          <div className="flex items-center justify-between mb-6">
            <motion.p
              key={filtered.length}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-white/30"
            >
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
              {hasActiveFilters && (
                <button
                  onClick={() => { setCategory(''); setPlatform(''); setStatus(''); setTech('') }}
                  className="ml-3 text-white/40 hover:text-white/60 underline underline-offset-2"
                >
                  Clear filters
                </button>
              )}
            </motion.p>
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>

          <ProjectGrid projects={filtered} />
        </div>
      </section>
    </>
  )
}
