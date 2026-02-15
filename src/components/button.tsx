import type { ButtonHTMLAttributes, ReactNode } from "react"
import clsx from "clsx"

type ButtonProps = {
  children: ReactNode
  variant?: "primary" | "secondary" | "light"
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const styles = {
  base: "px-6 py-3 rounded text-sm sm:text-base font-medium transition-colors duration-200 cursor-pointer",
  variants: {
    primary: "bg-foreground text-background",
    secondary: "bg-transparent border border-foreground text-foreground",
    light: "bg-transparent border border-white text-white hover:bg-white/10",
  },
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.base, styles.variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
