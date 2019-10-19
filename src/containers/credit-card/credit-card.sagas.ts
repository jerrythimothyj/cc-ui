import { takeEvery, call, put } from "redux-saga/effects";
import {CREDIT_CARD_DATA_LOADED, CREDIT_CARD_API_ERRORED, CREDIT_CARD_DATA_REQUESTED} from "./credit-card.constants";

function getData() {
  return fetch("http://localhost:8080/credit-card").then(response =>
    response.json()
  );
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: CREDIT_CARD_DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: CREDIT_CARD_API_ERRORED, payload: e });
  }
}


export default function* watcherSaga() {
  yield takeEvery(CREDIT_CARD_DATA_REQUESTED, workerSaga);
}