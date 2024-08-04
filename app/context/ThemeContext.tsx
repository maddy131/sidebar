"use client"

import React from 'react'
import {createContext, useState, ReactNode,useContext} from 'react'
import styles from './ThemeContext.module.css'
interface ThemeContextProps {
  switchDark: () => void;
  switchLight: () => void;
  theme: string;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme]= useState('light');
  const switchLight = () =>{
    setTheme('light');
  }

  const switchDark = () => {
    setTheme('Dark');
  }
  return (
    <ThemeContext.Provider value={{switchDark, switchLight, theme}}>
      <div className={`&{theme} anim`}>{children}</div>
    </ThemeContext.Provider>
  )
} 

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

