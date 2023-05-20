export enum NewsActionType {
  GET_NEWS_REQUEST = 'GET_NEWS_REQUEST',
  GET_NEWS_RESPONSE = 'GET_NEWS_RESPONSE'
}

export type News = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export type SideBarType = {
  news: News[],
}

interface getNewsRequest {
  type: NewsActionType.GET_NEWS_REQUEST,
  payload: News[]
}

interface getNewsResponse {
  type: NewsActionType.GET_NEWS_RESPONSE,
  payload: News[]
}

export type NewsAction = getNewsRequest | getNewsResponse;