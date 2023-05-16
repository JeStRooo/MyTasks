import React, {useContext, useState} from 'react';

import {useInView} from "react-intersection-observer";

import LikeButton from "../../../../MUI/LikeButton/LikeButton";

import ThemeContext from "../../../ThemeProvider/ThemeContext";

import {PostType} from "../../../../types/posts";

import classes from "./Post.module.scss";

import comment from "../../../../assets/images/comment.svg";

interface PostPropsType {
  post: PostType
}

const Post: React.FC<PostPropsType> = ({post}) => {
  const {themeStyle} = useContext(ThemeContext)

  const [postLikes, setPostLikes] = useState({ liked: false, postLikes: post.reactions })

  const {ref, inView} = useInView({
    threshold: .2,
    triggerOnce: true
  })

  return (
      <div ref={ref}>
        {inView ?
          <div className={classes.main__posts__post} style={themeStyle}>
            <img src={`https://i.pravatar.cc/?img=${post.id}`}
                 loading="lazy"
                 alt="Аватар"
                 className={classes.avatar}
            />
            <div className={classes.main__posts__post__info}>
              <div className={classes.main__posts__post__info__main}>
                <div className={classes.main__posts__post__info__main__user}>
                  <p className={classes.main__posts__post__info__main__user__userName}>
                    UserName
                  </p>
                  <p className={classes.main__posts__post__info__main__user__nickName}>@nickname</p>
                </div>
                <p className={classes.main__posts__post__info__main__title}>
                  {post.body}
                </p>
              </div>
              <div className={classes.main__posts__post__info__actions}>
                <div className={classes.main__posts__post__info__actions__reactions}>
                  <img src={comment}
                       className={classes.main__posts__post__info__actions__reactions__img}
                       alt="Comment"
                  />
                  <span>0</span>
                </div>
                <div className={classes.main__posts__post__info__actions__reactions}>
                  <LikeButton setPostLikes={setPostLikes} postLikes={postLikes}/>
                  <span>{postLikes.postLikes}</span>
                </div>
              </div>
            </div>
          </div>
          :
          <></>
        }
      </div>
  );
};

export default Post;