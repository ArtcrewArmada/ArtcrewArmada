import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // 1. Root index redirects to default language (/th)
  index("routes/_index.tsx"),

  // 2. Localized Public pages wrapping layout
  route(":lang", "routes/public-layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("craft", "routes/craft.tsx"),
    route("upcycling", "routes/upcycling.tsx"),
    route("primitive", "routes/primitive.tsx"),
    route("shop", "routes/shop.tsx"),
    route("learning", "routes/learning.tsx"),
    route("journal", "routes/journal.tsx"),
    route("contact", "routes/contact.tsx"),
  ]),

  // 3. SaaS Portal Area
  route("app", "routes/app.tsx", [
    route("dashboard", "routes/app.dashboard.tsx"),
  ]),

  // 4. Admin CMS Area
  route("admin", "routes/admin.tsx"),
] satisfies RouteConfig;
