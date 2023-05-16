export enum PostsActionType {
  GET_POSTS_REQUEST = 'GET_POSTS_REQUEST',
  GET_POSTS_RESPONSE = 'GET_POSTS_RESPONSE',
  ADD_NEW_POST = 'ADD_NEW_POST'
// GET_POSTS_GET_API
// GET_POSTS_FETCH
}

export type PostType = {
  body: string;
  id: number;
  reactions: number;
  tags: string[];
  title: string;
  userId: number;
}

export type Posts = {
  posts: PostType[];
}

export interface PostsStateType {
  posts: {
    posts: PostType[]
  }
}

interface GetPostsRequest{
  type: PostsActionType.GET_POSTS_REQUEST,
  payload: PostType[]
}

interface GetPostsResponse {
  type: PostsActionType.GET_POSTS_RESPONSE,
  payload: PostType[]
}

interface AddNewPostAction {
  type: PostsActionType.ADD_NEW_POST,
  payload: PostType[]
}

export type PostsAction = GetPostsRequest | AddNewPostAction | GetPostsResponse;