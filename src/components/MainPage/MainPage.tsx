import React, {useContext, useEffect, useCallback} from 'react';

import {useDispatch, useSelector} from "react-redux";

import isEqual from 'lodash/isEqual';

import NavBar from "../NavBar/NavBar";
import MUISwitch from "../../MUI/Switch/Switch";
import Input from "../../UI/Input/Input";
import PostsList from "./PostsList/PostsList";
import SideBar from "./SideBar/SideBar";
import Loader from "../../MUI/Loader/Loader";

import {getPostsRequest} from "../../store/actions/getPosts";
import {getNewsRequest} from "../../store/actions/getNews";
import {getCommentsRequest} from "../../store/actions/getComments";

import ThemeContext from "../ThemeProvider/ThemeContext";
import {useSearchContext} from "../SearchProvider/SearchProvider";

import {themes} from "../../mockData/themes";

import {PostsStateType} from "../../types/posts";
import {NewsStateType} from "../../types/news";
import {LoadingStateType} from "../../types/loading";

import classes from "./MainPage.module.scss";

import MyAvatar from "../../assets/images/my_avatar.jpg";

const MainPage: React.FC = () => {
  const {posts} = useSelector((state: PostsStateType) => state.posts)
  const {news} = useSelector((state: NewsStateType) => state.news)

  const {isLoading} = useSelector((state: LoadingStateType) => state.loading)

  const dispatch = useDispatch();

  const {theme, themeHandler, themeStyle} = useContext(ThemeContext);
  const {searchQuery} = useSearchContext()

  useEffect(() => {
    dispatch(getPostsRequest())
    dispatch(getNewsRequest())
    dispatch(getCommentsRequest())
  }, [])

  const searchPosts = useCallback(() => {
    return [...posts].filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [posts, searchQuery])

  return (
    <div className={classes.background} style={themeStyle}>
      {!isLoading ?
        <section className={classes.wrapper}>
          <header className={classes.header}>
            <NavBar
              theme={theme}
            />
          </header>
          <main className={classes.main} style={themeStyle}>
            <div className={classes.main__header} style={themeStyle}>
              <div className={classes.main__header__page} style={themeStyle}>
                <h2 className={classes.main__header__page__title}>
                  Главная
                </h2>
                <MUISwitch onChange={themeHandler}
                           checked={isEqual(theme, themes.darkMode)}
                />
              </div>
              <div className={classes.main__header__whatsHappening}>
                <img src={MyAvatar}
                     alt="Аватар"
                     className={classes.avatar}
                />
                <Input type="text" placeholder="Что нового?" style={themeStyle}/>
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
        :
        <Loader/>
      }
    </div>
  );
};

export default MainPage;