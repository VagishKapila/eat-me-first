import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-semibold tracking-widest uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:brightness-110 focus-visible:ring-[var(--color-primary)]',
        secondary:
          'bg-transparent border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[rgba(233,195,73,0.08)] focus-visible:ring-[var(--color-secondary)]',
        ivory:
          'bg-[var(--color-on-surface)] text-[var(--color-surface)] hover:brightness-95 focus-visible:ring-[var(--color-on-surface)]',
        ghost:
          'bg-transparent text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] focus-visible:ring-[var(--color-on-surface)]',
        gold:
          'bg-transparent border border-[rgba(233,195,73,0.4)] text-[var(--color-secondary)] hover:border-[var(--color-secondary)] hover:bg-[rgba(233,195,73,0.06)] focus-visible:ring-[var(--color-secondary)]',
      },
      size: {
        sm: 'h-9 px-5 text-xs',
        md: 'h-12 px-8 text-sm',
        lg: 'h-14 px-10 text-sm',
        xl: 'h-16 px-12 text-base',
        full: 'h-14 w-full px-8 text-sm',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
