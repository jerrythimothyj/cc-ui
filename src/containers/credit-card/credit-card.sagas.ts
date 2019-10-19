import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import {
  CREDIT_CARD_DATA_LOADED, CREDIT_CARD_API_ERRORED, CREDIT_CARD_DATA_REQUESTED, CREDIT_CARD_ADD_REQUESTED,
  CREDIT_CARD_ADD_API_ERRORED, CREDIT_CARD_ADD_API_SUCCESS,
} from "./credit-card.constants";
import axios from "axios"
import * as R from "ramda"


const fetchData = () => {
  return axios.get('http://localhost:8080/credit-card')
    .then((response) => response.data)
}

const saveCreditCard = ({ stagedInputData }: any) => {
  return axios.post("http://localhost:8080/credit-card", R.omit(['type'], stagedInputData))
    .then((response) => response.data)
}

function* creditCardGetListSaga() {
  const payload = yield call(fetchData);
  yield put({ type: CREDIT_CARD_DATA_LOADED, payload });

}

function* creditCardAddSaga(stagedInputData: Object) {
  try {
    const payload = yield call(saveCreditCard, stagedInputData);
    yield put({ type: CREDIT_CARD_ADD_API_SUCCESS, payload });
  } catch (error) {
    yield put({ type: CREDIT_CARD_ADD_API_ERRORED, payload: error.response.data.message });
  }
}

export default function* watcherSaga() {
  yield takeEvery(CREDIT_CARD_DATA_REQUESTED, creditCardGetListSaga);
  yield takeEvery(CREDIT_CARD_ADD_REQUESTED, creditCardAddSaga);
}