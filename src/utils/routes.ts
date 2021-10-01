import { RouteObject } from "../types/objects";

export const authRoutes: RouteObject[] = [{ url: "/login" }];

export const routes: RouteObject[] = [
  { url: "/dashboard" },
  { auth: ["moderator"], url: "/details" },
];
