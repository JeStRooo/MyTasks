import {put, takeEvery} from "redux-saga/effects";

import axios from "axios";

import {getCommentsResponse} from "../actions/getComments";

import {CommentsActionType} from "../../types/comments";

function* getCommentsWorker() {
  try {
    const {data} = yield axios.get('https://jsonplaceholder.typicode.com/comments')
    yield put(getCommentsResponse(data))
  } catch (e) {
    console.log(e)
  }
}

export default function* getCommentsWatcher() {
  yield takeEvery(CommentsActionType.GET_COMMENTS_REQUEST, getCommentsWorker)
}