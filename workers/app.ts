import { createRequestHandler } from "react-router";

const requestHandler = createRequestHandler(
  // @ts-expect-error - Virtual module that gets resolved by Vite during build
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE
);

export default {
  async fetch(request, env, ctx) {
    return requestHandler(request, { env, ctx });
  },
};
