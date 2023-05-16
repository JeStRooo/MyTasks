import React, {useState} from 'react';

import ThemeContext from "./ThemeContext";

import {themes} from "../../mockData/themes";

type ThemeProviderProps = {
  children: React.ReactNode,
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState(themes.lightMode);

  const themeHandler = () => {
    theme === themes.lightMode ? setTheme(themes.darkMode) : setTheme(themes.lightMode)
    console.log(theme)
  }

  const themeStyle = {backgroundColor: theme.background, color: theme.color, borderColor: theme.borderColor}

  return (
    <ThemeContext.Provider value={{theme, themeHandler, themeStyle}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;