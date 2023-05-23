import {put, takeEvery} from "redux-saga/effects";

import axios from "axios";

import {getPostsResponse} from "../actions/getPosts";

import {PostsActionType} from "../../types/posts";
import {startLoading, stopLoading} from "../actions/loading";

function* getPostsWorker() {
  try {
    yield put(startLoading())
    const {data} = yield axios.get( 'https://dummyjson.com/posts')
    yield put(getPostsResponse(data.posts))
  } catch (e) {
    console.log(e)
  } finally {
    yield put(stopLoading());
  }
}

export default function* getPostsWatcher() {
  yield takeEvery(PostsActionType.GET_POSTS_REQUEST, getPostsWorker)
}