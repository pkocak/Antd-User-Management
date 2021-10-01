/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

import { produce } from "immer";
import { StaticReducer } from "../../types";
import data from "../../utils/data";
import * as A from "../actions/staticActions";

const initialState: StaticReducer = {
  data: data,
};

const staticReducer = produce((draft: StaticReducer, action: any) => {
  switch (action.type) {
    case A.setData.toString():
      draft.data = action.payload;
      break;
  }
}, initialState);

export default staticReducer;
