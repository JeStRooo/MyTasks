import React, {useContext, useState} from 'react';

import {useInView} from "react-intersection-observer";

import {Img} from "react-image";

import {CircularProgress} from "@mui/material";

import ThemeContext from "../../../ThemeProvider/ThemeContext";

import {SideBarType} from "../../../../types/news";

import classes from "./NewsList.module.scss";

const NewsList: React.FC<SideBarType> = ({news}) => {
  const {theme} = useContext(ThemeContext)

  const {ref, inView} = useInView({
    threshold: .2,
    triggerOnce: true
  })

  const [newsToShow, setNewsToShow] = useState(3)

  const handleShowMore = () => {
    setNewsToShow(prev => prev + 3)
  }

  return (
    <div className={classes.sideBar__newsList} style={{backgroundColor: theme.asideColor}}>
      <h2 className={classes.sideBar__newsList__title}>Новости</h2>
      {news.slice(0, newsToShow).map(news =>
        <div ref={ref} key={news.url}>
          {inView ?
            <a className={classes.sideBar__newsList__news}
               style={{color: theme.color, borderColor: theme.borderColor}}
               href={news.url}
            >
              <h4 className={classes.sideBar__newsList__news__title}>
                {news.title}
              </h4>
              <Img
                src={news.urlToImage}
                loader={<CircularProgress/>}
                alt={'Фото'}
                className={classes.sideBar__newsList__news__img}
              />
            </a>
            :
            <></>
          }
        </div>
      )}
      {newsToShow < news.length && (
        <button type="submit"
                onClick={handleShowMore}
                className={classes.sideBar__newsList__showMore}
        >
          Показать ещё
        </button>
      )}
    </div>
  );
};

export default NewsList;