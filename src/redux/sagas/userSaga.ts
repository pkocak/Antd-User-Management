/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

import { takeLatest, put } from "@redux-saga/core/effects";
import { hideLoader, showLoader } from "../actions/appActions";
import { ApiCallback } from "../../types";
import * as A from "../actions/userActions";
import * as P from "../../types/params";

export interface LoginSagaParams extends ApiCallback {
  params: P.LoginParams;
}

function* loginSaga({ payload }: P.SagaGenericParams<LoginSagaParams>) {
  yield put(showLoader());
  try {
    if (
      payload.params.email === "exampleuser@example.com" &&
      payload.params.password === "1q2w3E**"
    ) {
      yield put(
        A.setUser({
          email: payload.params.email,
          password: payload.params.password,
          role: "user",
          token: "user_token",
        })
      );
      payload.onSuccess("");
    } else if (
      payload.params.email === "examplemoderator@example.com" &&
      payload.params.password === "1q2w3E**"
    ) {
      yield put(
        A.setUser({
          email: payload.params.email,
          password: payload.params.password,
          role: "moderator",
          token: "moderator_token",
        })
      );
      payload.onSuccess("");
    } else payload.onError("");
  } catch (e) {
    console.log("ERROR loginSaga");
  } finally {
    yield put(hideLoader());
  }
}

const userSaga = [takeLatest(A.login.toString(), loginSaga)];

export default userSaga;
