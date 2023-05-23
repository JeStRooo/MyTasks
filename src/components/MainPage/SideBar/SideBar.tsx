import React from 'react';

import NewsList from "./NewsList/NewsList";
import Search from "./Search/Search";

import {SideBarType} from "../../../types/news";

import classes from "./SideBar.module.scss";

const SideBar: React.FC<SideBarType> = ({news}) => {
  return (
    <aside className={classes.sideBar}>
      <Search />
      <NewsList news={news} />
    </aside>
  );
};

export default SideBar;