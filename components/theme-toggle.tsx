"use client"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

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
        return <Sun className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-white" />
      case "dark":
        return <Moon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-white" />
      case "system":
        return <Monitor className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-white" />
      default:
        return <Sun className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-white" />
    }
  }

  const getTooltip = () => {
    switch (theme) {
      case "light":
        return "Switch to dark mode"
      case "dark":
        return "Switch to system mode"
      case "system":
        return "Switch to light mode"
      default:
        return "Toggle theme"
    }
  }

  return (
    <button
      onClick={cycleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-md border border-neutral-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-neutral-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:hover:shadow-blue-500/20 group"
      title={getTooltip()}
      aria-label={getTooltip()}
    >
      <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
        {getIcon()}
      </div>
    </button>
  )
}