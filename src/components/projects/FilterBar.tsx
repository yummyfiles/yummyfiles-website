import { motion } from 'framer-motion'

interface FilterBarProps {
  label: string
  options: string[]
  selected: string
  onSelect: (value: string) => void
}

export default function FilterBar({ label, options, selected, onSelect }: FilterBarProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-white/30 uppercase tracking-wider mr-1">{label}</span>
      <button
        onClick={() => onSelect('')}
        className={`relative px-3 py-1.5 text-xs rounded-full transition-all duration-200 ${
          !selected ? 'text-black' : 'text-white/40 hover:text-white/60 bg-white/5'
        }`}
      >
        {!selected && (
          <motion.span
            layoutId={`filter-${label}`}
            className="absolute inset-0 bg-white rounded-full"
            transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
          />
        )}
        <span className="relative">All</span>
      </button>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option === selected ? '' : option)}
          className={`relative px-3 py-1.5 text-xs rounded-full transition-all duration-200 ${
            selected === option ? 'text-black' : 'text-white/40 hover:text-white/60 bg-white/5'
          }`}
        >
          {selected === option && (
            <motion.span
              layoutId={`filter-${label}`}
              className="absolute inset-0 bg-white rounded-full"
              transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
            />
          )}
          <span className="relative">{option}</span>
        </button>
      ))}
    </div>
  )
}
