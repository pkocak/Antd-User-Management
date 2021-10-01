/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

import { produce } from "immer";
import { LanguageReducer } from "../../types";

const initialState: LanguageReducer = require("../../utils/localization.json");
const languageReducer = produce((draft: LanguageReducer, action: any) => {},
initialState);

export default languageReducer;
