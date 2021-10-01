/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

import { all } from "redux-saga/effects";

import staticSaga from "./staticSaga";
import userSaga from "./userSaga";

export function* rootSaga() {
  yield all([...staticSaga, ...userSaga]);
}
