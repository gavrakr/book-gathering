import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("common/pages/home.tsx"),
  ...prefix("gatherings", [
    index("features/gathering/pages/gathering.tsx"),
    route("/list", "features/gathering/pages/gathering-redirect.tsx"),
    route("/create", "features/gathering/pages/gathering-create.tsx"),
    route("/modify", "features/gathering/pages/gathering-modify.tsx"),
    route("/delete", "features/gathering/pages/gathering-delete.tsx"),
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
