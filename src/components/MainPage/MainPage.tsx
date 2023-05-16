import React, {useContext, useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";

import NavBar from "../NavBar/NavBar";
import MUISwitch from "../../MUI/Switch/Switch";
import Input from "../../UI/Input/Input";
import PostsList from "./PostsList/PostsList";
import SideBar from "./SideBar/SideBar";

import {getPostsRequest} from "../../store/actions/getPosts";
import {getNewsRequest} from "../../store/actions/getNews";

import ThemeContext from "../ThemeProvider/ThemeContext";

import {PostsStateType} from "../../types/posts";
import {News} from "../../types/news";

import classes from "./MainPage.module.scss";

const MainPage: React.FC = () => {
  const posts = useSelector((state: PostsStateType) => state.posts.posts)
  const news = useSelector((state: { news: { news: News[] } }) => state.news.news)
  const dispatch = useDispatch();

  const {theme, themeHandler, themeStyle} = useContext(ThemeContext);

  useEffect(() => {
    dispatch(getPostsRequest())
    dispatch(getNewsRequest())
  }, [])

  return (
    <div style={themeStyle}>
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
              <MUISwitch onChange={() => themeHandler()}/>
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
            posts={posts}
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