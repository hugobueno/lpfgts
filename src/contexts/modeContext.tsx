import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'
interface ITheme {
  mode: 'light' | 'dark',
  setMode: () => void
}

const ThemeContext = createContext<ITheme>({
  mode: 'dark',
  setMode: () => { }
})


const Theme: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const setMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <ThemeContext.Provider value={{ mode: theme, setMode }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default Theme

export const useTheme = () => {
  const { mode, setMode } = useContext(ThemeContext)
  return { mode, setMode }
}