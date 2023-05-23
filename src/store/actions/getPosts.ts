import {PostType, PostsActionType} from "../../types/posts";

export const getPostsRequest = () => {
  return {
    type: PostsActionType.GET_POSTS_REQUEST,
  }
}

export const getPostsResponse = (posts: PostType[]) => {
  return {
    type: PostsActionType.GET_POSTS_RESPONSE,
    payload: posts
  }
}