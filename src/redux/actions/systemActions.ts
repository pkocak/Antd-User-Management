/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

import { createAction } from "redux-smart-actions";

/**
 * GETTERS
 */

/**
 * SETTERS
 */
export const setLanguage = createAction("SET_LANGUAGE", (payload: string) => ({
  payload,
}));
