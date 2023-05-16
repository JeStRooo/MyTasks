import React from 'react';

import NewsList from "./NewsList/NewsList"

import {SideBarType} from "../../../types/news";

import classes from "./SideBar.module.scss";

const SideBar: React.FC<SideBarType> = ({news}) => {
  return (
    <aside className={classes.sideBar}>
      <NewsList news={news} />
    </aside>
  );
};

export default SideBar;