import {CommentsAction, CommentsActionType} from "../../types/comments";

const initialState = {
  comments: []
}

export const commentsReducer = (state = initialState, action: CommentsAction) => {
  switch (action.type) {
    case CommentsActionType.GET_COMMENTS_RESPONSE:
      return {
        ...state,
        comments: action.payload
      }
    default:
      return state
  }
}