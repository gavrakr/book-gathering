import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [index("common/pages/home.tsx"), ...prefix("gathering", [index("features/pages/gathering.tsx")])] satisfies RouteConfig;
