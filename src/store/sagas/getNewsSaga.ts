import {put, takeEvery} from "redux-saga/effects";

import axios from "axios";

import {getNewsResponse} from "../actions/getNews";

import {NewsActionType} from "../../types/news";

const apiKey = '7ddd4d3af989421793fe601b62b1601c';

function* getNewsWorker() {
  try {
    const {data} = yield axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`)
    yield put(getNewsResponse(data.articles))
  } catch (e) {
    console.log(e)
  }
}

export default function* getNewsWatcher() {
  yield takeEvery(NewsActionType.GET_NEWS_REQUEST, getNewsWorker)
}