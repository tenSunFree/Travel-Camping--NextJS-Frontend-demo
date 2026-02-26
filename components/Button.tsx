import { cn } from '@/lib/utils'

export const BUTTON_VARIANTS = {
  WHITE: 'btn_white',
  WHITE_TEXT: 'btn_white_text',
  GREEN: 'btn_green',
  DARK_GREEN: 'btn_dark_green',
  DARK_GREEN_OUTLINE: 'btn_dark_green_outline',
} as const

export type Variant = (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS]

type ButtonProps = {
  type: 'button' | 'submit'
  title: string
  icon?: string
  variant: Variant
  // variant: string;
  full?: boolean
  onClick?: () => void
}

const Button = ({ type, title, icon, variant, full, onClick }: ButtonProps) => {
  return (
    <button
      className={cn(`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`)}
      type={type}
      onClick={onClick}
    >
      {icon && <img src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 cursor-pointer whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button
