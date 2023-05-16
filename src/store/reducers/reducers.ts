import {combineReducers} from "redux";

import {registration} from "./registration";
import {postsReducer} from "./postsReducer";
import {newsReducer} from "./newsReducer";

export const rootReducer = combineReducers({
  registration: registration,
  posts: postsReducer,
  news: newsReducer,
})

export type RootType = ReturnType<typeof rootReducer>