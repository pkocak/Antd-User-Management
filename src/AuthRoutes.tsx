import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { loggedInSelector, userRoleSelector } from "./redux/selectors";

import { authRoutes, routes } from "./utils/routes";

type AuthRoutesProps = {
  children: React.ReactNode;
};

const AuthRoutes: React.FC<AuthRoutesProps> = ({ children }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const logged = useSelector(loggedInSelector);
  const userRole = useSelector(userRoleSelector);

  const isPermited = (pathname: string) => {
    if (!logged) {
      return authRoutes.some((route) => route.url === pathname);
    } else {
      return routes.some((route) => {
        if (!route.auth) {
          return route.url === pathname;
        } else {
          if (route.auth.some((role) => role === userRole)) {
            return route.url === pathname;
          } else return false;
        }
      });
    }
  };

  useEffect(() => {
    if (!logged) {
      if (!isPermited(pathname)) {
        history.push("/login");
      }
    } else {
      if (!isPermited(pathname)) {
        if (pathname === "/") history.push("/dashboard");
        else history.push("/error-page");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <>{children}</>;
};

export default AuthRoutes;
