import React from 'react';

import {NavLink} from "react-router-dom";

import {Img} from "react-image";
import {CircularProgress} from "@mui/material";

import {Comment} from "../../../../../types/comments";

import classes from "./PostComments.module.scss";

interface PostCommentsProps {
  themeStyle: object,
  isCommentsShow: boolean,
  commentsForPost: Comment[]
}

const PostComments: React.FC<PostCommentsProps> = ({themeStyle, isCommentsShow, commentsForPost}) => {
  return (
    <>
      {isCommentsShow &&
        <div className={classes.comments}>
          {commentsForPost.map((comment: Comment) => {
            const randomUser = Math.random();

            return (
            <div key={comment.id} className={classes.comments__comment} style={themeStyle}>
              <div className={classes.comments__comment__user}>
                <NavLink to={`/home-page/${randomUser}`}>
                  <Img src={`https://i.pravatar.cc/?img=${randomUser}`}
                       loader={<CircularProgress />}
                       alt="Аватар"
                       className={classes.comments__comment__user__avatar}
                  />
                </NavLink>
                <div className={classes.comments__comment__user__info}>
                  <div className={classes.comments__comment__user__info__main}>
                    <p className={classes.comments__comment__user__info__main__userName}>
                      {comment.email}
                    </p>
                    <p className={classes.comments__comment__user__info__main__nickName}>
                      @nickname
                    </p>
                  </div>
                  <p className={classes.comments__comment__user__info__title}>
                    {comment.body}
                  </p>
                </div>
              </div>
            </div>
            )})}
        </div>
      }
    </>
  );
};

export default PostComments;