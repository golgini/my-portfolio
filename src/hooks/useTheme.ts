import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const getPreferredTheme = (): Theme => {
  try {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }
  } catch {
    // localStorage can be unavailable in privacy-restricted browsers.
  }

  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark'
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getPreferredTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // localStorage can be unavailable in privacy-restricted browsers.
    }
  }, [theme])

  const toggle = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggle }
}
