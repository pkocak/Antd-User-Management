/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

import { takeLatest, put, select } from "@redux-saga/core/effects";
import { hideLoader, showLoader } from "../actions/appActions";
import { ApiCallback } from "../../types";
import * as A from "../actions/staticActions";
import * as P from "../../types/params";
import * as O from "../../types/objects";
import { dataSelector } from "../selectors";

export interface UserDetailsSagaParams extends ApiCallback<O.DataObject> {
  params: P.UserDetailsParams;
}

function* getUserDetailsSaga({
  payload,
}: P.SagaGenericParams<UserDetailsSagaParams>) {
  yield put(showLoader());
  try {
    const data: O.DataObject[] = yield select(dataSelector);
    const findUserDetails = data.find((user) => user.id === payload.params.id);
    if (findUserDetails) payload.onSuccess("", findUserDetails);
    else payload.onError("error");
  } catch (e) {
    console.log("getUserDetailsSaga", e);
  } finally {
    yield put(hideLoader());
  }
}

export interface UserSagaParams extends ApiCallback {
  params: P.UserParams;
}

function* updateUserSaga({ payload }: P.SagaGenericParams<UserSagaParams>) {
  yield put(showLoader());
  try {
    const data: O.DataObject[] = yield select(dataSelector);
    const findUserIndex = data.findIndex(
      (user) => user.id === payload.params.id
    );
    if (findUserIndex > -1) {
      let newData = [...data];
      newData.splice(findUserIndex, 1, payload.params);
      yield put(A.setData(newData));
      payload.onSuccess("success");
    } else payload.onError("error");
  } catch (e) {
    console.log("updateUserSaga", e);
  } finally {
    yield put(hideLoader());
  }
}

const staticSaga = [
  takeLatest(A.getUserDetails.toString(), getUserDetailsSaga),
  takeLatest(A.updateUser.toString(), updateUserSaga),
];

export default staticSaga;
