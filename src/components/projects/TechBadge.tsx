interface TechBadgeProps {
  name: string
  size?: 'sm' | 'md'
}

export default function TechBadge({ name, size = 'sm' }: TechBadgeProps) {
  const sizeClasses = size === 'sm'
    ? 'text-[10px] px-2 py-0.5'
    : 'text-xs px-2.5 py-1'

  return (
    <span className={`inline-flex items-center text-white/30 bg-white/5 rounded-full ${sizeClasses}`}>
      {name}
    </span>
  )
}
