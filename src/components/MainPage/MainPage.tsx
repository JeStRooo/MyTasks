import React, {useContext, useEffect, useState, useCallback} from 'react';

import {useDispatch, useSelector} from "react-redux";

import NavBar from "../NavBar/NavBar";
import MUISwitch from "../../MUI/Switch/Switch";
import Input from "../../UI/Input/Input";
import PostsList from "./PostsList/PostsList";
import SideBar from "./SideBar/SideBar";

import {getPostsRequest} from "../../store/actions/getPosts";
import {getNewsRequest} from "../../store/actions/getNews";

import ThemeContext from "../ThemeProvider/ThemeContext";
import {useSearchContext} from "../SearchProvider/SearchProvider";

import {themes} from "../../mockData/themes";

import {PostsStateType} from "../../types/posts";
import {News} from "../../types/news";

import classes from "./MainPage.module.scss";

const MainPage: React.FC = () => {
  const posts = useSelector((state: PostsStateType) => state.posts.posts)
  const news = useSelector((state: { news: { news: News[] } }) => state.news.news)
  const dispatch = useDispatch();

  const {theme, themeHandler, themeStyle} = useContext(ThemeContext);
  const {searchQuery} = useSearchContext()

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async() => {
      await dispatch(getPostsRequest())
      await dispatch(getNewsRequest())
      setIsLoading(false)
    }
    fetchData()
  }, [])

  const searchPosts = useCallback(() => {
    return [...posts].filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [posts, searchQuery])


  if (isLoading) {
    return <h1>Загрузка</h1>
  }

  console.log(theme)

  return (
    <div className={classes.background} style={themeStyle}>
      <section className={classes.wrapper}>
        <header className={classes.header}>
          <NavBar theme={theme}/>
        </header>
        <main className={classes.main} style={themeStyle}>
          <div className={classes.main__header}  style={themeStyle}>
            <div className={classes.main__header__page} style={themeStyle}>
              <h2 className={classes.main__header__page__title}>
                Главная
              </h2>
              <MUISwitch onChange={() => themeHandler()}
                         checked={theme === themes.darkMode}
              />
            </div>
            <div className={classes.main__header__whatsHappening}>
              <img src="https://i.pravatar.cc"
                   alt="Аватар"
                   className={classes.avatar}
              />
              <Input type="text" placeholder="Что нового?"/>
            </div>
          </div>
          <PostsList
            posts={searchPosts()}
          />
        </main>
        <SideBar
          news={news}
        />
      </section>
    </div>
  );
};

export default MainPage;