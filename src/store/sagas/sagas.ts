import {all} from "redux-saga/effects";

import getPostsWatcher from "./getPostsSaga";
import getNewsWatcher from "./getNewsSaga";

export default function* rootSaga() {
  yield all([getPostsWatcher(), getNewsWatcher()])
}