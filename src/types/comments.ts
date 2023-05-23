export enum CommentsActionType {
  GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST',
  GET_COMMENTS_RESPONSE = 'GET_COMMENTS_RESPONSE'
}

export type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export interface CommentsStateType {
  comments: {
    comments: Comment[]
  }
}

interface getCommentsRequest {
  type: CommentsActionType.GET_COMMENTS_REQUEST,
  payload: Comment[]
}

interface getCommentsResponse {
  type: CommentsActionType.GET_COMMENTS_RESPONSE,
  payload: Comment[]
}

export type CommentsAction = getCommentsRequest | getCommentsResponse;