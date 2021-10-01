/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

import { produce } from "immer";
import { SystemReducer } from "../../types";
import * as A from "../actions/systemActions";

const initialState: SystemReducer = {
  language: "tr",
};

const settingsReducer = produce((draft: SystemReducer, action: any) => {
  switch (action.type) {
    case A.setLanguage.toString():
      draft.language = action.payload;
      break;
  }
}, initialState);

export default settingsReducer;
