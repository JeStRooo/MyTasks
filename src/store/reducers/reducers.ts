import {combineReducers} from "redux";

import {registration} from "./registration";
import {postsReducer} from "./postsReducer";
import {newsReducer} from "./newsReducer";
import {commentsReducer} from "./commentsReducer";
import {loadingReducer} from "./loadingReducer";

export const rootReducer = combineReducers({
  registration: registration,
  posts: postsReducer,
  news: newsReducer,
  comments: commentsReducer,
  loading: loadingReducer
})

export type RootType = ReturnType<typeof rootReducer>