import { createContext } from 'react';

import {themes} from "../../mockData/themes";

export default createContext({
  theme: themes.lightMode,
  themeHandler: () => {},
  themeStyle: {}
});