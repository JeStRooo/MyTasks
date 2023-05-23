import React from 'react';

import Post from "../../MainPage/PostsList/Post/Post";

import {PostType} from "../../../types/posts";
import {Comment} from "../../../types/comments"

import classes from "./UserPosts.module.scss";

import NotFound from "../../../assets/images/page_not_found.gif"

interface UserPostsProps {
  posts: PostType[],
  comments: Comment[],
  whoseProfile: boolean,
  userURLId?: string
}

const UserPosts: React.FC<UserPostsProps> = ({whoseProfile, userURLId, posts, comments}) => {
  return (
    <div className={classes.posts}>
      {whoseProfile ?
        <div className={classes.posts__myPosts}>
          <h3>Ничего не найдено!</h3>
          <img src={NotFound} alt="Ничего не найдео!"/>
        </div>
        :
        <>
          {posts.filter(post => post.id === Number(userURLId))
            .map(post => {
              const commentsForPost = comments.filter((comment) => comment.postId === post.id);

              return (
                <Post
                  key={post.id}
                  post={post}
                  commentsForPost={commentsForPost}
                />
              )
            })
          }
        </>
      }
    </div>
  );
};

export default UserPosts;