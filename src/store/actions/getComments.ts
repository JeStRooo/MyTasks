import {Comment, CommentsActionType} from "../../types/comments";

export const getCommentsRequest = () => {
  return {
    type: CommentsActionType.GET_COMMENTS_REQUEST
  }
}

export const getCommentsResponse = (comments: Comment[]) => {
  return {
    type: CommentsActionType.GET_COMMENTS_RESPONSE,
    payload: comments
  }
}