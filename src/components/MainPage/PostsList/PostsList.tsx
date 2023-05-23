import React from 'react';

import {useSelector} from "react-redux";

import Post from "./Post/Post";

import {Posts} from "../../../types/posts";
import {CommentsStateType} from "../../../types/comments";

import classes from "./PostList.module.scss";

import notFound from "../../../assets/images/not_found.png";

const PostsList: React.FC<Posts> = ({posts}) => {
  const {comments} = useSelector((state: CommentsStateType) => state.comments)

  return (
    <>
      {posts.length ?
        <div className={classes.main__posts}>
          {posts?.map(post => {
            const commentsForPost = comments.filter((comment) => comment.postId === post.id);

            return (
            <Post
              key={post.id}
              post={post}
              commentsForPost={commentsForPost}
            />
            )})}
        </div>
        :
        <div className={classes.notFound}>
          <h1 className={classes.notFound__title}>Ничего не найдено</h1>
          <img src={notFound} alt="Ничего не найдено!" className={classes.notFound__img}/>
        </div>
      }
    </>
  );
};

export default PostsList;