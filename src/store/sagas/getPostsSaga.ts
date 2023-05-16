import {put, takeEvery} from "redux-saga/effects";

import axios from "axios";

import {getPostsResponse} from "../actions/getPosts";

import {PostsActionType} from "../../types/posts";

function* getPostsWorker() {
  try {
    const {data} = yield axios.get( 'https://dummyjson.com/posts')
    yield put(getPostsResponse(data.posts))
  } catch (e) {
    console.log(e)
  }
}

export default function* getPostsWatcher() {
  yield takeEvery(PostsActionType.GET_POSTS_REQUEST, getPostsWorker)
}