import creditCardSaga from "./containers/credit-card/credit-card.sagas";
import { fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield fork(creditCardSaga)
}

