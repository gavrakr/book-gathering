import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("common/pages/home.tsx"),
  ...prefix("gathering", [
    index("features/pages/gathering.tsx"),
    route("/regular", "features/pages/gathering-regular.tsx"),
    route("/special", "features/pages/gathering-special.tsx"),
    route("/impromptu", "features/pages/gathering-impromptu.tsx"),
  ]),
  ...prefix("book-info", [
    index("features/pages/book-info.tsx"),
    route("/books", "features/pages/book-info-books.tsx"),
    route("/author", "features/pages/book-info-author.tsx"),
    route("/publisher", "features/pages/book-info-publisher.tsx"),
  ]),
  ...prefix("community", [
    index("features/pages/community.tsx"),
    route("/philosophy", "features/pages/community-philosophy.tsx"),
    route("/novel", "features/pages/community-novel.tsx"),
    route("/essay", "features/pages/community-essay.tsx"),
  ]),
] satisfies RouteConfig;
