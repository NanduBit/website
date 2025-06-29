"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className="relative">
      <button
        onClick={() => setTheme("light")}
        className="hover:scale-110 transition-transform duration-300 bg-transparent border border-neutral-200 dark:border-gray-700 rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-gray-800"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-2 left-2" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  )
}