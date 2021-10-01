/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

import { combineReducers } from "redux";

import appReducer from "./appReducer";
import languageReducer from "./languageReducer";
import staticReducer from "./staticReducer";
import systemReducer from "./systemReducer";
import userReducer from "./userReducer";

export default combineReducers({
  app: appReducer,
  locale: languageReducer,
  static: staticReducer,
  system: systemReducer,
  user: userReducer,
});
