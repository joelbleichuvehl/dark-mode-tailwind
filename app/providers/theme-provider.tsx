'use client'

import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'

interface ThemeContextData {
  theme: string
  handleTheme(data: string): void
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

type Props = {
  children: ReactNode
}

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState('light')

  const handleTheme = useCallback((value: any) => {
    let newTheme = ''

    if (value) {
      newTheme = value
    } else if (localStorage.theme) {
      newTheme = localStorage.theme
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      newTheme = 'dark'
    } else {
      newTheme = 'light'
    }

    localStorage.theme = newTheme
    setTheme(newTheme)
  }, [])

  useEffect(() => {
    handleTheme(null)
  }, [])

  return <ThemeContext.Provider value={{ handleTheme, theme }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => useContext(ThemeContext)
