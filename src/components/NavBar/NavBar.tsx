import React from 'react';

import NavBarLinks from "./NavBarLinks/NavBarLinks";

import {themes} from "../../mockData/themes";

import classes from "./NavBar.module.scss";

import logoWhite from "../../assets/images/logo_white.svg";
import logoDark from "../../assets/images/logo_dark.svg";

type NavBarProps = {
  theme: object
}

const NavBar = ({theme}: NavBarProps) => {
  return (
      <nav className={classes.header__navbar}>
        <img src={theme === themes.lightMode ? logoDark : logoWhite}
             alt="Tetrotom"
             className={classes.header__navbar__logo}
        />
        <NavBarLinks />
      </nav>
  );
};

export default NavBar;