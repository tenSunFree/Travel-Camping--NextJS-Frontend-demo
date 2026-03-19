import { cn } from '@/lib/utils'

type SectionDividerProps = {
  color: string
  className?: string
}

const SectionDivider = ({ color, className }: SectionDividerProps) => {
  return (
    <hr
      aria-hidden="true"
      style={{ backgroundColor: color }}
      className={cn('h-[6px] w-full shrink-0 border-none', className)}
    />
  )
}

export default SectionDivider
