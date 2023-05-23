import React from 'react';

import isEqual from "lodash/isEqual";

import NavBarLinks from "./NavBarLinks/NavBarLinks";

import {themes} from "../../mockData/themes";

import classes from "./NavBar.module.scss";

import logoWhite from "../../assets/images/logo_white.svg";
import logoDark from "../../assets/images/logo_dark.svg";

interface NavBarPropsType {
  theme: object
}

const NavBar: React.FC<NavBarPropsType> = ({theme}) => {
  return (
      <nav className={classes.header__navbar}>
        <img src={isEqual(theme, themes.darkMode) ? logoWhite : logoDark}
             alt="Tetrotom"
             className={classes.header__navbar__logo}
        />
        <NavBarLinks />
      </nav>
  );
};

export default NavBar;