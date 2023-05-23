import {NewsActionType, NewsAction} from "../../types/news";

const initialState = {
  news: []
}

export const newsReducer = (state = initialState, action: NewsAction) => {
  switch (action.type) {
    case NewsActionType.GET_NEWS_RESPONSE:
      return {
        ...state,
        news: action.payload,
      }
    default:
      return state
  }
}