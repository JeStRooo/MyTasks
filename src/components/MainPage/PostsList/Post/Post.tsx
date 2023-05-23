import React, {useContext, useState} from 'react';

import {NavLink} from "react-router-dom";
import {useInView} from "react-intersection-observer";

import {CircularProgress} from "@mui/material";
import PostComments from "./PostComments/PostComments";
import {Img} from "react-image";
import LikeButton from "../../../../MUI/LikeButton/LikeButton";

import ThemeContext from "../../../ThemeProvider/ThemeContext";

import {PostType} from "../../../../types/posts";
import {Comment} from "../../../../types/comments";

import classes from "./Post.module.scss";

import comment from "../../../../assets/images/comment.svg";

interface PostPropsType {
  post: PostType,
  commentsForPost: Comment[]
}

const Post: React.FC<PostPropsType> = ({post, commentsForPost}) => {
  const {themeStyle} = useContext(ThemeContext)

  const [postLikes, setPostLikes] = useState({liked: false, postLikes: post.reactions})
  const [isCommentsShow, setIsCommentsShow] = useState(false)

  const {ref, inView} = useInView({
    threshold: .5,
    triggerOnce: true
  })

  const commentsShow = () => {
    setIsCommentsShow(!isCommentsShow)
  }

  return (
    <div ref={ref}>
      {inView ?
        <div className={classes.post} style={themeStyle}>
          <div className={classes.post__user}>
            <NavLink to={`/home-page/${post.id}`}>
              <Img src={`https://i.pravatar.cc/?img=${post.id}`}
                   loader={<CircularProgress/>}
                   alt="Аватар"
                   className={classes.post__avatar}
              />
            </NavLink>
            <div className={classes.post__user__info}>
              <div className={classes.post__user__info__main}>
                <div className={classes.post__user__info__main__userInfo}>
                  <p className={classes.post__user__info__main__userInfo__userName}>
                    UserName
                  </p>
                  <p className={classes.post__user__info__main__userInfo__nickName}>
                    @nickname
                  </p>
                </div>
                <p className={classes.post__user__info__main__title}>
                  {post.body}
                </p>
              </div>
              <div className={classes.post__user__info__actions}>
                <div className={classes.post__user__info__actions__reactions}>
                  <img src={comment}
                       className={classes.post__user__info__actions__reactions__img}
                       alt="Comment"
                       onClick={commentsShow}
                  />
                  <span>{commentsForPost.length}</span>
                </div>
                <div className={classes.post__user__info__actions__reactions}>
                  <LikeButton setPostLikes={setPostLikes} postLikes={postLikes}/>
                  <span>{postLikes.postLikes}</span>
                </div>
              </div>
            </div>
          </div>
          <PostComments
            themeStyle={themeStyle}
            isCommentsShow={isCommentsShow}
            commentsForPost={commentsForPost}
          />
        </div>
        :
        <div></div>
      }
    </div>
  );
};

export default Post;