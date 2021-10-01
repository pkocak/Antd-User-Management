/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

import { produce } from "immer";
import { UserReducer } from "../../types";
import { logout, setUser } from "../actions/userActions";

const initialState: UserReducer = {
  user: undefined,
};
const userReducer = produce((draft: UserReducer, action: any) => {
  switch (action.type) {
    case setUser.toString():
      draft.user = action.payload;
      break;
    case logout.toString():
      draft.user = undefined;
      break;
  }
}, initialState);

export default userReducer;
