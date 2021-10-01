/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

import { produce } from "immer";
import { AppReducer } from "../../types";
import { showLoader, hideLoader } from "../actions/appActions";

const initialState: AppReducer = {
  loading: false,
};
const appReducer = produce((draft: AppReducer, action: any) => {
  switch (action.type) {
    case showLoader.toString():
      draft.loading = true;
      break;
    case hideLoader.toString():
      draft.loading = false;
      break;
  }
}, initialState);

export default appReducer;
