import React, {useContext, useEffect} from 'react';

import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import isEqual from "lodash/isEqual";

import UserPosts from "./UserPosts/UserPosts";
import NewsList from "../MainPage/SideBar/NewsList/NewsList";
import NavBar from "../NavBar/NavBar";
import MUISwitch from "../../MUI/Switch/Switch";
import User from "./User/User";
import Loader from "../../MUI/Loader/Loader";

import {getNewsRequest} from "../../store/actions/getNews";

import ThemeContext from "../ThemeProvider/ThemeContext";

import {themes} from "../../mockData/themes";

import {NewsStateType} from "../../types/news";
import {PostsStateType} from "../../types/posts";
import {CommentsStateType} from "../../types/comments";
import {LoadingStateType} from "../../types/loading";

import classes from "./HomePage.module.scss";

const HomePage = () => {
  const {posts} = useSelector((state: PostsStateType) => state.posts)
  const {news} = useSelector((state: NewsStateType) => state.news)
  const {comments} = useSelector((state: CommentsStateType) => state.comments)

  const {isLoading} = useSelector((state: LoadingStateType) => state.loading);

  const dispatch = useDispatch();

  const {theme, themeHandler, themeStyle} = useContext(ThemeContext);

  const userURL = useParams();

  useEffect(() => {
    dispatch(getNewsRequest())
  }, [])

  const userURLId = userURL.id;

  const whoseProfile = userURLId === 'myProfile';

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
                  {whoseProfile ? 'Мой профиль' : 'Профиль пользователя'}
                </h2>
                <MUISwitch onChange={themeHandler}
                           checked={isEqual(theme, themes.darkMode)}
                />
              </div>
              <User
                userURLId={userURLId}
                whoseProfile={whoseProfile}
              />
            </div>
            <div className={classes.main__myActions}>
              <ul className={classes.main__myActions__nav}>
                <li>Посты</li>
              </ul>
              <UserPosts
                posts={posts}
                comments={comments}
                whoseProfile={whoseProfile}
                userURLId={userURLId}
              />
            </div>
          </main>
          <NewsList
            news={news}
          />
        </section>
        :
        <Loader/>
      }
    </div>
  );
};

export default HomePage;