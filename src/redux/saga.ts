import { all, call, delay, put, take, takeLatest } from "redux-saga/effects";
import es6promise from "es6-promise";
import { actionTypes, getArticlesSuccess, getArticlesFailed } from "./actions";
import api from "./../api";

es6promise.polyfill();

function* getArticlesSaga(action: any) {
  try {
    const res = yield call(api.article.get, action.current, action.pageSize);
    yield put(getArticlesSuccess(res));
  } catch (e) {
    yield put(getArticlesFailed(e));
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.GET_ARTICLES, getArticlesSaga)]);
}

export default rootSaga;
