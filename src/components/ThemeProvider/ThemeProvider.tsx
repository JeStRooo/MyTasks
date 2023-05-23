import React, {useState, useEffect} from 'react';

import ThemeContext from "./ThemeContext";

import {themes} from "../../mockData/themes";

type ThemeProviderProps = {
  children: React.ReactNode,
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const storedTheme = localStorage.getItem('theme');
  const initialState = storedTheme ? JSON.parse(storedTheme) : themes.lightMode;

  const [theme, setTheme] = useState(initialState);

  const themeHandler = () => {
    const newThemeState = theme === themes.lightMode ? themes.darkMode : themes.lightMode;
    setTheme(newThemeState);
    localStorage.setItem('theme', JSON.stringify(newThemeState));
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, []);
  

  const themeStyle = {backgroundColor: theme.background, color: theme.color, borderColor: theme.borderColor}

  return (
    <ThemeContext.Provider value={{theme, themeHandler, themeStyle}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;