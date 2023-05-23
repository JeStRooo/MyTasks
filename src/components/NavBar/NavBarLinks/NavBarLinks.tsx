import React, {useContext} from 'react';

import {NavLink} from "react-router-dom";

import ThemeContext from "../../ThemeProvider/ThemeContext";

import {links} from "../../../mockData/patterns";

import classes from "./NavBarLinks.module.scss";

const NavBarLinks: React.FC = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <div className={classes.navBarLinks}>
      {links.map((link) => {
        return (
          <NavLink to={link.path} key={link.path} className={classes.navBarLinks__link}>
              <img
                src={link.img}
                alt={link.title}
                className={classes.navBarLinks__link__img}
              />
              <p className={classes.navBarLinks__link__title} style={{color: theme.color}}>
                {link.title}
              </p>
          </NavLink>
        )
      })}
    </div>
  );
};

export default NavBarLinks;