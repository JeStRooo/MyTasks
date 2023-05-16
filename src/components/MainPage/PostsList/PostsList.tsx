import React from 'react';

import Post from "./Post/Post";

import {Posts} from "../../../types/posts";

import classes from "./PostList.module.scss";

const PostsList: React.FC<Posts> = ({posts}) => {
  return (
    <div className={classes.main__posts}>
      {posts?.map(post =>
        <Post
          key={post.id}
          post={post}
        />
      )}
    </div>
  );
};

export default PostsList;