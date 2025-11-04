import { ReactNode, ButtonHTMLAttributes } from "react"

export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: {
  children: ReactNode
  className?: string
  variant?: "default" | "secondary" | "outline" | "ghost"
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseStyles = "inline-flex min-h-[40px] items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/85 active:scale-[0.98]",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/75 active:scale-[0.98]",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
    ghost: "hover:bg-accent hover:text-accent-foreground active:scale-[0.98]",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
