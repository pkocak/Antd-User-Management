/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

import { GlobalStrings } from "react-localization";
import * as O from "./objects";

export interface RootState {
  app: AppReducer;
  locale: LanguageReducer;
  static: StaticReducer;
  system: SystemReducer;
  user: UserReducer;
}

export interface AppReducer {
  loading: boolean;
}

export interface LanguageReducer {
  auth: GlobalStrings<string>;
  components: GlobalStrings<string>;
  dashboard: GlobalStrings<string>;
  details: GlobalStrings<string>;
  error: GlobalStrings<string>;
  error_page: GlobalStrings<string>;
  navigation: GlobalStrings<string>;
}

export interface StaticReducer {
  data: O.DataObject[];
}

export interface SystemReducer {
  language: string;
}

export interface UserReducer {
  user?: O.UserObject;
}

export interface ApiCallback<PayloadType = never>
  extends ApiSuccess<PayloadType>,
    ApiError {}
export interface ApiSuccess<PayloadType = never> {
  onSuccess: (message: string, payload?: PayloadType) => void;
}
export interface ApiError {
  onError: (message: string) => void;
}
