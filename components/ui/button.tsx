import type React from "react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 
    | "primary" 
    | "secondary" 
    | "accent" 
    | "ghost" 
    | "destructive" 
    | "outline"
    | "darkGradient"
    | "whiteGradient"
    | "black"
    | "white"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
  children: ReactNode
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center cursor-pointer font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-[12px] gap-2"

  const variants = {
    primary: "button-gradient text-white hover:shadow-lg hover:scale-105 active:scale-95",

    darkGradient:
      "text-white bg-[linear-gradient(90deg,#0D0D0D_0%,#1A1A1A_50%,#0D0D0D_75%,#0D0D0D_100%)]",

    whiteGradient:
      "text-black bg-[linear-gradient(86.61deg,#FFFFFF_-0.06%,#E6E6E6_49.94%,#FFFFFF_74.94%,#FFFFFF_99.94%)]",

    black: "bg-[#000000] text-white",
    white: "bg-[#FFFFFF] text-black",

    secondary: "bg-secondary text-white hover:shadow-md hover:scale-105 active:scale-95",
    outline: "border border-primary text-foreground hover:shadow-md hover:scale-105 active:scale-95",
    accent: "bg-accent text-accent-foreground hover:shadow-md hover:scale-105 active:scale-95",
    ghost: "bg-transparent text-foreground hover:bg-muted border border-border hover:border-primary",
    destructive: "bg-destructive text-destructive-foreground hover:shadow-md active:scale-95",
  }

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base"
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="animate-spin mr-2">●</span>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  )
}
