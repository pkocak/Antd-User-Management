/**
 * ANTD USER MANAGEMENT PROJECT
 *
 * @author Mehmet Polat KOÇAK <mehmetpolatkocak@gmail.com>
 * @format
 * @flow strict-local
 */

export interface SagaGenericParams<Type> {
  type: string;
  payload: Type;
}

/** USER **/
export type LoginParams = {
  email: string;
  password: string;
};

/** STATIC **/
export type UserDetailsParams = {
  id: string;
};

export type UserParams = {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  phone: number;
  city: string;
};
