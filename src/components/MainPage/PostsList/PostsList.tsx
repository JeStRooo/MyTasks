import React from 'react';

import Post from "./Post/Post";

import {Posts} from "../../../types/posts";

import classes from "./PostList.module.scss";

import notFound from "../../../assets/images/not_found.png";

const PostsList: React.FC<Posts> = ({posts}) => {
  return (
    <>
      {posts.length ?
        <div className={classes.main__posts}>
          {posts?.map(post =>
            <Post
              key={post.id}
              post={post}
            />
          )}
        </div>
        :
        <div className={classes.notFound}>
          <h1 className={classes.notFound__title}>Ничего не найдено</h1>
          <img src={notFound} alt="Ничего не найдено!"  className={classes.notFound__img}/>
        </div>
      }
    </>
  );
};

export default PostsList;