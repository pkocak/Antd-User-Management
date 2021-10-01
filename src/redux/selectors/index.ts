/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

import LocalizedStrings, {
  GlobalStrings,
  LocalizedStringsMethods,
} from "react-localization";
import { createSelector } from "reselect";
import { RootState } from "../../types";

/** APP **/
const loadingState = (state: RootState) => state.app.loading;
export const isLoadingState = createSelector(
  [loadingState],
  (loading) => loading
);

/** USER **/
const loggedInState = (state: RootState) => state.user.user;
export const loggedInSelector = createSelector(
  [loggedInState],
  (user) => user !== undefined
);

export const userSelector = createSelector([loggedInState], (user) => user);

const userRoleState = (state: RootState) => state.user.user?.role;
export const userRoleSelector = createSelector([userRoleState], (role) => role);

/** SYSTEM **/
const languageState = (state: RootState) => state.system.language;
export const languageSelector = createSelector(
  [languageState],
  (language) => language
);

/** LOCALE **/
const getUserLanguageState = (state: RootState) => state.system.language;
export const userLanguageState = createSelector(
  [getUserLanguageState],
  (lang) => lang
);

const returnLocolaziedString = (
  auth: GlobalStrings<string>,
  lang?: string
): LocalizedStringsMethods => {
  const l = new LocalizedStrings(auth);
  if (lang) l.setLanguage(lang);
  return l;
};

const getLocaleAuth = (state: RootState) => state.locale.auth;
export const getLocalizedAuth = createSelector(
  [getLocaleAuth, getUserLanguageState],
  (auth, lang) => returnLocolaziedString(auth, lang)
);

const getLocaleComponents = (state: RootState) => state.locale.components;
export const getLocalizedComponents = createSelector(
  [getLocaleComponents, getUserLanguageState],
  (components, lang) => returnLocolaziedString(components, lang)
);

const getLocaleDashboard = (state: RootState) => state.locale.dashboard;
export const getLocalizedDashboard = createSelector(
  [getLocaleDashboard, getUserLanguageState],
  (dashboard, lang) => returnLocolaziedString(dashboard, lang)
);

const getLocaleDetails = (state: RootState) => state.locale.details;
export const getLocalizedDetails = createSelector(
  [getLocaleDetails, getUserLanguageState],
  (details, lang) => returnLocolaziedString(details, lang)
);

const getLocaleErrors = (state: RootState) => state.locale.error;
export const getLocalizedErrors = createSelector(
  [getLocaleErrors, getUserLanguageState],
  (error, lang) => returnLocolaziedString(error, lang)
);

const getLocaleErrorPage = (state: RootState) => state.locale.error_page;
export const getLocalizedErrorPage = createSelector(
  [getLocaleErrorPage, getUserLanguageState],
  (error_page, lang) => returnLocolaziedString(error_page, lang)
);

const getLocaleNavigation = (state: RootState) => state.locale.navigation;
export const getLocalizedNavigation = createSelector(
  [getLocaleNavigation, getUserLanguageState],
  (error, lang) => returnLocolaziedString(error, lang)
);

/** STATIC **/
const dataState = (state: RootState) => state.static.data;
export const dataSelector = createSelector([dataState], (data) => data);
