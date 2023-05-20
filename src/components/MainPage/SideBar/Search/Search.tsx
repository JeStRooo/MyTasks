import React, {useContext} from 'react';

import ThemeContext from "../../../ThemeProvider/ThemeContext";

import search from "../../../../assets/images/search.svg"

import classes from "./Search.module.scss";
import {useSearchContext} from "../../../SearchProvider/SearchProvider";

const Search = () => {
  const {theme} = useContext(ThemeContext)
  const {searchQuery, setSearchQuery} = useSearchContext()

  return (
    <div className={classes.search} style={{backgroundColor: theme.asideColor}}>
      <img src={search} alt="Фото" />
      <input type="text"
             className={classes.search__input}
             placeholder="Поиск"
             style={{color: theme.color}}
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;