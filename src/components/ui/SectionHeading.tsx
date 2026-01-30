import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 lg:mb-16', centered && 'text-center')}>
      {label && (
        <span
          className={cn(
            'inline-block text-sm font-semibold uppercase tracking-wider mb-2',
            light ? 'text-accent-400' : 'text-accent'
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl lg:text-4xl font-bold',
          light ? 'text-white' : 'text-primary-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-lg max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-primary-300' : 'text-muted'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
