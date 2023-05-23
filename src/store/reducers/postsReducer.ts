import {PostsAction, PostsActionType} from "../../types/posts";

const initialState = {
  posts: []
}

export const postsReducer = (state = initialState, action: PostsAction) => {
  switch (action.type) {
    case PostsActionType.GET_POSTS_RESPONSE:
      return {
        ...state,
        posts: action.payload
      }
    case PostsActionType.ADD_NEW_POST:
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state
  }
}