import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, backgroundColor, ...props }, ref) => {
    let inputClassName = cn(
      "flex h-10 w-full border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded cursor-pointer",
      className
    )

    if (backgroundColor) {
      inputClassName += ` bg-${backgroundColor}`
    }

    return <input type={type} className={inputClassName} ref={ref} {...props} />
  }
)
Input.displayName = "Input"

export { Input }
