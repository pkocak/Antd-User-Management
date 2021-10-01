/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

/** USER **/
export type UserObject = {
  email: string;
  password: string;
  role: "user" | "moderator";
  token: "user_token" | "moderator_token";
};

/** STATIC **/
export type DataObject = {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  phone: number;
  city: string;
};

/** OTHER **/
export type RouteObject = {
  auth?: ("user" | "moderator")[];
  url: string;
};
