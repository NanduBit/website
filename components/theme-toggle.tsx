"use client"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5" />
      case "dark":
        return <Moon className="h-5 w-5" />
      default:
        return <Monitor className="h-5 w-5" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light mode"
      case "dark":
        return "Dark mode"
      default:
        return "System mode"
    }
  }

  return (
    <button
      onClick={cycleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 hover:rotate-12"
      title={getLabel()}
      aria-label={getLabel()}
    >
      <div className="text-neutral-700 dark:text-neutral-300 group-hover:scale-110 transition-transform duration-300">
        {getIcon()}
      </div>
    </button>
  )
}
