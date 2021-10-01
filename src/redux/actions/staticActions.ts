/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

import { createAction } from "redux-smart-actions";
import * as O from "../../types/objects";
import * as SagaParams from "../sagas/staticSaga";

/**
 * GETTERS
 */

export const getUserDetails = createAction(
  "GET_USER_DETAILS",
  (payload: SagaParams.UserDetailsSagaParams) => ({
    payload,
  })
);

/**
 * SETTERS
 */

export const setData = createAction("SET_DATA", (payload: O.DataObject[]) => ({
  payload,
}));

export const updateUser = createAction(
  "UPDATE_USER",
  (payload: SagaParams.UserSagaParams) => ({
    payload,
  })
);
