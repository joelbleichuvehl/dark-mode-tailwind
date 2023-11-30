'use client'

import { log } from 'console'
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'

interface ThemeContextData {
  theme: string
  handleTheme(data: Theme | null): void
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

type Props = {
  children: ReactNode
}

type Theme = 'light' | 'dark'

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>('light')

  const handleTheme = useCallback((value: Theme | null) => {
    const newTheme: Theme =
      value ||
      (localStorage.theme === 'dark' || localStorage.theme === 'light' ? (localStorage.theme as Theme) : null) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    localStorage.theme = newTheme
    setTheme(newTheme)
  }, [])

  useEffect(() => {
    handleTheme(null)
  }, [handleTheme])

  return <ThemeContext.Provider value={{ handleTheme, theme }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => useContext(ThemeContext)
