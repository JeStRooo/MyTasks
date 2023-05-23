import {News, NewsActionType} from "../../types/news";

export const getNewsRequest = () => {
  return {
    type: NewsActionType.GET_NEWS_REQUEST
  }
}

export const getNewsResponse = (news: News[]) => {
  return {
    type: NewsActionType.GET_NEWS_RESPONSE,
    payload: news
  }
}